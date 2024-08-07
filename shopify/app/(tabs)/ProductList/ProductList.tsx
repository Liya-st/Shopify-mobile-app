import React from 'react'
import { View, StyleSheet, TouchableOpacity } from 'react-native'
import Products from './Products'
import Card from '@/components/ui/Card'
import { useNavigation } from '@react-navigation/native'
import { router } from 'expo-router'


const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 20,
    justifyContent: 'space-evenly',
    alignItems: 'center',
    marginVertical: 50,
  },
})

export default function ProductList() {
  // const navigation = useNavigation()

  const handleCardPress = (id: number) => {
    router.push({
      pathname:"/(tabs)ProductList[id]",
      params: {id: id}
    })
  }
  return (
    <View style={styles.container}>
      {Products.map((product) => (
        <TouchableOpacity key={product.id} onPress={() => handleCardPress(product.id)}>
        <Card {...product} key={product.id} />
        </TouchableOpacity>
      ))}
    </View>
  )
}