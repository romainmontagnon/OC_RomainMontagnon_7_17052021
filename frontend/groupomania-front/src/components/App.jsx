import React from 'react';

import { loadFromSessionStorage } from '../js/sesssion';

import Navbar from './Navbar';
import SignInUp from './Sign-in-up';
import Timeline from './Timeline';
import NavFooterMenu from './Nav/NavFooterMenu';

class App extends React.Component {
    state = {
        isLoggedIn: false
    }
    constructor(props){
        super(props);
        this.handleIsLoggedIn = this.handleIsLoggedIn.bind(this)
    }
    
handleIsLoggedIn(){}

    render() {
        return (
            <div>
                <div className="mg:w-4/5 mg:mx-auto">
                    <header id="landing">
                        <Navbar isLoggedIn={loadFromSessionStorage('isLoggedIn')} />
                    </header>
                    <main>
                        <section id="login" className="flex flex-row justify-end mr-10">
                            <SignInUp isLoggedIn={loadFromSessionStorage('isLoggedIn')} />
                        </section>
                        <section>
                            <Timeline isLoggedIn={loadFromSessionStorage('isLoggedIn')} />
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