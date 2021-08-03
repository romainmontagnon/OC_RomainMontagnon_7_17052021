import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCameraRetro, faPaperPlane, faMinusCircle } from '@fortawesome/free-solid-svg-icons';

import { routes } from '../js/routes';
import { loadFromSessionStorage } from '../js/session';

class Comment extends React.Component {
    state = {
        message: '',
        image: null
    }

    constructor(props) {
        super(props)

        this.allComments = this.props.allComments
        this.postId = this.props.postId
        this.updateComments = this.props.updateComments

        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.reset = this.reset.bind(this);
        this.showAria = this.showAria.bind(this)

        this.fileInput = React.createRef();
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

    componentDidUpdate() {
        this.allComments = this.props.allComments
        console.log(this.allComments)
    }

    reset(e) {
        // this.state.image = null;
        this.setState({
            image: null
        });
    };

    async handleSubmit(event) {
        event.preventDefault();
        let token = loadFromSessionStorage('token')

        // console.log(this.state)
        console.log(this.allComments)

        if (this.state.image === null && this.state.message === "") {
            alert('Attention, votre commentaire est vide')
            return
        }
        let myHeaders = new Headers();
        myHeaders.append("Authorization", `Bearer ${token}`);

        let formdata = new FormData();

        let fileName = null;
        let fileInput = null;

        if (this.state.image !== null) {
            fileName = this.state.target.files[0].name
            fileInput = this.state.target.files[0]
            formdata.append("file", fileInput, fileName);
        }

        formdata.append("com", `{"message": "${this.state.message}", "PostId": ${this.postId}}`);

        let requestOptions = {
            method: 'POST',
            headers: myHeaders,
            body: formdata,
            redirect: 'follow'
        };

        let publish = await fetch(routes.urlCom, requestOptions)
            .then(response => response.json())
            .then(result => {
                console.log(result)
                return result
            })
            .catch(error => console.log('error', error));
        this.allComments.push(publish)
        console.log(this.allComments)
        this.updateComments(this.allComments)
    }

    showAria() {
        if (this.state.image !== null) {
            return `image ${this.state.image}`
        }
        return `image non sélectionnée`
    }

    render() {
        return (
            <div className='sm:w-3/4 sm:max-w-md bg-white bg-opacity-40 sm:px-4 px-1 py-4 rounded-3xl shadow-xl'>
                <h3
                    className="antialiased text-lg font-semibold my-auto mb-2 pl-2 sm:block hidden"
                    aria-label="Laisser un commentaire">
                    Laisser un commentaire
                </h3>
                <div className='flex sm:flex-row flex-col sm:justify-evenly items-center'>
                    <form>
                        <textarea
                            id="user-publication"
                            placeholder="I have something to say..."
                            onChange={this.handleInputChange}
                            rows={2}
                            name="message"
                            className='sm:w-60 sm:h-16 bg-midnight-100 ring-2 ring-midnight-400 hover:bg-midnight-50 focus:outline-none focus:ring-2 focus:bg-midnight-50 focus:ring-opacity-50 rounded-2xl text-left px-2 py-1 resize-none mb-1 sm:mb-0'
                        />
                    </form>
                    <div className="flex sm:flex-col flex-row">
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
                            className='antialiased font-bold hover:text-red-800 arialabel-sm block
                            sm:mx-0 mx-2'>
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