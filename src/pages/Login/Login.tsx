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
        <View>
            <TextInput
                value={email}
                onChangeText={email => setEmail(email)}
                placeholder='email'
            >

            </TextInput>
            <TextInput
                value={password}
                onChangeText={password => setPassword(password)}
                placeholder='password'
            >

            </TextInput>

            <TouchableOpacity
            onPress={loginUser}>
                <Text>
                    Login
                </Text>
            </TouchableOpacity>
            <TouchableOpacity
            onPress={signUpUser}>
                <Text>
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
    }
})