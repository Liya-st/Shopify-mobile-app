import React from 'react'
import { View, StyleSheet } from 'react-native'
import Products from '../ProductList/Products'
import Card from '../Card'
import CartCard from './CartCard'

const styles = StyleSheet.create({
  container: {
    flexWrap: 'wrap',
    gap: 20,
    justifyContent: 'space-evenly',
    alignItems: 'center',
    marginVertical: 50,
  },
})

export default function CartList() {
  return (
    <View style={styles.container}>
      {Products.map((product) => (
        <CartCard {...product} key={product.id} />
      ))}
    </View>
  )
}