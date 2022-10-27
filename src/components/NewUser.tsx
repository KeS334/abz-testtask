import React, {useContext} from 'react';
import FormBlock from "./FormBlock";
import Feedback from "./Feedback";
import {UserContext} from "../UserContext";

const NewUser = () => {

    const {showForm} = useContext(UserContext);

    return (
        <section className="app__new-user">
            {showForm?<FormBlock/>:<Feedback/>}
        </section>
    );
};

export default NewUser;
