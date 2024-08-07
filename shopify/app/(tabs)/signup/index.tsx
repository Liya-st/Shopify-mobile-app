import React from 'react';
import { ImageBackground, Text, TextInput, View, Button } from 'react-native';
import { useForm, Controller } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import useFirebaseAuth from '@/hooks/useFirebaseAuth';
import { firestore } from '@/firebase/config';
import { doc, setDoc } from 'firebase/firestore';
import { useNavigation } from '@react-navigation/native';

const validationSchema = z.object({
  name: z.string().min(1, 'Name is required'),
  email: z.string().email('Invalid email address'),
  password: z.string().min(8, 'Password must be at least 8 characters'),
});

export default function SignupPage() {
  const { signUp } = useFirebaseAuth();
  const navigation = useNavigation();

  const {
    control,
    handleSubmit,
    formState: { errors },
    setError
  } = useForm({
    resolver: zodResolver(validationSchema),
    defaultValues: {
      name: '',
      email: '',
      password: '',
    },
  });

  const onSubmit = async (values) => {
    try {
      const { email, password, name } = values;
      const userCredential = await signUp(email, password);
      const user = userCredential.user;

      if (!user) {
        throw new Error('User is not authenticated');
      }

      const userRef = doc(firestore, 'users', user.uid);
      await setDoc(userRef, {
        name: name,
        email: email,
      });

    } catch (error) {
      console.error('Error during signup or Firestore operation:', error);
      setError('root', {
        message: 'An error occurred during signup. Please try again.',
      });
    }
  };

  return (
    <ImageBackground
      source={require('../../../assets/images/Products.jpg')} 
      style={{ width: '100%', height: '100%', padding: 10 }}
      blurRadius={2}
    >
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', borderRadius: 16 }}>
        <View style={{ height: '50%', width: '75%', justifyContent: 'center', gap: 16 }}>
          <ImageBackground
            source={require('../../../assets/images/Products.jpg')} 
            style={{ width: '100%', height: '100%' }}
            resizeMode="cover"
            blurRadius={23}
          >
            <Text style={{ fontSize: 32, color: '#00BFFF', fontWeight: 'bold', textAlign: 'center', marginVertical: 20 }}>
              Sign Up
            </Text>
            <View style={{ padding: 16 }}>
              <Controller
                control={control}
                name="name"
                render={({ field: { onChange, value } }) => (
                  <View style={{ marginBottom: 16 }}>
                    <TextInput
                      onChangeText={onChange}
                      value={value}
                      placeholder="Name"
                      className ="p-[10px]"
                      style={{ padding: 10, borderRadius: 8, backgroundColor: '#6B8E23', color: 'white' }}
                      placeholderTextColor="#999"
                    />
                    {errors.name && (
                      <Text style={{ color: 'red', marginTop: 4 }}>{errors.name.message}</Text>
                    )}
                  </View>
                )}
              />
              <Controller
                control={control}
                name="email"
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
              <Button title="Sign Up" onPress={handleSubmit(onSubmit)} />
              {errors.root && (
                <Text style={{ color: 'red', marginTop: 4 }}>{errors.root.message}</Text>
              )}
            </View>
          </ImageBackground>
        </View>
      </View>
    </ImageBackground>
  );
}
