import { Alert, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { auth } from '../../Firebase/firebase.config'
import Information from '../../Components/Information.component'

const Settings = () => {

  const signOut = () => {
    Alert.alert(
      "Confirm",
      "Are you sure you want to sign out?",
      [
        {
          text: "Yes",
          onPress: () => auth.signOut()
        },
        {
          text: "No",
          onPress: () => { }
        }
      ]

    )
  }

  const BasicInfo = (
    { message, text, onPress }:
      {
        message: string,
        text: string,
        onPress: () => void
      }
  ) => {
    return (
      <>
        <Text style={styles.signOutHeader}>{message}</Text>
        <View style={styles.signOutButton}>
          <Text style={styles.signOutText} onPress={onPress}>{text}</Text>
        </View>
      </>
    )
  }
  return (
    <View>
      <Information />
      <BasicInfo
        message='Im just trying to make enough money so that my girlfriend
      can live her rich girl fantasy'
        text='Buy me a coffee'
        onPress={signOut}
      />

      <BasicInfo
        message='You want to leave?? k.'
        text='Sign out'
        onPress={signOut}
      />
    </View>
  )
}

export default Settings

const styles = StyleSheet.create({
  signOutHeader: {
    fontWeight: 'bold',
    color: 'black',
    marginBottom: 5,
    marginHorizontal: 5
  },
  signOutButton: {
    backgroundColor: "#6a4eba",
    marginHorizontal: 5,
    borderRadius: 10
  },
  signOutText: {
    color: 'white',
    textAlign: 'center',
    paddingVertical: 10
  }
})