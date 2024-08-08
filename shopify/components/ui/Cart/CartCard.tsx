import { Button, Image, Text, View } from "react-native";
import imageMap from "@/components/imageMap";
import { useCart } from "@/components/context/CartContext";
import Products from "../ProductList/Products";
import cartMap from "@/components/cartMap";

interface CardWithTextProps {
  title?: string;
  price?: string;
  id?:number;
  quantity?:number,
}
export default function CartCard({ title, price,id,quantity }: CardWithTextProps){
    const item = Products.find(i=> i.id === id)
    const adjustedId = id - 1;
    return (
        <View className=" h-[200px] w-[150px] shadow-xl rounded-lg">
        <View className="flex-1 justify-center items-center">
          <Image
            source={cartMap[adjustedId]}
            alt=""
            resizeMode="cover"
            className="max-h-[200px] w-full"
          />
        </View>
        <View className='flex flex-row left-44 bottom-32'>
            {(item.title || item.price) && (
              <View className="flex flex-wrap outline-none">
                {item.title && (
                  <Text className="card-title p-2 text-black text-light">
                    {item.title}
                  </Text>              
                )}
                {item.price && (
                  <Text className="p-2 text-sm text-gray-400 ">${item.price}{quantity > 1 && (
                    <span className="text-muted" style={{ fontSize: ".65rem" }}>
                      x{quantity}
                    </span>)}</Text>
                )}
              </View>
            )}
        </View>
      </View>
    )
}