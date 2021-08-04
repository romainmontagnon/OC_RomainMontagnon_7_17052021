import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash } from '@fortawesome/free-solid-svg-icons';

import { loadFromSessionStorage } from '../../../js/session';
import { routes } from '../../../js/routes';

class SupprPost extends React.Component {
    constructor(props) {
        super(props)
        this.supprPost = this.supprPost.bind(this)
        this.updateFeeds = this.props.updateFeeds
        this.allFeeds = this.props.allFeeds
        this.feedId = this.props.feedId
        this.indexArrray = this.props.indexArrray
    }

    async supprPost() {
        let url = `${routes.urlPost}${this.feedId}`
        let myHeaders = new Headers();
        myHeaders.append("Authorization", `Bearer ${loadFromSessionStorage('token')}`);

        let requestOptions = {
            method: 'DELETE',
            headers: myHeaders,
            redirect: 'follow'
        };

        await fetch(url, requestOptions)
            .then(response => response.json())
            .then(result => console.log(result))
            .catch(error => console.log('error', error));

        this.allFeeds.splice(this.indexArrray, 1)
        this.updateFeeds(this.allFeeds)
    }

    render() {
        return (
            <div
                className='mx-2 mb-1 rounded-2xl px-4 ring-2 ring-midnight-400 text-center bg-midnight-100 font-semibold hover:bg-midnight-400 hover:text-midnight-50 antialiased md:py-0 py-1
                transition transform motion-reduce:transition-none motion-reduce:transform-none 
                duration-500 ease-in-out hover:scale-110'
                onClick={this.supprPost}>
                <h3 className='antialiased font-medium flex flex-row items-center'>< FontAwesomeIcon icon={faTrash} key={`faTrash-${this.feedId}`} /><span className='hidden md:block ml-2'>Supprimer</span></h3>
            </div>
        )
    }
}

export default SupprPost;