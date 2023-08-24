import { Image, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import { LinearGradient } from 'expo-linear-gradient'
import { heightPercentageToDP, widthPercentageToDP } from 'react-native-responsive-screen';
import { useNavigation } from '@react-navigation/native';
import { light } from '../constants/constants';

const blog = (props) => {
    const navigation = useNavigation('')

    const handleSinglePost = () => {
        navigation.navigate('single', {
            title: props.title,
            desc: props.desc,
            image: props.image,
            id: props.id,
            author: props.author,
        })
    }

    return (
        <TouchableOpacity
            onPress={handleSinglePost}
            style={{
                width: widthPercentageToDP(90),
                height: widthPercentageToDP(65),
                display: 'flex',
                justifyContent: 'flex-end',
                position: 'relative',
                padding: 24,
                marginBottom: 32,
            }}
        >
            <Image
                src={props.image}
                style={{
                    width: widthPercentageToDP(90),
                    height: widthPercentageToDP(65),
                    borderRadius: 35,
                    position: 'absolute'
                }}
            />

            <LinearGradient
                colors={['transparent', 'rgba(0,0,0,0.8)']}
                style={{
                    width: widthPercentageToDP(90),
                    height: heightPercentageToDP(30),
                    borderBottomLeftRadius: 35,
                    borderBottomRightRadius: 35,
                    position: 'absolute',
                    bottom: 0,
                }}
                start={{ x: 0.5, y: 0 }}
                end={{ x: 0.5, y: 1 }}
            />

            <Text
                numberOfLines={2}
                style={{
                    fontSize: widthPercentageToDP(4.5),
                    color: { light },
                    fontWeight: '600',
                    marginBottom: 8,
                }}>{props.title}</Text>
            <Text
                numberOfLines={2}
                style={{
                    fontSize: widthPercentageToDP(3),
                    fontWeight: '400',
                    color: { light }
                }}>{props.desc}</Text>

        </TouchableOpacity>
    )
}

export default blog