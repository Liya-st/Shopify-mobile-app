import React from 'react'
import { View, StyleSheet } from 'react-native'
import Card from '../Card'
import CartCard from './CartCard'
import Products from '@/components/ui/ProductList/Products'
import { useCart } from '@/components/context/CartContext'

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
    const { cartItems } = useCart();
    
  return (
    <View style={styles.container}>
      {cartItems.map((item) => (
        <CartCard  key={item.id} {...item} />
      ))}
    </View>
  )
}