import { Alert, ScrollView, Text, TouchableOpacity, View } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context';
import { useNavigation } from '@react-navigation/native'
import React, { useState } from 'react'
import { Button, TextInput } from '@react-native-material/core';
import { heightPercentageToDP, widthPercentageToDP } from 'react-native-responsive-screen';
import { dark, backendLink, light } from '../constants/constants';
import axios from 'axios';
import { ChevronLeftIcon } from 'react-native-heroicons/outline';


const CreatePost = () => {
    const navigation = useNavigation('')

    const [title, setTitle] = useState("")
    const [desc, setDesc] = useState("")
    const [image, setImage] = useState("")
    const [writer, setWriter] = useState("")

    const handlePublish = () => {
        const blog = { title: title, desc: desc, image: image, writer: writer }
        axios.post(`${backendLink}/api/posts`, blog)
            .then((response) => {
                Alert.alert(
                    "Post Published",
                );
                setTitle("")
                setDesc("")
                setImage("")
                setWriter("")
                navigation.navigate('home')

            }).catch((err) => {
                Alert.alert(err.response.data.error)
            })
    }
    return (
        <SafeAreaView style={{ alignItems: 'center' }}>
            <ScrollView style={{ width: "90%", height: "100%" }}>
                <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', height: heightPercentageToDP(12.5), padding: 16 }}>
                    <TouchableOpacity
                        onPress={() => navigation.goBack()}
                        style={{
                            borderRadius: 50,
                            width: widthPercentageToDP(10),
                            height: widthPercentageToDP(10),
                            justifyContent: 'center',
                            alignItems: 'center',
                            backgroundColor: "#151515",
                            zIndex: 100
                        }}
                    >
                        <ChevronLeftIcon size={widthPercentageToDP(7)} strokeWidth={4} color={light} />
                    </TouchableOpacity>
                    <Text style={{ fontSize: 18, fontWeight: 700 }}>Create New Post</Text>
                </View>
                <View style={{ height: heightPercentageToDP(70) }}>
                    <TextInput
                        value={title}
                        onChangeText={(text) => setTitle(text)}
                        maxLength={50}
                        color='#111'
                        placeholder='Title'
                        style={{ marginBottom: 20 }} />
                    <TextInput
                        value={writer}
                        onChangeText={(text) => setWriter(text)}
                        maxLength={50}
                        color='#111'
                        placeholder='Publisher'
                        style={{ marginBottom: 20 }} />
                    <TextInput
                        value={desc}
                        onChangeText={(text) => setDesc(text)}
                        editable={true}
                        multiline
                        placeholder='Content'
                        numberOfLines={12}
                        color='#111'
                        style={{ marginBottom: 20 }}
                    />
                    <TextInput
                        value={image}
                        onChangeText={(text) => setImage(text)}
                        color='#111'
                        placeholder='Image URL'
                        style={{ marginBottom: 20 }} />
                </View>
                <View style={{ width: '100%', height: heightPercentageToDP(10), justifyContent: 'flex-end' }}>
                    <Button onPress={handlePublish} title="Publish" color={dark} uppercase={false} />
                </View>
            </ScrollView>
        </SafeAreaView >
    )
}

export default CreatePost


