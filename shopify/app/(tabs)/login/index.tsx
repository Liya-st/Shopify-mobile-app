import React from "react";
import { ImageBackground, Text, TextInput, View, StyleSheet } from "react-native";
import { useForm, Controller } from "react-hook-form";
import { z } from "zod";
import Form from "@/components/ui/Form";

const validationSchema = z.object({
  email: z.string().email("Invalid email address"),
  password: z.string().min(8, "Password must be at least 8 characters"),
});

export default function Login() {
  const {
    control,
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(validationSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const onSubmit = (values) => {
    console.log("Form submitted:", values);
  };
  console.log(errors)
  return (
    <ImageBackground
    source={require("../../../assets/images/Products.jpg")}
    className="w-full h-full p-10"
    blurRadius={2}
  >
      <View className="h-full flex justify-center rounded-2xl m-5 items-center">
      
        <View className="h-1/2  w-full justify-center items-center">
        <ImageBackground
      source={require("../../../assets/images/Products.jpg")}
      className="w-full h-full"
      resizeMode="cover"
      blurRadius={23}
    >
          <Text className="text-6xl text-cyan-600 font-extrabold text-center my-12 m-5 uppercase">
            Log In
          </Text>
          <Form title="Log in" onSubmit={handleSubmit(onSubmit)}>
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


