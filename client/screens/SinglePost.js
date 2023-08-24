import { Image, SafeAreaView, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'
import { heightPercentageToDP, widthPercentageToDP } from 'react-native-responsive-screen'
import { ChevronLeftIcon } from 'react-native-heroicons/outline';
import { darkGray, dark, light } from '../constants/constants';

const SinglePost = ({ route }) => {
  const Capitalize = (str) => {
    return str.charAt(0).toUpperCase() + str.slice(1);
  }
  const navigation = useNavigation();
  const { title, desc, image, author } = route.params;
  return (
    <SafeAreaView>
      <ScrollView style={{ height: heightPercentageToDP(100) }}>
        <View>
          <Image
            src={image}
            style={{
              width: widthPercentageToDP(100),
              height: widthPercentageToDP(90),
            }}
          />
        </View>
        <View style={{ padding: 16, borderTopLeftRadius: 35, borderTopRightRadius: 35, position: 'relative', top: -28, backgroundColor: { light } }}>
          <Text style={{ textAlign: 'center', fontStyle: 'italic' }}>{author}</Text>
          <Text style={{
            fontSize: widthPercentageToDP(5.5),
            color: { dark },
            fontWeight: '600',
            marginTop: 16,
            textAlign: 'center'
          }}>{Capitalize(title)}</Text>
          <Text style={{
            fontSize: widthPercentageToDP(4),
            color: { darkGray },
            fontWeight: '400',
            marginTop: 24,
            textAlign: 'justify'
          }}>{Capitalize(desc)}</Text>
        </View>

      </ScrollView>
      <TouchableOpacity
        onPress={() => navigation.goBack()}
        style={{
          borderRadius: 50,
          width: widthPercentageToDP(16),
          height: widthPercentageToDP(16),
          justifyContent: 'center',
          alignItems: 'center',
          backgroundColor: {dark},
          position: 'absolute',
          bottom: 10,
          right: 10,
          zIndex: 100
        }}
      >
        <ChevronLeftIcon size={widthPercentageToDP(7)} strokeWidth={4} color={light} />
      </TouchableOpacity>
    </SafeAreaView>
  )
}

export default SinglePost

const styles = StyleSheet.create({})