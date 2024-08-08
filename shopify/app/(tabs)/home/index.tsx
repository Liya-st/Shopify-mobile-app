import { ScrollView } from 'react-native';
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