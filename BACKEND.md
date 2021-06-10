# OC_RomainMontagnon_7_17052021 BACKEND

## Installation/Lancement

```bash
cd backend

# Installation:
npm install

# Lancer le server:
node server.js
# ou
nodemon start
```

### Variable d'environnement

| Variables   | Description                 |
|-------------|-----------------------------|
| DB_HOST     | Base de donnée HOST         |
| DB_DIALECT  | Type de base de donnée      |
| DB_DATABASE | Nom de la base de donnée    |
| DB_USERNAME | Utilisateur                 |
| DB_PASSWORD | Mot de passe                |

### Routes

#### Vue générale des routes

##### USER

| Requete    | URI                | Description |
|------------|--------------------|-------------|
| `'GET'`    | `/api/user`        | Route de test, A SUPPRIMER en fin de projet |
| `'POST'`   | `/api/user`        | Route de test, A SUPPRIMER en fin de projet |
| `'POST'`   | `/api/user/signup` | Route de création de compte |
| `'POST'`   | `/api/user/login`  | Route d'authentification |

##### POST

| Requete    | URI                     | API                    | Description |
|------------|-------------------------|------------------------|-------------|
| `'GET'`    | `/api/post`             | `postCtrl.getAllPost` | Afficher toutes les publications |
| `'GET'`    | `/api/post/postdetails` | `postCtrl.getOnePost` | Afficher une publication via ID de la publication |
| `'POST'`   | `/api/post`             | `postCtrl.postUser`   | Publier un commentaire|
| `'PUT'`    | `/api/` |  ||
| `'DELETE'` | `/api/` |  ||

#### Détails des routes

##### USER `'POST'` `/api/user/signup`

| Requete    | URI                | Description |
|------------|--------------------|-------------|
| `'POST'`   | `/api/user/signup` | Route de création de compte |

- Requete :

```json
{
    "user":{
        "emailAdress": "test2@test.com",
        "firstName": "John",
        "lastName": "Doe",
        "password": "123"
    }
}
```

- Reponse :

```json
{
    "id": 27,
    "emailAdress": "test2@test.com",
    "firstName": "John",
    "lastName": "Doe",
    "password": "$2b$10$UICjdOpZNo/ovY0T2j23KeAUYDeXWiDZdLu6w21CFa4m7hqUC0cW2",
    "updatedAt": "2021-06-10T07:36:36.708Z",
    "createdAt": "2021-06-10T07:36:36.708Z"
}
```

##### USER `'POST'` `/api/user/login`

| Requete    | URI                | Description |
|------------|--------------------|-------------|
| `'POST'`   | `/api/user/login`  | Route d'authentification |

- Requete :

```json
{
    "user": {
        "emailAdress": "test2@test.com",
        "password": "123"
    }
}
```

- Reponse :

```json
{
    "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpYXQiOjE2MjMzMTA2MTYsImV4cCI6MTYyMzM5NzAxNn0.K3GzBVIwYJ-WPxm4MubOqPe1xxpDdV_qufLJvEsKar0"
}
```

#### POST (publication)

##### POST `'GET'` `/api/post`

| Requete    | URI                     | API                    | Description |
|------------|-------------------------|------------------------|-------------|
| `'GET'`    | `/api/post`             | `postCtrl.getAllPost` | Afficher toutes les publications |

- Requete :

```json
empty

```

- Reponse :

```json
[
    {
        "id": 28,
        "message": "essai via postman pour test 'Post.findOne()'",
        "image": null,
        "createdAt": "2021-06-10T06:57:09.000Z",
        "updatedAt": "2021-06-10T06:57:09.000Z",
        "UserId": 25,
        "User": {
            "id": 25,
            "emailAdress": "test1@test.com",
            "firstName": "Courri",
            "lastName": "Elle",
            "password": "$2b$10$NjXN1iOun4vX4.fpPPyseusYTRTpmeUjT1xFr8iCGDllCaGaotmKO",
            "createdAt": "2021-06-08T08:24:10.000Z",
            "updatedAt": "2021-06-08T08:24:10.000Z"
        }
    },
    {
        "id": 29,
        "message": "Publication pour la doc",
        "image": null,
        "createdAt": "2021-06-10T07:49:38.000Z",
        "updatedAt": "2021-06-10T07:49:38.000Z",
        "UserId": 25,
        "User": {
            "id": 25,
            "emailAdress": "test1@test.com",
            "firstName": "Courri",
            "lastName": "Elle",
            "password": "$2b$10$NjXN1iOun4vX4.fpPPyseusYTRTpmeUjT1xFr8iCGDllCaGaotmKO",
            "createdAt": "2021-06-08T08:24:10.000Z",
            "updatedAt": "2021-06-08T08:24:10.000Z"
        }
    }
]

```

##### POST `'GET'` `/api/post/postdetails`

| Requete    | URI                     | API                    | Description |
|------------|-------------------------|------------------------|-------------|
| `'GET'`    | `/api/post/postdetails` | `postCtrl.getOnePost` | Afficher une publication via ID de la publication |

- Requete :

```json
{
    "post": {
        "id": "29"
    }
}
```

- Reponse :

```json
{
    "id": 29,
    "message": "Publication pour la doc",
    "image": null,
    "createdAt": "2021-06-10T07:49:38.000Z",
    "updatedAt": "2021-06-10T07:49:38.000Z",
    "UserId": 25
}
```

##### POST `'POST'` `/api/post`

| Requete    | URI                     | API                    | Description |
|------------|-------------------------|------------------------|-------------|
| `'POST'`   | `/api/post`             | `postCtrl.postUser`   | Publier un commentaire|

- Requete :

```json
{
    "post": {
        "message": "Publication pour la doc",
        "image": null,
        "UserId": 25
    }
}
```

- Reponse :

```json
{
    "id": 29,
    "message": "Publication pour la doc",
    "image": null,
    "UserId": 25,
    "updatedAt": "2021-06-10T07:49:38.906Z",
    "createdAt": "2021-06-10T07:49:38.906Z"
}
```

### Codes Erreur

| Code | Scope        | Description |
|------|--------------|-------------|
| A100 | Connect user | User non valide |
| A101 | Connect user | Password non valide |
| A102 | Connect user | Bcrypt compare non valide |
| A103 | Connect user | `User.findOne()` erreur |
| A200 | Post publication | |
| A201 | Post publication | |
