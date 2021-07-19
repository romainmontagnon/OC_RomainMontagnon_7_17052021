import React, { Fragment } from 'react';
import { userState } from './UserProvider';
import SignInUp from '../Sign-in-up';

export default userState (({ isLoggedIn, isAdmin }) => (
    <Fragment>
        <SignInUp isLoggedIn={isLoggedIn} isAdmin={isAdmin} />
    </Fragment>
));