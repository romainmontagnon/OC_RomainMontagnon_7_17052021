import { /*loadFromSessionStorage,*/ storeToSessionStorage } from "./session";

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
            storeToSessionStorage('firstName', result.firstName)
            storeToSessionStorage('lastName', result.lastName)
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
                return response.json();
            } else if (response.status === 200) {
                console.log("loggedIn");
                storeToSessionStorage('isLoggedIn', true)
                return response.json();
            }
        })
        .then((result) => {
            console.log(result);
            return result
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

// const getFilename = (image) => {
//     if (image !== null) {
//         let name = (image).split("C:\\fakepath\\");
//         console.log(name[1]);
//         return name
//     };
//     return null
// }
// const getFile = (image) => {
//     if (image !== null) {
//         let name = (image).split("C:\\fakepath\\");
//         console.log(name[1]);
//         return name
//     };
//     return null
// }


const postAPost = (token, data, url) => {
    console.log(token)
    console.log(data.image)
    console.log(url)

    if (data.image === null && data.message === "") {
        alert('Attention, votre post est vide')
        return
    }
    let myHeaders = new Headers();
    myHeaders.append("Authorization", `Bearer ${token}`);

    let formdata = new FormData();
    // let filename = getFilename(data.image);
    // let fileInput = getFile(data.image);

    // formdata.append("file", data.image);
    // formdata.append("file", fileInput.files[0], `${filename}`);
    formdata.append("post", `{"message": "${data.message}"}`);
    console.log(formdata)

    let requestOptions = {
        method: 'POST',
        headers: myHeaders,
        body: formdata,
        redirect: 'follow'
    };
    console.log(requestOptions)
    console.log('go fetch, normalement ;-)')
        // fetch(url, requestOptions)
        //     .then(response => response.text())
        //     .then(result => console.log(result))
        //     .catch(error => console.log('error', error));
}

export {
    // postLogin,
    // postSignUp,
    // getAllPost,
    // postAPost
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