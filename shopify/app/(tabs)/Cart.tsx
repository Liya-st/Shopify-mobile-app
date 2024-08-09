import { useCart } from "@/components/context/CartContext";
import CartItem from "@/components/ui/Cart/CartItems";
import CartList from "@/components/ui/Cart/CartList";
import { Button, ScrollView, Text } from "react-native";

export default function CartPage() {
  const { cartItems } = useCart();
  return (
    <CartItem/>
  );
}
