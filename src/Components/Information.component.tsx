import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { useSelector } from 'react-redux'

const Information = ({

}) => {

    const {links} = useSelector(state => state.links)
    const {friends} = useSelector(state => state.friends)

    
    return (
        <View style={styles.container}>
            <View style={styles.contentContainer}>
                <Text style={styles.textContent}>{links.length}</Text>
                <Text style={styles.textContent}>Friends</Text>

            </View>

            <View style={styles.contentContainer}>
                <Text style={styles.textContent}>{friends.length}</Text>
                <Text style={styles.textContent}>Links</Text>

            </View>

        </View>
    )
}

export default Information

const styles = StyleSheet.create({
    container: {
        backgroundColor: "#6a4eba",
        marginVertical: 5,
        marginHorizontal: 50,
        borderRadius: 10,
        flexDirection: 'row',
        justifyContent: "space-evenly",
        alignItems: 'center'
    },
    contentContainer: {
        justifyContent: 'center'
    },
    textContent: {
        color: "white",
        textAlign: 'center',
        marginVertical: 3
    }
})