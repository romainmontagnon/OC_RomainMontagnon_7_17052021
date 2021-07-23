import React from 'react';
import ShowComments from './ShowComments';

class Feed extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        const styleBorderGreen = { border: 'solid 1px green' }
        return (
            <div style={styleBorderGreen}>
                <div className='my-1'>
                    <h4>Mon feed solo</h4>
                </div>
                <div className='my-1'>
                    Affichage des commentaires
                    <ShowComments />
                </div>
            </div>
        )
    }
}

export default Feed;