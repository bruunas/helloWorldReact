import firebase from 'firebase';

import registerServiceWorker from './registerServiceWorker';


const server = {
    apiKey: "AIzaSyDMqfkkeJwOgNJZNVYN8b3KXVjQIu0NaSE",
    authDomain: "react-sac.firebaseapp.com",
    databaseURL: "https://react-sac.firebaseio.com",
    projectId: "react-sac",
    storageBucket: "",
    messagingSenderId: "733622866196"
};

firebase.initializeApp(server);

registerServiceWorker();