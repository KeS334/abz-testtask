import React from 'react';

const Feedback = () => {
    return (
        <div className="app__feedback feedback">
            <h1>User successfully registered</h1>
            <img src={require('../images/success-image.svg').default} alt="success"/>
        </div>
    );
};

export default Feedback;
