import React from 'react';
import ReactDOM from 'react-dom';

import './styles/index.css';
// import './styles/build_style.css';

import Navbar from './components/Navbar';
import Test from './components/Test';

import reportWebVitals from './reportWebVitals';


ReactDOM.render(
    <React.StrictMode>
        <Navbar />
    </React.StrictMode>, document.getElementById('landing')
);

ReactDOM.render(
    <React.StrictMode>
        <Test />
    </React.StrictMode>, document.getElementById('login')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();