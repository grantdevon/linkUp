import { Alert, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import LottieView from "lottie-react-native";
import { sendEmailVerification } from 'firebase/auth';
import { auth } from '../Firebase/firebase.config';
import { color } from '../Constants/collectionNames';

const ConfirmEmail = ({setIsVerified}: {setIsVerified: any}) => {
    
    const sendVerification = () => {
        try {
            sendEmailVerification(auth.currentUser)
            Alert.alert("Email verication sent!")
        } catch (error) {
            // TODO handle errors
            console.log(error);
        }
    }

    const reloadUser = async() => {
        try {            
            await auth.currentUser?.reload()
            setIsVerified(true)
        } catch (error) {
            console.log(error);
        }
    } 

    const Button = (
        { text, onPress }: { text: string, onPress: () => void }
    ) => {
        return (
            <TouchableOpacity
            style={styles.button}
            onPress={onPress}
            >
                <Text style={styles.buttonText}>{text}</Text>
            </TouchableOpacity>
        )
    }

    return (
        <View style={styles.container}>
            <LottieView
                source={require("../assets/email-verification.json")}
                autoPlay
                style={styles.image}
            />

            <Text style={styles.title}>Please verify your email address to continue.</Text>

            <Button text='Send Email verification Again' onPress={sendVerification}/>
            <Button text='Already Verified? Refresh' onPress={reloadUser}/>

        </View>
    )
}

export default ConfirmEmail

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'white'
    },
    image: {
        height: 300,
        width: 300
    },
    button: {
        borderRadius: 7,
        borderWidth: 1,
        borderColor: color,
        padding: 10,
        margin: 5
    },
    buttonText: {
        color: color
    },
    title: {
        fontSize: 20,
        color: "black",
        fontWeight: 'bold',
        marginBottom: 10
    }
})