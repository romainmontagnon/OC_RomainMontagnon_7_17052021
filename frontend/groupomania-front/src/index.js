import React from 'react';
import ReactDOM from 'react-dom';
import reportWebVitals from './reportWebVitals';


// import './styles/tailwind.css';
import './styles/style_build.css';
import './styles/style.css';
import '../node_modules/animate.css/animate.css'

import App from './components/App'

ReactDOM.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>, document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();