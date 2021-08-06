import React from 'react';

import { loadFromSessionStorage } from '../../js/session';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPowerOff, faSignOutAlt } from '@fortawesome/free-solid-svg-icons'
// import { fa500px } from '@fortawesome/free-brands-svg-icons'

import AccountSuppr from '../AccountSuppr';

class NavMenu extends React.Component {
    state = {
        info: {},
        showMenu: false
    }

    constructor(props) {
        super(props)

        this.isAdmin = this.props.isAdmin
        this.isLoggedIn = this.props.isLoggedIn

        this.componentDidMount = this.componentDidMount.bind(this)
        this.accountType = this.accountType.bind(this);
        this.logout = this.logout.bind(this);
        this.showMenu = this.showMenu.bind(this)

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

    logout() {
        console.log('logout')
        this.props.login(false, false, null)
        sessionStorage.clear();
    }

    showMenu() {
        this.setState({ showMenu: !this.state.showMenu })
    }

    accountType() {
        if (this.isAdmin) {
            return `admin`
        };
        return `user`
    };

    render() {
        return (
            <div className='mr-2 text-base mx-2 py-1 rounded-2xl px-4 text-center font-semibold antialiased'>
                <div
                    className='mt-6 py-2 px-4 bg-white bg-opacity-40 rounded-3xl shadow-xl flex flex-col w-52'>
                    <div className='flex flex-row justify-between'>
                        <h1 className='antialiased text-lg font-bold sm:inline-block hidden'>Mon compte</h1>
                    </div>
                    <ul>
                        <li className='antialiased font-semibold'>
                            <h2
                                className="antialiased text-base font-semibold
                                sm:inline-block hidden"
                            >
                                Bonjour, {`${this.state.info.firstName} ${this.state.info.lastName}`} !
                            </h2>
                        </li>
                        <li className='antialiased font-semibold sm:inline-block hidden'>Utilisateur : <span className='antialiased font-normal'>{this.accountType()}</span></li>
                        <li>
                            <div className='antialiased font-semibold mt-2'>
                                <button type="submit"
                                    className='text-base mx-2 py-1 rounded-2xl px-4 ring-2 ring-midnight-400 text-center text-midnight-500 bg-midnight-100 font-semibold hover:bg-midnight-400 hover:text-midnight-50 antialiased shadow-md
                                    transition transform scale-90 motion-reduce:transition-none motion-reduce:transform-none
                                     duration-500 ease-in-out hover:scale-100'
                                    onClick={this.logout}
                                    aria-label='Se deconnecter'>
                                    < FontAwesomeIcon icon={faPowerOff} className='block lg:hidden' />
                                    <span className='hidden lg:block'>Se deconnecter</span>
                                </button>
                            </div>
                            <div className='antialiased font-semibold mt-2'>
                                <button type="submit"
                                    className='text-base mx-2 py-1 rounded-2xl px-4 ring-2 ring-midnight-400 text-center text-midnight-500 bg-midnight-100 font-semibold hover:bg-midnight-400 hover:text-midnight-50 antialiased shadow-md
                                    transition transform scale-90 motion-reduce:transition-none motion-reduce:transform-none
                                     duration-500 ease-in-out hover:scale-100'
                                    onClick={this.showMenu}
                                    aria-label='Supprimer le compte'>
                                    < FontAwesomeIcon icon={faSignOutAlt} className='block lg:hidden' />
                                    <span className='hidden lg:block'>Supprimer compte</span>
                                </button>
                                {this.state.showMenu && <AccountSuppr handler={this.showMenu} {...this.props} />}
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
        )
    }
};

export default NavMenu;