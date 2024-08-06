import Form from "@/components/ui/Form";
import { ImageBackground, Text, TextInput, View } from "react-native";

export default function Login() {
  const handleSubmit = (values) => {
    console.log("Form submitted:", values);
  };
  return (
    <ImageBackground
      source={require("../../../assets/images/Products.jpg")}
      className="w-full h-full "
    >
      <View className="border min-h-full flex justify-center items-center">
        <View className="rounded-lg h-2/5 w-3/4 blur-0 bg-gray-600 justify-center ">
          <Text className="text-6xl text-cyan-600  font-extrabold text-center m-5 uppercase">
            Log In
          </Text>
          <View>
            <Form onSubmit={handleSubmit} title="Log in">
              <TextInput
                placeholder="Email"
                className=" p-2 rounded-md bg-gray-700 text-white"
              />
              <TextInput
                placeholder="Password"
                className=" p-2 rounded-md bg-gray-700 text-white"
              />
            </Form>
          </View>
        </View>
      </View>
    </ImageBackground>
  );
}
