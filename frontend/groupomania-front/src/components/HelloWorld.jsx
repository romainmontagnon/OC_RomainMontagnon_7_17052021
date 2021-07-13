import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHamburger } from '@fortawesome/free-solid-svg-icons'
// import { fa500px } from '@fortawesome/free-brands-svg-icons'
// import { faPaperPlane } from '@fortawesome/free-regular-svg-icons'

const HelloWorld = () => {
    return (
        <div className=''>
            <h1>Hello World</h1>
            < FontAwesomeIcon icon={faHamburger} />
        </div>
    )
};

export default HelloWorld;