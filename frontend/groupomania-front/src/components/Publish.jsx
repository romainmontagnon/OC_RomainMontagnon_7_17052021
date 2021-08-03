import React from 'react';
// import React, { useRef, fileInput } from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCameraRetro, faPaperPlane, faMinusCircle } from '@fortawesome/free-solid-svg-icons';

import { routes } from '../js/routes';
import { loadFromSessionStorage } from '../js/session';

class Publish extends React.Component {
    state = {
        message: '',
        image: null
    }

    constructor(props) {
        super(props)

        this.updateFeeds = this.props.updateFeeds
        this.allFeeds = this.props.allFeeds

        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        // this.componentDidUpdate = this.componentDidUpdate.bind(this)
        this.reset = this.reset.bind(this);
        this.showAria = this.showAria.bind(this)

        this.fileInput = React.createRef();

    }

    handleInputChange(event) {
        const target = event.target;
        const value = target.value;
        const name = target.name;
        console.log(target)
        console.log(value)
        console.log(name)
        this.setState({
            [name]: value, target,
        });
    }

    componentDidUpdate() {
        this.allFeeds = this.props.allFeeds
        console.log(this.allFeeds)
    }

    reset(e) {
        this.setState({
            image: null
        });
    };

    async handleSubmit(event) {
        event.preventDefault();
        let token = loadFromSessionStorage('token')

        if (this.state.image === null && this.state.message === "") {
            alert('Attention, votre publication est vide')
            return
        }
        let myHeaders = new Headers();
        myHeaders.append("Authorization", `Bearer ${token}`);

        let formdata = new FormData();

        if (this.state.image !== null) {
            let fileName = this.state.target.files[0].name;
            let fileInput = this.state.target.files[0];
            formdata.append("file", fileInput, fileName);
        }

        formdata.append("post", `{"message": "${this.state.message}"}`);

        let requestOptions = {
            method: 'POST',
            headers: myHeaders,
            body: formdata,
            redirect: 'follow'
        };

        let publish = await fetch(routes.urlPost, requestOptions)
            .then(response => response.json())
            .then(result => {
                console.log(result)
                return result
            })
            .catch(error => console.log('error', error));
        this.allFeeds.push(publish)
        this.updateFeeds(this.allFeeds)
        let userPublication = document.getElementById('user-publication')
        userPublication.value = ''
    }

    showAria() {
        if (this.state.image !== null) {
            return `image ${this.state.image}`
        }
        return `image non sélectionnée`
    }

    render() {
        return (
            <div
                className='sm:w-2/4 mx-2 sm:max-w-md sm:mx-auto bg-white bg-opacity-40 px-2 py-2 sm:px-4 sm:py-4 rounded-3xl flex flex-row justify-around items-center shadow-xl'
            >
                <form>
                    <div>
                        <textarea
                            id="user-publication"
                            placeholder="One upon a time..."
                            name="message"
                            onChange={this.handleInputChange}
                            rows={4}
                            className='md:w-72 lg:w-80 h-20 bg-midnight-100 ring-2 ring-midnight-400 hover:bg-midnight-50 focus:outline-none focus:ring-2 focus:bg-midnight-50 focus:ring-opacity-50 rounded-2xl text-left px-2 py-1 my-2 resize-none'
                        />
                    </div>
                    <div className="flex flex-col shadow-2xl">
                        <button
                            onClick={this.handleSubmit}
                            type="submit"
                            id="user-publication-publish"
                            name="publish"
                            className='rounded-2xl px-4 ring-2 ring-midnight-400 text-center text-midnight-500 bg-midnight-200 font-semibold hover:bg-midnight-400 hover:text-midnight-100 uppercase shadow-2xl
                            transition transform motion-reduce:transition-none motion-reduce:transform-none 
                                 duration-500 ease-in-out hover:scale-110'>
                            <span className="hidden sm:inline-block">Publier</span>
                            < FontAwesomeIcon icon={faPaperPlane} className="ml-0 sm:ml-1" />
                        </button>
                    </div>
                </form>
                <div className='flex flex-col justify-center'>
                    <div className='mb-4 rounded-2xl px-4 ring-2 ring-midnight-400 text-center text-midnight-500 bg-midnight-200 font-semibold hover:bg-midnight-400 hover:text-midnight-100 inputFile'
                    >
                        <label
                            aria-label={this.showAria()}
                            className='antialiased arialabel block
                                transition transform motion-reduce:transition-none motion-reduce:transform-none 
                                 duration-500 ease-in-out hover:scale-110'
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
                                className='hidden block
                                transition transform motion-reduce:transition-none motion-reduce:transform-none 
                                 duration-500 ease-in-out hover:scale-110'
                            />
                        </label>
                    </div>
                    <button
                        ref={this.fileInput}
                        onClick={this.reset}
                        aria-label="Supprimer la photo"
                        className='antialiased font-bold mb-4 hover:text-red-800 arialabel-sm block
                        transition transform motion-reduce:transition-none motion-reduce:transform-none 
                        duration-500 ease-in-out hover:scale-110'>
                        < FontAwesomeIcon icon={faMinusCircle} />
                    </button>
                </div>
            </div>
        )
    }
};

export default Publish;