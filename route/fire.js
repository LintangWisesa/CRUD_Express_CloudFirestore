var firebase = require('firebase')

var config = {
    apiKey: "AIzaSyCXk-j7njdsfsKqkDqU8CEn4HwwJda7WEA",
    authDomain: "expfirestore.firebaseapp.com",
    databaseURL: "https://expfirestore.firebaseio.com",
    projectId: "expfirestore",
    storageBucket: "expfirestore.appspot.com",
    messagingSenderId: "992828446057"
};

var fire = firebase.initializeApp(config);
module.exports = fire