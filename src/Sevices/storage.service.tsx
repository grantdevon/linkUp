import AsyncStorage from "@react-native-async-storage/async-storage";

export const saveFriend = async (friend: {}) => {
    try {
        await AsyncStorage.setItem("friends", JSON.stringify(friend))
    } catch (error) {
        console.log(error);

    }
}

export const getFriends = async () => {
    try {
        let friends = await AsyncStorage.getItem("friends")
        // let work = JSON.parse(friends)
        // console.log("friends ", work.data)
        return JSON.parse(friends)
    } catch (error) {
        console.log(error);

    }
}

export const storeUser = async (id: string, user: any) => {
    try {
        await AsyncStorage.setItem("user", JSON.stringify(user))
    } catch (error) {
        console.log(error);

    }
}

export const getUser = async () => {
    try {
        let user = await AsyncStorage.getItem("user")
        return JSON.parse(user)
    } catch (error) {
        console.log(error);

    }
}