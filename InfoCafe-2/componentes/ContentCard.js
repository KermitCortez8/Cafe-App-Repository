import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function ContentCard({ content }) {
  return (
    <View style={styles.card}>
      <Text style={styles.text}>{content}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#FFF6EF',
    borderRadius: 12,
    padding: 16,
    elevation: 2,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 3,
    marginTop: 12,
  },
  text: {
    fontSize: 16,
    color: '#4E1F00',
    lineHeight: 22,
    textAlign: 'justify',
  },
});