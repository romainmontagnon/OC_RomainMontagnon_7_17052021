import React from 'react';

import NavFooterMenu from './Nav/NavFooterMenu';

import Navbar from './Navbar';
import SignInUp from './Sign-in-up';
import Timeline from './Timeline';

import { user, UserContext } from './context/UserContext';
import AfterLog from './AfterLog';

class App extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            user: user
        }
        this.isLoggedIn = this.state.user.isLoggedIn;
        this.login = (isLoggedIn) => {
            this.setState(state => ({
                user: {isLoggedIn: isLoggedIn}
            }))
        }
    }
    render() {
        return (
            <div>
                <div className="mg:w-4/5 mg:mx-auto">
                    <header id="landing">
                        <Navbar isLoggedIn={this.state.user.isLoggedIn} /*isAdmin={isAdmin}*/ />
                    </header>
                    <main>
                        <section id="login" className="flex flex-row justify-end mr-10">
                            <UserContext.Provider value={this.state}>
                                <SignInUp isLoggedIn={this.state.user.isLoggedIn} /*isAdmin={isAdmin}*/ login={this.login} />
                            </UserContext.Provider>
                        </section>
                        <section>
                            {/* <Timeline isLoggedIn={this.state.user.isLoggedIn} isAdmin={isAdmin} /> */}
                            <AfterLog isLoggedIn={this.state.user.isLoggedIn} />
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