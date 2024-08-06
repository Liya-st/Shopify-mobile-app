import React from "react";
import { View, Text, Image, ScrollView, TextInput, Button,Modal, Pressable } from "react-native";
const device = require("@/assets/images/CorrDesktop.webp")

const Display = () => {
  return (
    <View className="pt-10">
      <ScrollView >
        <Image source  = {device}
        className = "m-6 rounded-md"
        
        // style ={{width : 300, height :400 }}
        />
        <View>
        <Text className = "pl-2 text-xl bold  ">
          Discription
        </Text>
        <Text className = "p-5 text-md text-slate-800">
        A smartphone is a versatile mobile device that combines the functionality of a computer with the portability of a phone. It typically features a touchscreen interface, allowing users to interact with various applications and services. Smartphones are equipped with powerful processors, ample storage, and high-resolution cameras, making them suitable for a wide range of tasks such as browsing the internet, taking photos and videos, sending messages, and making calls. They also support connectivity options like Wi-Fi, Bluetooth, and cellular networks, enabling seamless communication and access to information on the go.
        </Text>
        <Pressable></Pressable>
        <Button title= "Add to Cart" onPress={()=>console.log("pressed")}/>
        <Button title = "Buy Now" />

        </View>
      
      </ScrollView>
    </View>
  );
};

export default Display;

