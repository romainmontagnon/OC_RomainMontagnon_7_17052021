import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCameraRetro, faPaperPlane, faMinusCircle } from '@fortawesome/free-solid-svg-icons';

import { routes } from '../js/routes';
import { loadFromSessionStorage } from '../js/session';

class Comment extends React.Component {
    state = {
        message: {
            value: '',
            target: null
        },
        image: {
            value: null,
            target: null
        }
    }

    constructor(props) {
        super(props)

        this.allComments = this.props.allComments
        this.postId = this.props.postId
        this.updateComments = this.props.updateComments

        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.resetImage = this.resetImage.bind(this);
        this.resetText = this.resetText.bind(this);
        this.showAria = this.showAria.bind(this)

        this.fileInput = React.createRef();
    }

    handleInputChange(event) {
        const target = event.target;
        const value = target.value;
        const name = target.name;

        this.setState({
            [name]: {
                value, target
            }
        });
    }

    componentDidUpdate() {
        this.allComments = this.props.allComments
    }

    resetImage(e) {
        this.setState({
            image: {
                value: null,
                target: null
            }
        });
    };

    resetText(e) {
        this.setState({
            message: {
                value: '',
                target: null
            }
        });
    };

    async handleSubmit(event) {
        event.preventDefault();
        let token = loadFromSessionStorage('token')

        if (this.state.image.target === null && this.state.message.value === "") {
            alert('Attention, votre commentaire est vide')
            return
        } else if (this.state.message.value === null) {
            this.state.message = ''
        }

        let myHeaders = new Headers();
        myHeaders.append("Authorization", `Bearer ${token}`);

        let formdata = new FormData();

        let fileName = null;
        let fileInput = null;

        if (this.state.image.target !== null) {
            fileName = this.state.image.target.files[0].name
            fileInput = this.state.image.target.files[0]
            formdata.append("file", fileInput, fileName);
        }

        formdata.append("com", `{"message": "${this.state.message.value}", "PostId": ${this.postId}}`);

        let requestOptions = {
            method: 'POST',
            headers: myHeaders,
            body: formdata,
            redirect: 'follow'
        };

        let publish = await fetch(routes.urlCom, requestOptions)
            .then(response => response.json())
            .then(result => {
                return result
            })
            .catch(error => console.log('error', error));
        this.allComments.push(publish)
        this.updateComments(this.allComments)
        document.getElementById(`user-publication-${this.postId}`).value = ''
        this.resetText()
        this.resetImage()
    }

    showAria() {
        if (this.state.image.value !== null) {
            return ` ${this.state.image.value}`
        }
        return ` non sélectionnée`
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
                    <form aria-label='formulaire de commentaire'>
                        <textarea
                            id={`user-publication-${this.postId}`}
                            placeholder="I have something to say..."
                            onChange={this.handleInputChange}
                            rows={2}
                            name="message"
                            aria-label='saisir message'
                            className='sm:w-60 sm:h-16 bg-midnight-100 ring-2 ring-midnight-400 hover:bg-midnight-50 focus:outline-none focus:ring-2 focus:bg-midnight-50 focus:ring-opacity-50 rounded-2xl text-left px-2 py-1 resize-none mb-1 sm:mb-0'
                        />
                    </form>
                    <div className="flex sm:flex-col flex-row">
                        <div
                            className='rounded-2xl px-4 ring-2 ring-midnight-400 text-center text-midnight-500 bg-midnight-200 font-semibold hover:bg-midnight-400 hover:text-midnight-100 inputFile'
                        >
                            <label
                                aria-label={`image ${this.showAria()}`}
                                className='antialiased arialabel block
                                    transition transform motion-reduce:transition-none motion-reduce:transform-none 
                                    duration-500 ease-in-out hover:scale-110 z-30'
                            >
                                < FontAwesomeIcon icon={faCameraRetro} key={`faCameraRetro-${this.postId}`} />
                                <input
                                    type="file"
                                    accept=".png, .jpg, .jpeg, .gif"
                                    id={`user-publication-image-${this.postId}`}
                                    name="image"
                                    ref={this.fileInput}
                                    onChange={this.handleInputChange}
                                    aria-label={`image ${this.state.image}`}
                                    className='hidden'
                                />
                                <span className='hidden'>Charger une image : </span>
                            </label>

                        </div>
                        <button
                            ref={this.fileInput}
                            onClick={this.resetImage}
                            aria-label="Supprimer l'image"
                            className='antialiased font-bold hover:text-red-800 arialabel-sm block
                            sm:mx-0 mx-2
                            transition transform motion-reduce:transition-none motion-reduce:transform-none 
                    duration-500 ease-in-out hover:scale-110 z-20'>
                            < FontAwesomeIcon icon={faMinusCircle} key={`faMinusCircle-${this.postId}`} />
                        </button>
                        <button
                            onClick={this.handleSubmit}
                            type="submit"
                            id="user-comment-publish"
                            name="comment"
                            aria-label="Publier commentaire"
                            className='rounded-2xl px-4 ring-2 ring-midnight-400 text-center text-midnight-500 bg-midnight-200 font-semibold hover:bg-midnight-400 hover:text-midnight-100 antialiased arialabel-sm
                            transition transform motion-reduce:transition-none motion-reduce:transform-none 
                                 duration-500 ease-in-out hover:scale-110 z-10'
                        >
                            < FontAwesomeIcon icon={faPaperPlane} key={`faPaperPlane-${this.postId}`} />
                        </button>
                    </div>
                </div>
            </div>
        )
    }
};

export default Comment;