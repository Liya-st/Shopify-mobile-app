import { ScrollView } from 'react-native';
import Intro from '@/components/ui/Intro';
import ProductList from '@/components/ui/ProductList/ProductList';
import { auth } from '@/firebase/config';

export default function Home() {

  return (
    <ScrollView>
      <Intro />
      <ProductList />
      </ScrollView>
  );
}