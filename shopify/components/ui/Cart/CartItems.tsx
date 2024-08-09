import { useCart } from "@/components/context/CartContext";
import CartList from "@/components/ui/Cart/CartList";
import { Button, ScrollView, Text } from "react-native";

export default function CartItem() {
  const { cartItems, checkOut } = useCart();
  const renderCheckoutButton = cartItems.length > 0 ? (
    <Button title="Check Out" onPress={checkOut} className="bg-blue-800 text-cyan-50"/>
  ) : null;
  return (

    <ScrollView>
        <Text className="text-center p-14 text-blue-800 text-light text-5xl">
            Cart
          </Text>
          <CartList />
          {renderCheckoutButton}
    </ScrollView>
  );
}
