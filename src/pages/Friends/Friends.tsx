import { FlatList, StyleSheet, Text, View, Modal, TouchableOpacity } from 'react-native'
import React, { useEffect, useState } from 'react'
import { fetchSubCollection } from '../../Sevices/firestore.service'
import { auth } from '../../Firebase/firebase.config'
import { Skeleton } from '@rneui/themed';
import { Avatar } from '@rneui/themed';
import FriendsModal from './FriendsModal';
import { useSelector } from 'react-redux';
import Empty from '../../Components/Empty.component';


const Friends = () => {

  const [showModal, setShowModal] = useState<boolean>(false)
  const [friend, setFriend] = useState(null)

  const  {friends, loading}  = useSelector(state => state.friends)

  

  const friendsModal = (friend: any) => {
    setFriend(friend)
    setShowModal(showModal ? false : true)
  }

  const Item = ({ item }) => (
    <View >
      <TouchableOpacity 
      style={styles.item} 
      onPress={() => friendsModal(item)}>

      <View style={styles.avatar}>
        <Avatar
          size={45}
          rounded
          title={item.name[0]}
          containerStyle={{ backgroundColor: "#6a4eba" }}
        />
      </View>
      <View>
        <Text style={styles.title}>{item.name}</Text>
        <Text style={styles.subTitle}>{item.note}</Text>
      </View>
      </TouchableOpacity>

    </View>
  );

  if (loading) {
    <View>
      <Skeleton width={120} height={40} />
    </View>
  }


  return (
    <View>
      <Modal
        animationType='slide'
        visible={showModal}
      >
        <FriendsModal 
        friend={friend} 
        setShowModal={setShowModal}/>
      </Modal>
      <FlatList
        data={friends}
        renderItem={Item} 
        ListEmptyComponent={<Empty text='Well this is awkward... you got no friends'/>}
        />
    </View>
  )
}


export default Friends

const styles = StyleSheet.create({

  item: {
    backgroundColor: 'white',
    marginVertical: 8,
    marginHorizontal: 5,
    borderRadius: 15,
    borderColor: "#6a4eba",
    borderWidth: 1,
    flexDirection: 'row'
  },
  title: {
    fontSize: 15,
    fontWeight: 'bold',
    paddingLeft: 5,
    paddingTop: 4,
    color: "#080808"
  },
  subTitle: {
    paddingLeft: 5,
    color: "#565657",
    paddingVertical: 4
  },
  avatar: {
    justifyContent: 'center',
    padding: 4
  }
})