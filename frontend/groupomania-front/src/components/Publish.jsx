import React, { useRef, fileInput } from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCameraRetro, faPaperPlane, faMinusCircle } from '@fortawesome/free-solid-svg-icons';
import { routes } from '../js/routes';
import { postAPost } from '../js/fetchRequest';
import { loadFromSessionStorage } from '../js/sesssion';

class Publish extends React.Component {
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
    }

    handleInputChange(event) {
        const target = event.target;
        const value = target.value;
        const name = target.name;
        console.log(value)
        this.setState({
            [name]: value
        });
    }
    reset(e) {
        this.state.image = null;
    };

    handleSubmit(event) {
        event.preventDefault();
        let token = loadFromSessionStorage('token')
        console.log(this.state)
        // postAPost(token, this.state, routes.urlPost)
    }

    render() {
        return (
            <div
                className='w-2/4 mx-auto bg-white bg-opacity-40 px-4 py-4 rounded-3xl flex flex-row justify-around items-center'
            >
                <form
                    onClick={this.handleSubmit}>
                    <div>
                        <textarea
                            id="user-publication"
                            placeholder="One upon a time..."
                            name="message"
                            onChange={this.handleInputChange}
                            rows={4}
                            className='w-80 h-20 bg-midnight-100 ring-2 ring-midnight-400 hover:bg-midnight-50 focus:outline-none focus:ring-2 focus:bg-midnight-50 focus:ring-opacity-50 rounded-2xl text-left px-2 py-1 my-2 resize-none'
                        />
                    </div>
                    <div className="flex flex-col">
                        <button
                            type="submit"
                            id="user-publication-publish"
                            name="publish"
                            className='rounded-2xl px-4 ring-2 ring-midnight-400 text-center text-midnight-500 bg-midnight-200 font-semibold hover:bg-midnight-400 hover:text-midnight-100 uppercase'>
                            Publier
                            < FontAwesomeIcon icon={faPaperPlane} />
                        </button>
                    </div>
                </form>
                <div className='mb-4 rounded-2xl px-4 ring-2 ring-midnight-400 text-center text-midnight-500 bg-midnight-200 font-semibold hover:bg-midnight-400 hover:text-midnight-100'>
                    <label>
                        < FontAwesomeIcon icon={faCameraRetro} />
                        <input
                            type="file"
                            id="user-publication-image"
                            name="image"
                            ref={this.fileInput}
                            onChange={this.handleInputChange}
                            className='hidden block'
                        />
                    </label>
                </div>
                <button
                    ref={this.fileInput}
                    onClick={this.reset}
                    className='uppercase font-bold mb-4 hover:text-red-800'>
                    < FontAwesomeIcon icon={faMinusCircle} />
                </button>
            </div>
        )
    }
};

export default Publish;