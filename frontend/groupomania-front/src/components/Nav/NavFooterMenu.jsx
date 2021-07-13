import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircle } from '@fortawesome/free-solid-svg-icons'
// import { fa500px } from '@fortawesome/free-brands-svg-icons'
// import { faPaperPlane } from '@fortawesome/free-regular-svg-icons'
// import timeline from '../../js/timeline';
import NavFooterLogo from './NavFooter';
import account from '../../js/account';

const NavFooterMenu = () => {
    return (
        <ul className='mr-2 flex flex-row items-center'>
            <li>
                <NavFooterLogo />
            </li>
            
            <li>
                <button type="submit"
                    className='mx-2  text-center text-mandy-600 font-semibold hover:text-mandy-100'
                    onClick={() => { console.log('timeline') }}>CGI</button>
            </li>
            {/* <li>
                <div className='text-xs text-mandy-600'>
                    <FontAwesomeIcon icon={faCircle} />
                </div>
            </li> */}
            <li>
                <button type="submit"
                    className='mx-2  text-center text-mandy-600 font-semibold hover:text-mandy-100'
                    onClick={account}>Contact</button>
            </li>
        </ul>
    )
};

export default NavFooterMenu;