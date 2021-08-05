import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCameraRetro, faPaperPlane, faMinusCircle } from '@fortawesome/free-solid-svg-icons';

import { loadFromSessionStorage } from '../../../js/session';
import { routes } from '../../../js/routes';

class ModifyPostForm extends React.Component {
    state = {
        showMenu: false,
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
        this.showMenu = this.props.handler
        this.feedId = this.props.feedId
        this.feed = this.props.oneFeed;
        this.allFeeds = this.props.allFeeds
        this.updateFeeds = this.props.updateFeeds
        this.indexArrray = this.props.indexArrray

        this.handleSubmit = this.handleSubmit.bind(this)
        this.showAria = this.showAria.bind(this)
        this.handleInputChange = this.handleInputChange.bind(this);
        this.resetImage = this.resetImage.bind(this);

        this.fileInput = React.createRef();
        // this.postId = this.props.postId
    }

    componentDidMount() {
        this.setState({
            message: {
                value: this.feed.message,
                target: null
            },
            image: {
                value: this.feed.image,
                target: null
            }
        });
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
        console.log(this.state)
    }

    resetImage(e) {
        this.setState({
            image: {
                value: null,
                target: null
            }
        });
    };

    async handleSubmit() {
        let url = `${routes.urlPost}${this.feed.id}`

        let myHeaders = new Headers();
        myHeaders.append("Authorization", `Bearer ${loadFromSessionStorage('token')}`);

        let formdata = new FormData();

        if (this.state.image.target !== null) {
            let fileName = this.state.image.target.files[0].name;
            let fileInput = this.state.image.target.files[0];
            formdata.append("file", fileInput, fileName);
        }

        formdata.append("post", `{"message": "${this.state.message.value}"}`);
        console.log(formdata)

        var requestOptions = {
            method: 'PUT',
            headers: myHeaders,
            body: formdata,
            redirect: 'follow'
        };

        let modifyPost = await fetch(url, requestOptions)
            .then(response => response.json())
            .then(result => {
                return result
            })
            .catch(error => console.log('error', error));

        if (modifyPost[0] === 1) {
            let getRequestOptions = {
                method: 'GET',
                headers: myHeaders,
                redirect: 'follow'
            };

            let modifyPostReturn = await fetch(url, getRequestOptions)
                .then(response => response.json())
                .then(result => {
                    return result
                })
                .catch(error => console.log('error', error));
            this.allFeeds.splice(this.indexArrray, 1)
            this.updateFeeds(this.allFeeds)
            this.allFeeds.push(modifyPostReturn)
            this.updateFeeds(this.allFeeds)

            this.showMenu(false)
        }
    }

    showAria() {
        if (this.state.image.value !== null) {
            return `image ${this.state.image.value}`
        }
        return `image non sélectionnée`
    }
    render() {
        return (
            <div
                className='mt-2 text-center  font-semibold bg-none antialiased md:py-0 py-1 absolute'
            >
                <div className='bg-midnight-300 bg-opacity-80 px-4 py-2 rounded-3xl shadow-xl'>
                    <div className='flex flex-row justify-evenly items-center'>
                        <form>
                            <textarea
                                id="user-publication"
                                placeholder="I change my mind..."
                                onChange={this.handleInputChange}
                                rows={2}
                                name="message"
                                className='w-60 h-16 bg-midnight-100 ring-2 ring-midnight-400 hover:bg-midnight-50 focus:outline-none focus:ring-2 focus:bg-midnight-50 focus:ring-opacity-50 rounded-2xl text-left px-2 py-1 resize-none'
                                defaultValue={this.feed.message}
                            />
                        </form>
                        <div className="flex flex-col ml-2">
                            <div
                                className='rounded-2xl px-4 ring-2 ring-midnight-400 text-center text-midnight-500 bg-midnight-200 font-semibold hover:bg-midnight-400 hover:text-midnight-100 inputFile'
                            >
                                <label
                                    aria-label={this.showAria()}
                                    className='antialiased arialabel block
                                    transition transform motion-reduce:transition-none motion-reduce:transform-none 
                                    duration-500 ease-in-out hover:scale-110 z-30'
                                >
                                    < FontAwesomeIcon icon={faCameraRetro} key={`faCameraRetro-${this.feedId}`} />
                                    <input
                                        type="file"
                                        accept=".png, .jpg, .jpeg, .gif"
                                        id="user-publication-image"
                                        name="image"
                                        ref={this.fileInput}
                                        onChange={this.handleInputChange}
                                        aria-label={this.state.image}
                                        className='hidden'
                                    />
                                </label>

                            </div>
                            <button
                                ref={this.fileInput}
                                onClick={this.resetImage}
                                aria-label="Supprimer la photo"
                                className='antialiased font-bold hover:text-red-800 arialabel-sm block
                                transition transform motion-reduce:transition-none motion-reduce:transform-none 
                                    duration-500 ease-in-out hover:scale-110 z-20'>
                                < FontAwesomeIcon icon={faMinusCircle} key={`faMinusCircle-${this.feedId}`} />
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
                                < FontAwesomeIcon icon={faPaperPlane} key={`faPaperPlane-${this.feedId}`} />
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default ModifyPostForm;