// import { Image, StyleSheet, Platform, Button, StatusBar, ImageBackground } from "react-native";

import { auth } from "@/firebase/config";
import Home from "../home";
import { View } from "react-native";
import Landing from "@/components/ui/Landing";

// import { HelloWave } from "@/components/HelloWave";
// import ParallaxScrollView from "@/components/ParallaxScrollView";
// import { ThemedText } from "@/components/ThemedText";
// import { ThemedView } from "@/components/ThemedView";
// import { Text, View, SafeAreaView, Alert } from "react-native";
// import { Link } from 'expo-router';

export default function HomeScreen() {
  const currentUser = auth.currentUser
  console.log(currentUser)  
  return (
    <View>
    {currentUser && <Home />}
    {!currentUser && <Landing />}
    </View>
  );
}
