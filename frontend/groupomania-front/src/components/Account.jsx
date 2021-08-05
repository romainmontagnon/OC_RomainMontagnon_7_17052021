import React from 'react';
import { loadFromSessionStorage } from '../js/session';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPowerOff } from '@fortawesome/free-solid-svg-icons'

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
        return (
            <div
                className='mt-6 py-2 px-4 bg-white bg-opacity-40 rounded-3xl shadow-xl flex flex-col w-52'>
                <div className='flex flex-row justify-between'>
                    <h1 className='antialiased text-lg font-bold sm:inline-block hidden'>Mon compte</h1>
                </div>

                <ul>
                    <li className='antialiased font-semibold'>
                        <h3
                            className="antialiased text-base font-semibold
                            sm:inline-block hidden"
                        >
                            Bonjour, {`${this.state.info.firstName} ${this.state.info.lastName}`} !
                        </h3>

                    </li>
                    <li className='antialiased font-semibold sm:inline-block hidden'>Utilisateur : <span className='antialiased font-normal'>{this.accountType()}</span></li>
                    <li className='antialiased font-semibold'>
                        <button type="submit"
                            className='text-base mx-2 py-1 rounded-2xl px-4 ring-2 ring-midnight-400 text-center text-midnight-500 bg-midnight-200 font-semibold hover:bg-midnight-400 hover:text-midnight-100 antialiased'
                        >
                            < FontAwesomeIcon icon={faPowerOff} className='block lg:hidden' />
                            <span className='hidden lg:block'>Se deconnecter</span>
                        </button>
                    </li>
                </ul>
            </div>
        )
    }
}

export default Account;