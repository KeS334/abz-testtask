import React, {useContext} from 'react';
import Card from "./Card";
import useUsers from "../services/Users";
import Preloader from "./Preloader";
import {UserContext} from "../UserContext";

const CardsBlock = () => {

    const {getUsers} = useUsers()
    const {users, isUsersLoading, isNewUsersAvailable} = useContext(UserContext)

    return (
        <section className="app__cards-block cards-block container">
            <h1 className="cards-block__title">Working with GET request</h1>

                    <div className="cards-block__container">
                        {!isUsersLoading?
                            (users
                            .sort((a, b) => b.registration_timestamp - a.registration_timestamp)
                            .map(item => <Card key={item.id} user={item}/>))
                        :<Preloader/>}
                    </div>

                    {isNewUsersAvailable &&
                        <button
                            className="cards-block__button button"
                            onClick={() => getUsers(true)}
                            disabled={isUsersLoading}
                        >Show more</button>}
        </section>
    );
};

export default CardsBlock;
