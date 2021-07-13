import React, { useState } from 'react';
import SignInForm from "./sign-in-up/SignInForm";
import SignUpForm from "./sign-in-up/SignUpForm";
import HelloWorldForm from './HelloWorldForm';

const SignInUpButton = () => {
    const [showSignIn, setshowSignIn] = useState(false);
    const [showSignUp, setshowSignUP] = useState(true);
    return (
        <div className='h-80 flex flex-row bg-white bg-opacity-40 pr-10 rounded-3xl'>
            <div className='flex flex-col justify-around'>
                <button
                    className='transform -rotate-90 mr-1 rounded-2xl px-4 ring-2 ring-midnight-400 text-center text-midnight-500 bg-midnight-200 font-semibold hover:bg-midnight-400 hover:text-midnight-100 uppercase'
                    onClick={() => {
                        setshowSignUP(true)
                        setshowSignIn(false)
                    }}>
                    Inscription
                </button>
                <button
                    className='transform -rotate-90 mr-1 rounded-2xl px-4 ring-2 ring-midnight-400 text-center text-midnight-500 bg-midnight-200 font-semibold hover:bg-midnight-400 hover:text-midnight-100 uppercase'
                    onClick={() => {
                        setshowSignUP(false)
                        setshowSignIn(true)
                    }}>
                    Login
                </button>
            </div>
            <div className='my-auto'>
                {showSignUp && <SignUpForm />}
                {/* {showSignUp && <HelloWorldForm />} */}
                {showSignIn && <SignInForm />}
            </div>
        </div>
    )
};

const SignInUp = (props) => {
    const isLoggedIn = props.isLoggedIn;
    console.log(props)
    if (!isLoggedIn) {
        return <SignInUpButton />
    } else if (isLoggedIn) {
        return <h3>Bonjour, User</h3>
    }
};

export default SignInUp;