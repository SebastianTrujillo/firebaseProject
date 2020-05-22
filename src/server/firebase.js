import app from 'firebase/app';
import 'firebase/auth';
import * as firebaseui from 'firebaseui';


const firebaseConfig = {
    apiKey: "AIzaSyBiQhCYpXNg0o6YKgrqca2cKqvZipLRzT0",
    authDomain: "fir-project-ff7fe.firebaseapp.com",
    databaseURL: "https://fir-project-ff7fe.firebaseio.com",
    projectId: "fir-project-ff7fe",
    storageBucket: "fir-project-ff7fe.appspot.com",
    messagingSenderId: "780272247149",
    appId: "1:780272247149:web:da8fe1ee2c09e921917a64",
    measurementId: "G-8LDXTLXB47"
};

class Firebase {
    constructor() {
        app.initializeApp(firebaseConfig);
        this.auth = app.auth();
        this.autorization = app.auth;
        this.firebaseui = new firebaseui.auth.AuthUI(app.auth());
    }
}

export default Firebase