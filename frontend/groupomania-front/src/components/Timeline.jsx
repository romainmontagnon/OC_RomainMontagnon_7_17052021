import React from 'react';
import Publish from './Publish';
import Feeds from './Feeds';
import { loadFromSessionStorage } from '../js/sesssion';
import { routes } from '../js/routes';

import { TimelineContext } from './context/TimelineContext';
import WrongWay from './WrongWay';

class Timeline extends React.Component {
    state = {
        allFeeds: []
    }

    constructor(props) {
        super(props)
        this.isLoggedIn = this.props.isLoggedIn
        this.onLoadfunction = this.onLoadfunction.bind(this);
    }

    async onLoadfunction() {
        console.log('hello onLoadfunction ')
        let myHeaders = new Headers();
        myHeaders.append("Authorization", `Bearer ${loadFromSessionStorage('token')}`);

        let requestOptions = {
            method: 'GET',
            headers: myHeaders,
            redirect: 'follow'
        };

        let feeds = await fetch(routes.urlPost, requestOptions)
            .then(response => response.json())
            .then(result => result)
            .catch(error => console.log('error', error));
        this.setState({
            allFeeds: [...feeds]
        })
        console.log(this.state)
    }

    render() {
        if (this.props.isLoggedIn) {
            return (
                <div>
                    <button
                        className='mr-1 rounded-2xl px-4 ring-2 ring-midnight-400 text-center text-midnight-500 bg-midnight-200 font-semibold hover:bg-midnight-400 hover:text-midnight-100 uppercase'
                        onClick={this.onLoadfunction}
                    >
                        Cliquez ici
                    </button>

                    <p>This the begining of the timeline</p>
                    <Publish />
                    <TimelineContext.Provider allFeeds={this.state}>
                        <Feeds allFeeds={this.state} /*handler={this.onLoadfunction}*/ />
                    </TimelineContext.Provider>
                </div>
            )
        } else {
            return <WrongWay />
        }
    }
}

export default Timeline;