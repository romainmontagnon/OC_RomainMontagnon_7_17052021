import React from 'react';

import NavFooterMenu from './Nav/NavFooterMenu';

import Navbar from './Navbar';
import SignInUp from './Sign-in-up';

import { user, UserContext } from './context/UserContext';
import AfterLog from './AfterLog';

class App extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            user: user
        }
        this.isLoggedIn = this.state.user.isLoggedIn;
        this.isAdmin = this.state.user.isAdmin;
        this.login = (isLoggedIn, isAdmin) => {
            this.setState(state => ({
                user: {isLoggedIn: isLoggedIn, isAdmin: isAdmin}
            }))
        }
    }
    render() {
        return (
            <div>
                <div className="mg:w-4/5 mg:mx-auto">
                    <header id="landing">
                        <Navbar isLoggedIn={this.state.user.isLoggedIn} isAdmin={this.state.user.isAdmin} />
                    </header>
                    <main>
                        <section id="login" className="flex flex-row justify-end">
                            <UserContext.Provider value={this.state}>
                                <SignInUp isLoggedIn={this.state.user.isLoggedIn} login={this.login} />
                            </UserContext.Provider>
                        </section>
                        <section>
                            <AfterLog isLoggedIn={this.state.user.isLoggedIn} isAdmin={this.state.user.isAdmin}/>
                        </section>
                    </main>
                    <footer className="bg-white bg-opacity-40 flex flex-col pb-5 mt-10">
                        <nav>
                            <NavFooterMenu />
                        </nav>
                    </footer>
                </div>
            </div>
        )
    }
}

export default App;