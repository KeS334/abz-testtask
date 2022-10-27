import React from 'react';

const Header = () => {
    return (
    <header className="header">
        <div className="header__container container">
            <img className="header__logo" src={require('../images/logo.svg').default} alt="logo"/>
            <div className="header__buttons-block">
                <button className="header__button button">Users</button>
                <button className="header__button button">Sign up</button>
            </div>
        </div>

    </header>
    );
};

export default Header;
