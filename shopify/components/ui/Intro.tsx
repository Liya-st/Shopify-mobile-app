import React from 'react'
import { View, Image, Text } from 'react-native'

export default function Intro() {
  return (
    <View>
    <View>
        <Image source={require('@/assets/images/Homepage.jpg')}
        resizeMode='cover'
        />
      </View>
      <View className = "absolute top-1/4 left-1/4  transform -translate-x-1/4 -translate-y-1/2 flex justify-center items-center text-white">
        <Text className= "text-6xl font-extrabold pr-10 mt-5 text-white w-2/3 text-center -ml-10">
        Shop The Top Brand Electronic
        </Text>
        <Text className = "text-3xl font-light w-2/3 pr-10 -ml-10 my-5 text-white text-center">
        Get the best electronic products at the best price!
        </Text>
        <Text className = "text-xl font-semibold font-sans text-center -ml-20 p-5 bg-blue-600 rounded-full w-40 text-white">
          Shop Now
        </Text>
      </View>
      </View>
  )
}
