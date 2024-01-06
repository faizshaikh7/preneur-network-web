import {createUserWithEmailAndPassword, signInWithEmailAndPassword} from 'firebase/auth'
import {auth} from '../firebaseConfig'

export const LoginAPI = (email, password) => {
    try {
        let res =  signInWithEmailAndPassword(auth, email, password)
        return res;
    } catch (err) {
        console.log(err);
        return err;
    }
}

export const SignUpAPI = (email, password) => {
    try {
        let res = createUserWithEmailAndPassword(auth, email, password);
        return res
    } catch (err) {
        console.log(err);
        return err
    }
}