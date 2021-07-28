import React from 'react';
import { routes } from '../../js/routes';
import { storeToSessionStorage } from '../../js/sesssion';

class SignInForm extends React.Component {
    constructor(props) {
        super(props);
        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    async handleSubmit(event) {
        event.preventDefault();
        if (this.state === null) {
            console.log(this.state)
            alert(`Merci de saisir un identifiant et un mot de passe`)
        } else {
            console.log(this.state)
            console.log(routes.urlLogin);

            let myHeaders = new Headers();
            myHeaders.append("Content-Type", "application/json");

            let dataToRaw = {
                user: {
                    emailAdress: this.state.emailAdress,
                    password: this.state.password
                }
            };
            console.log(JSON.stringify(dataToRaw));
            console.log(routes.urlLogin);

            let raw = JSON.stringify(dataToRaw);

            let requestOptions = {
                method: 'POST',
                headers: myHeaders,
                body: raw,
                redirect: 'follow'
            };

            let logged = await fetch(routes.urlLogin, requestOptions)
                .then(response => response.json())
                .then((result) => {
                    console.log(result);
                    storeToSessionStorage('userId', result.userId);
                    storeToSessionStorage('token', result.token)
                    storeToSessionStorage('firstName', result.firstName)
                    storeToSessionStorage('lastName', result.lastName)
                    return result
                })
                .catch((error) => {
                    console.log('error', error)
                });
            this.props.login(logged.logged, logged.isAdmin, logged.userId);
            // this.props.admin(logged.isAdmin);
        }
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
                <h2 className='uppercase font-semi-bold text-2xl text-center text-midnight-500 mb-10'>Login</h2>
                <form
                    className='flex flex-col justify-around my-1'
                    onSubmit={this.handleSubmit}>
                    <input
                        type="email"
                        id="emailAdress-signin"
                        placeholder="john.doe@groupomania.eu"
                        name="emailAdress"
                        onChange={this.handleInputChange}
                        className='bg-midnight-100 ring-2 ring-midnight-400 hover:bg-midnight-50 focus:outline-none focus:ring-2 focus:bg-midnight-50 focus:ring-opacity-50 rounded-2xl w-60 text-center my-2'
                    />
                    <input
                        type="password"
                        id="password-signin"
                        placeholder="Mot de passe"
                        name="password"
                        onChange={this.handleInputChange}
                        className='bg-midnight-100 ring-2 ring-midnight-400 hover:bg-midnight-50 focus:outline-none focus:ring-2 focus:bg-midnight-50 focus:ring-opacity-50 rounded-2xl w-60 text-center  my-2'
                    />
                    <input
                        type="submit"
                        value="Envoyer"
                        className='mr-1 rounded-2xl px-4 ring-2 ring-midnight-400 text-center text-midnight-500 bg-midnight-200 font-semibold hover:bg-midnight-400 hover:text-midnight-100 uppercase my-2'
                    />
                </form>
            </div>
        );
    }
}

export default SignInForm;