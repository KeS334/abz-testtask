import React, {createContext, useState} from "react";
import {IUserGet, IUserResponse} from "./models";

interface IUserContext {
    showForm: boolean
    hideForm: () => void
    users: IUserGet[]
    putUsersData: (data: IUserResponse) => void
    isUsersLoading: boolean
    loadingStatus: (flag: boolean) => void
    isNewUsersAvailable: boolean
}

export const UserContext = createContext<IUserContext>({
    showForm: true,
    hideForm: () => {},
    users: [],
    putUsersData: () => {},
    isUsersLoading: false,
    loadingStatus: () => {},
    isNewUsersAvailable: false

})

export const UserState = ({children} : {children: React.ReactNode}) => {

    const [showForm, setShowForm] = useState(true)
    const [isUsersLoading, setIsUsersLoading] = useState(false)
    const [isNewUsersAvailable, setIsNewUsersAvailable] = useState(false)
    const [users, setUsers] = useState<IUserGet[]>([])

    const hideForm = () =>{
        setShowForm(false)
    }
    const putUsersData = (data: IUserResponse) =>{
        setUsers(data.users)
        if(data.page === data.total_pages){
            setIsNewUsersAvailable(false)
        }else{
            setIsNewUsersAvailable(true)
        }
    }
    const loadingStatus = (flag: boolean) => {
        setIsUsersLoading(flag)
    }

    return(
        <UserContext.Provider value={{showForm, hideForm, users, putUsersData, isUsersLoading, loadingStatus, isNewUsersAvailable, }}>
            {children}
        </UserContext.Provider>
    )
}