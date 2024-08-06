import { Image, StyleSheet, Platform, ScrollView, View, Text } from 'react-native';
import Intro from '@/components/ui/Intro';
import Card from '@/components/ui/Card';
import Products from '@/components/ui/ProductList/Products';

export default function HomeScreen() {
  return (
    <ScrollView>
      <Intro />
      <View className = "flex flex-col-reverse">
    {Products.map((product)=>(
      <Card key={product.id} src = {product.src} price={product.price} title={product.title}/>
    ))}
    </View>
      </ScrollView>
  );
}
