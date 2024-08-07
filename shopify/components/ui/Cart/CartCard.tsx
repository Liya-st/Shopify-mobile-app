import { Image, Text, View } from "react-native";
import imageMap from "@/components/imageMap";
import { useCart } from "@/components/context/CartContext";

interface CardWithTextProps {
  src: keyof typeof imageMap;
  title?: string;
  price?: string;
}
export default function CartCard({ src, title, price }: CardWithTextProps){
    
    return (
        <View className=" h-[200px] w-[150px] shadow-xl rounded-lg">
        <View className="flex-1 justify-center items-center">
          <Image
            source={imageMap[src]}
            alt=""
            resizeMode="cover"
            className="max-h-[200px] w-full"
          />
        </View>
        <View className='flex flex-row left-44 bottom-32'>
            {(title || price) && (
              <View className="flex flex-wrap outline-none">
                {title && (
                  <Text className="card-title p-2 text-black text-light">
                    {title}
                  </Text>
                )}
                {price && (
                  <Text className="p-2 text-sm text-gray-400 ">${price}</Text>
                )}
              </View>
            )}
        </View>
      </View>
    )
}