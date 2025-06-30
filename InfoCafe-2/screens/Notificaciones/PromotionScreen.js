// screens/PromotionScreen.js

import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  StyleSheet,
} from 'react-native';
import CustomHeader from '../../componentes/HeaderPerso';
import PromotionBanner from '../../componentes/PromotionBanner';
import ContentCard from '../../componentes/ContentCard';

export default function PromotionScreen({ route, navigation }) {
  const { title, content, image } = route.params || {};

  return (
    <SafeAreaView style={styles.safe}>
      <CustomHeader/>

      <ScrollView contentContainerStyle={styles.container}>
        <PromotionBanner
          title={title || 'Promoción'}
          image={image}
        />
        <ContentCard
          content={content || '¡Aquí aparecerá el contenido de la promoción!'}
        />
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safe: {
    flex: 1,
    backgroundColor: '#F5EDE3',
  },
  container: {
    padding: 16,
  },
});
