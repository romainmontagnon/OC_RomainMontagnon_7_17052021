import React from 'react';

import Timeline from './Timeline';

const AfterLog = (props) => {
    if (props.isLoggedIn){
        return(
            <Timeline isLoggedIn={props.isLoggedIn} isAdmin={props.isAdmin} userIdLogged={props.userIdLogged}/>
        )
    } else {
        return <div></div>
    }
}

export default AfterLog;