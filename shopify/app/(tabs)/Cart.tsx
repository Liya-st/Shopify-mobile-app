import { useCart } from "@/components/context/CartContext";
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
        <>
        <Text className="text-center p-14 text-blue-800 text-light text-5xl">
        Cart
      </Text>
      <CartList />
      <Button title="Check Out" className="bg-blue-800 text-cyan-50" />
      </>
      ):(

        <Redirect />
      )
      }
    </ScrollView>
  );
}
