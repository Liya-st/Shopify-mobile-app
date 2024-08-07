import CartList from "@/components/ui/Cart/CartList";
import ProductList from "@/components/ui/ProductList/ProductList";
import { Button, ScrollView } from "react-native";

export default function CartPage(){
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