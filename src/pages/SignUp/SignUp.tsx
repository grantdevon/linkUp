import { Alert, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import { signUp } from '../../Sevices/auth.service'
import Loading from '../../Components/Loading.component'


const SignUp = ({setSignUp}: {setSignUp: any}) => {

  const [user, setUser] = useState({
    name: "",
    email: "",
    password: "",
    note: ""
  })
  const [confirmPassword, setConfirmPassword] = useState<string>("")
  const [isSigningIn, setIsSigningIn] = useState<boolean>(false)


  const signUpUser = () => {
    let passwordObj = {
      password: user.password,
      confirmPassword: confirmPassword
    }

    if (Object.values(user).includes("")) Alert.alert("Please make sure you fill in all inputs.")

    if (doPWSmatch(passwordObj)) {
        signUp(user)      
    } else {
      Alert.alert("Make sure your passwords are the same.")
    }
  }

  const doPWSmatch = ({ password, confirmPassword }: { password: string, confirmPassword: string }) => {
    return password === confirmPassword
  }

  if (isSigningIn) {
    return (
        <Loading text='Signing in...' isLoading={isSigningIn}/>
    )
}


  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder='name'
        placeholderTextColor={"grey"}
        onChangeText={name => setUser({
          ...user,
          name: name
        })}
      />
      <TextInput
        style={styles.input}
        placeholder='email'
        placeholderTextColor={"grey"}
        onChangeText={email => setUser({
          ...user,
          email: email
        })}
      />
      <TextInput
        style={styles.input}
        placeholder='password'
        placeholderTextColor={"grey"}
        onChangeText={password => setUser({
          ...user,
          password: password
        })}
      />
      <TextInput
        style={styles.input}
        placeholder='confirm password'
        placeholderTextColor={"grey"}
        onChangeText={text => setConfirmPassword(text)}
      />
      <TextInput
        style={styles.input}
        placeholder='note'
        placeholderTextColor={"grey"}
        onChangeText={note => setUser({
          ...user,
          note: note
        })}
      />
      <TouchableOpacity
        onPress={signUpUser}
        style={styles.ctaButtons}
      >
        <Text style={styles.ctaText}>Sign Up</Text>
      </TouchableOpacity>

      <TouchableOpacity
        onPress={() => setSignUp(false)}
        style={[styles.ctaButtons,
        {
          backgroundColor: "white"
        }
        ]}
      >
        <Text style={[styles.ctaText, {
          color: "#6a4eba"
        }]}>Cancel</Text>
      </TouchableOpacity>
    </View>
  )
}

export default SignUp

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: "white"
  }, 
  input: {
    marginVertical: 7,
    width: "90%",
    borderWidth: 1,
    borderColor: "#6a4eba",
    borderRadius: 7,
    color: "black"
  },
  ctaButtons: {
    backgroundColor:"#6a4eba",
    width: "80%",
    marginVertical: 5,
    paddingVertical: 7,
    borderRadius: 7
  },
  ctaText: {
    color: "white",
    textAlign: 'center',
    fontWeight: "bold"
  }
})