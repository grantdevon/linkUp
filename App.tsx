import React, { useEffect, useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomePage from './src/pages/HomePage/HomePage';
import BottomTabNavigator from './src/Navigation/BottomTabNavigator';
import { onAuthStateChanged } from 'firebase/auth';
import { auth } from './src/Firebase/firebase.config';
import Login from './src/pages/Login/Login';


const Stack = createNativeStackNavigator();

const App = () => {

  const [showLogin, setShowLogin] = useState<boolean>(false)

  useEffect(() => {
    const subscribe = onAuthStateChanged(auth, user => {
      if (user && user !== null) {
        setShowLogin(false)
      } else {
        setShowLogin(true)
      }
    })
    return subscribe
  }, [])


  return (
    <NavigationContainer>
      <Stack.Navigator>
        {
          showLogin ?
            <>
              <Stack.Screen name='Login' component={Login} />
            </>
            :
            <>
              <Stack.Screen
                name='BottomTabNavigation'
                component={BottomTabNavigator}
                options={{
                  headerShown: false
                }}
              />
            </>
        }

      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
