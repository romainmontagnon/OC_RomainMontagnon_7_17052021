import { /*loadFromSessionStorage,*/ storeToSessionStorage } from "./sesssion";

import { UserContext } from "../components/context/UserProvider";

const postSignUp = (data, url) => {
    let myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

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
    let myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

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

const getAllPost = (token, url) => {
    let myHeaders = new Headers();
    myHeaders.append("Authorization", `Bearer ${token}`);

    let requestOptions = {
        method: 'GET',
        headers: myHeaders,
        redirect: 'follow'
    };

    fetch(url, requestOptions)
        .then((response) => {
            return response.json()
        })
        .then((result) => {
            console.table(result)
            storeToSessionStorage('feeds')
            for (let i = 0; i < result.length; i++) {
                console.log(result[i].message)
                console.log(result[i].image)
                console.log(result[i].userId)
            }
        })
        .catch(error => console.log('error', error));
}

const postAPost = (token, data, url) => {
    console.log(token)
    console.log(data.image)
    console.log(url)
    if (data.image != undefined) {
        let filename = (data.image).split("C:\\fakepath\\");
        console.log(filename[1]);
    };

    let myHeaders = new Headers();
    myHeaders.append("Authorization", `Bearer ${token}`);

    let formdata = new FormData();
    // formdata.append("file", fileInput.files[0], "m-4_M8uIfPEZw-unsplash.jpg");
    formdata.append("post", `{"message": "${data.message}"}`);


    // formdata.append("file", fileInput.files[0], "m-4_M8uIfPEZw-unsplash.jpg");

    //     let requestOptions = {
    //         method: 'POST',
    //         headers: myHeaders,
    //         body: formdata,
    //         redirect: 'follow'
    //     };

    //     fetch(url, requestOptions)
    //         .then(response => response.text())
    //         .then(result => console.log(result))
    //         .catch(error => console.log('error', error));
}

export {
    postLogin,
    postSignUp,
    getAllPost,
    postAPost
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