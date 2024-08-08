import { useCart } from "@/components/context/CartContext";
import CartList from "@/components/ui/Cart/CartList";
import { Button, ScrollView,Text } from "react-native";

export default function CartPage() {
  const { cartItems } = useCart();
  return (
    <ScrollView>
      <Text className="text-center p-14 text-blue-800 text-light text-5xl">
        Cart
      </Text>
      <CartList />
      <Button title="Check Out" className="bg-blue-800 text-cyan-50" />
    </ScrollView>
  );
}
