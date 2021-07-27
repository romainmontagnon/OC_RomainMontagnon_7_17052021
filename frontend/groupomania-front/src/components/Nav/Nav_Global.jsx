// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { faGlobe } from '@fortawesome/free-solid-svg-icons'
// import { fa500px } from '@fortawesome/free-brands-svg-icons'
// import { faPaperPlane } from '@fortawesome/free-regular-svg-icons'

import React from 'react';
import SearchBar from '../SearchBar';
import NavMenu from './Nav_Menu';

const Nav = (props) => {
    return (
        <div className='flex flex-row justify-between items-center'>
            <SearchBar />
            <NavMenu isAdmin={props.isAdmin} />
        </div>
    )
};

export default Nav;