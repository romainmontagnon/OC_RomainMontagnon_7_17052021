import React, { Component } from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHamburger } from '@fortawesome/free-solid-svg-icons'

// const HelloWorldForm = () => {
//     return (
//         <div className=''>
//             <h1>Hello World</h1>
//             < FontAwesomeIcon icon={faHamburger} />
//         </div>
//     )
// };

class HelloWorldForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = { value: '' };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        this.setState({ value: event.target.value });
    }

    handleSubmit(event) {
        alert('A name wab submitted ' + this.state.value);
        event.preventDefault();
    }

    render() {
        return (
            <div>
                <div className=''>
                    <h1>
                        Hello World
                        < FontAwesomeIcon icon={faHamburger} />
                    </h1>
                </div>
                <form onSubmit={this.handleSubmit}>
                    <label>
                        Name
                        <input type="text" value={this.state.value} onChange={this.handleChange} />
                    </label>
                    <input type="submit" value="Submit" />
                </form>
            </div>
        )
    }
}

export default HelloWorldForm;