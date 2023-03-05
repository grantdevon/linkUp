import { StyleSheet, Switch, Text, View } from 'react-native'
import React, { useEffect, useState } from 'react'

const LinkToggle = ({isActive, id}) => {

    // TODO: fix this shit

    const [isEnabled, setIsEnabled] = useState<boolean>(false)

    useEffect(() => {
        setIsEnabled(isActive)
    })

    const toggleSwitch = () => {
        let active = isEnabled ? false : true
        console.log(active);
        
        setIsEnabled(active)
        isActive = active
        console.log(isEnabled);
        
    }

    console.log(id, " isActive")
  return (
    <View>
      <Switch 
        trackColor={{false: '#767577', true: '#c9c5d4'}}
        thumbColor={isEnabled ? '#6a4eba' : '#f4f3f4'}
        ios_backgroundColor="#3e3e3e"
        onValueChange={toggleSwitch}
        value={isEnabled}
      />
    </View>
  )
}

export default LinkToggle

const styles = StyleSheet.create({})