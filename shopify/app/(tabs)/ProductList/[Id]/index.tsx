import React from "react";
import { View, Text, ScrollView, Button, Image } from "react-native";
import products from "../Products";
import imageMap from "@/components/imageMap";
import { useLocalSearchParams } from "expo-router";

const Display = () => {
 const searchParams = useLocalSearchParams();
  const idParam = searchParams.get('id');
  const productId = idParam ? parseInt(idParam, 10) : NaN;
  const product = products.find((p) => p.id === productId);

  if (!product) {
    return (
      <View className="flex-1 justify-center items-center">
        <Text>Product not found.</Text>
      </View>
    );
  }

  return (
    <View className="pt-10">
      <ScrollView>
        <View className="m-6 rounded-md bg-gray-50 shadow-xl">
          <View className="flex-1 justify-center items-center">
            <Image
              source={imageMap[product.src]}
              alt=""
              resizeMode="cover"
              className="h-[200px] w-[150px]"
            />
          </View>
          <View className="bg-white outline-none">
            <Text className="p-2 text-black text-light text-xl font-bold">
              {product.title}
            </Text>
            <Text className="p-2 text-sm text-gray-400 ">${product.price}</Text>
          </View>
        </View>
        <View>
          <Text className="pl-2 text-xl font-bold">Description</Text>
          <Text className="p-5 text-md text-slate-800">
            {product.description}
          </Text>
          <Button title="Add to Cart" onPress={() => console.log("pressed")} />
          <Button title="Buy Now" />
        </View>
      </ScrollView>
    </View>
  );
};

export default Display;