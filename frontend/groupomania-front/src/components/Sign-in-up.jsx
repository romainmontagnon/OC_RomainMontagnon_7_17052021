import React, { useState } from 'react';
import SignInForm from "./sign-in-up/SignInForm";
import SignUpForm from "./sign-in-up/SignUpForm";

const SignInUpButton = () => {
    const [showSignIn, setshowSignIn] = useState(false);
    const [showSignUp, setshowSignUP] = useState(true);
    return (
        <div>
            <div className='flex flex-row'>
                <button
                    className='mr-1 rounded-2xl px-4 ring-2 ring-midnight-400 text-center text-midnight-500 bg-midnight-200 font-semibold hover:bg-midnight-400 hover:text-midnight-100 uppercase'
                    onClick={() => {
                        setshowSignUP(true)
                        setshowSignIn(false)
                    }}>
                    Inscription
                </button>
                <button
                    className='mr-1 rounded-2xl px-4 ring-2 ring-midnight-400 text-center text-midnight-500 bg-midnight-200 font-semibold hover:bg-midnight-400 hover:text-midnight-100 uppercase'
                    onClick={() => {
                        setshowSignUP(false)
                        setshowSignIn(true)
                    }}>
                    Login
                </button>
            </div>
            <div>
                {showSignUp && <SignUpForm />}
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
        return <p>You are logged in !!!</p>
    }
};

export default SignInUp;