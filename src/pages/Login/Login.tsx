import { ActivityIndicator, Modal, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React, { FC, useState } from 'react'
import { login, signUp } from '../../Sevices/auth.service'
import SignUp from '../SignUp/SignUp'
import { color } from '../../Constants/collectionNames'


interface ICTAButton {
    text: string,
    onClick: () => void
}


const Login = () => {

    const [email, setEmail] = useState<string>("")
    const [password, setPassword] = useState<string>("")
    const [signUp, setSignUp] = useState<boolean>(false)
    const [isSigningIn, setIsSigningIn] = useState<boolean>(false)

    const loginUser = () => {
        setIsSigningIn(true)
        login(email, password)
    }

    const signUpUser = () => {
        setSignUp(true)
    }

    const CTAButton: FC<ICTAButton> = ({
        text,
        onClick
    }) => {
        return (
            <TouchableOpacity
                style={[styles.ctaButton,
                text === "Sign Up" ? {
                    backgroundColor: "white"
                } : {
                    backgroundColor: color
                }
                ]}
                onPress={onClick}
            >
                <Text
                    style={[styles.ctaText,
                    text === "Sign Up" ? {
                        color: color
                    } : {
                        color: "white"
                    }
                    ]}
                >{text}</Text>
            </TouchableOpacity>
        )
    }

    if (isSigningIn) {
        return (
            <Modal
                visible={isSigningIn}
                animationType='slide'
            >
                <View style={styles.signInModal}>
                    <ActivityIndicator color={color} size={"large"}/>
                    <Text style={{color: color}}>Signing in...</Text>
                </View>
            </Modal>
        )
    }

    return (
        <View style={styles.container}>
            <Modal
                visible={signUp}
                animationType='slide'
            >
                <SignUp setSignUp={setSignUp} />
            </Modal>

            <TextInput
                style={[styles.authContainer,
                {
                    color: "black"
                }]}
                value={email}
                onChangeText={email => setEmail(email)}
                placeholder='email'
                placeholderTextColor={"grey"}
            />
            <TextInput
                style={[styles.authContainer,
                {
                    color: "black"
                }]}
                value={password}
                onChangeText={password => setPassword(password)}
                placeholder='password'
                placeholderTextColor={"grey"}
                secureTextEntry
            />
            <CTAButton text='Login' onClick={loginUser} />
            <CTAButton text='Sign Up' onClick={signUpUser} />
        </View>
    )
}

export default Login

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: "white"
    },
    authContainer: {
        borderWidth: 1,
        borderColor: "#6a4eba",
        width: "80%",
        borderRadius: 7,
        marginVertical: 7
    },
    text: {
        fontSize: 35,
        fontWeight: 'bold'
    },
    ctaButton: {
        width: "70%",
        backgroundColor: "#6a4eba",
        marginVertical: 7,
        paddingVertical: 10,
        borderRadius: 7
    },
    ctaText: {
        color: "white",
        textAlign: 'center',
        fontWeight: 'bold'
    },
    signInModal: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        color: color
    }
})