import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCameraRetro, faPaperPlane, faMinusCircle } from '@fortawesome/free-solid-svg-icons';

import { routes } from '../js/routes';
import { loadFromSessionStorage } from '../js/sesssion';

class Comment extends React.Component {
    state = {
        message: '',
        image: null
    }

    constructor(props) {
        super(props)
        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.reset = this.reset.bind(this);
        this.fileInput = React.createRef();
        this.showAria = this.showAria.bind(this)
        this.postId = this.props.postId
    }

    handleInputChange(event) {
        const target = event.target;
        const value = target.value;
        const name = target.name;
        // console.log(target)
        // console.log(value)
        // console.log(name)
        this.setState({
            [name]: value, target
        });
    }

    reset(e) {
        this.state.image = null;
        this.showAria()
    };

    handleSubmit(event) {
        event.preventDefault();
        let token = loadFromSessionStorage('token')
        // console.log(this.state)

        if (this.state.image === null && this.state.message === "") {
            alert('Attention, votre commentaire est vide')
            return
        }
        let myHeaders = new Headers();
        myHeaders.append("Authorization", `Bearer ${token}`);

        let formdata = new FormData();
        let fileName = this.state.target.files[0].name
        let fileInput = this.state.target.files[0]

        formdata.append("file", fileInput, fileName);
        formdata.append("com", `{"message": "${this.state.message}", "PostId": ${this.postId}}`);


        let requestOptions = {
            method: 'POST',
            headers: myHeaders,
            body: formdata,
            redirect: 'follow'
        };
        fetch(routes.urlCom, requestOptions)
            .then(response => response.text())
            .then(result => console.log(result))
            .catch(error => console.log('error', error));
    }

    showAria() {
        if (this.state.image !== null) {
            return `image ${this.state.image}`
        }
        return `image non sélectionnée`
    }

    render() {
        return (
            <div className='w-3/4 max-w-md bg-white bg-opacity-40 px-4 py-4 rounded-3xl'>
                <h3>Laisser un commentaire</h3>
                <div className='flex flex-row justify-evenly items-center'>
                    <form>
                        <textarea
                            id="user-publication"
                            placeholder="I have something to say..."
                            onChange={this.handleInputChange}
                            rows={2}
                            name="message"
                            className='w-60 h-16 bg-midnight-100 ring-2 ring-midnight-400 hover:bg-midnight-50 focus:outline-none focus:ring-2 focus:bg-midnight-50 focus:ring-opacity-50 rounded-2xl text-left px-2 py-1 resize-none'
                        />
                    </form>
                    <div className="flex flex-col">
                        <div
                            className='rounded-2xl px-4 ring-2 ring-midnight-400 text-center text-midnight-500 bg-midnight-200 font-semibold hover:bg-midnight-400 hover:text-midnight-100 inputFile'
                        >
                            <label
                                aria-label={this.showAria()}
                                className='antialiased arialabel'
                            >
                                < FontAwesomeIcon icon={faCameraRetro} />
                                <input
                                    type="file"
                                    accept=".png, .jpg, .jpeg, .gif"
                                    id="user-publication-image"
                                    name="image"
                                    ref={this.fileInput}
                                    onChange={this.handleInputChange}
                                    aria-label={this.state.image}
                                    className='hidden block'
                                />
                            </label>

                        </div>
                        <button
                            ref={this.fileInput}
                            onClick={this.reset}
                            aria-label="Supprimer la photo"
                            className='antialiased font-bold hover:text-red-800 arialabel-sm block'>
                            < FontAwesomeIcon icon={faMinusCircle} />
                        </button>
                        <button
                            onClick={this.handleSubmit}
                            type="submit"
                            id="user-comment-publish"
                            name="comment"
                            aria-label="Publier commentaire"
                            className='rounded-2xl px-4 ring-2 ring-midnight-400 text-center text-midnight-500 bg-midnight-200 font-semibold hover:bg-midnight-400 hover:text-midnight-100 antialiased arialabel-sm'
                        >
                            < FontAwesomeIcon icon={faPaperPlane} />
                        </button>
                    </div>
                </div>
            </div>
        )
    }
};

export default Comment;