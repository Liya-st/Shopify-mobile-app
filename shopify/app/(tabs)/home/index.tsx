import { Image, StyleSheet, Platform, ScrollView, View, Text } from 'react-native';

import { HelloWave } from '@/components/HelloWave';
import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import Intro from '@/components/ui/Intro';
import ProductList from '@/components/ui/ProductList/ProductList';
export default function HomeScreen() {
  return (
    <ScrollView>
      <Intro />
      <ProductList />
      </ScrollView>
  );
}