import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGlobe } from '@fortawesome/free-solid-svg-icons'
// import { fa500px } from '@fortawesome/free-brands-svg-icons'
// import { faPaperPlane } from '@fortawesome/free-regular-svg-icons'

const NavFooterLogo = () => {
    return (
        <span className='text-4xl text-mandy-500 font-semi-bold m-2 hover:text-mandy-800
            transition transform motion-reduce:transition-none motion-reduce:transform-none 
            duration-500 ease-in-out'
            aria-label='logo groupomania'>
            < FontAwesomeIcon icon={faGlobe} />
        </span>)
};

export default NavFooterLogo;