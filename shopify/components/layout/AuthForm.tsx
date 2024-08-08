import React from 'react';
import { View, Text, TextInput, Button, ImageBackground, StyleSheet } from 'react-native';
import { useForm, Controller } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';

type AuthFormProps = {
  onSubmit: (values: any) => void;
  validationSchema: z.ZodObject<any>;
  defaultValues: { [key: string]: any };
  buttonText: string;
  title: string;
};

const AuthForm: React.FC<AuthFormProps> = ({ onSubmit, validationSchema, defaultValues, buttonText, title }) => {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(validationSchema),
    defaultValues,
  });

  return (
    <ImageBackground
      source={require('../../assets/images/Products.jpg')}
className = "w-full h-full"  
      blurRadius={2}
    >
      <View
      className = "flex-[1] justify-center items-center m-5 rounded-lg"
   >
        <Text 
        className = "text-5xl text-[#00BFFF] font-extrabold text-center my-5"
        >{title}</Text> 
        <View  className ="w-full max-w-[400px] p-4">
          {Object.keys(defaultValues).map((key) => (
            <Controller
              key={key}
              control={control}
              name={key}
              render={({ field: { onChange, value } }) => (
                <View className ='mb-4'>
                  <TextInput
                    onChangeText={onChange}
                    value={value}
                    placeholder={key.charAt(0).toUpperCase() + key.slice(1)}
                    className = "p-3 rounded-lg mx-5 bg-gray-600 text-white"
                    placeholderTextColor="#999"
                    secureTextEntry={key === 'password'}
                  />
                  {errors[key] && <Text className = "text-red-500 mx-5">{errors[key]?.message}</Text>}
                </View>
              )}
            />
          ))}
          <Button title={buttonText} onPress={handleSubmit(onSubmit)} />
          {errors.root && <Text className = "text-red-500 mx-5">{errors.root.message}</Text>}
        </View>
      </View>
    </ImageBackground>
  );
};


export default AuthForm;
