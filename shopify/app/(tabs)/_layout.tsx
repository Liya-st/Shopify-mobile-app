import React from 'react';
import { auth } from '@/firebase/config';
import AuthTabsLayout from '../../components/navigation/AuthTabsLayout';
import GuestLayout from '../../components/navigation/GuestLayout';

export default function TabLayout() {
  const currentUser = auth.currentUser;

  return currentUser ? <AuthTabsLayout /> : <GuestLayout />;
}
