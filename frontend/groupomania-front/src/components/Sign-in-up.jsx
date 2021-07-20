import React from 'react';
import SignInForm from "./sign-in-up/SignInForm";
import SignUpForm from "./sign-in-up/SignUpForm";
import WelcomeUser from "./WelcomeUser";

class SignInUpButton extends React.Component {
    state = {
        showSignIn: true,
        showSignUp: false,
    }
    constructor(props) {
        super(props);
        const isLoggedIn = this.isLoggedIn;
        this.handleShowSignIn = this.handleShowSignIn.bind(this);
        this.handleShowSignUp = this.handleShowSignUp.bind(this);
    }

    handleShowSignIn() {
        this.setState({ showSignIn: true })
        this.setState({ showSignUp: false })
    }

    handleShowSignUp() {
        this.setState({ showSignIn: false })
        this.setState({ showSignUp: true })
    }

    render() {
        return (
            <div className='h-80 flex flex-row bg-white bg-opacity-40 pr-10 rounded-3xl'>
                <div className='flex flex-col justify-around'>
                    <button
                        className='transform -rotate-90 mr-1 rounded-2xl px-4 ring-2 ring-midnight-400 text-center text-midnight-500 bg-midnight-200 font-semibold hover:bg-midnight-400 hover:text-midnight-100 uppercase'
                        onClick={this.handleShowSignUp}>
                        Inscription
                    </button>
                    <button
                        className='transform -rotate-90 mr-1 rounded-2xl px-4 ring-2 ring-midnight-400 text-center text-midnight-500 bg-midnight-200 font-semibold hover:bg-midnight-400 hover:text-midnight-100 uppercase'
                        onClick={this.handleShowSignIn}>
                        Login
                    </button>
                </div>
                <div className='my-auto'>
                    {this.state.showSignUp && <SignUpForm handler={this.handleShowSignUp} />}
                    {this.state.showSignIn && <SignInForm handler={this.handleShowSignIn} />}
                </div>
            </div>
        )
    }
}

const SignInUp = (props) => {
    if (!props.isLoggedIn || props.isLoggedIn === 'undefined') {
        return <SignInUpButton />
    } else if (props.isLoggedIn) {
        return (
            <WelcomeUser />
        )
    }
};

export default SignInUp;