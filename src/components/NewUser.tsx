import React from 'react';
import FormBlock from "./FormBlock";
import Feedback from "./Feedback";
import useUsers from "../services/Users";

const NewUser = () => {

    const {showForm} = useUsers();

    return (
        <section className="app__new-user">
            {showForm?<FormBlock/>:<Feedback/>}
        </section>
    );
};

export default NewUser;
