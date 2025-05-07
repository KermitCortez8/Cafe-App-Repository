import React from 'react';
import { Text, StyleSheet } from 'react-native';

const Subtitle = ({ text }) => {
  return <Text style={styles.subtitle}>{text}</Text>;
};

const styles = StyleSheet.create({
  subtitle: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#4CAF50',
    marginVertical: 20,
  },
});

export default Subtitle;
