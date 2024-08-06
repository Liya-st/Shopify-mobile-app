import { Image, Text, View } from "react-native";
import imageMap from "../imageMap";
interface CardWithTextProps {
  src: keyof typeof ImageMap ;
  title?: string;
  price?: string;
}
export default function Card({ src, title, price }: CardWithTextProps) {
  return (
    <View className="card bg-gray-50 h-[400px] w-64  shadow-sm rounded-lg ml-4">
      <View className="h-[380px] transition-all duration-300 ease-in-out transform hover:scale-110 ">
        <Image
          source={imageMap[src]}
          alt=""
          style={{ objectFit: "contain" }}
          className="rounded"
        />
      </View>
      {title && (
        <View className="text-black text-light p-5 bg-white outline-none">
          <Text className="card-title">{title}</Text>
        </View>
      )}
      {price && (
        <View className="text-black text-light p-5 bg-white outline-none">
          <Text className="text-sm text-gray-400 ">${price}</Text>
        </View>
      )}
    </View>
  );
}
