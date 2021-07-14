/*
    Routes vers l'API
    Utilise deux variables
    `baseUrl` et `port`
*/

let baseUrl = `http://localhost`;
let port = 3001;

export const routes = {
    // user
    urlLogin: `${baseUrl}:${port}/api/user/login`,
    urlSignUp: `${baseUrl}:${port}/api/user/signup`,

    // post
    urlPost: `${baseUrl}:${port}/api/post/`,

    // com
    urlCom: `${baseUrl}:${port}/api/com/`
}