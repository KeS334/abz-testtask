import React, {useState} from 'react';
import useUsers from "../services/Users";
import {IUserSend} from "../models";
import TextInput from "./TextInput";
import FileUploader from "./FileUploader";
import RadioInput from "./RadioInput";

const FormBlock = () => {

    const {sendUser} = useUsers();
    const [user, setUser] = useState<IUserSend>({
        name: '',
        email: '',
        phone: '',
        position_id: 1,
        photo: new File( [],  ''),
    });

    const changeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
        if(event.target.name ==='position_id'){
            return setUser({...user, [event.target.name]: parseInt(event.target.value)});
        }
        return setUser({...user, [event.target.name]: event.target.value});
    }

    const uploadingPhoto = (selectedFile: File) => {
        setUser({...user, photo: selectedFile});
    }

    const submitHandler = (event: React.FormEvent) => {
        event.preventDefault()
        sendUser(user)
    }

    return (
        <form className="form-block" onSubmit={submitHandler}>

            <h1 className="form-block__title">Working with POST request</h1>

            <div className="form-block__container">

                <TextInput type="text" name="name" label="Your name" value={user.name} changeHandler={changeHandler}/>
                <TextInput type="email" name="email" label="Email" value={user.email} changeHandler={changeHandler}/>
                <TextInput type="tel" name="phone" label="Phone" value={user.phone} changeHandler={changeHandler}/>

                <RadioInput currentPositionId={user.position_id} changeHandler={changeHandler}/>

                <FileUploader photo={user.photo} maxSize={5} uploadingPhoto={uploadingPhoto}/>

                <button type="submit" className="form-block__button button">Sign up</button>

            </div>
        </form>
    );
};

export default FormBlock;
