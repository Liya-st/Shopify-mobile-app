import React from 'react';
import { auth } from '@/firebase/config';
import AuthTabsLayout from '../../components/navigation/AuthTabsLayout';
import GuestLayout from '../../components/navigation/GuestLayout';
import { TabBarIcon } from '@/components/navigation/TabBarIcon';
import { Tabs } from 'expo-router';
import { Colors } from 'react-native/Libraries/NewAppScreen';
import { useColorScheme } from '@/hooks/useColorScheme';

export default function TabLayout() {
  const currentUser = auth.currentUser;
  const colorScheme = useColorScheme();

  return(
    <Tabs
    screenOptions={{
      tabBarActiveTintColor: Colors[colorScheme ?? 'light'].tint,
      headerShown: false,
    }}
  >
    <Tabs.Screen
      name="index"
      options={{
        title: 'Home',
        tabBarIcon: ({ color, focused }) => (
          <TabBarIcon name={focused ? 'home' : 'home-outline'} color={color} />
        ),
      }}
    />
    <Tabs.Screen
      name="Cart"
      options={{
        title: currentUser ? "Cart" : "Register",
        tabBarIcon: ({ color, focused }) => (
        currentUser ? ( <TabBarIcon name={focused ? 'cart' : 'cart-outline'} color={color} />) : (<TabBarIcon name = {focused ? "add-circle" : "add-circle-outline"} color={color} />)
        ),
      }}
    />
    <Tabs.Screen
      name="Profile"
      options={{
        title: currentUser ? "Profile" : "Signin",
        tabBarIcon: ({ color, focused }) => (
        currentUser ?  <TabBarIcon name={focused ? 'person' : 'person-outline'} color={color} /> : <TabBarIcon name = {focused ? "add-circle-outline" : "add-circle"} color={color} />
        ),
      }}
    />
  </Tabs>
  );
}
