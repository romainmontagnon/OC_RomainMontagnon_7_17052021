import React from 'react';

export const UserContext = React.createContext({
    isLoggedIn: '',
    isAdmin: '',
    setIsLoggedIn: () => { },
    setIsAdmin: () => { },

});

class UserProvider extends React.Component {
    state = {
        isLoggedIn: false,
        isAdmin: false,
        setIsLoggedIn: isLoggedIn => this.setState({isLoggedIn: isLoggedIn}),
        setIsAdmin: isAdmin => this.setState({isAdmin: isAdmin}),
    };

    render() {
        return (
            <UserContext.Provider value={this.state}>
                {this.props.children}
            </UserContext.Provider>
        );
    }
}
export default UserProvider;

export const userState = Component => props => (
    <UserContext.Consumer>
        {store => <Component {...props} {...store} />}
    </UserContext.Consumer>
)