import { createUserWithEmailAndPassword, sendEmailVerification, signInWithEmailAndPassword } from "firebase/auth"
import { auth } from "../Firebase/firebase.config"


export const login = (email: string, password: string) => {
    signInWithEmailAndPassword(auth, email, password).then(user => {
        // store details in storage
    }).catch(error => {
        console.log(error);
        throw new Error(error)
    })
}

export const signUp = (email: string, password: string) => {
    createUserWithEmailAndPassword(auth, email, password).then(user => {

        sendEmailVerification(user.user).then(res => {
            console.log(res);
            
            console.log("email verified");
            
        }).catch(error => {
            console.log(error);
            throw new Error(error);
            
        })
        // store details in storage
        console.log("user signed in");
        
    }).catch(error => {
        console.log(error);
        throw new Error(error)
    })
}