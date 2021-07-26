import React from 'react';

import Timeline from './Timeline';

const AfterLog = (props) => {
    let isLoggedIn = props.isLoggedIn
    if (props.isLoggedIn){
        return(
            <Timeline isLoggedIn={isLoggedIn}/>
        )
    } else {
        return <div></div>
    }
}

export default AfterLog;