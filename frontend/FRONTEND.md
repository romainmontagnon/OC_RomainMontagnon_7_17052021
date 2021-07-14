# FRONTEND 

## OC_RomainMontagnon_7_17052021

[Return to README](../README.md)

[TOC]

### Initialisation du projet

- React :
  ```bash
  npx creat-react-app groupomania-front
  ```

- Frameworks CSS :
  [Install Tailwind CSS for REACT]([../README.md](https://tailwindcss.com/docs/guides/create-react-app))
`npx tailwindcss-cli -i tailwind.css -o style.css`

### Installation du frontend

- Demarrage du frontend
  ```bash
  npm start
  ```

### Route vers l'API

Le fichier `/src/js/routes.js` permet de modifier les routes vers l'API grâce aux variables `baseUrl` et `port`.
Par défaut le chemin vers l'API est : `http://localhost:3001/api/`
