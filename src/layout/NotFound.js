import React from 'react';
import { useLocation, useHistory } from 'react-router-dom';

function NotFound() {
    const location = useLocation();
    const history = useHistory();

    return (
        <>
        <h2>Oops!</h2>
        <h3>The location <bold>{location.pathname}</bold> does not exist.</h3>
        <h2>Please return to the <button type="button" onClick={() => history.goBack()}><bold>previous</bold></button> page.</h2>
        </>
    )
}

export default NotFound;