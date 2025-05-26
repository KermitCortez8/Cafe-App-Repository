import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';
export function CategoryChip({ label, selected, onPress }) {
  return (
    <TouchableOpacity style={[styles.chip, selected && styles.selected]} onPress={onPress}>
      <Text style={selected ? styles.textSelected : styles.text}>{label}</Text>
    </TouchableOpacity>
  );
}
const styles = StyleSheet.create({
  chip: {
    paddingVertical: 4,       // reducido
    paddingHorizontal: 8,     // reducido
    borderRadius: 16,
    backgroundColor: '#fff',
    marginRight: 4,           // espacio menor
    borderWidth: 1,
    borderColor: '#ddd',
    minWidth: 60              // tamaño fijo más compacto
  },
  selected: { backgroundColor: '#34A853', borderColor: '#34A853' },
  text: { color: '#333', fontSize: 12 },
  textSelected: { color: '#fff', fontSize: 12 }
});