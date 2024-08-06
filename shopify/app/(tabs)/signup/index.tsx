import { ImageBackground, Text, TextInput, View } from "react-native";
import Form from "@/components/ui/Form";
export default function SignupPage() {
  const handleSubmit = (values) => {
    console.log("Form submitted:", values);
  };
  return (
    <ImageBackground
      source={require("../../../assets/images/Products.jpg")}
      className="w-full h-full "
    >
      <View className="border min-h-full flex justify-center items-center">
        <View className="rounded-lg h-1/2 w-3/4 blur-0 bg-gray-600 justify-center gap-4">
          <Text className="text-6xl text-cyan-600  font-extrabold text-center m-5 uppercase">
            Sign up
          </Text>
          <View >
            <Form onSubmit={handleSubmit} title="Sign Up">
              <TextInput
                placeholder="Name"
                className=" p-2 rounded-md bg-gray-700 text-white"
              />
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
