import React from 'react';
import { loadFromSessionStorage } from '../js/sesssion';

class WelcomeUser extends React.Component{
    render(){
        const user = `${loadFromSessionStorage('firstName')} ${loadFromSessionStorage('lastName')}`
        const userId = `userId ${loadFromSessionStorage('userId')}`
        return (
            <div>
                <h3>Bonjour, {user} !</h3>
                <p>{userId}<span className='text-xs'> (span a supprimer pour la prod)</span></p>
                
            </div>
        )
    }
}

export default WelcomeUser;