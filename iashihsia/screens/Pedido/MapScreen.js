import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
export default function MapScreen() {
  return <View style={styles.center}><Text>Map Screen</Text></View>;
}
const styles = StyleSheet.create({
  center: { flex: 1, alignItems: 'center', justifyContent: 'center' }
});