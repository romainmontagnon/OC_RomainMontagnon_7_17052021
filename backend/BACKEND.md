# BACKEND

## OC_RomainMontagnon_7_17052021

[Return to README](../README.md)

[TOC]

## 1. Installation/Lancement

```bash
# Depuis le dossier root du repo git
cd backend

# Installation:
npm install

# Lancer le server:
npm start
#ou
node server.js
# ou
nodemon start
```

### Chemin et port de l'api

[http://localhost:3001/api/](http://localhost:3001/api/)

## 2. Variable d'environnement `dotenv`

L'application utilise des variables d'environement pour :
- la connexion à la base de donées,
- la sécurisation de l'application.
  
Ses variables sont stockées dans le fichier `.env` dans le racine du dossier `backend`

| Variables   | Description                        |
| ----------- | ---------------------------------- |
| DB_HOST     | Base de donnée HOST                |
| DB_DIALECT  | Type de base de donnée             |
| DB_DATABASE | Nom de la base de donnée           |
| DB_USERNAME | Utilisateur                        |
| DB_PASSWORD | Mot de passe                       |
| HASH_ROUND  | Nombre de hash d'encryptage du mdp |
| TOKEN_KEY   | Clef d'encryptage du token         |

```env
DB_HOST     = [value]
DB_DIALECT  = ['mysql' | 'mariadb' | 'sqlite' | 'postgres']
DB_DATABASE = [value]
DB_USERNAME = [value]
DB_PASSWORD = [value]

HASH_ROUND = [value]
TOKEN_KEY = [value]
```

## 3. Routes

### 3.1 USER

| Requete | URI         | Description                                 |
| ------- | ----------- | ------------------------------------------- |
| `'GET'` | `/api/user` | Route de test, A SUPPRIMER en fin de projet |

##### 3.1.1 USER `'POST'` `/api/user/login`

| Requete  | URI               | Description              |
| -------- | ----------------- | ------------------------ |
| `'POST'` | `/api/user/login` | Route d'authentification |

- req.body :

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

##### 3.1.2 USER `'POST'` `/api/user/signup`

| Requete  | URI                | Description                 |
| -------- | ------------------ | --------------------------- |
| `'POST'` | `/api/user/signup` | Route de création de compte |

- req.body :

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
##### 3.1.3 USER `'PUT'` `/api/user//modifyuser/:id`

| Requete | URI                         | Description                                    |
| ------- | --------------------------- | ---------------------------------------------- |
| `'PUT'` | `/api/user//modifyuser/:id` | Route de modifcation de mot de passe d'un user |

- req.body :

```json
{
    "user": {
        "password": "new password"
    }
}
```

- Reponse :

```json
[
    1
]
```

##### 3.1.4 USER `'DELETE'` `/api/user/delete/:id`

| Requete    | URI                    | Description                    |
| ---------- | ---------------------- | ------------------------------ |
| `'DELETE'` | `/api/user/delete/:id` | Route de suppression d'un user |

- req.body :

```json
{
    "user": {
        "emailAdress": "user@email.com",
        "password": "password"
    }
}
```

- Reponse :

```json
{
    "message": "User supprimé"
}
```

### 3.2 POST (publications)

#### 3.2.1 POST `'GET'` `/api/post`

| Requete | URI           | Description                      |
| ------- | ------------- | -------------------------------- |
| `'GET'` | ``/api/post`` | Afficher toutes les publications |

#### 3.2.2 POST `'GET'` `/api/post/:id`

| Requete | URI             | Description                             |
| ------- | --------------- | --------------------------------------- |
| `'GET'` | `/api/post/:id` | Afficher une publication en particulier |

#### 3.2.3 POST `'GET'` `/api/post/user/:UserId`

| Requete | URI                      | Description                                      |
| ------- | ------------------------ | ------------------------------------------------ |
| `'GET'` | `/api/post/user/:UserId` | Afficher toute les publications d'un utilisateur |

#### 3.2.4 POST `'GET'` `/api/post`

| Requete  | URI           | Description            |
| -------- | ------------- | ---------------------- |
| `'POST'` | ``/api/post`` | Poster une publication |

- req.body :

```json
{
    "post": {
        "message": "creation d'un post",
        "image": null
    }
}
```

- Reponse :

```json
{
    "id": 55,
    "message": "creation d'un post pour test de suppression",
    "image": null,
    "UserId": 25,
    "updatedAt": "2021-06-21T12:57:07.300Z",
    "createdAt": "2021-06-21T12:57:07.300Z"
}
```

#### 3.2.5 POST `'PUT'` `/api/post`

| Requete | URI             | Description                    |
| ------- | --------------- | ------------------------------ |
| `'PUT'` | `/api/post/:id` | Route de modifcation d'un post |

- req.body :

```json
{
    "post": {
        "message": "modifcation d'un post existant",
        "image": null
    }
}
```

- Reponse :

```json
[
    1
]
```

#### 3.2.6 POST `'DELETE'` `/api/post/:id`

| Requete    | URI             | Description                   |
| ---------- | --------------- | ----------------------------- |
| `'DELETE'` | `/api/post/:id` | Suppression d'une publication |

- Reponse :

```json
{
    "message": "Post supprimé"
}
```

### 3.3 COM (commentaires)

#### 3.3.1 COM `'POST'` `/api/com/:id`

| Requete  | URI         | Description                  |
| -------- | ----------- | ---------------------------- |
| `'POST'` | `/api/com/` | Publication d'un commentaire |

- req.body :

```json
{
    "com": {
        "message": "ceci est mon N eme commentaire",
        "image": null,
        "PostId": 30
    }
}
```

- Reponse :

```json
{
    "id": 11,
    "message": "ceci est mon N eme commentaire",
    "image": null,
    "PostId": 30,
    "UserId": 25,
    "updatedAt": "2021-06-21T13:06:53.454Z",
    "createdAt": "2021-06-21T13:06:53.454Z"
}
```

#### 3.3.2 COM `'PUT'` `/api/com/:id`

| Requete | URI            | Description                   |
| ------- | -------------- | ----------------------------- |
| `'PUT'` | `/api/com/:id` | Modification d'un commentaire |

- req.body :

```json
{
    "com": {
        "message": "modifcation d'un commentaire",
        "image": null
    }
}
```

- Reponse :

```json
[
    1
]
```

#### 3.3.3 COM `'DELETE'` `/api/com/:id`

| Requete    | URI            | Description                  |
| ---------- | -------------- | ---------------------------- |
| `'DELETE'` | `/api/com/:id` | Suppression d'un commentaire |


- Reponse :

```json
{
    "message": "Commentaire supprimé"
}
```

## 4. Codes Erreur

| Code | Scope            | Description               |
| ---- | ---------------- | ------------------------- |
| A100 | Connect user     | User non valide           |
| A101 | Connect user     | Password non valide       |
| A102 | Connect user     | Bcrypt compare non valide |
| A103 | Connect user     | `User.findOne()` erreur   |
| A200 | Post publication |                           |
| A201 | Post publication |                           |

## 5. Compte Admin et variable `isAdmin`

Une variable `isAdmin` est initialisé a `false` pour chaque création de nouveau user et ne peut pas être modifié via l'API.
La modification de la variable  est possible uniquement en manipulant la variable dans la base de données via un compte `admin` de la base de donnée.