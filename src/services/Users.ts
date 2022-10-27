import {useContext, useEffect, useState} from 'react';
import {ILinks, IUserSend} from "../models";
import {UserContext} from "../UserContext";

const useUsers = () => {

    const [token, setToken] = useState('')
    const {hideForm, loadingStatus, putUsersData} = useContext(UserContext);
    const [usersLinks, setUsersLinks] = useState<ILinks>({
        default: 'https://frontend-test-assignment-api.abz.agency/api/v1/users?page=1&count=6',
        next: ''
    })

    function getToken(){
        fetch('https://frontend-test-assignment-api.abz.agency/api/v1/token')
            .then(response => response.json())
            .then(data => setToken(data.token))
    }

    function getUsers(next:boolean) {
        loadingStatus(true)
        try {
            fetch(next?usersLinks.next:usersLinks.default)
                .then(response => response.json())
                .then((data =>{
                    putUsersData(data)
                    loadingStatus(false)
                    setUsersLinks({...usersLinks, next: data.links.next_url});
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
                .then(response => response.json())
                .then(data => {
                    console.log(data)
                    hideForm()
                    getUsers(false)
                })
        } catch (error) {
            console.log("Users error: ", error)
        }
    }

    useEffect(() =>{
        getToken()
        getUsers(false)
    }, [])

    return {getUsers, sendUser}
};

export default useUsers;
