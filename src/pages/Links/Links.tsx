import { FlatList, StyleSheet, Text, View, Modal, RefreshControl, TouchableOpacity, Alert } from 'react-native'
import React, { useState } from 'react'
import { auth } from '../../Firebase/firebase.config'
import FAB from 'react-native-fab'
import AddLink from './AddLink'
import LinkToggle from './LinkToggle.component'
import { useDispatch, useSelector } from 'react-redux'
import { fetchUserLinks } from '../../redux/reducers/links.reducer'
import { Link } from '../../Interfaces/Link.interface'
import { Skeleton } from '@rneui/base'
import Empty from '../../Components/Empty.component'

const Links = () => {

  const [addLinkModal, setAddLinkModal] = useState<boolean>(false)
  const [refreshing, setRefreshing] = useState(false);
  const [toggle, setToggle] = useState<boolean>(false)
  const [link, setLink] = useState<Link>({})
  const linkLimit: number = 10

  let id = auth.currentUser?.uid

  const {links, loading} = useSelector(state => state.links)
  const dispatch = useDispatch()

  const onRefresh = React.useCallback(() => {
    setRefreshing(true);
    setTimeout(() => {
      let data = {
        id: id, 
        collectionName: 'links'
      }
      dispatch(fetchUserLinks(data))

      setRefreshing(false);
    }, 3000);
  }, []);

  const addLink = () => {
    console.log(links.length);
    
    if (links.length <= linkLimit - 1) {
      setAddLinkModal(true)
    } else {
      Alert.alert("You have reached your link limit. Sorry!")
    }
  }

  const editLink = (link: Link) => {
    setLink(link)
    setAddLinkModal(true)
  }


  const linksComponent = ({ item }) => {
    return (
      <TouchableOpacity style={styles.linkContainer}
        onPress={() => editLink(item)}
      >
          <View style={styles.linkData}>
            <Text style={styles.linkHeader}>
              {item.name}
            </Text>
            <Text style={styles.linkURL}>
              {item.url}
            </Text>
          </View>

          <View style={styles.toggle}>
            <LinkToggle
              id={item.id}
              isActive={item.isActive}

            />
          </View>
      </TouchableOpacity>
    )
  }

  if (loading) {
    // TODO add better styling
    return (
      <View>
        <Skeleton width={120} height={40} />
      </View>
    )
  }

  return (
    <View style={styles.container}>
      <View>
        <Modal
          visible={addLinkModal}
          animationType='slide'
        >
          <AddLink
            setAddLinkModal={setAddLinkModal}
            refresh={onRefresh}
            editlink={link}
            setEditLink={setLink}
          />
        </Modal>
      </View>

      <View>
        <FlatList
          data={links}
          renderItem={linksComponent}
          keyExtractor={item => item.id}
          refreshControl={
            <RefreshControl
              refreshing={refreshing}
              onRefresh={onRefresh}
            />
          }
          ListEmptyComponent={<Empty text='I dont want to come off
          passive-aggressive with the vibes but... you got no links'/>}
        />
      </View>

      <FAB
        buttonColor='#6a4eba'
        onClickAction={addLink}
      />
    </View>
  )
}

export default Links

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 10,
  },

  linkContainer: {
    paddingVertical: 5,
    borderRadius: 15,
    borderColor: "#6a4eba",
    borderWidth: 1,
    paddingHorizontal: 5,
    margin: 5,
    backgroundColor: 'white',
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  linkHeader: {
    fontSize: 15,
    fontWeight: 'bold',
    paddingLeft: 5,
    paddingTop: 4,
    color: "#080808"
  },
  linkURL: {
    paddingLeft: 5,
    paddingTop: 4,
    color: "#6a4eba"
  },
  linkData: {
    paddingBottom: 5
  },
  toggle: {
    alignItems: 'center',
    justifyContent: 'center'
  }

})