import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { auth } from '../../Firebase/firebase.config'

const Settings = () => {

  const signOut = () => {
    auth.signOut()
  }
  return (
    <View>
      <Text style={styles.signOutHeader}>You want to leave?? k.</Text>
      <View style={styles.signOutButton}>
        <Text style={styles.signOutText} onPress={signOut}>Sign out</Text>
      </View>
    </View>
  )
}

export default Settings

const styles = StyleSheet.create({
  signOutHeader: {
    fontWeight: 'bold',
    color: 'black',
    marginBottom: 5
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