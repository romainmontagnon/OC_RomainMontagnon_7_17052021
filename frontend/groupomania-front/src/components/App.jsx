import React, { useState, useContext } from 'react';

import NavFooterMenu from './Nav/NavFooterMenu';

// import NavbarContext from './context/NavbarContext';
// import SignInUpContext from './context/Sign-in-up-Context';
// import TimelineContext from './context/TimelineContext';

// import Navbar from './Navbar';
// import SignInUp from './Sign-in-up';
// import Timeline from './Timeline';

// import UserContext from './context/UserContext';

// const App = () => {

//     const [logedIn, setLogin] = useState(false);

//     const contextValue = {
//         isLoggedIn: logedIn,
//         updateLogin: setLogin
//     }

//     return (
//         <div>
//             <div className="mg:w-4/5 mg:mx-auto">
//                 <header id="landing">
//                     <Navbar isLoggedIn={logedIn} />
//                 </header>
//                 <main>
//                     <section id="login" className="flex flex-row justify-end mr-10">
//                         <SignInUp isLoggedIn={logedIn} />
//                     </section>
//                     <section>
//                         <Timeline isLoggedIn={logedIn} />
//                     </section>
//                 </main>
//                 <footer className="bg-white bg-opacity-40 flex flex-col pb-5 mt-10">
//                     <nav>
//                         <NavFooterMenu />
//                     </nav>
//                 </footer>
//             </div>
//         </div>
//     )
// }

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