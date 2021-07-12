import React from 'react';
const SignUpForm = () => {
    return (
        <div className='w-80 h-96 border-solid border- text-black'>
            <div className='flex flex-col'>
                <h2 className='uppercase font-semi-bold h-2'>Inscription</h2>
                <form>
                    <input
                        type="text"
                        id="firstname-signup"
                        placeholder="Nom"
                        name="firstname"
                        className='bg-midnight-100 ring-2 ring-midnight-400 hover:bg-midnight-50 focus:outline-none focus:ring-2 focus:bg-midnight-50 focus:ring-opacity-50 rounded-2xl w-60 text-center' />
                    <input
                        type="text"
                        id="lastname-signup"
                        placeholder="Prénom"
                        name="lastname"
                        className='bg-midnight-100 ring-2 ring-midnight-400 hover:bg-midnight-50 focus:outline-none focus:ring-2 focus:bg-midnight-50 focus:ring-opacity-50 rounded-2xl w-60 text-center' />
                    <input
                        type="email"
                        id="email-signup"
                        placeholder="john.doe@groupomania.eu"
                        name="email"
                        className='bg-midnight-100 ring-2 ring-midnight-400 hover:bg-midnight-50 focus:outline-none focus:ring-2 focus:bg-midnight-50 focus:ring-opacity-50 rounded-2xl w-60 text-center' />
                    <input
                        type="password"
                        id="password-signup"
                        placeholder="Mot de passe"
                        name="password"
                        className='bg-midnight-100 ring-2 ring-midnight-400 hover:bg-midnight-50 focus:outline-none focus:ring-2 focus:bg-midnight-50 focus:ring-opacity-50 rounded-2xl w-60 text-center' />

                    <input type="submit" value="Envoyer" />
                </form>
            </div>
        </div>
    )
};

export default SignUpForm;