import React from 'react';
const SignInForm = () => {
    return (
        <div className='w-80 h-96 border-solid border- text-black'>
            <div className='flex flex-col'>
                <h2 className='uppercase font-semi-bold h-2'>Login</h2>
                <form>
                    <input
                        type="email"
                        id="email-signin"
                        placeholder="john.doe@groupomania.eu"
                        name="email"
                        className='bg-midnight-100 ring-2 ring-midnight-400 hover:bg-midnight-50 focus:outline-none focus:ring-2 focus:bg-midnight-50 focus:ring-opacity-50 rounded-2xl w-60 text-center' />
                    <input
                        type="password"
                        id="password-signin"
                        placeholder="Mot de passe"
                        name="password"
                        className='bg-midnight-100 ring-2 ring-midnight-400 hover:bg-midnight-50 focus:outline-none focus:ring-2 focus:bg-midnight-50 focus:ring-opacity-50 rounded-2xl w-60 text-center' />
                    <input type="submit" value="Envoyer" />
                </form>
            </div>
        </div>
    )
};

export default SignInForm;