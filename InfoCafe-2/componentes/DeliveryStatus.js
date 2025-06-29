import React, { useEffect } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { useNavigation } from '@react-navigation/native';

export default function DeliveryStatus({ progress = 0, eta = 0, destinationName = '' }) {
  const pct = Math.min(100, Math.round(progress * 100));
  const navigation = useNavigation();

  useEffect(() => {
    let timer;
    if (pct === 100) {
      // Cuando llegamos al 100%, después de 5s navegamos a “Pedido”
      timer = setTimeout(() => {
        // Si tu BottomTabNavigator tiene una pestaña llamada "Pedido":
        navigation.navigate('DeliveryRecibido');
      }, 3000);
    }
    return () => clearTimeout(timer);
  }, [pct, navigation]);

  return (
    <View style={styles.panel}>
      {/* Tiempo restante y dirección */}
      <View style={styles.headerRow}>
        <View style={styles.etaBox}>
          <Text style={styles.etaTime}>{eta}</Text>
          <Text style={styles.etaUnit}>minutos restantes</Text>
        </View>

        <View style={styles.addressContainer}>
          <Text style={styles.addressLabel}>Dirección:</Text>
          <View style={styles.addressBox}>
            <Text style={styles.addressText}>{destinationName}</Text>
          </View>
        </View>
      </View>

      {/* Barra de progreso */}
      <View style={styles.barBg}>
        <View style={[styles.barFill, { width: `${pct}%` }]} />
      </View>
      <Text style={styles.pctText}>{pct}%</Text>

      {/* Icono y textos */}
      <View style={styles.statusRow}>
        <Icon name="motorbike" size={24} color="#4E1F00" style={styles.statusIcon} />
        <Text style={styles.statusText}>El conductor está en camino</Text>
      </View>
      <Text style={styles.subText}>
        Le entregamos su mercancía en el menor tiempo posible.
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  panel: {
    position: 'absolute',
    bottom: 0, left: 0, right: 0,
    backgroundColor: '#fff',
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    paddingHorizontal: 20,
    paddingTop: 16,
    paddingBottom: 28,
    shadowColor: '#000',
    shadowOpacity: 0.05,
    shadowOffset: { width: 0, height: -2 },
    shadowRadius: 8,
    elevation: 4,
  },
  headerRow: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    marginBottom: 12,
  },
  etaBox: {
    flexDirection: 'row',
    alignItems: 'flex-end'
  },
  etaTime: {
    fontSize: 36,
    color: '#4E1F00',
    fontWeight: '700',
    lineHeight: 40
  },
  etaUnit: {
    fontSize: 16,
    color: '#4E1F00',
    marginLeft: 4,
    marginBottom: 4
  },
  addressContainer: {
    flex: 1,
    marginLeft: 20,
  },
  addressLabel: {
    fontSize: 14,
    color: '#666',
    marginBottom: 4,
  },
  addressBox: {
    backgroundColor: '#F7F7F7',
    paddingVertical: 6,
    paddingHorizontal: 10,
    borderRadius: 6,
  },
  addressText: {
    fontSize: 15,
    color: '#333',
    fontWeight: '500',
    lineHeight: 20,
  },
  barBg: {
    height: 6,
    backgroundColor: '#EFEFEF',
    borderRadius: 3,
    overflow: 'hidden',
    marginBottom: 6,
  },
  barFill: {
    height: 6,
    backgroundColor: '#4E1F00',
  },
  pctText: {
    textAlign: 'right',
    fontSize: 12,
    color: '#666',
    marginBottom: 12,
  },
  statusRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 4,
  },
  statusIcon: { marginRight: 8 },
  statusText: {
    fontSize: 16,
    color: '#4E1F00',
    fontWeight: '500'
  },
  subText: {
    fontSize: 14,
    color: '#666'
  },
});
