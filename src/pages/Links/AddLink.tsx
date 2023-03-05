import { StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import uuid from 'react-native-uuid';
import { Link } from '../../Interfaces/Link.interface';
import { updateDocument } from '../../Sevices/firestore.service';
import { auth } from '../../Firebase/firebase.config';

const AddLink = ({
    setAddLinkModal,
    refresh
}) => {

    const [link, setLink] = useState<Link>({
        name: "",
        url: "",
        id: uuid.v4(),
        isActive: true
    })

    const addLink = () => {
        // TODO: add better validation
        if (link.name?.length > 0 && link.url?.length > 0) {
            let id = auth.currentUser?.uid
            console.log(link)
            updateDocument(id, "links", link).then(() => {
                console.log("created new link")
                setAddLinkModal(false)
                refresh()
            }).catch(error => {
                console.log(error)
                setAddLinkModal(false)
            })
        }

    }


    return (
        <View style={styles.container}>
            <Text style={styles.headerText}>Add your link here:</Text>

            <View style={styles.inputContainer}>
                <TextInput
                    style={styles.input}
                    placeholder='name'
                    value={link.name}
                    placeholderTextColor={"#565657"}    
                    onChangeText={name => {
                        let obj: Link = { ...link }
                        obj.name = name
                        setLink(obj)
                    }}
                />
            </View>

            <View style={styles.inputContainer}>
                <TextInput
                    style={styles.input}
                    placeholder='url'
                    placeholderTextColor={"#565657"}
                    value={link.url}
                    onChangeText={url => {
                        let obj: Link = { ...link }
                        obj.url = url
                        setLink(obj)
                    }}
                />
            </View>

            <View style={[styles.actionButtons, {
                marginTop: 50
            }]}>
            <TouchableOpacity
                onPress={addLink}   
            >
                <Text style={styles.actionButtonText}>Add Link</Text>
            </TouchableOpacity>
            </View>

            <View style={[styles.actionButtons, {
                borderWidth: 0
            }]}>
            <TouchableOpacity
                onPress={() => setAddLinkModal(false)}
            >
                <Text style={styles.actionButtonText}>Cancel</Text>
            </TouchableOpacity>
            </View>

            

            
        </View>
    )
}

export default AddLink

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
    },
    headerText: {
        fontSize: 25,
        fontWeight: 'bold',
        paddingTop: 5,
        paddingLeft: 5,
        color: "#080808"
    },
    inputContainer: {
        paddingHorizontal: 5,
        paddingVertical: 10
    },
    input: {
        borderBottomColor: "#CBC3E3",
        borderBottomWidth: 1,
        color: "#080808"
    },
    actionButtons: {
        borderRadius: 15,
        borderColor: "#CBC3E3",
        borderWidth: 1,
        margin: 10
    },
    actionButtonText: {
        textAlign: 'center',
        paddingVertical: 10,
        color: "#080808"

    }
})