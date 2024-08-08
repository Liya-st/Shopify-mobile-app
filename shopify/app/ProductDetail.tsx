import Products from '@/components/ui/ProductList/Products';
import React from 'react';
import { View, Text, StyleSheet, Button, ScrollView, Image } from 'react-native';
import { useRoute, RouteProp, useNavigation } from '@react-navigation/native';
import imageMap from '@/components/imageMap';
import { useCart } from '@/components/context/CartContext';

type RootStackParamList = {
  ProductDetail: { id: number };
};

type ProductDetailRouteProp = RouteProp<RootStackParamList, 'ProductDetail'>;


const ProductDetail: React.FC = () => {
  
  const Navigation = useNavigation()
  const route = useRoute<ProductDetailRouteProp>();
  const { id } = route.params;
  const product = Products.find((p) => p.id === id);

  const { getItemQuantity, increaseCartQuantity, decreaseCartQuantity } = useCart();
  const quantity = getItemQuantity(product.id);

  return (
    <View className="pt-10 h-full">
      <ScrollView>
        <View className="m-6 rounded-md bg-gray-50 shadow-xl ">
          <View className="flex-1 justify-center items-center">
            <Image
              source={imageMap[product.src]}
              alt=""
              resizeMode="cover"
              className="max-h-full max-w-full"
            />
          </View>
          <View className="bg-white outline-none">
            <Text className="p-2 text-black text-light text-xl font-bold">
              {product.title}
            </Text>
            <Text className="p-2 text-sm text-gray-400 ">${product.price}</Text>
          </View>
        </View>
        <View className="flex">
          <Text className="pl-5 text-xl font-bold">Description</Text>
          <Text className="p-5 text-lg text-slate-800">
            {product.description}
          </Text>
          <View className="flex items-center justify-between px-5">
            <Button
              title="-"
              onPress={() => decreaseCartQuantity(product.id)}
              disabled={quantity === 0}
            />
            <Text>{quantity}</Text>
            <Button title="+" onPress={() => increaseCartQuantity(product.id)} />
          </View>
          <Button
            title="Add to Cart"
            onPress={() => increaseCartQuantity(product.id)}
          />
          <Button title="Buy Now" onPress={()=>{Navigation.navigate('/(tab)/cart')}} />
        </View>
      </ScrollView>
    </View>
  );
};

  

export default ProductDetail;

