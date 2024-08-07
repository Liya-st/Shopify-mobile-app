import React from 'react';
import { ImageBackground, Text, TextInput, View, Button } from 'react-native';
import { useForm, Controller, Form } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import useFirebaseAuth from '@/hooks/useFirebaseAuth';

const validationSchema = z.object({
  email: z.string().email('Invalid email address'),
  password: z.string().min(8, 'Password must be at least 8 characters'),
});

export default function LoginComponent() {
  const { logIn } = useFirebaseAuth();

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(validationSchema),
    defaultValues: {
      email: '',
      password: '',
    },
  });

  const onSubmit = async (values) => {
    try {
      await logIn(values.email, values.password);
      console.log('User logged in successfully');
    } catch (error) {
      console.error('Error logging in:', error);
    }
  };

  return (
    <ImageBackground
    source={require('../../../assets/images/Products.jpg')} 
    style={{ width: '100%', height: '100%', padding: 10 }}
      blurRadius={2}
    >
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', margin: 20, borderRadius: 16 }}>
        <View style={{ height: '50%', width: '100%', justifyContent: 'center', alignItems: 'center' }}>
          <ImageBackground
      source={require('../../../assets/images/Products.jpg')} 
      style={{ width: '100%', height: '100%' }}
            resizeMode="cover"
            blurRadius={23}
          >
            <Text style={{ fontSize: 48, color: '#00BFFF', fontWeight: 'bold', textAlign: 'center', marginVertical: 20, marginHorizontal: 10 }}>
              Log In
            </Text>
            <Form onSubmit={handleSubmit(onSubmit)}>
              <Controller
                control={control}
                name="email"
                rules={{
                  required: {
                    value: true,
                    message: 'Email is required',
                  },
                }}
                render={({ field: { onChange, value } }) => (
                  <View style={{ marginBottom: 16 }}>
                    <TextInput
                      onChangeText={onChange}
                      value={value}
                      placeholder="Email"
                      style={{ padding: 10, borderRadius: 8, backgroundColor: '#6B8E23', color: 'white' }}
                      placeholderTextColor="#999"
                    />
                    {errors.email && (
                      <Text style={{ color: 'red', marginTop: 4 }}>{errors.email.message}</Text>
                    )}
                  </View>
                )}
              />
              <Controller
                control={control}
                name="password"
                rules={{
                  required: {
                    value: true,
                    message: 'Password is required',
                  },
                }}
                render={({ field: { onChange, value } }) => (
                  <View style={{ marginBottom: 16 }}>
                    <TextInput
                      onChangeText={onChange}
                      value={value}
                      placeholder="Password"
                      style={{ padding: 10, borderRadius: 8, backgroundColor: '#6B8E23', color: 'white' }}
                      placeholderTextColor="#999"
                      secureTextEntry
                    />
                    {errors.password && (
                      <Text style={{ color: 'red', marginTop: 4 }}>{errors.password.message}</Text>
                    )}
                  </View>
                )}
              />
              <Button title="Log in" onPress={handleSubmit(onSubmit)} />
            </Form>
          </ImageBackground>
        </View>
      </View>
    </ImageBackground>
  );
}
