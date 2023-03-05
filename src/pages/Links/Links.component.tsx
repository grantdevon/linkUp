import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const LinksComponent = ({item}) => {

    console.log(item)
  return (
    <View style={styles.linkContainer}>
        <Text>
          {item.name}
        </Text>
        <Text>
          {item.url}
        </Text>
      </View>
  )
}

export default LinksComponent

const styles = StyleSheet.create({
    linkContainer: {
        paddingVertical: 5,
        borderRadius: 15,
        borderColor: "#CBC3E3",
        borderWidth: 1,
        paddingHorizontal: 5,
        margin: 5
      }
})