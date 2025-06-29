import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

export default function NotificationCard({ item, onPress, onDelete }) {
  return (
    <TouchableOpacity onPress={() => onPress(item)} style={styles.card}>
      <View style={styles.content}>
        <Text style={styles.title}>{item.title}</Text>
        <Text style={styles.description}>{item.description || item.content}</Text>
      </View>
      <TouchableOpacity onPress={() => onDelete(item.id)} style={styles.deleteButton}>
        <Text style={styles.deleteText}>✕</Text>
      </TouchableOpacity>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#3E2723',
    borderRadius: 16,
    padding: 16,
    marginVertical: 8,
    marginHorizontal: 16,
    elevation: 2,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between'
  },
  content: {
    flex: 1
  },
  title: {
    color:'#D7CCC8',
    fontWeight: 'bold',
    fontSize: 16
  },
  description: {
    marginTop: 4,
    fontSize: 14,
    color: '#BCAAA4'
  },
  deleteButton: {
    marginLeft: 12
  },
  deleteText: {
    fontSize: 18,
    color: '#999'
  }
});
