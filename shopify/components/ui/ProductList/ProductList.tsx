import React from 'react'
import { View, StyleSheet } from 'react-native'
import Products from './Products'
import Card from '../Card'

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
  return (
    <View style={styles.container}>
      {Products.map((product) => (
        <Card {...product} key={product.id} />
      ))}
    </View>
  )
}