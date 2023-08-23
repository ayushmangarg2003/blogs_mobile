import { ScrollView, StyleSheet, Text, View } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context';

import { Button } from "@react-native-material/core";

import React, { useState } from 'react';
import Blog from "../components/Blog"
import { useNavigation } from '@react-navigation/native';
import { backendLink, dark } from "../constants/constants"
import { heightPercentageToDP } from 'react-native-responsive-screen';
import axios from 'axios';
const HomeScreen = () => {
    const navigation = useNavigation()
    const [data, setData] = useState([])
    const handleClick = () => {
        navigation.navigate('create')
    }
    axios.get(`${backendLink}/api/posts`).then((res) => {
        setData(res.data.reverse())
    })
    return (
        <SafeAreaView style={{ width: '100%', height: "100%", gap: 20, justifyContent: 'center', alignItems: 'center' }}>
            <View style={{ width: '90%', flexDirection: 'row', height: "10%", justifyContent: 'space-between', alignItems: 'center' }}>
                <Text style={{ color: { dark }, fontSize: 22, fontWeight: 900 }}>BlogSPACE</Text>
                <Button onPress={handleClick} title="Write" color={dark} uppercase={false} />

            </View>
            <ScrollView style={{ width: '90%', height: heightPercentageToDP(100) }}>
                {data && data.map((item) => (
                    <Blog key={item._id} title={item.title} desc={item.desc} author={item.writer} image={item.image} />
                ))}

            </ScrollView>
        </SafeAreaView>
    )
}

export default HomeScreen

const styles = StyleSheet.create({})