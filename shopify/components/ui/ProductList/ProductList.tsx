import React from 'react';
import { View, StyleSheet, TouchableOpacity } from 'react-native';
import Products from './Products'; // Ensure this is an array of products
import Card from '@/components/ui/Card';
import { useNavigation } from '@react-navigation/core';
import { useRouter } from 'expo-router';

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 20,
    justifyContent: 'space-evenly',
    alignItems: 'center',
    marginVertical: 50,
  },
});

export default function ProductList() {
  const router = useRouter();
  const navigation = useNavigation();

  const handleCardPress = (id: string) => {
    console.log(id)
    navigation.navigate('ProductDetail', { id });
  };

  return (
    <View style={styles.container}>
      {Products.map((product) => (
        <TouchableOpacity key={product.id} onPress={() => handleCardPress(product.id)}>
          <Card {...product} />
        </TouchableOpacity>
      ))}
    </View>
  );
}
