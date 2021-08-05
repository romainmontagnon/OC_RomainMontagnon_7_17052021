import React from 'react';
import { loadFromSessionStorage } from '../js/session';
import { routes } from '../js/routes';

class AccountSuppr extends React.Component {
    state = {
        info: {},
        emailAdress: null,
        password: null
    }

    constructor(props) {
        super(props)
        this.isAdmin = this.props.isAdmin
        this.showAccountSection = this.props.handler
        this.showMenu = this.props.handler

        this.componentDidMount = this.componentDidMount.bind(this)
        this.accountType = this.accountType.bind(this);
        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.menu = this.menu.bind(this);
    }

    componentDidMount() {
        let info = {
            firstName: loadFromSessionStorage('firstName'),
            lastName: loadFromSessionStorage('lastName'),
            userId: loadFromSessionStorage('userId'),
            token: loadFromSessionStorage('token'),
        }
        this.setState({
            info: { ...info }
        })
    }

    async handleSubmit(event) {
        event.preventDefault();
        if (this.isAdmin) {
            if(this.state.emailAdress === null || this.state.userId === null){
                alert(`Merci de saisir un identifiant et un ID d'utilisateur`)
            } else {
                let url = `${routes.urlSuppr}${this.state.userId}`

                let myHeaders = new Headers();
                myHeaders.append("Authorization", `Bearer ${loadFromSessionStorage('token')}`);
                myHeaders.append("Content-Type", "application/json");

                let dataToRaw = {
                    user: {
                        emailAdress: this.state.emailAdress,
                        userId: this.state.userId
                    }
                };

                let raw = JSON.stringify(dataToRaw);

                let requestOptions = {
                    method: 'DELETE',
                    headers: myHeaders,
                    body: raw,
                    redirect: 'follow'
                };

                let logged = await fetch(url, requestOptions)
                    .then(response => response.json())
                    .then((result) => {
                        return result
                    })
                    .catch((error) => {
                        console.log('error', error)
                    });
                let emailAdressSuppr = document.getElementById('emailAdress-suppr')
                let userIdSuppr = document.getElementById('userId-suppr')
                emailAdressSuppr.value = ''
                userIdSuppr.value = ''
            }
        } else {
            if (this.state.emailAdress === null || this.state.password === null) {
                alert(`Merci de saisir un identifiant et un mot de passe`)
            } else {
                let url = `${routes.urlSuppr}${this.state.info.userId}`

                let myHeaders = new Headers();
                myHeaders.append("Authorization", `Bearer ${loadFromSessionStorage('token')}`);
                myHeaders.append("Content-Type", "application/json");

                let dataToRaw = {
                    user: {
                        emailAdress: this.state.emailAdress,
                        password: this.state.password
                    }
                };

                let raw = JSON.stringify(dataToRaw);

                let requestOptions = {
                    method: 'DELETE',
                    headers: myHeaders,
                    body: raw,
                    redirect: 'follow'
                };

                let logged = await fetch(url, requestOptions)
                    .then(response => response.json())
                    .then((result) => {
                        return result
                    })
                    .catch((error) => {
                        console.log('error', error)
                    });
                sessionStorage.clear()
                this.props.login(false, false, null);
            }
        }
    }

    accountType() {
        if (this.isAdmin) {
            return (
                `Supprimer un compte`
            )
        } else {
            return (
                `Supprimer mon compte`
            )
        }
    };

    menu() {
        if (this.isAdmin) {
            return (
                <React.Fragment>
                    <label className='antialiased'>userId à supprimer :</label>
                    <input
                        type="number"
                        id="userId-suppr"
                        placeholder="666"
                        name="userId"
                        aria-label='Saisir user ID'
                        onChange={this.handleInputChange}
                        className='antialiased bg-midnight-100 ring-2 ring-midnight-400 hover:bg-midnight-50 focus:outline-none focus:ring-2 
                                focus:bg-midnight-50 focus:ring-opacity-50 rounded-2xl w-60 text-center my-2
                                transition motion-reduce:transition-none motion-reduce:transform-none
                                duration-300 ease-in-out'
                    />
                </React.Fragment>
            )
        }
        return (
            <React.Fragment>
                <label className='antialiased'>Mot de passe :</label>
                <input
                    type="password"
                    id="password-suppr"
                    placeholder="Mot de passe"
                    name="password"
                    aria-label='Saisir le mot de passe'
                    onChange={this.handleInputChange}
                    className='antialiased bg-midnight-100 ring-2 ring-midnight-400 hover:bg-midnight-50 focus:outline-none focus:ring-2
                            focus:bg-midnight-50 focus:ring-opacity-50 rounded-2xl w-60 text-center my-2
                            transition motion-reduce:transition-none motion-reduce:transform-none
                            duration-300 ease-in-out'
                />
            </React.Fragment>
        )
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
            <div className='suppr-account-menu '>
                <div className='w-80 mx-auto'>
                    <div className='bg-midnight-100 bg-opacity-100 rounded-3xl shadow-xl '>
                        <div className='pt-4 px-4 flex flex-row justify-end'>
                            <button
                                className='font-extrabold w-6 h-6 flex flex-row justify-center items-center
                                transition transform motion-reduce:transition-none motion-reduce:transform-none
                                duration-300 ease-in-out hover:scale-125 rounded-xl hover:bg-mandy-300'
                                onClick={this.showMenu}
                            >
                                X
                            </button>
                        </div>
                        <div className='pt-6 pb-10 px-10 flex flex-col justify-around'>
                            <h2 className='antialiased text-lg font-bold inline-block text-midnight-500'>
                                {`${this.accountType()}`}
                            </h2>
                            <form
                                className='flex flex-col justify-around my-1'
                                onSubmit={this.handleSubmit}>
                                <label className='antialiased'>Courriel :</label>
                                <input
                                    type="email"
                                    id="emailAdress-suppr"
                                    placeholder="john.doe@groupomania.eu"
                                    name="emailAdress"
                                    aria-label='Saisir adresse courriel'
                                    onChange={this.handleInputChange}
                                    className='antialiased bg-midnight-100 ring-2 ring-midnight-400 hover:bg-midnight-50 focus:outline-none focus:ring-2 focus:bg-midnight-50 focus:ring-opacity-50 rounded-2xl w-60 text-center my-2
                                            transition motion-reduce:transition-none motion-reduce:transform-none
                                            duration-300 ease-in-out'
                                />
                                {this.menu()}
                                <input
                                    type="submit"
                                    value="Supprimer"
                                    aria-label='Valider et envoyer le formulaire de suppression de compte'
                                    className='antialiased mr-1 rounded-2xl px-4 ring-2 ring-midnight-400 text-center text-midnight-500 bg-midnight-200 font-semibold hover:bg-midnight-400 hover:text-midnight-100 uppercase my-2
                                        transition transform motion-reduce:transition-none motion-reduce:transform-none
                                        duration-500 ease-in-out hover:scale-110'
                                />
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default AccountSuppr;