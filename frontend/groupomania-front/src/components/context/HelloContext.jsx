import React, { Fragment } from 'react';
import { userState } from './UserProvider';
import Navbar from '../Navbar';

export default userState (({ isLoggedIn, isAdmin }) => (
    <Fragment>
        <Navbar isLoggedIn={isLoggedIn} isAdmin={isAdmin} />
    </Fragment>
));