import React from 'react';
import { loadFromSessionStorage } from '../js/sesssion';

class Account extends React.Component {
    state = {
        info: {}
    }

    constructor(props) {
        super(props)
        this.isAdmin = this.props.isAdmin
        this.componentDidMount = this.componentDidMount.bind(this)
    }

    componentDidMount() {
        let info = {
            firstName: loadFromSessionStorage('firstName'),
            lastName: loadFromSessionStorage('lastName'),
            userId: loadFromSessionStorage('userId'),
            token: loadFromSessionStorage('token'),
            isAdmin: this.isAdmin
        }
        this.setState({
            info: {...info}
        })
    }
    render() {
        //let info = this.loadInfo()
        // console.log(info)
        return (
            <div>
                <h1>Mon compte</h1>
                <ul>
                    <li>{this.state.info.firstName}</li>
                    <li>{this.state.info.lastName}</li>
                    <li>{this.state.info.userId}</li>
                    <li>{this.state.info.token}</li>
                    <li>{this.state.info.isAdmin}</li>
                </ul>
            </div>
        )
    }
}

export default Account;