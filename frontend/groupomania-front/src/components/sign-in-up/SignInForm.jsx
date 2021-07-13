import React from 'react';
const SignInForm = () => {
    return (
        <div className='flex flex-col justify-around'>
            <h2 className='uppercase font-semi-bold text-2xl text-center text-midnight-500 mb-10'>Login</h2>
            <form className='flex flex-col justify-around my-1'>
                <input
                    type="email"
                    id="email-signin"
                    placeholder="john.doe@groupomania.eu"
                    name="email"
                    className='bg-midnight-100 ring-2 ring-midnight-400 hover:bg-midnight-50 focus:outline-none focus:ring-2 focus:bg-midnight-50 focus:ring-opacity-50 rounded-2xl w-60 text-center my-2'
                />
                <input
                    type="password"
                    id="password-signin"
                    placeholder="Mot de passe"
                    name="password"
                    className='bg-midnight-100 ring-2 ring-midnight-400 hover:bg-midnight-50 focus:outline-none focus:ring-2 focus:bg-midnight-50 focus:ring-opacity-50 rounded-2xl w-60 text-center  my-2'
                />
                <input
                    type="submit"
                    value="Envoyer"
                    className='mr-1 rounded-2xl px-4 ring-2 ring-midnight-400 text-center text-midnight-500 bg-midnight-200 font-semibold hover:bg-midnight-400 hover:text-midnight-100 uppercase my-2'
                />
            </form>
        </div>
    )
};

export default SignInForm;