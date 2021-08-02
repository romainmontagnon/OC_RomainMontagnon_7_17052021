// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { faGlobe } from '@fortawesome/free-solid-svg-icons'
// import { fa500px } from '@fortawesome/free-brands-svg-icons'
// import { faPaperPlane } from '@fortawesome/free-regular-svg-icons'

import React from 'react';
import SearchBar from '../SearchBar';
import NavMenu from './Nav_Menu';

class Nav extends React.Component {
    constructor(props){
        super(props)
        this.isLoggedIn = this.props.isLoggedIn
    }
    render() {
        if(this.isLoggedIn){
        return (
            <div className='flex flex-row justify-between items-center'>
                <SearchBar />
                <NavMenu {...this.props} />
            </div>
        )
        } else {
            return null
        }
    }
};

export default Nav;