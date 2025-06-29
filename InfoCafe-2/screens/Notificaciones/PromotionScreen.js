import React from 'react';
import { ScrollView, StyleSheet, Text } from 'react-native';
import PromotionBanner from '../../componentes/PromotionBanner'; 
import ContentCard from '../../componentes/ContentCard';

export default function PromotionScreen({ route }) {
  const { title, content, image } = route.params || {};

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <PromotionBanner title={title || 'Promoción'} image={image} />
      <ContentCard content={content || '¡Aquí aparecerá el contenido de la promoción!'} />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 16,
    backgroundColor: '#F5EDE3',
    flexGrow: 1,
  },
  content: {
    fontSize: 16,
    color: '#333',
    lineHeight: 22,
    textAlign: 'justify',
  },
});