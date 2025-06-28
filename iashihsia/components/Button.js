import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';
export function Button({ title, onPress }) {
  return (
    <TouchableOpacity style={styles.btn} onPress={onPress}>
      <Text style={styles.text}>{title}</Text>
    </TouchableOpacity>
  );
}
const styles = StyleSheet.create({
  btn: { backgroundColor: '#34A853', paddingVertical: 12, paddingHorizontal: 24, borderRadius: 8, alignItems: 'center', marginTop: 16 },
  text: { color: '#fff', fontWeight: 'bold' }
});