import React from 'react';
const SignUpForm = () => {
    return (
        <div className='flex flex-col justify-around'>
            {/* <div className=''> */}
            <h2 className='uppercase font-semi-bold text-2xl text-center text-midnight-500 mb-10'>Inscription</h2>
            <form className='flex flex-col justify-around my-1'>
                <input
                    type="text"
                    id="firstname-signup"
                    placeholder="Nom"
                    name="firstname"
                    className='bg-midnight-100 ring-2 ring-midnight-400 hover:bg-midnight-50 focus:outline-none focus:ring-2 focus:bg-midnight-50 focus:ring-opacity-50 rounded-2xl w-60 text-center my-2'
                />
                <input
                    type="text"
                    id="lastname-signup"
                    placeholder="Prénom"
                    name="lastname"
                    className='bg-midnight-100 ring-2 ring-midnight-400 hover:bg-midnight-50 focus:outline-none focus:ring-2 focus:bg-midnight-50 focus:ring-opacity-50 rounded-2xl w-60 text-center my-2'
                />
                <input
                    type="email"
                    id="email-signup"
                    placeholder="john.doe@groupomania.eu"
                    name="email"
                    className='bg-midnight-100 ring-2 ring-midnight-400 hover:bg-midnight-50 focus:outline-none focus:ring-2 focus:bg-midnight-50 focus:ring-opacity-50 rounded-2xl w-60 text-center my-2'
                />
                <input
                    type="password"
                    id="password-signup"
                    placeholder="Mot de passe"
                    name="password"
                    className='bg-midnight-100 ring-2 ring-midnight-400 hover:bg-midnight-50 focus:outline-none focus:ring-2 focus:bg-midnight-50 focus:ring-opacity-50 rounded-2xl w-60 text-center my-2'
                />
                <input
                    type="submit"
                    value="Envoyer"
                    className='rounded-2xl px-4 ring-2 ring-midnight-400 text-center text-midnight-500 bg-midnight-200 font-semibold hover:bg-midnight-400 hover:text-midnight-100 uppercase my-2'
                />
            </form>
            {/* </div> */}
        </div>
    )
};

export default SignUpForm;