import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGlobe } from '@fortawesome/free-solid-svg-icons'
// import { fa500px } from '@fortawesome/free-brands-svg-icons'
// import { faPaperPlane } from '@fortawesome/free-regular-svg-icons'

const NavFooterLogo = () => {
    return (
        <p className='text-4xl text-mandy-600 font-semi-bold m-2'>
            < FontAwesomeIcon icon={faGlobe} />
        </p>)
};

export default NavFooterLogo;