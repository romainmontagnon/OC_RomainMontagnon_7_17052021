import React from 'react';
import ReactDOM from 'react-dom';
import reportWebVitals from './reportWebVitals';

import { loadFromSessionStorage } from './js/sesssion';

// import './styles/tailwind.css';
import './styles/style_build.css';
import './styles/style.css';

import Navbar from './components/Navbar';
import SignInUp from './components/Sign-in-up';
import Timeline from './components/Timeline';
import NavFooterMenu from './components/Nav/NavFooterMenu'

ReactDOM.render(
    <React.StrictMode>
        <Navbar isLoggedIn={loadFromSessionStorage('loggedIn')} />
    </React.StrictMode>, document.getElementById('landing')
);

ReactDOM.render(
    <React.StrictMode>
        <SignInUp isLoggedIn={loadFromSessionStorage('loggedIn')} />
    </React.StrictMode>, document.getElementById('login')
);

ReactDOM.render(
    <React.StrictMode>
        <Timeline isLoggedIn={loadFromSessionStorage('loggedIn')} />
    </React.StrictMode>, document.getElementById('timeline')
);

ReactDOM.render(
    <React.StrictMode>
        <nav>
            <NavFooterMenu />
        </nav>
    </React.StrictMode>, document.getElementById('footer')
);
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();