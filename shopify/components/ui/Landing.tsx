import { View, Text, ImageBackground } from 'react-native'
import React from 'react'
import { Link } from 'expo-router'

const Landing = () => {
  return (
    <View>
     
      <ImageBackground
        source={require("../../assets/images/Products.jpg")}
        className="w-full h-full "
      ></ImageBackground>
       <View className='absolute top-1/4 flex justify-center items-center gap-10'>
        <Text className='text-5xl text-green-200 text-center font-bold  '>Welcome to Shopify</Text>
        <Text className='text-green-200 text-2xl w-2/3'>Simplify, Enhance, Excel - Your Shopify Journey Starts Here</Text>
      </View>
      <View className='absolute top-96 left-10'>
       
      </View>
      
      <View className="absolute bottom-10 w-full h-16 bg-blue-500 flex justify-center items-center rounded">
        <Text className="text-4xl text-black ">
          <Link href='/login'>Login</Link>
        </Text>
      </View>

      <View className="absolute bottom-28 w-full h-16 bg-gray-300  flex justify-center items-center rounded">
      <Text className="text-4xl text-blue-500 font-bold">
          <Link href='/signup'>Sign-up</Link>
        </Text>
      </View>
    </View>
  )
}

export default Landing