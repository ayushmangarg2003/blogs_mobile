import { Pressable, StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import { useNavigation } from '@react-navigation/native'
import { SafeAreaView } from 'react-native-safe-area-context'
import { backendLink, dark, darkGray, light, error } from '../constants/constants'
import { Button, TextInput } from '@react-native-material/core'
import axios from 'axios'

const LoginScreen = () => {
    const navigation = useNavigation('')

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [error, setError] = useState(null);

    const handleLogin = async() => {
        const user = { email: email, password: password }
        await axios.post(`${backendLink}/api/auth/login`, user)
            .then((response) => {
                setEmail("");
                setPassword("");
                navigation.navigate('home')
                setError(null)
            }).catch((err) => {
                setError(err.response.data.error)
            })
    }

    const navigateToRegister = () => {
        navigation.navigate('register')
    }
    return (
        <SafeAreaView>
            <View style={{ backgroundColor: light, width: '100%', height: "100%", justifyContent: 'center', alignItems: 'center' }}>
                <View style={{ width: '75%', gap: 40 }}>
                    <View style={{ alignItems: 'center', }}>
                        <Text style={{ fontSize: 24, fontWeight: 700 }}>SIGN IN</Text>
                    </View>
                    <View style={{ width: '100%' }}>
                        <View>
                            <TextInput value={email} onChangeText={(text) => setEmail(text)} placeholder='Email' color={dark} style={{ marginHorizontal: 8, marginVertical: 8 }} />

                            <TextInput value={password} onChangeText={(text) => setPassword(text)} placeholder='Password' secureTextEntry={true} color={dark} style={{ marginHorizontal: 8, marginVertical: 8 }} />
                            <Button onPress={handleLogin} title="Login" backgroundColor={dark} style={{ marginHorizontal: 8, padding: 8, marginTop: 8 }} />
                            <Text style={{ color: {error}, textAlign: 'center', marginTop: 4 }}>{error}</Text>

                        </View>
                        <View>
                            <Button onPress={navigateToRegister} variant="text" color={darkGray} uppercase={false} style={{ marginHorizontal: 8 }} title="New Here? Register" />
                        </View>
                    </View>
                </View>
            </View>
        </SafeAreaView>
    )
}

export default LoginScreen