import { /*loadFromSessionStorage,*/ storeToSessionStorage } from "./sesssion";
var myHeaders = new Headers();
myHeaders.append("Content-Type", "application/json");

const postSignUp = () => {
    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    var raw = JSON.stringify({
        "user": {
            "emailAdress": "hack@test.com",
            "firstName": "Jack",
            "lastName": "Sparrow",
            "password": "123",
            "isAdamin": true
        }
    });

    var requestOptions = {
        method: 'POST',
        headers: myHeaders,
        body: raw,
        redirect: 'follow'
    };

    fetch("http://localhost:3001/api/user/signup", requestOptions)
        .then(response => response.text())
        .then(result => console.log(result))
        .catch(error => console.log('error', error));
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


    // requete fetch

    var raw = JSON.stringify(dataToRaw);

    var requestOptions = {
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

export {
    postLogin,
    postSignUp
};


/* exemple d'une requete fetch pour une route POST
const fetch = () => {
    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    var raw = JSON.stringify({
        "user": {
            "emailAdress": "test1@test.com",
            "password": "123"
        }
    });

    var requestOptions = {
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