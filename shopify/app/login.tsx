import React from 'react';
import { z } from 'zod';
import useFirebaseAuth from '@/hooks/useFirebaseAuth';
import AuthForm from '@/components/layout/AuthForm';
import { useRouter } from 'expo-router';
const validationSchema = z.object({
  email: z.string().email('Invalid email address'),
  password: z.string().min(8, 'Password must be at least 8 characters'),
});

export default function LoginComponent() {
  const { logIn } = useFirebaseAuth();
   const router = useRouter();
  const onSubmit = async (values: any) => {
    try {
      await logIn(values.email, values.password);
      router.replace('(tabs)')
    } catch (error) {
      console.error('Error logging in:', error);
    }
  };

  return (
    <AuthForm
      onSubmit={onSubmit}
      validationSchema={validationSchema}
      defaultValues={{ email: '', password: '' }}
      buttonText="Log In"
      title="Log In"
    />
  );
}
