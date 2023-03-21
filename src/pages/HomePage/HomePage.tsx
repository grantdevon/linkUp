import { StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useLayoutEffect, useState } from 'react'
import QRCodeComponent from '../../Components/QRCodeCompont/QRCodeComponent'
import { auth } from '../../Firebase/firebase.config'
import { onAuthStateChanged } from 'firebase/auth'
import { useSelector } from 'react-redux'

const HomePage = () => {

    const [customText, setCustomText] = useState<string>("Scan my vcard")
    const  user  = useSelector(state => state.user)
    delete user["friends"]
    delete user["customText"]
    delete user["date_created"]
    // delete user['friends']
    

    useEffect(() => {
        // fetch id from auth reducer
        onAuthStateChanged(auth, async user => {
            if (user) {
                console.log(user.uid);
            }
        })
    }, [])


    if (user.loading) {
        return (
            <View>
                <Text>Loading...</Text>
            </View>
        )
    }


    return (
        <View style={styles.container}>
            {/* greeting note */}

            <View style={styles.qrContainer}>

                <View style={[styles.card, styles.shadowProp]}>
                    <Text style={styles.headerText}>{customText}</Text>

                    <QRCodeComponent
                        user={user}
                    />
                </View>

            </View>

        </View>
    )
}

export default HomePage

const styles = StyleSheet.create({
    container: {
        flex: 1,
        // backgroundColor: 'black'
    },

    headerText: {
        fontSize: 25,
        fontWeight: 'bold',
        color: "grey",
        paddingBottom: 30,
        textAlign: 'center'
    },

    qrContainer: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    },

    textStyles: {
        fontSize: 35,
        fontWeight: "bold"
    },
    card: {
        backgroundColor: 'white',
        borderRadius: 9,
        paddingVertical: 55,
        paddingHorizontal: 25,
        width: '85%',
        marginVertical: 10,
        alignItems: 'center',
        borderWidth: 1,
        borderColor: "#6a4eba"
    },
    shadowProp: {
        shadowOffset: { width: -20, height: 4 },
        shadowColor: 'white',
        shadowOpacity: 0.9,
        shadowRadius: 9,
    },
})