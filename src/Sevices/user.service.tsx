import { doc, getDoc } from "firebase/firestore";
import { Users } from "../Constants/collectionNames";
import { db } from "../Firebase/firebase.config";
import { fetchSubCollection } from "./firestore.service";

export const fetchUser = async (userId: string) => {
    let docRef = doc(db, Users, userId)
    let links = await fetchSubCollection(userId, 'links') 
    let friends = await fetchSubCollection(userId, 'friends')   
    let userData = await getDoc(docRef)
    if (userData.exists()) {        
        return {...userData.data(), links, friends}
    } else {
        console.log("user data does not exist");
        
    }
    return;
}