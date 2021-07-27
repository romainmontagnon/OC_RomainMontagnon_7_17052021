import React from 'react';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { faSearch } from '@fortawesome/free-solid-svg-icons'
// import { fa500px } from '@fortawesome/free-brands-svg-icons'
// import { faPaperPlane } from '@fortawesome/free-regular-svg-icons'
// import timeline from '../../js/timeline';
import account from '../../js/account';

const NavMenu = (props) => {
    const accountButton = 'Compte'
    function accounType(props) {
        if (props.isAdmin) {
            return `admin`
        }
        return `user`
    }
    return (
        <div className='mr-2'>
            <button type="submit"
                className='mx-2 rounded-2xl px-4 ring-2 ring-midnight-400 text-center text-midnight-500 bg-midnight-200 font-semibold hover:bg-midnight-400 hover:text-midnight-100 antialiased'
                onClick={() => { console.log('timeline') }}>Timeline</button>
            <button type="submit"
                className='mx-2 rounded-2xl px-4 ring-2 ring-midnight-400 text-center bg-midnight-200 font-semibold hover:bg-midnight-400 hover:text-midnight-100 antialiased'
                onClick={account}>{accountButton} {accounType(props)}</button>
        </div>
    )
};

export default NavMenu;