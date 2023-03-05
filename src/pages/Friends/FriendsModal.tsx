import { FlatList, Linking, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { Avatar } from '@rneui/base';

const FriendsModal = ({ friend, setShowModal }) => {
    console.log(friend);

    const navigateToLink = (link: string) => {
        try {
            // TODO check if link or number
            Linking.openURL("https://" + link)
        } catch (error) {
            console.log(error);

        }
    }

    const FriendLinks = ({ item }) => {
        return (
            <TouchableOpacity
                style={styles.linkContainer}
                onPress={() => navigateToLink(item.url)}>
                <Text
                    style={styles.linkHeader}>
                    {item.name}
                </Text>

                {/* <Text
                    style={styles.linkURL}>{item.url}</Text> */}
            </TouchableOpacity>
        )
    }

    const closeModal = () => {
        setShowModal(false)
    }



    return (
        <View style={styles.container}>
            <View style={styles.informationCard}>
                <Avatar
                    size={95}
                    rounded
                    title={friend.name[0]}
                    containerStyle={{ backgroundColor: "#6a4eba" }}
                />
                <View>
                    <Text style={styles.subText}>{friend.name}</Text>
                </View>
                <View>
                    <Text style={[styles.subText, {
                        fontSize: 15,
                        color: "#AD9AB1"
                    }]}>{friend.note}</Text>
                </View>
            </View>



            <Text style={styles.headerText}>Links:</Text>

            <FlatList
                data={[friend.links]}
                renderItem={FriendLinks}
            />


            <View>
                <TouchableOpacity
                    style={styles.cancelButton}
                    onPress={closeModal}>
                    <Text style={styles.cancelButtonText}>Cancel</Text>
                </TouchableOpacity>
            </View>



        </View>
    )
}

export default FriendsModal

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'space-between',
        backgroundColor: "black"
    },
    headerText: {
        fontSize: 17,
        fontWeight: "bold",
        padding: 5,
        color: "white"
    },
    subTextContainer: {
        borderWidth: 1,
        borderColor: "#6a4eba",
        borderRadius: 10,
        marginVertical: 10,
        marginHorizontal: 5
    },

    subText: {
        // padding: 5,
        color: 'white',
        fontWeight: 'bold',
        fontSize: 25,
        marginTop: 10
    },

    cancelButton: {
        marginVertical: 20,
        marginHorizontal: 5,
        borderRadius: 15,
        backgroundColor: "#6a4eba",
    },
    cancelButtonText: {
        textAlign: "center",
        paddingVertical: 10,
        fontWeight: "bold",
        color: 'white'
    },
    linkContainer: {
        // borderWidth: 1,
        // borderColor: "#6a4eba",
        marginVertical: 7,
        marginHorizontal: 5,
        borderRadius: 10,
        backgroundColor: "#9183B9",
    },
    linkText: {
        paddingLeft: 5,
        color: 'black',
        fontWeight: 'bold',
    },

    linkHeader: {
        fontSize: 15,
        fontWeight: 'bold',
        paddingLeft: 5,
        paddingTop: 4,
        color: "white"
    },
    linkURL: {
        paddingVertical: 5,
        paddingLeft: 5,
        color: "white",
        fontSize: 12
    },
    informationCard: {
        justifyContent: 'center',
        // flex: 1,
        alignItems: 'center',
        marginVertical: 20
    }
})