import React from 'react';
import { Text, StyleSheet } from 'react-native';

export default function Description({ showFull, toggleShow, fullText, shortText }) {
  return (
    <>
      <Text style={styles.sectionTitle}>Descripcion</Text>
      <Text style={styles.description}>
        {showFull ? fullText : shortText}
        {!showFull && (
          <Text style={styles.readMore} onPress={toggleShow}> Leer Mas</Text>
        )}
      </Text>
    </>
  );
}

const styles = StyleSheet.create({
  sectionTitle: {
    fontWeight: 'bold',
    fontSize: 18,
    marginTop: 20,
    marginBottom: 10,
  },
  description: {
    color: '#666',
    fontSize: 16,
    marginBottom: 16,
  },
  readMore: {
    color: '#4E1F00',
  },
});