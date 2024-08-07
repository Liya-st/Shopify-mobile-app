import { ImageBackground, Text, TextInput, View } from "react-native";
import Form from "@/components/ui/Form";
import { z } from "zod";
import { useForm, Controller } from "react-hook-form";
const validationSchema = z.object({
  name: z.string().min(1, "Name is required"),
  email: z.string().email("Invalid email address"),
  password: z.string().min(8, "Password must be at least 8 characters"),
})
export default function SignupPage() {
  
  const {
    control,
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(validationSchema),
    defaultValues: {
      name: "",
      email: "",
      password: "",
    },
  });
  
  const onSubmit = (values) =>{
    console.log(values)
  }

  return (
    <ImageBackground
      source={require("../../../assets/images/Products.jpg")}
      className="w-full h-full "
      blurRadius={2}
    >
      <View className="border min-h-full flex justify-center items-center">
        <View className="rounded-lg h-1/2 w-3/4 justify-center gap-4">
        <ImageBackground
      source={require("../../../assets/images/Products.jpg")}
      className="w-full h-full p-10 "
      blurRadius={23}
    >
          <Text className="text-6xl text-cyan-600  font-extrabold text-center m-5 uppercase">
            Sign up
          </Text>
          <View >
            <Form onSubmit={handleSubmit(onSubmit)} title="Sign Up">
              <Controller
              control = {control}
              {...register('name')}
              rules = {
                {
                  required:{
                    value: true,
                    message: "Name is required."
                  }
                }
              } render = {({field : {onChange, value}}) =>(
                <TextInput
                onChangeText = {onChange}
                value = {value}
                placeholder="Name"
                className=" p-2 rounded-md bg-gray-500 text-white"
              />
              )}
            />
              <Controller
              control={control}
              {...register('email')}
              name="email"
              rules={{
                required: {
                  value: true,
                  message: "Email is required",
                },
              }}
              render={({ field: { onChange, value } }) => (
                <TextInput
                  onChangeText={onChange}
                  value={value}
                  placeholder="Email"
                  className="p-2 rounded-md bg-gray-500 text-white"
                />
              )}
            />
             <Controller
              control={control}
              {...register("password")}
              name="password"
              rules={{
                required: {
                  value: true,
                  message: "Password is required",
                },
              }}
              render={({ field: { onChange, value } }) => (
                <TextInput
                  onChangeText={onChange}
                  value={value}
                  placeholder="Password"
                  className="p-2 rounded-md bg-gray-500 text-white"
                  secureTextEntry
                />
              )}
            />
            </Form>
          </View>
          </ImageBackground>

        </View>
      </View>
    </ImageBackground>
  );
}
const zodResolver = (schema) => {
  return (data) => {
    try {
      return {
        values: schema.parse(data),
        errors: {},
      };
    } catch (error) {
      if (error instanceof z.ZodError) {
        return {
          values: {},
          errors: error.formErrors.fieldErrors,
        };
      }
      throw error;
    }
  };
};