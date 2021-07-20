import { /*loadFromSessionStorage,*/ storeToSessionStorage } from "./sesssion";

import { UserContext } from "../components/context/UserProvider";

var myHeaders = new Headers();
myHeaders.append("Content-Type", "application/json");

const postSignUp = (data, url) => {
    let dataToRaw = {
        user: {
            emailAdress: data.emailAdress,
            firstName: data.firstName,
            lastName: data.lastName,
            password: data.password,
            isAdmin: data.isAdmin
        }
    };
    console.log(JSON.stringify(dataToRaw));
    console.log(url);

    let raw = JSON.stringify(dataToRaw);

    let requestOptions = {
        method: 'POST',
        headers: myHeaders,
        body: raw,
        redirect: 'follow'
    };

    fetch(url, requestOptions)
        .then((response) => {
            if (response.status !== 200) {
                storeToSessionStorage('isLoggedIn', false)
            } else if (response.status === 200) {
                console.log("loggedIn");
                storeToSessionStorage('isLoggedIn', true)
            }
            return response.json();
        })
        .then((result) => {
            console.log(result);
            storeToSessionStorage('userId', result.userId);
            storeToSessionStorage('token', result.token)
        })
        .catch((error) => {
            console.log('error', error);
            alert(error);
        });
};

const postLogin = (data, url) => {
    let dataToRaw = {
        user: {
            emailAdress: data.emailAdress,
            password: data.password
        }
    };
    console.log(JSON.stringify(dataToRaw));
    console.log(url);

    let raw = JSON.stringify(dataToRaw);

    let requestOptions = {
        method: 'POST',
        headers: myHeaders,
        body: raw,
        redirect: 'follow'
    };

    fetch(url, requestOptions)
        .then((response) => {
            if (response.status !== 200) {
                storeToSessionStorage('isLoggedIn', false)
            } else if (response.status === 200) {
                console.log("loggedIn");
                storeToSessionStorage('isLoggedIn', true)
            }
            return response.json();
        })
        .then((result) => {
            console.log(result);
            storeToSessionStorage('userId', result.userId);
            storeToSessionStorage('token', result.token)
        })
        .catch((error) => {
            console.log('error', error)
        });
}

const getAllPost = (data, url) => {
    console.log('all post');
}

export {
    postLogin,
    postSignUp,
    getAllPost
};


/* exemple d'une requete fetch pour une route POST
const fetch = () => {
    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    let raw = JSON.stringify({
        "user": {
            "emailAdress": "test1@test.com",
            "password": "123"
        }
    });

    let requestOptions = {
        method: 'POST',
        headers: myHeaders,
        body: raw,
        redirect: 'follow'
    };

    fetch("http://localhost:3001/api/user/login", requestOptions)
        .then(response => response.text())
        .then(result => console.log(result))
        .catch(error => console.log('error', error));
};
*/