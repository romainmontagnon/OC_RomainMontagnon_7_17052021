import React, { useState } from 'react';

import NavFooterLogo from './NavFooter';
import CGU from '../CGU';
import Contact from '../Contact';

const NavFooterMenu = () => {
    const [showCGU, setshowCGU] = useState(false);
    const [showContact, setshowContact] = useState(false);
    return (
        <div>
            <ul className='mr-2 flex flex-row items-center'>
                <li>
                    <NavFooterLogo />
                </li>
                <li>
                    <button type="submit"
                        className='mx-2  text-center text-mandy-600 font-semibold hover:text-mandy-100'
                        onClick={() => {
                            setshowCGU(!showCGU)
                            setshowContact(false)
                        }}>
                        CGU
                    </button>
                </li>
                <li>
                    <button type="submit"
                        className='mx-2  text-center text-mandy-600 font-semibold hover:text-mandy-100'
                        onClick={() => {
                            setshowCGU(false)
                            setshowContact(!showContact)
                        }}>
                        Contact
                    </button>
                </li>
            </ul>
                <div className='my-auto'>
                    {showCGU && <CGU />}
                    {showContact && <Contact />}
                </div>
        </div>
    )
};

export default NavFooterMenu;