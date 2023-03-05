import { createUserWithEmailAndPassword, sendEmailVerification, signInWithEmailAndPassword } from "firebase/auth"
import { auth } from "../Firebase/firebase.config"
import { createDoc } from "./firestore.service";
import { Users } from "../Constants/collectionNames";
import { storeUser } from "./storage.service";
import { fetchUser } from "./user.service";


export const login = (email: string, password: string) => {
    signInWithEmailAndPassword(auth, email, password).then(async user => {
        let userData = await fetchUser(user.user.uid)
        storeUser(user.user.uid, userData)
        // store details in storage
    }).catch(error => {
        console.log(error);
        throw new Error(error)
    })
}

export const signUp = (email: string, password: string) => {
    createUserWithEmailAndPassword(auth, email, password).then(user => {


        const newUser: {} = {
            name: "Grant",
            email: user.user.email,
            date_created: new Date(),
            note: "",
            id: user.user.uid
        }

        createDoc(Users, user.user.uid, newUser)

        sendEmailVerification(user.user).then(res => {

            console.log("email verification sent");

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