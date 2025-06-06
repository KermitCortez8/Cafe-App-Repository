import React from 'react';
import { View, TextInput, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
export function SearchBar({ value, onChange }) {
  return (
    <View style={styles.container}>
      <Ionicons name="search" size={20} />
      <TextInput
        style={styles.input}
        placeholder="Search Coffee"
        value={value}
        onChangeText={onChange}
      />
    </View>
  );
}
const styles = StyleSheet.create({
  container: { flexDirection: 'row', alignItems: 'center', backgroundColor: '#f2f2f2', borderRadius: 8, padding: 8, margin: 16 },
  input: { marginLeft: 8, flex: 1 }
});