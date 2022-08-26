import firebase from "firebase";

class AuthService {

    login(providerName) {
        const authProvider = new firebase.auth[`${providerName}AuthProvider`](); //'authProvider'를 만든다

        return firebase.auth().signInWithPopup(authProvider);
    }
}


export default AuthService;  //AuthService를 export해주기



