import { Image, Text, View } from "react-native";
import imageMap from "../imageMap";

interface CardWithTextProps {
  src: keyof typeof imageMap;
  title?: string;
  price?: string;
}

export default function Card({ src, title, price }: CardWithTextProps) {
  return (
    <View className="bg-gray-50 h-[200px] w-[150px] shadow-xl rounded-lg">
      <View className="flex-1 justify-center items-center">
        <Image
          source={imageMap[src]}
          alt=""
          resizeMode="cover"
          className="max-h-[100px] w-full"
        />
      </View>
      {(title || price) && (
        <View className="bg-white outline-none">
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
  );
}
