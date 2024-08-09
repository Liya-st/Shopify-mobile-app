import { Text, View } from 'react-native'
import React from 'react'
import { Link } from 'expo-router'

const Redirect = () => {
  return (
  
    <View className="w-full flex justify-center my-80">
    <Text className = "text-4xl text-center font-bold mb-10 mx-2">   Register as a user and experience the convenience of shopping at your fingertips.       
    
    </Text>
    <Link href="/login" className="bg-blue-500 py-4 mb-4 rounded-lg block text-center">
      <Text className="text-3xl text-white text-center">Login</Text>
    </Link>

    <Link href="/signup" className="bg-gray-300 py-4 rounded-lg block text-center">
      <Text className="text-3xl text-blue-500 text-center font-bold">
        Sign-up
      </Text>
    </Link>
  </View>
  )
}

export default Redirect

