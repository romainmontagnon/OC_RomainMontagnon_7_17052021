import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHamburger, faMugHot } from '@fortawesome/free-solid-svg-icons'
// import { fa500px } from '@fortawesome/free-brands-svg-icons'
// import { faPaperPlane } from '@fortawesome/free-regular-svg-icons'

const WrongWay = () => {
    return (
        <div className=''>
            <p className='antialiased text-lg font-medium'>
                < FontAwesomeIcon
                    icon={faMugHot}
                    className='antialiased text-lg font-medium mr-4' />
                Oups, maybe something is going wrong in this area, contact support for more information
                < FontAwesomeIcon
                    icon={faHamburger}
                    className='antialiased text-lg font-medium ml-4' />
            </p>
        </div>
    )
};

export default WrongWay;