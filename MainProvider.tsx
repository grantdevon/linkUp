import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Provider } from 'react-redux'
import App from './App'
import { store } from './src/redux/store'

const MainProvider = () => {
  return (
    <Provider store={store}>
        <App/>
    </Provider>
  )
}

export default MainProvider

const styles = StyleSheet.create({})