import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function ContentCard({ content, details }) {
  return (
    <View style={styles.card}>
      <Text style={styles.heading}>Sobre esta promoción</Text>

      <Text style={styles.content}>
        {content || 'Actualmente no hay información disponible para esta promoción.'}
      </Text>

      {details ? (
        <View style={styles.detailsBox}>
          <Text style={styles.detailsTitle}>Información adicional</Text>
          <Text style={styles.details}>{details}</Text>
        </View>
      ) : null}
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#FFF6EF',
    borderRadius: 16,
    padding: 24,
    marginTop: 16,
    elevation: 3,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 6,
  },
  heading: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#4E1F00',
    marginBottom: 16,
    textAlign: 'left',
  },
  content: {
    fontSize: 16,
    color: '#3E2C20',
    lineHeight: 26,
    textAlign: 'justify',
    marginBottom: 16,
  },
  detailsBox: {
    backgroundColor: '#F5EDE3',
    padding: 16,
    borderRadius: 12,
  },
  detailsTitle: {
    fontSize: 16,
    fontWeight: '600',
    color: '#4E1F00',
    marginBottom: 8,
  },
  details: {
    fontSize: 15,
    color: '#5C3D2E',
    lineHeight: 24,
    textAlign: 'justify',
  },
});
