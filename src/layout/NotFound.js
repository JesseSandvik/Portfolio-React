import React from 'react';
import { useLocation, useHistory } from 'react-router-dom';
import { motion } from 'framer-motion';

function NotFound({ initialMotion, animateMotion, exitMotion, transition }) {
    const location = useLocation();
    const history = useHistory();

    return (
        <motion.article
            initial={initialMotion}
            animate={animateMotion}
            exit={exitMotion}
            transition={transition}
        >
        <h2>Oops!</h2>
        <h3>The location <bold>{location.pathname}</bold> does not exist.</h3>
        <h2>Please return to the <button type="button" onClick={() => history.goBack()}><bold>previous</bold></button> page.</h2>
        </motion.article>
    )
}

export default NotFound;