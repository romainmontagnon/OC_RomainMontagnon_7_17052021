import React from 'react';
import ShowComment from './ShowComment';

class ShowComments extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <div>
                Comments section
                <ShowComment />
            </div>
        )
    }
}

export default ShowComments;