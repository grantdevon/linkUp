import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import LottieView from "lottie-react-native";


const Empty = ({text}: {text: string}) => {
  return (
    <View style={styles.container}>
        <LottieView source={require("../assets/empty.json")}
        style={styles.image}
        autoPlay
        loop
        />
      <Text style={styles.text}>{text}</Text>
    </View>
  )
}

export default Empty

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    text: {
        fontWeight: 'bold',
        color: "black"
    },
    image: {
        width: 250,
        height: 250
      },
})