import {useEffect, useState} from 'react';
import {IUserResponse, IUserSend} from "../models";

const useUsers = () => {

    const [token, setToken] = useState('')

    const [newUsersAvailable, setNewUsersAvailable] = useState(true)
    const [showForm, setShowForm] = useState(true)
    const [isUsersLoaded, setIsUsersLoaded] = useState(false)

    const [usersInfo, setUsersInfo] = useState<IUserResponse>();
    const [usersLink, setUsersLink] = useState<string>('https://frontend-test-assignment-api.abz.agency/api/v1/users?page=1&count=6')


    function getToken(){
        fetch('https://frontend-test-assignment-api.abz.agency/api/v1/token')
            .then(responce => responce.json())
            .then(data => setToken(data.token))
    }

    function getUsers() {
        setIsUsersLoaded(false)
        try {
            fetch(usersLink)
                .then(response => response.json())
                .then((data =>{
                    setUsersInfo(data)
                    setIsUsersLoaded(true)
                    if(data.page !== data.total_pages){
                        setUsersLink(data.links.next_url);
                    } else{
                        setNewUsersAvailable(false)
                    }
                }))
        } catch (error) {
            console.log("Users error: ", error)
        }
    }

    function sendUser(data: IUserSend) {
        try{
            const formData = new FormData()
            for (let key in data) {
                formData.append(key, data[key])
            }
            fetch('https://frontend-test-assignment-api.abz.agency/api/v1/users',{
                method: 'POST',
                headers: { 'Token': token},
                body: formData
            })
                .then(responce => responce.json())
                .then(data => {
                    console.log(data)
                    setShowForm(false)
                    getUsers()
                })
        } catch (error) {
            console.log("Users error: ", error)
        }
    }

    useEffect(() =>{
        getToken()
        getUsers()
    }, [])

    return {usersInfo, newUsersAvailable, showForm, getUsers, sendUser, isUsersLoaded, }
};

export default useUsers;
