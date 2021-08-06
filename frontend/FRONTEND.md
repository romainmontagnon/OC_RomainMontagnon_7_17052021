# FRONTEND 

## OC_RomainMontagnon_7_17052021

[Return to README](../README.md)

[TOC]

## 1. Installation/Lancement

```bash
# Depuis le dossier root du repo git
cd frontend/groupomania-front

# Installation:
npm install

# Lancer le server React:
npm start
```

### Chemin et port de l'app

[http://localhost:3000/](http://localhost:3000/)

### Route vers l'API

Le fichier `/src/js/routes.js` permet de modifier les routes vers l'API grâce aux variables `baseUrl` et `port`.
Par défaut le chemin vers l'API est : `http://localhost:3001/api/`

## 2. Initialisation des outils de dévellopement

- React :
  ```bash
  npx creat-react-app groupomania-front
  ```

- Frameworks CSS :
  [Install Tailwind CSS for REACT]([../README.md](https://tailwindcss.com/docs/guides/create-react-app))
`npx tailwindcss-cli -i tailwind.css -o style.css`
