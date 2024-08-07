import React from 'react'
import { View, Image, Text } from 'react-native'

export default function Intro() {
  return (
    <View className = "flex justify-center items-center">
    <View>
        <Image source={require('@/assets/images/Homepage.jpg')}
        resizeMode='cover'
        />
      </View>
<View className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/4 items-center text-center text-white">        
<Text className= "text-7xl font-extrabold mt-5 text-white w-1/2 text-center">
        Shop The Top Brand Electronic
        </Text>
        <Text className = "text-3xl font-semibold w-1/2 my-5 text-white text-center">
        Get the best electronic products at the best price!
        </Text>
        <Text className = "text-xl font-bold font-sans text-center p-5 bg-blue-600 rounded-full w-40 text-white">
          Shop Now
        </Text>
      </View>
      </View>
  )
}
