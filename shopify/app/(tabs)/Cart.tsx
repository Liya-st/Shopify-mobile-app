import { useCart } from "@/components/context/CartContext";
import CartList from "@/components/ui/Cart/CartList";
import { Button, ScrollView } from "react-native";

export default function CartPage(){
  const { cartItems } = useCart();
    return(
    <ScrollView>
        <CartList/>
        <Button 
         title="Check Out"
        //  onPress={handlePress}
         className='bg-blue-800 text-cyan-50'
        />
    </ScrollView>
  )

}