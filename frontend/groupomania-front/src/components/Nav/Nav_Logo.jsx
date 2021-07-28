import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGlobe } from '@fortawesome/free-solid-svg-icons'
// import { fa500px } from '@fortawesome/free-brands-svg-icons'
// import { faPaperPlane } from '@fortawesome/free-regular-svg-icons'

const NavLogo = () => {
    return (
        <h1 className='text-5xl text-midnight-500 font-semi-bold m-2 flex flex-row'>
            < FontAwesomeIcon icon={faGlobe} />
            <span className='ml-6 hidden lg:block'>
                Groupomania
            </span>
        </h1>
    )
};

export default NavLogo;