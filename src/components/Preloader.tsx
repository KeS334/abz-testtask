import React from 'react';

const Preloader = () => {
    return (
        <div className="preloader">
            <img
                className="preloader__img"
                src={require('../images/preloader.svg').default}
                alt="preloader"/>
        </div>
    );
};

export default Preloader;
