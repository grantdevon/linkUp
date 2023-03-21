import { createUserWithEmailAndPassword, sendEmailVerification, signInWithEmailAndPassword } from "firebase/auth"
import { auth } from "../Firebase/firebase.config"
import { createDoc } from "./firestore.service";
import { Users } from "../Constants/collectionNames";
import { storeUser } from "./storage.service";
import { fetchUser } from "./user.service";
import { Alert } from "react-native";


export const login = (email: string, password: string) => {
    signInWithEmailAndPassword(auth, email, password).then(async user => {
        let userData = await fetchUser(user.user.uid)
        storeUser(user.user.uid, userData)
        // store details in storage
    }).catch(error => {
        console.log(error);
        Alert.alert(error.code)
        throw new Error(error)
    })
}

export const signUp = (userObj: any) => {
    createUserWithEmailAndPassword(auth, userObj.email, userObj.password).then(user => {

        const newUser: {} = {
            name: userObj.name,
            email: user.user.email,
            date_created: new Date(),
            note: userObj.note,
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
        Alert.alert(error.code)
        throw new Error(error)
    })
}