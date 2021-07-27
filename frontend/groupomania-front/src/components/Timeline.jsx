import React from 'react';
import Publish from './Publish';
import Feeds from './Feeds';
import { loadFromSessionStorage } from '../js/sesssion';
import { routes } from '../js/routes';

import { TimelineContext } from './context/TimelineContext';

class Timeline extends React.Component {
    state = {
        allFeeds: []
    }

    constructor(props) {
        super(props)
        this.isLoggedIn = this.props.isLoggedIn
        // this.onLoadfunction = this.onLoadfunction.bind(this)
        this.componentDidMount = this.componentDidMount.bind(this)
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

    async componentDidMount() {
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
                    <Publish />
                    <TimelineContext.Provider allFeeds={this.state}>
                        <Feeds allFeeds={this.state} /*handler={this.onLoadfunction}*/ />
                    </TimelineContext.Provider>
                </div>
            )
        } else {
            return <div></div>
        }
    }
}

export default Timeline;