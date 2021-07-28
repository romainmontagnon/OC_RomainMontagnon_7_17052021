import React from 'react';

export const user = {
    isLoggedIn: false,
    isAdmin: false,
    userIdLogged: null
};

export const UserContext = React.createContext(user)