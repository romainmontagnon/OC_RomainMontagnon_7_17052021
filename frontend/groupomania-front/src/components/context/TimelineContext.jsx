import React, { Fragment } from 'react';
import { userState } from './UserProvider';
import Timeline from '../Timeline';

export default userState (({ isLoggedIn, isAdmin }) => (
    <Fragment>
        <Timeline isLoggedIn={isLoggedIn} isAdmin={isAdmin} />
    </Fragment>
));