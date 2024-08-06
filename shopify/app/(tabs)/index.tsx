import { Image, StyleSheet, Platform, Button, StatusBar, ImageBackground } from "react-native";

import { HelloWave } from "@/components/HelloWave";
import ParallaxScrollView from "@/components/ParallaxScrollView";
import { ThemedText } from "@/components/ThemedText";
import { ThemedView } from "@/components/ThemedView";
import { Text, View, SafeAreaView, Alert } from "react-native";
import { Link } from 'expo-router';

export default function HomeScreen() {

  return (
    <View>
     
      <ImageBackground
        source={require("../../assets/images/Products.jpg")}
        className="w-full h-full "
      ></ImageBackground>
       <View className='absolute top-80 left-20'>
        <Text className='text-3xl text-green-200 '>Welcome to Shopify</Text>
       
      </View>
      <View className='absolute top-96 left-10'>
      <Text className='text-green-200'>Simplify, Enhance, Excel - Your Shopify Journey Starts Here</Text>
       
      </View>
      
      <View className="absolute bottom-28 w-full h-16 bg-red-400 flex justify-center items-center rounded-3xl">
        <Text className="text-4xl text-slate-300">
          <Link href='/login'>Login</Link>
        </Text>
      </View>
      <View className="absolute bottom-10 w-full h-16 bg-blue-300 flex justify-center items-center rounded-3xl">
      <Text className="text-4xl">
          <Link href='/signup'>Sign-up</Link>
        </Text>
      </View>
      <Link href='/users/1'>users</Link>
    </View>
  );
}
