
import Products from '@/components/ui/ProductList/Products';
import React from 'react';
import { View, Text, StyleSheet, Button, ScrollView, Image } from 'react-native';
import { useRoute, RouteProp } from '@react-navigation/native';
import imageMap from '@/components/imageMap';

type RootStackParamList = {
  ProductDetail: { id: number };
};

type ProductDetailRouteProp = RouteProp<RootStackParamList, 'ProductDetail'>;

const ProductDetail: React.FC = () => {
  const route = useRoute<ProductDetailRouteProp>();
  const { id } = route.params;
const product = Products.find((p) => p.id === id);

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
            <View className = 'flex  gap-10'>
              <Text className="pl-5 text-xl font-bold">Description</Text>
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
  
// const styles = StyleSheet.create({
//   button :{
//     backgroundColor: '#4CAF50',
//     marginVertical:20,
//   }
// })

export default ProductDetail;
