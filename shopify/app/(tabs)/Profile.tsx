import React, { useState } from 'react';
import { View, StyleSheet, Text, Button,TextInput} from 'react-native';
import { useForm, Controller } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { doc, updateDoc } from 'firebase/firestore';
import {
  updatePassword,
  reauthenticateWithCredential,
  EmailAuthProvider,
} from 'firebase/auth';
import {  firestore } from '@/firebase/config';
import useFirebaseAuth from '@/hooks/useFirebaseAuth';
import { useNavigation } from '@react-navigation/core';
import Redirect from '@/components/ui/Redirect';
import Input from '@/components/ui/Inputs';
// import Input from '@/components/ui/Inputs';

const formSchema = z
  .object({
    name: z.string().min(2, 'name must be at least 2 characters'),
    oldPassword: z.string().min(8, 'Password must be at least 8 characters'),
    newPassword: z.string().min(8, 'Password must be at least 8 characters'),
    confirmPassword: z
      .string()
      .min(8, 'Password must be at least 8 characters'),
  })
  .refine((data) => data.newPassword === data.confirmPassword, {
    message: 'New password and confirm password must be the same',
    path: ['confirmPassword'],
  });

type FormField = z.infer<typeof formSchema>;

const EditProfile = () => {
  const navigation = useNavigation()
  const [isEdited, setisEdited] = useState(false);
  const { currentUser } = useFirebaseAuth();
  const {logOut} = useFirebaseAuth();
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<FormField>({
    resolver: zodResolver(formSchema),
  });

  const reauthenticate = async (email: string, oldPassword: string) => {
    const credential = EmailAuthProvider.credential(email, oldPassword);
    if (currentUser) {
      await reauthenticateWithCredential(currentUser, credential);
    }
  };

  const user = currentUser;
  const handleLogOut = async() =>{
    try
    {
      await logOut()
      navigation.navigate('index')
    } catch(error){
      console.error("log out failed" , error);
    }
  }
  const onSubmit = async (data: FormField) => {
    try {
      if (user) {
        await reauthenticate(user.email!, data.oldPassword);

        await updatePassword(user, data.newPassword);

        const userDocRef = doc(firestore, 'users', user.uid);
        await updateDoc(userDocRef, {
          name: data.name,
        });

        console.log('Profile updated successfully');
        setisEdited(true);
      } else {
        console.error('No authenticated user found');
      }
    } catch (error) {
      console.error('Error updating profile:', error);
    }
  };

  return (
      <View style={styles.container}>
      <View style={styles.card}>
        <Text style={styles.title}>Edit your profile details</Text>
        <View style={styles.form}>
          <Controller
            control={control}
            name="name"
            render={({ field: { onChange, value } }) => (
              <Input
                title="Name"
                error={errors?.name?.message}
                onChangeText={onChange}
                value={value}
                placeholder="Name"
              />
            )}
          />
          <Controller
            control={control}
            name="oldPassword"
            render={({ field: { onChange, value } }) => (
              <Input
                title="Current Password"
                error={errors?.oldPassword?.message}
                onChangeText={onChange}
                value={value}
                placeholder="Old password"
                secureTextEntry
              />
            )}
          />
          <Controller
            control={control}
            name="newPassword"
            render={({ field: { onChange, value } }) => (
              <Input
                title="New Password"
                error={errors?.newPassword?.message}
                onChangeText={onChange}
                value={value}
                placeholder="New password"
                secureTextEntry
              />
            )}
          />
          <Controller
            control={control}
            name="confirmPassword"
            render={({ field: { onChange, value } }) => (
              <Input
                title="Confirm Password"
                error={errors?.confirmPassword?.message}
                onChangeText={onChange}
                value={value}
                placeholder="Confirm New password"
                secureTextEntry
              />
            )}
          />
          <View style={styles.buttonContainer}>
            <Button
              title="Cancel"
              color="#666"
              onPress={() => {
                // Cancel button logic
              }}
            />
            <Button
              title="Save Changes"
              color="#2196F3"
              onPress={handleSubmit(onSubmit)}
            />
          </View>
        </View>
        {isEdited && (
          <Text style={styles.success}>User Details edited successfully</Text>
        )}
      </View>
      <Button title = "Log Out" onPress={handleLogOut}/>
    </View>
    
    
  );
};


  
export default EditProfile;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#f0f0f0',
  },
  card: {
    backgroundColor: '#fff',
    padding: 20,
    borderRadius: 8,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.23,
    shadowRadius: 2.62,
    elevation: 4,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#2196F3',
    marginBottom: 16,
  },
  form: {
    marginTop: 16,
  },
  inputContainer: {
    marginVertical: 8,
  },
  label: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#666',
    marginBottom: 4,
  },
  inputWrapper: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 4,
    paddingHorizontal: 12,
    paddingVertical: 8,
  },
  input: {
    fontSize: 16,
    color: '#333',
  },
  error: {
    fontSize: 12,
    color: '#f44336',
    marginTop: 4,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    marginTop: 16,
  },
  success: {
    marginTop: 16,
    color: '#4CAF50',
    fontWeight: 'bold',
  },
});
