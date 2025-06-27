import React from 'react';
import { TouchableOpacity, View, Text, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

export default function SectionItem({ icon, label, onPress }) {
  return (
    <TouchableOpacity style={styles.row} onPress={onPress}>
      <View style={styles.left}>
        <Ionicons name={icon} size={20} color="#4E1F00" style={styles.icon}/>
        <Text style={styles.label}>{label}</Text>
      </View>
      <Ionicons name="chevron-forward-outline" size={20} color="#4E1F00"/>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
    paddingVertical: 10,
  },
  left: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  icon: {
    marginRight: 10,
  },
  label: {
    fontSize: 16,
    color: '#333',
  },
});
