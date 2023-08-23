import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LoginScreen from './screens/LoginScreen';
import RegisterScreen from './screens/RegisterScreen';
import HomeScreen from './screens/HomeScreen';
import CreatePost from './screens/CreatePost';
import SinglePost from './screens/SinglePost';

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen options={{ headerShown: false }} name="login" component={LoginScreen} />
        <Stack.Screen options={{ headerShown: false }} name="register" component={RegisterScreen} />
        <Stack.Screen options={{ headerShown: false }} name="home" component={HomeScreen} />
        <Stack.Screen options={{ headerShown: false }} name="create" component={CreatePost} />
        <Stack.Screen options={{ headerShown: false }} name="single" component={SinglePost} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default App

