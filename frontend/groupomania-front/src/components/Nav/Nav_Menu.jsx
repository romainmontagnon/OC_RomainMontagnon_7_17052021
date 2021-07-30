import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPowerOff } from '@fortawesome/free-solid-svg-icons'
// import { fa500px } from '@fortawesome/free-brands-svg-icons'
import { faUser } from '@fortawesome/free-regular-svg-icons'

import Account from '../Account';

class NavMenu extends React.Component {
    state = {
        showAccountSection: false
    }
    constructor(props) {
        super(props)
        this.isAdmin = this.props.isAdmin;
        this.showAccountSection = this.showAccountSection.bind(this);
    }

    showAccountSection() {
        this.setState({ showAccountSection: !this.state.showAccountSection })
    }

    render() {
        return (
            <div className='mr-2'>
                <button type="submit"
                    className='text-base mx-2 py-1 rounded-2xl px-4 ring-2 ring-midnight-400 text-center text-midnight-500 bg-midnight-200 font-semibold hover:bg-midnight-400 hover:text-midnight-100 antialiased'
                    onClick={() => { console.log('timeline') }}>
                    < FontAwesomeIcon icon={faPowerOff} className='block lg:hidden' />
                    <span className='hidden lg:block'>Se deconnecter</span>
                </button>
                <button type="submit"
                    className='text-base mx-2 py-1 rounded-2xl px-4 ring-2 ring-midnight-400 text-center bg-midnight-200 font-semibold hover:bg-midnight-400 hover:text-midnight-100 antialiased'
                    onClick={this.showAccountSection}>
                    < FontAwesomeIcon icon={faUser} className='block lg:hidden' />
                    <span className='hidden lg:block'>Mon Compte</span>
                </button>
                <div className='my-auto'>
                    {this.state.showAccountSection && <Account handler={this.showAccountSection} {...this.props} />}
                </div>
            </div>
        )
    }
};

export default NavMenu;