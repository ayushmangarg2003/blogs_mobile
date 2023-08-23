import { Alert, Text, View } from 'react-native'
import React, { useState } from 'react'
import { useNavigation } from '@react-navigation/native'
import { SafeAreaView } from 'react-native-safe-area-context'
import { backendLink, dark, darkGray, light } from '../constants/constants'
import { Button, Snackbar, TextInput } from '@react-native-material/core'
import axios from 'axios'

const RegisterScreen = () => {
  const navigation = useNavigation('')

  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState(null);

  const handleRegister = () => {

    const user = { name: name, email: email, password: password }
    axios.post(`${backendLink}/api/auth/register`, user)
      .then((response) => {
        Alert.alert(
          "Registration successful",
        );
        setName("");
        setEmail("");
        setPassword("");
        navigation.navigate('login')

      }).catch((err) => {
        setError(err.response.data.error)
      })
  }

  const navigateToLogin = () => {
    navigation.navigate('login')
  }
  return (
    <SafeAreaView>
      <View style={{ backgroundColor: light, width: '100%', height: "100%", justifyContent: 'center', alignItems: 'center' }}>
        <View style={{ width: '75%', gap: 40 }}>

          <View style={{ alignItems: 'center', }}>
            <Text style={{ fontSize: 24, fontWeight: 700 }}>REGISTER</Text>
          </View>

          <View style={{ width: '100%' }}>
            <View>
              <TextInput value={name} onChangeText={(text) => setName(text)} color={dark} placeholder='Name' style={{ marginHorizontal: 8, marginVertical: 8 }} />

              <TextInput value={email} onChangeText={(text) => setEmail(text)} color={dark} placeholder='Email' style={{ marginHorizontal: 8, marginVertical: 8 }} />

              <TextInput value={password} onChangeText={(text) => setPassword(text)} color={dark} placeholder='Password' secureTextEntry={true} style={{ marginHorizontal: 8, marginVertical: 8 }} />

              <Button onPress={handleRegister} title="Register" backgroundColor={dark} style={{ marginHorizontal: 8, padding: 8, marginTop: 8 }} />

              <Text style={{color:'red', textAlign:'center', marginTop:4}}>{error}</Text>
            </View>

            <View>
              <Button onPress={navigateToLogin} variant="text" color={darkGray} uppercase={false} style={{ marginHorizontal: 8 }} title="Have an Account? Login" />
            </View>
          </View>

        </View>
      </View>
    </SafeAreaView>
  )
}

export default RegisterScreen

