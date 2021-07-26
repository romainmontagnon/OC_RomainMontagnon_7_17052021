import React from 'react';

export const timelinectx = {
    allFeeds: [],
    comment: false
};

export const TimelineContext = React.createContext(timelinectx)