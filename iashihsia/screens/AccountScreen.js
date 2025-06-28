import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
export default function AccountScreen() {
  return <View style={styles.center}><Text>Account Screen</Text></View>;
}
const styles = StyleSheet.create({
  center: { flex: 1, alignItems: 'center', justifyContent: 'center' }
});
