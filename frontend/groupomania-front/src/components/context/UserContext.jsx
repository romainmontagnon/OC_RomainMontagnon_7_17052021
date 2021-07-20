import React, { useState } from 'react';

export const user = {
    isLoggedIn: false
};

export const UserContext = React.createContext(user)