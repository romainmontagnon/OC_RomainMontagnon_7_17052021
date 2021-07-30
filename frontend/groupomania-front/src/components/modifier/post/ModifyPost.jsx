import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPen } from '@fortawesome/free-solid-svg-icons';

import { loadFromSessionStorage } from '../../../js/session';
import { routes } from '../../../js/routes';
import ModifyPostForm from './ModifyPostForm'

class ModifyPost extends React.Component {
    state = {
        showMenu: false
    }
    constructor(props) {
        super(props)
        this.modifyPost = this.modifyPost.bind(this)
        this.showMenu = this.showMenu.bind(this)
    }

    modifyPost() {

    }

    showMenu() {
        this.setState({ showMenu: !this.state.showMenu })
    }

    handleSubmit() {
        let url = `${routes.urlPost}${this.feedId}`

        let myHeaders = new Headers();
        myHeaders.append("Authorization", `Bearer ${loadFromSessionStorage('token')}`);

        let formdata = new FormData();

        if (this.state.image !== null) {
            let fileName = this.state.target.files[0].name;
            let fileInput = this.state.target.files[0];
            formdata.append("file", fileInput, fileName);
        }

        formdata.append("post", `{"message": "${this.state.message}"}`);
        console.log(formdata)

        var requestOptions = {
            method: 'PUT',
            headers: myHeaders,
            body: formdata,
            redirect: 'follow'
        };

        fetch(url, requestOptions)
            .then(response => response.json())
            .then(result => console.log(result))
            .catch(error => console.log('error', error));
    }

    render() {
        return (
            <div>
                <div
                    className='mx-2 mt-1 rounded-2xl px-4 ring-2 ring-midnight-400 text-center bg-midnight-100 font-semibold hover:bg-midnight-400 hover:text-midnight-50 antialiased md:py-0 py-1'
                    onClick={this.showMenu}
                >
                    <h5 className='antialiased font-medium flex flex-row items-center'>< FontAwesomeIcon icon={faPen} /><span className='hidden md:block ml-2'>Modifier</span></h5>
                </div>
                {this.state.showMenu && <ModifyPostForm handler={this.showAccountSection} {...this.props} />}
            </div>
        )
    }
}

export default ModifyPost;