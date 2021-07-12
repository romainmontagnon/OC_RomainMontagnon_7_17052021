import React from 'react';
import ReactDOM from 'react-dom';

import loadFromSessionStorage from './js/loadFromSession';

// import './styles/tailwind.css';
import './styles/style_build.css';

import Navbar from './components/Navbar';
import SignInUp from './components/Sign-in-up';

import reportWebVitals from './reportWebVitals';

ReactDOM.render(
    <React.StrictMode>
        <Navbar isLoggedIn={loadFromSessionStorage('logged')}/>
    </React.StrictMode>, document.getElementById('landing')
);

ReactDOM.render(
    <React.StrictMode>
        <SignInUp isLoggedIn={loadFromSessionStorage('logged')} />
    </React.StrictMode>, document.getElementById('login')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();