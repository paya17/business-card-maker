import firebase from "firebase";
import firebaseApp from "./firebase";

class AuthService {

    login(providerName) {
        const authProvider = new firebase.auth[`${providerName}AuthProvider`](); //'authProvider'를 만든다

        return firebaseApp.auth().signInWithPopup(authProvider); //firebase가 아니라 firebaseApp!
    }
}


export default AuthService;  //AuthService를 export해주기



