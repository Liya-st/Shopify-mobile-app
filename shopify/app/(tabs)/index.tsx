import { Image, StyleSheet, Platform, ScrollView, View, Text } from 'react-native';

import { HelloWave } from '@/components/HelloWave';
import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
export default function HomeScreen() {
  return (
    <ScrollView>
      <View>
        <Image source={require('@/assets/images/Homepage.webp')}
        className ="h-[450px] w-full"
        />
      </View>
      <View className = "absolute top-1/2 left-1/4 transform -translate-x-1/3 -translate-y-1/2 mx-5  text-white">
        <Text className= "text-2xl font-bold font-mono mt-5 text-white w-48 text-left">
        Shop The Top Brand Electronic
        </Text>
        <Text className = "text-1xl italic w-4/5  my-5 text-white">
        Get the best electronic products at the best price
        </Text>
        <Text className = "text-sm font-semibold font-sans text-center  p-2 bg-blue-500 rounded-3xl w-32 text-white">
Shop Now
        </Text>
      </View>
      </ScrollView>
  );
}
