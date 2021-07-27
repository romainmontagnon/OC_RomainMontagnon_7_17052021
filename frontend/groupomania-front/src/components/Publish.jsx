import React, { useRef, fileInput } from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCameraRetro, faPaperPlane, faMinusCircle } from '@fortawesome/free-solid-svg-icons';

import { routes } from '../js/routes';
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
        this.showAria = this.showAria.bind(this)
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
        console.log(this.state)

        if (this.state.image === null && this.state.message === "") {
            alert('Attention, votre publication est vide')
            return
        }
        let myHeaders = new Headers();
        myHeaders.append("Authorization", `Bearer ${token}`);

        let formdata = new FormData();
        let fileName = null;
        let fileInput = null;

        if (this.state.image !== null) {
            let fileName = this.state.target.files[0].name;
            let fileInput = this.state.target.files[0];
            formdata.append("file", fileInput, fileName);
        }

        formdata.append("post", `{"message": "${this.state.message}"}`);
        console.log(formdata)

        let requestOptions = {
            method: 'POST',
            headers: myHeaders,
            body: formdata,
            redirect: 'follow'
        };
        console.log('go fetch, normalement ;-)')
        fetch(routes.urlPost, requestOptions)
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
            <div
                className='w-2/4 max-w-md mx-auto bg-white bg-opacity-40 px-4 py-4 rounded-3xl flex flex-row justify-around items-center shadow-xl'
            >
                <form>
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
                    <div className="flex flex-col shadow-2xl">
                        <button
                            onClick={this.handleSubmit}
                            type="submit"
                            id="user-publication-publish"
                            name="publish"
                            className='rounded-2xl px-4 ring-2 ring-midnight-400 text-center text-midnight-500 bg-midnight-200 font-semibold hover:bg-midnight-400 hover:text-midnight-100 uppercase shadow-2xl'>
                            Publier
                            < FontAwesomeIcon icon={faPaperPlane} />
                        </button>
                    </div>
                </form>
                <div className='mb-4 rounded-2xl px-4 ring-2 ring-midnight-400 text-center text-midnight-500 bg-midnight-200 font-semibold hover:bg-midnight-400 hover:text-midnight-100 inputFile'
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
                    className='antialiased font-bold mb-4 hover:text-red-800 arialabel-sm block'>
                    < FontAwesomeIcon icon={faMinusCircle} />
                </button>
            </div>
        )
    }
};

export default Publish;