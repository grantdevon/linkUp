import { StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useLayoutEffect, useState } from 'react'
import QRCode from 'react-native-qrcode-svg';


const QRCodeComponent = (props) => {

    const user = props

    return (
        <View>
            <QRCode
                value={JSON.stringify(user)}
                size={175}
            />

        </View>
    )
}

export default QRCodeComponent

const styles = StyleSheet.create({})