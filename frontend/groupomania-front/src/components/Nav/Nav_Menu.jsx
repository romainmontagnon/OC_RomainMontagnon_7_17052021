import React from 'react';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { faSearch } from '@fortawesome/free-solid-svg-icons'
// import { fa500px } from '@fortawesome/free-brands-svg-icons'
// import { faPaperPlane } from '@fortawesome/free-regular-svg-icons'
// import timeline from '../../js/timeline';
import Account from '../Account';

class NavMenu extends React.Component {
    state = {
        showAccountSection: false
    }
    constructor(props) {
        super(props)
        this.isAdmin = this.props.isAdmin;
        this.accounType = this.accounType.bind(this);
        this.showAccountSection = this.showAccountSection.bind(this);
    }

    async showAccountSection() {
        console.log(this.state.showAccountSection)
        await this.setState({ showAccountSection: !this.state.showAccountSection })
        console.log(this.state.showAccountSection)
    }

    accounType() {
        if (this.isAmin) {
            return `admin`
        };
        return `user`
    };

    render() {
        const accountButton = 'Compte';
        return (
            <div className='mr-2'>
                <button type="submit"
                    className='mx-2 rounded-2xl px-4 ring-2 ring-midnight-400 text-center text-midnight-500 bg-midnight-200 font-semibold hover:bg-midnight-400 hover:text-midnight-100 antialiased'
                    onClick={() => { console.log('timeline') }}>
                    Timeline
                </button>
                <button type="submit"
                    className='mx-2 rounded-2xl px-4 ring-2 ring-midnight-400 text-center bg-midnight-200 font-semibold hover:bg-midnight-400 hover:text-midnight-100 antialiased'
                    onClick={this.showAccountSection}>
                    {accountButton} {this.accounType()}
                </button>
                <div className='my-auto'>
                    {this.state.showAccountSection && <Account handler={this.showAccountSection} {...this.props} />}
                </div>
            </div>
        )
    }
};

export default NavMenu;