
import { arrayUnion, collection, doc, getDoc, getDocs, setDoc, updateDoc } from "firebase/firestore"
import { db } from "../Firebase/firebase.config"

export const createDoc = async (collection: string, docName: string, data: {}) => {
    await setDoc(doc(db, collection, docName), data).then(results => {
        console.log("created doc successfully");
        
    }).catch(error => {
        console.log(error);
        
        throw new Error(error);
        
    })
}

export const fetchDocs = (id: string, path?: string) => {
    const docRef = doc(db, "", "")
    return new Promise((resolve, reject) => {

    })
}


export const fetchSubCollection = async (id: string, collectionName: string) => {
    let dataArray: [] = []
    let data = await getDocs(collection(db, "users", id, collectionName))
    data.forEach((doc) => {
        dataArray.push(doc.data())
    })
    return dataArray
}

export const updateDocument = (id: string, collectionName: string, data: any) => {
    return new Promise(async (resolve, reject) => {
        await setDoc(doc(db, "users", id, collectionName, data.id), data)
        .then(() => resolve(true)).catch(error => reject(error))
    })
}