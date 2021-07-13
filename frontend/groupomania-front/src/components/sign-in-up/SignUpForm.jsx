import React from 'react';
import {postSignUp} from '../../js/fetchRequest'

class SignUpForm extends React.Component {
    state = {
        firstName: '',
        lastName: '',
        emailAdress: '',
        password: ''
    };
    constructor(props) {
        super(props);

        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(event) {
        console.log(this.state);
        event.preventDefault();
        postSignUp();
    }

    handleInputChange(event) {
        const target = event.target;
        const value = target.value;
        const name = target.name;

        this.setState({
            [name]: value
        });
    }

    render() {
        return (
            <div className='flex flex-col justify-around'>
                <h2 className='uppercase font-semi-bold text-2xl text-center text-midnight-500 mb-10'>Inscription</h2>
                <form 
                className='flex flex-col justify-around my-1'
                    onSubmit={this.handleSubmit}>
                    <input
                        type="text"
                        id="firstname-signup"
                        placeholder="Prénom"
                        name="firstName"
                        onChange={this.handleInputChange}
                        className='bg-midnight-100 ring-2 ring-midnight-400 hover:bg-midnight-50 focus:outline-none focus:ring-2 focus:bg-midnight-50 focus:ring-opacity-50 rounded-2xl w-60 text-center my-2'
                    />
                    <input
                        type="text"
                        id="lastname-signup"
                        placeholder="Nom"
                        name="lastName"
                        onChange={this.handleInputChange}
                        className='bg-midnight-100 ring-2 ring-midnight-400 hover:bg-midnight-50 focus:outline-none focus:ring-2 focus:bg-midnight-50 focus:ring-opacity-50 rounded-2xl w-60 text-center my-2'
                    />
                    <input
                        type="email"
                        id="email-signup"
                        placeholder="john.doe@groupomania.eu"
                        name="emailAdress"
                        onChange={this.handleInputChange}
                        className='bg-midnight-100 ring-2 ring-midnight-400 hover:bg-midnight-50 focus:outline-none focus:ring-2 focus:bg-midnight-50 focus:ring-opacity-50 rounded-2xl w-60 text-center my-2'
                    />
                    <input
                        type="password"
                        id="password-signup"
                        placeholder="Mot de passe"
                        name="password"
                        onChange={this.handleInputChange}
                        className='bg-midnight-100 ring-2 ring-midnight-400 hover:bg-midnight-50 focus:outline-none focus:ring-2 focus:bg-midnight-50 focus:ring-opacity-50 rounded-2xl w-60 text-center my-2'
                    />
                    <input
                        type="submit"
                        value="Envoyer"
                        className='rounded-2xl px-4 ring-2 ring-midnight-400 text-center text-midnight-500 bg-midnight-200 font-semibold hover:bg-midnight-400 hover:text-midnight-100 uppercase my-2'
                    />
                </form>
            </div>
        )
    }
};

export default SignUpForm;