import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomePage from '../pages/HomePage/HomePage';
import Friends from '../pages/Friends/Friends';
import Scanner from '../pages/Scanner/Scanner';
import Links from '../pages/Links/Links';
import Settings from '../pages/Settings/Settings';
import Login from '../pages/Login/Login';



const Tab = createBottomTabNavigator();

const BottomTabNavigator = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Home" component={HomePage} />
      <Tab.Screen name="Friends" component={Friends} />
      <Tab.Screen name="Scanner" component={Scanner} />
      <Tab.Screen name="Links" component={Links} />
      <Tab.Screen name="Settings" component={Settings} />
    </Tab.Navigator>
  )
}

export default BottomTabNavigator

const styles = StyleSheet.create({})