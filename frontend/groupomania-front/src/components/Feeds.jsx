import React from 'react';

import Feed from './Feed';

class Feeds extends React.Component {
    constructor(props) {
        super(props);
        this.isAdmin = this.props.isAdmin
        this.userIdLogged = this.props.userIdLogged
        this.allFeeds = this.props.allFeeds
        this.feedCallRender = this.feedCallRender.bind(this)
    }

    feedCallRender() {
        var feed = this.props.allFeeds;
        return (
            <ul className='flex flex-col-reverse'>
                {feed.map((oneFeed, index) =>
                    <li className='bg-midnight-200 bg-opacity-80 mb-4 py-2 px-2 rounded-3xl'>
                        <Feed key={`feed ${oneFeed.id}`} oneFeed={oneFeed} isAdmin={this.isAdmin} userIdLogged={this.userIdLogged} />
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
                {this.feedCallRender()}
            </div>
        )
    }
};

export default Feeds;