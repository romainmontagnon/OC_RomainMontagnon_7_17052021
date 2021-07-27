import React from 'react';
import { loadFromSessionStorage } from '../js/sesssion';

class WelcomeUser extends React.Component{
    render(){
        const user = `${loadFromSessionStorage('firstName')} ${loadFromSessionStorage('lastName')}`
        const userId = `${loadFromSessionStorage('userId')}`
        return (
                <h3
                    className="antialiased text-xl font-semibold mb-4 mr-5"
                    data-userId={userId}
                >
                    Bonjour, {user} !
                </h3>
        )
    }
}

export default WelcomeUser;