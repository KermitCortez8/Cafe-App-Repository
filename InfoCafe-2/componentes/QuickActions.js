import React from 'react';
import { View, StyleSheet } from 'react-native';
import QuickAction from './QuickAction';

export default function QuickActions({ actions = [] }) {
  return (
    <View style={styles.row}>
      {actions.map(a => (
        <QuickAction
          key={a.key}
          icon={a.icon}
          label={a.label}
          onPress={a.onPress}
        />
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 20,
  },
});
