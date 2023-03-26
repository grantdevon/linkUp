import { ActivityIndicator, Modal, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { color } from '../Constants/collectionNames'

const Loading = ({ text, isLoading }: { text: string, isLoading: boolean }) => {
    return (
        <Modal
            visible={isLoading}
            animationType='slide'
        >
            <View style={styles.signInModal}>
                <ActivityIndicator color={color} size={"large"} />
                <Text style={{ color: color }}>{text}</Text>
            </View>
        </Modal>
    )
}

export default Loading

const styles = StyleSheet.create({
    signInModal: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        color: color
    }
})