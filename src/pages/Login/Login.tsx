import { StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import { login, signUp } from '../../Sevices/auth.service'

const Login = () => {

    const [email, setEmail] = useState<string>("")
    const [password, setPassword] = useState<string>("")

    const loginUser = () => {
        login(email, password)
    }

    const signUpUser = () => {
        signUp(email, password)
    }
    return (
        <View style={styles.container}>
            <TextInput
                style={styles.authContainer}
                value={email}
                onChangeText={email => setEmail(email)}
                placeholder='email'
            >

            </TextInput>
            <TextInput
                style={styles.authContainer}
                value={password}
                onChangeText={password => setPassword(password)}
                placeholder='password'
            >

            </TextInput>

            <TouchableOpacity
                onPress={loginUser}>
                <Text style={styles.text}>
                    Login
                </Text>
            </TouchableOpacity>
            <TouchableOpacity
                onPress={signUpUser}>
                <Text style={styles.text}>
                    Sign Up
                </Text>
            </TouchableOpacity>
        </View>
    )
}

export default Login

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    authContainer: {
        borderWidth: 1,
        width: "80%"
    },
    text: {
        fontSize: 35,
        fontWeight: 'bold'
    }
})