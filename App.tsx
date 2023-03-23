import React, { useEffect, useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomePage from './src/pages/HomePage/HomePage';
import BottomTabNavigator from './src/Navigation/BottomTabNavigator';
import { onAuthStateChanged } from 'firebase/auth';
import { auth } from './src/Firebase/firebase.config';
import Login from './src/pages/Login/Login';
import { Provider, useDispatch } from 'react-redux';
import { store } from './src/redux/store';
import { fetchUserDetails } from './src/redux/reducers/user.reducer';
import { fetchFriends } from './src/redux/reducers/friends.reducer';
import { fetchUserLinks } from './src/redux/reducers/links.reducer';
import ConfirmEmail from './src/Components/ConfirmEmail.component';


const Stack = createNativeStackNavigator();

const App = () => {

  const [showLogin, setShowLogin] = useState<boolean>(false)
  const [isVerified, setIsVerified] = useState<boolean>(true)

  const dispatch = useDispatch()

  useEffect(() => {
    const subscribe = onAuthStateChanged(auth, user => {
      user?.reload()
      if (user && user !== null) {
        dispatch(fetchUserDetails(user.uid))
        let data = {
          id: user.uid, 
          collectionName: 'friends'
        }
        console.log(user);
        
        dispatch(fetchFriends(data))
        dispatch(fetchUserLinks({...data, collectionName: "links"}))
        setShowLogin(false)
        setIsVerified(user.emailVerified)

      } else {
        setShowLogin(true)
      }
    })
    return subscribe
  }, [isVerified])

  if (!isVerified) {
    return (
      <ConfirmEmail setIsVerified={setIsVerified}/>
    )
  }

  return (
    <Provider store={store}>
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
    </Provider>

  );
};

export default App;
