import React from 'react';

import NavFooterMenu from './Nav/NavFooterMenu';

import NavbarContext from './context/NavbarContext';
import SignInUpContext from './context/Sign-in-up-Context';
import TimelineContext from './context/TimelineContext';

const App = () => {
    return (
        <div>
            <div className="mg:w-4/5 mg:mx-auto">
                <header id="landing">
                    <NavbarContext />
                </header>
                <main>
                    <section id="login" className="flex flex-row justify-end mr-10">
                        <SignInUpContext />
                    </section>
                    <section>
                        <TimelineContext />
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

export default App;