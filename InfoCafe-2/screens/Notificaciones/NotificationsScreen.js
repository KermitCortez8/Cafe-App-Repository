
import React, { useState, useEffect } from 'react';
import { View, FlatList, StyleSheet } from 'react-native';
import NOTIDATA from '../../data/notifications';
import NotificationCard from '../../componentes/NotificationCard';
import CoffeeData from '../../data/ProductosData';
import CustomHeader from '../../componentes/HeaderPerso';

export default function NotificationScreen({ navigation }) {
  const [notifications, setNotifications] = useState([]);

  useEffect(() => {
    setNotifications(NOTIDATA);
  }, []);

  const handlePress = (item) => {
    if (item.type === 'cafe') {
      const product = CoffeeData.find((p) => p.id === item.targetId);
      if (product) {
        navigation.navigate('Inicio', {
          screen: 'Details',
          params: { product }
        });
      } else {
        console.warn('Producto no encontrado con ID:', item.targetId);
      }
    } else if (item.type === 'promotion') {
      navigation.navigate('Promotion', {
        title: item.title,
        content: item.content,
        image: item.image || null,
        details: item.details || null, // ✅ Agregado
      });
    }
  };

  const handleDelete = (id) => {
    setNotifications((prev) => prev.filter((n) => n.id !== id));
  };

  return (
    <View style={styles.container}>
      <CustomHeader />
      <FlatList
        data={notifications}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <NotificationCard
            item={item}
            onPress={handlePress}
            onDelete={handleDelete}
          />
        )}
        ItemSeparatorComponent={() => <View style={{ height: 12 }} />}
        contentContainerStyle={styles.list}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5EDE3',
  },
  list: {
    paddingVertical: 12,
    paddingHorizontal: 16,
  },
});