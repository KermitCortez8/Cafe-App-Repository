import React from 'react';
import { Text, StyleSheet } from 'react-native';

const Subtitle = ({ text }) => {
  return <Text style={styles.subtitle}>{text}</Text>;
};

const styles = StyleSheet.create({
  subtitle: {
    fontSize: 24,
    fontWeight: '700',
    color: '#4B2E2B',
    marginVertical: 24,
    marginTop: 0,
    textAlign: 'center',
    fontStyle: 'italic',
    letterSpacing: 1,
    textShadowColor: '#d7ccc8',
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 2,
  },
});

export default Subtitle;
