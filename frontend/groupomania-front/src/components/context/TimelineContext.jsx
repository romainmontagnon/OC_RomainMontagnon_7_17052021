import React from 'react';

export const timelinectx = {
    allFeeds: [],
    // comment: false
    comment: []
};

export const TimelineContext = React.createContext(timelinectx)