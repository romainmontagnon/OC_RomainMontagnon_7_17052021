import React from 'react';
import Publish from './Publish';
import Feeds from './Feeds';

const Timeline = (props) => {
    const isLoggedIn = props.isLoggedIn;
    if (isLoggedIn) {
        return (
        <div>
            <p>This the begining of the timeline</p>
            <Publish />
            <Feeds />
        </div>
    )
    } else {
        return null
    }
};

export default Timeline;