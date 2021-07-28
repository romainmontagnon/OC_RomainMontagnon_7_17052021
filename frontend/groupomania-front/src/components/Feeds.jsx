import React from 'react';

import Feed from './Feed';

class Feeds extends React.Component {
    constructor(props) {
        super(props);
        this.allFeeds = this.props.allFeeds
        this.feedCallRender = this.feedCallRender.bind(this)
    }

    feedCallRender() {
        var feed = this.props.allFeeds;
        return (
            <ul className='flex flex-col-reverse'>
                {feed.map((oneFeed, index) =>
                    <li className='bg-midnight-200 bg-opacity-80 mb-4 py-2 px-2 rounded-3xl'>
                        <Feed key={`feed ${oneFeed.id}`} oneFeed={oneFeed} />
                    </li>
                )}
            </ul>
        )
    }
    componentDidUpdate() {
        console.log('feeds update')
        this.render()
    }

    render() {
        return (
            <div className='w-3/4 mx-auto my-10 bg-white bg-opacity-40 px-4 py-4 rounded-3xl shadow-xl'>
                <div
                    className='flex flex-col justify-around items-center border-solid border-b-2 border-opacity-80'>
                    <div className='w-5/6'>
                        {this.feedCallRender()}
                    </div>
                </div>
            </div>
        )
    }
};

export default Feeds;