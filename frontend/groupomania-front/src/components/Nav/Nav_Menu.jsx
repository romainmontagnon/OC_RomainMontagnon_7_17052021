import React from 'react';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { faSearch } from '@fortawesome/free-solid-svg-icons'
// import { fa500px } from '@fortawesome/free-brands-svg-icons'
// import { faPaperPlane } from '@fortawesome/free-regular-svg-icons'
// import timeline from '../../js/timeline';
import account from '../../js/account';

const NavMenu = () => {
    return (
        <div className='mr-2'>
        <button type="submit" 
        className='mx-2 rounded-2xl px-4 ring-2 ring-midnight-400 text-center text-midnight-500 bg-midnight-200 font-semibold hover:bg-midnight-400 hover:text-midnight-100'
        onClick={() =>{console.log('timeline')}}>Timeline</button>
        <button type="submit" 
        className='mx-2 rounded-2xl px-4 ring-2 ring-midnight-400 text-center bg-midnight-200 font-semibold hover:bg-midnight-400 hover:text-midnight-100'
        onClick={account}>Mon compte</button>
        </div>
    )
};

export default NavMenu;