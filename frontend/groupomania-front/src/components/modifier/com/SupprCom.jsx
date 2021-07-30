import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash } from '@fortawesome/free-solid-svg-icons';
import { loadFromSessionStorage } from '../../../js/sesssion';
import { routes } from '../../../js/routes';

class SupprCom extends React.Component {
    constructor(props) {
        super(props)
        this.supprPost = this.supprPost.bind(this)
        this.commentId = this.props.commentId
    }

    supprPost() {
        let url = `${routes.urlCom}${this.commentId}`
        let myHeaders = new Headers();
        myHeaders.append("Authorization", `Bearer ${loadFromSessionStorage('token')}`);

        let requestOptions = {
            method: 'DELETE',
            headers: myHeaders,
            redirect: 'follow'
        };

        fetch(url, requestOptions)
            .then(response => response.json())
            .then(result => console.log(result))
            .catch(error => console.log('error', error));
    }

    render() {
        return (
            <div
                className='mx-2 mb-1 rounded-2xl px-4 ring-2 ring-midnight-400 text-center bg-midnight-100 font-semibold hover:bg-midnight-400 hover:text-midnight-50 antialiased py-1 arialabel-sm'
                aria-label="Supprimer"
                onClick={this.supprPost}>
                <h5 className='antialiased font-medium flex flex-row items-center'>< FontAwesomeIcon icon={faTrash} /></h5>
            </div>
        )
    }
}

export default SupprCom;