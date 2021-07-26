import React from 'react';

import Comment from './Comment';
import Feed from './Feed';
import HelloWorld from './HelloWorld'
import ShowComments from './ShowComments';
import { storeToSessionStorage, loadFromSessionStorage } from '../js/sesssion';
import { routes } from '../js/routes';
import { faHandPointLeft } from '@fortawesome/free-solid-svg-icons';

class Feeds extends React.Component {
    constructor(props) {
        super(props);
        // this.isLoggedIn = this.props.isLoggedIn
        this.allFeeds = this.props.allFeeds.allFeeds
    }

    componentDidUpdate(prevProps) {
        if (this.prevProps !== this.props) {
            console.log('hello component update')
            // console.table(this.props.allFeeds.allFeeds)
            var feed = this.props.allFeeds.allFeeds;
            // for (let i = 0; i < feed.length; i++) {
            //     const element = feed[i];
            //     console.log(element)
            // }
            return (
                <ul>
                    {feed.map((oneFeed, index) =>
                        // {console.log(`${index+100}`)
                        // console.log(oneFeed)}
                        <li>
                            <Feed key={`${index + 100}`} oneFeed={oneFeed} />
                        </li>
                    )}
                </ul>
            )
        } else {
            return <HelloWorld />
        };
    }

    render() {
        return (
            <div className='w-3/4 mx-auto my-10 bg-white bg-opacity-40 px-4 py-4 rounded-3xl'>
                <div
                    className='flex flex-col justify-around items-center border-solid border-b-2 border-mandy-500 border-opacity-80'>
                    <div className='w-5/6 flex flex-col' style={{ border: 'solid 1px red' }}>
                        {this.componentDidUpdate()}
                        {/* <div className='my-1 divide-y-4 divide-mandy-700 divide-solid'>
                            <Comment />
                        </div> */}
                    </div>
                </div>
            </div>
        )
    }
};

export default Feeds;