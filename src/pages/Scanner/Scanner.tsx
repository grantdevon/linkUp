import { Alert, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import QRCodeScanner from 'react-native-qrcode-scanner'
import { RNCamera } from 'react-native-camera'
import { saveFriend } from '../../Sevices/storage.service'
import { updateDocument } from '../../Sevices/firestore.service'
import { auth } from '../../Firebase/firebase.config'
import { color } from '../../Constants/collectionNames'

const Scanner = () => {

  const [scanner, setScanner] = useState<QRCodeScanner | null>()

  const [scanData, setScanData] = useState<{}>([])

  let id = auth.currentUser?.uid

  const onSuccess = (e: { data: React.SetStateAction<{}> }) => {
    let data = JSON.parse(e.data)
    setScanData(e.data)
    Alert.alert("user added ", data.user.name + " " + data.user.note)
    updateDocument(id, "friends", data.user).then(() => {
      console.log("updated doc");
    }).catch(error => console.log(error)
    )
    saveFriend(data)
  }
  return (
    <View style={styles.container}>
      <QRCodeScanner
        onRead={onSuccess}
        ref={scanner => setScanner(scanner)}
        flashMode={RNCamera.Constants.FlashMode.auto}
      />
      <TouchableOpacity style={styles.scanAgainButton}
        onPress={() => {
          scanner?.reactivate()
        }}>
        <Text style={styles.buttonText}>Scan Again</Text>
      </TouchableOpacity>
    </View>
  )
}

export default Scanner

const styles = StyleSheet.create({
  container: {
    flex: 2,
    alignItems: 'center',
    justifyContent: 'center',
  },
  scanAgainButton: {
    borderRadius: 7,
    backgroundColor: color,
    marginBottom: 15
  },
  buttonText: {
    fontWeight: 'bold',
    fontSize: 15,
    paddingHorizontal: 50,
    paddingVertical: 15,
    color: 'white'
  }
})