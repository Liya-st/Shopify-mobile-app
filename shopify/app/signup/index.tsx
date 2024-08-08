import React from 'react';
import { z } from 'zod';
import { useNavigation } from '@react-navigation/native';
import useFirebaseAuth from '@/hooks/useFirebaseAuth';
import { firestore } from '@/firebase/config';
import { doc, setDoc } from 'firebase/firestore';
import AuthForm from '@/components/layout/AuthForm';

const validationSchema = z.object({
  name: z.string().min(1, 'Name is required'),
  email: z.string().email('Invalid email address'),
  password: z.string().min(8, 'Password must be at least 8 characters'),
});

export default function SignupPage() {
  const { signUp } = useFirebaseAuth();
  const navigation = useNavigation();

  const onSubmit = async (values: any) => {
    try {
      const { email, password, name } = values;
      const userCredential = await signUp(email, password);
      const user = userCredential.user;

      if (!user) {
        throw new Error('User is not authenticated');
      }

      const userRef = doc(firestore, 'users', user.uid);
      await setDoc(userRef, {
        name,
        email,
      });
    } catch (error) {
      console.error('Error during signup or Firestore operation:', error);
    }
  };

  return (
    <AuthForm
      onSubmit={onSubmit}
      validationSchema={validationSchema}
      defaultValues={{ name: '', email: '', password: '' }}
      buttonText="Sign Up"
      title="Sign Up"
    />
  );
}
