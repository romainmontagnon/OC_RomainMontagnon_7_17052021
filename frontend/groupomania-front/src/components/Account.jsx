import React from 'react';
import { loadFromSessionStorage } from '../js/sesssion';

class Account extends React.Component {
    state = {
        info: {}
    }

    constructor(props) {
        super(props)
        this.isAdmin = this.props.isAdmin
        this.componentDidMount = this.componentDidMount.bind(this)
        this.accountType = this.accountType.bind(this);
        this.showAccountSection = this.props.handler
    }

    componentDidMount() {
        let info = {
            firstName: loadFromSessionStorage('firstName'),
            lastName: loadFromSessionStorage('lastName'),
            userId: loadFromSessionStorage('userId'),
            token: loadFromSessionStorage('token'),
        }
        this.setState({
            info: { ...info }
        })
    }

    accountType() {
        if (this.isAmin) {
            return `admin`
        };
        return `user`
    };

    render() {
        console.log(this.isAdmin)
        return (
            <div
                className='mt-6 py-2 px-4 bg-white bg-opacity-40 rounded-3xl shadow-xl flex flex-col account-menu w-52'>
                <div className='flex flex-row justify-between'>
                    <h1 className='antialiased text-lg font-bold'>Mon compte</h1>
                    <button 
                    className='antialiased font-extrabold'
                    onClick={this.showAccountSection}
                    >X</button>
                </div>

                <ul>
                    <li className='antialiased font-semibold'>Prénom : <span className='antialiased font-normal'>{this.state.info.firstName}</span></li>
                    <li className='antialiased font-semibold'>Nom : <span className='antialiased font-normal'>{this.state.info.lastName}</span></li>
                    <li className='antialiased font-semibold'>Utilisateur : <span className='antialiased font-normal'>{this.accountType()}</span></li>
                </ul>
            </div>
        )
    }
}

export default Account;