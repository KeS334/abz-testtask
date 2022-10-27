import React from 'react';
import Card from "./Card";
import useUsers from "../services/Users";
import Preloader from "./Preloader";

const CardsBlock = () => {

    const {newUsersAvailable, usersInfo, getUsers, isUsersLoaded} = useUsers()

    return (
        <section className="app__cards-block cards-block container">
            <h1 className="cards-block__title">Working with GET request</h1>

                    <div className="cards-block__container">
                        {isUsersLoaded?
                            (usersInfo?.users
                            .sort((a, b) => b.registration_timestamp - a.registration_timestamp)
                            .map(item => <Card key={item.id} user={item}/>))
                        :<Preloader/>}
                    </div>

                    {newUsersAvailable &&
                        <button
                            className="cards-block__button button"
                            onClick={getUsers}
                            disabled={!isUsersLoaded}
                        >Show more</button>}
        </section>
    );
};

export default CardsBlock;
