import Products from '@/components/ui/ProductList/Products';
import React, { useState } from 'react';
import { View, Text, StyleSheet, Button, ScrollView, Image } from 'react-native';
import { useRoute, RouteProp, useNavigation } from '@react-navigation/native';
import imageMap from '@/components/imageMap';
import { useCart } from '@/components/context/CartContext';

type RootStackParamList = {
  ProductDetail: { id: number };
};

type ProductDetailRouteProp = RouteProp<RootStackParamList, 'ProductDetail'>;

const ProductDetail: React.FC = () => {
  const Navigation = useNavigation();
  const route = useRoute<ProductDetailRouteProp>();
  const { id } = route.params;
  const product = Products.find((p) => p.id === id);

  const { getItemQuantity, increaseCartQuantity, decreaseCartQuantity } = useCart();
  const [quantity, setQuantity] = useState(getItemQuantity(product.id));

  const handleDecrease = () => {
    if (quantity > 0) {
      decreaseCartQuantity(product.id)
      setQuantity(quantity - 1);
    }
  };

  const handleIncrease = () => {
    increaseCartQuantity(product.id);
    setQuantity(quantity + 1);
  };

  const handleAddToCart = () => {
    setQuantity(0);
  };

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
          <View className="flex-row items-center justify-center gap-6 px-5 pb-3 pt-2">
            <Button
              title="-"
              onPress={handleDecrease}
              disabled={quantity === 0}
            />
            <Text>{quantity}</Text>
            <Button title="+" onPress={handleIncrease} />
          </View>
          <View className ="flex-row gap-4 my-5 justify-center">
          <Button
            title="Add to Cart"
            onPress={handleAddToCart}
          />
          <Button title="Buy Now" onPress={()=>{Navigation.navigate('Cart')}}  />
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

export default ProductDetail;