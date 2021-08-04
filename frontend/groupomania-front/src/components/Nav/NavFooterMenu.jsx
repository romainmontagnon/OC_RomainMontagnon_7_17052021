import React from 'react';

import NavFooterLogo from './NavFooter';
import CGU from '../CGU';
import Contact from '../Contact';

class NavFooterMenu extends React.Component {
    state = {
        showCGU: false,
        showContact: false
    }
    constructor(props) {
        super(props);

        this.handleShowContact = this.handleShowContact.bind(this);
        this.handleShowCGU = this.handleShowCGU.bind(this);
    }

    handleShowCGU() {
        this.setState({showCGU: !this.state.showCGU})
        this.setState({showContact: false})
    }

    handleShowContact() {
        this.setState({showCGU: false})
        this.setState({showContact: !this.state.showContact})
    }

    render() {
        return (
            <div>
                <ul className='mr-2 flex flex-row items-center'>
                    <li aria-label='Logo Groupomania'>
                        <NavFooterLogo />
                    </li>
                    <li>
                        <button type="submit"
                            className='mx-2  text-center text-mandy-500 font-bold hover:text-mandy-800 antialiased
                                transition transform motion-reduce:transition-none motion-reduce:transform-none 
                                duration-500 ease-in-out'
                            onClick={this.handleShowCGU}>
                            CGU
                        </button>
                    </li>
                    <li>
                        <button type="submit"
                            className='mx-2  text-center text-mandy-500 font-bold hover:text-mandy-800 antialiased
                                transition transform motion-reduce:transition-none motion-reduce:transform-none 
                                duration-500 ease-in-out'
                            onClick={this.handleShowContact}>
                            Contact
                        </button>
                    </li>
                </ul>
                <div className='my-auto'>
                    {this.state.showCGU && <CGU handler={this.handleShowCGU}/>}
                    {this.state.showContact && <Contact handler={this.handleShowContact} />}
                    {/* {this.state.showContact.toString()} */}
                </div>
            </div >
        )
    }
};

export default NavFooterMenu;