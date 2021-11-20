import React from 'react';
import classNames from '../utils/ClassNames';
import DeveloperIcons from '../utils/DeveloperIcons';

function HomePage(props) {
    return (
        <div className={classNames({
            "homePage": props.backgroundToggle,
            "homePage open": !props.backgroundToggle,
            })}>
            <div className="item">
                <h1>Jesse <strong>Sandvik</strong></h1>
                <h2>Full stack software Developer</h2>
                <DeveloperIcons />
                <div className="enterSite">
                    <p onClick={props.backgroundToggleHandler}>Learn More.</p>
                </div>
            </div>
        </div>
    );
}

export default HomePage;