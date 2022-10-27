import React, {useState} from 'react';
import {IUserGet} from "../models";

interface CardProps {
    user: IUserGet
}

const Card = ({user}: CardProps) => {

    const [imgIsLoaded, setImgIsLoaded] = useState(false);

    const onImgLoad = () => {
        setImgIsLoaded(true)
    }

    return (
        <div className="cards-block__card card">
            <div className="card__img-container">
                <img src={user.photo} alt={user.name} onLoad={onImgLoad}/>
                {!imgIsLoaded &&
                <img
                    src={require('../images/photo-cover.svg').default}
                    alt="plug"
                    className="card__img-plug"/>}
            </div>
            <p className="card__name" title={user.name}>{user.name}</p>
            <div className="card__extra-info">
                <p className="card__position" title={user.position}>{user.position}</p>
                <p className="card__email" title={user.email}>{user.email}</p>
                <p className="card__phone">{user.phone}</p>
            </div>
        </div>
    );
};

export default Card;
