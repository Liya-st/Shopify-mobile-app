import { useCart } from "@/components/context/CartContext";
import CartItem from "@/components/ui/Cart/CartItems";
import CartList from "@/components/ui/Cart/CartList";
import Redirect from "@/components/ui/Redirect";
import { auth } from "@/firebase/config";
import { Link } from "expo-router";
import { Button, ScrollView,Text, View } from "react-native";

export default function CartPage() {
  const { cartItems } = useCart();
  const currentUser = auth.currentUser;
  console.log(currentUser)
  return (
    <ScrollView>
      {currentUser ? (
      <CartItem/>
      ):
      (
        <Redirect/>
      )}
      
    </ScrollView>
    
  );
}
