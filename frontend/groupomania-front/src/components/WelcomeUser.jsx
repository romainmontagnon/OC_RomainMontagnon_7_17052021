import React from 'react';
import { loadFromSessionStorage } from '../js/sesssion';

class WelcomeUser extends React.Component{
    render(){
        const user = `User ${loadFromSessionStorage('userId')}`
        return (
            <h3>Bonjour, {user}</h3>
        )
    }
}

export default WelcomeUser;