import React from 'react';

export const user = {
    isLoggedIn: false,
    isAdmin: false
};

export const UserContext = React.createContext(user)