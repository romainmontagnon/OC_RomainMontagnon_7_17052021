import React from 'react';
import Publish from './Publish';
import Feeds from './Feeds';
import { loadFromSessionStorage } from '../js/session';
import { routes } from '../js/routes';

import { TimelineContext } from './context/TimelineContext';

class Timeline extends React.Component {
    state = {
        allFeeds: []
    }

    constructor(props) {
        super(props)
        
        this.isLoggedIn = this.props.isLoggedIn
        this.isAdmin = this.props.isAdmin
        this.userIdLogged = this.props.userIdLogged

        this.componentDidMount = this.componentDidMount.bind(this)
        this.updateFeeds = this.updateFeeds.bind(this)
    }

    updateFeeds(value) {
        this.setState({
            allFeeds: value
        })
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
        this.updateFeeds(feeds)
        // console.log(this.state)  
    }

    render() {
        if (this.isLoggedIn) {
            return (
                <div>
                    <TimelineContext.Provider value={this.state}>
                        <Publish
                            updateFeeds={this.updateFeeds}
                            allFeeds={this.state.allFeeds}
                            {...this.props} />
                        <Feeds
                            updateFeeds={this.updateFeeds}
                            allFeeds={this.state.allFeeds}
                            {...this.props} />
                    </TimelineContext.Provider>
                </div>
            )
        } else {
            return <div></div>
        }
    }
}

export default Timeline;