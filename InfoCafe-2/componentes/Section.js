import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import SectionItem from './SectionItem';

export default function Section({ header, items = [] }) {
  return (
    <View style={styles.container}>
      <Text style={styles.header}>{header}</Text>
      {items.map(i => (
        <SectionItem
          key={i.key}
          icon={i.icon}
          label={i.label}
          onPress={i.onPress}
        />
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 30,
    backgroundColor: '#FAFAF8',
    borderRadius: 8,
    padding: 15,
  },
  header: {
    fontSize: 18,
    fontWeight: '600',
    color: '#4E1F00',
    marginBottom: 10,
  },
});
