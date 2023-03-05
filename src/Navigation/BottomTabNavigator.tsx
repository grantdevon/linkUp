import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomePage from '../pages/HomePage/HomePage';
import Friends from '../pages/Friends/Friends';
import Scanner from '../pages/Scanner/Scanner';
import Links from '../pages/Links/Links';
import Settings from '../pages/Settings/Settings';
import Icon from 'react-native-vector-icons/Ionicons';
import Icons from 'react-native-vector-icons/FontAwesome5'


const Tab = createBottomTabNavigator();

const BottomTabNavigator = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen 
      name="Home" 
      component={HomePage} 
      
      options={{
        // tabBarLabel: (() => null),
        tabBarActiveTintColor: "#6a4eba",
        // tabBarLabelStyle: {
        //   color: "black"
        // },
        tabBarIcon: (() => (
          <Icon 
          name='home'
          size={20}
          color={"black"}
          />
        ))
      }}
      />
      <Tab.Screen
      name="Friends" 
      component={Friends} 
      options={{
        // tabBarLabel: (() => null),
        // tabBarLabelStyle: {
        //   color: "#6a4eba"
        // },
        tabBarActiveTintColor: "#6a4eba",
        tabBarIcon: (() => (
          <Icons
          name='user-friends'
          size={20}
          color={"black"}/>
        ))
      }}
      />
      <Tab.Screen name="Scanner" component={Scanner} options={{
        // tabBarLabel: (() => null),
        // tabBarLabelStyle: {
        //   color: "#6a4eba"
        // },
        tabBarActiveTintColor: "#6a4eba",
        tabBarIcon: (() => (
          <Icon 
          name='camera'
          size={20}
          color={"black"}/>
        ))
      }}/>
      <Tab.Screen name="Links" component={Links} options={{
        // tabBarLabelStyle: {
        //   color: "#6a4eba"
        // },
        tabBarActiveTintColor: "#6a4eba",
        // tabBarLabel: (() => null),
        tabBarIcon: (() => (
          <Icon 
          name='link'
          size={20}
          color={"black"}/>
        ))
      }}/>
      <Tab.Screen name="Settings" component={Settings} options={{
        // tabBarLabelStyle: {
        //   color: "#6a4eba"
        // },
        tabBarActiveTintColor: "#6a4eba",
        // tabBarLabel: (() => null),
        tabBarIcon: (() => (
          <Icon 
          name='settings'
          size={20}
          color={"black"}/>
        ))
      }}/>
    </Tab.Navigator>
  )
}

export default BottomTabNavigator

const styles = StyleSheet.create({})