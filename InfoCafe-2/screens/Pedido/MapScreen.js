// InfoCafe-2/screens/MapScreen.js
import React from 'react';
import { View, StyleSheet, Text } from 'react-native';
import MapView, { Marker, Polyline } from 'react-native-maps';
import MapViewDirections from 'react-native-maps-directions';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import HeaderPerso from '../../componentes/HeaderPerso';
import { useStoreContext } from '../../store/store';
import DeliveryStatus from '../../componentes/DeliveryStatus';
import useMapScreenLogic from '../../utils/useMapScreen';
import { GOOGLE_MAPS_KEY } from '@env';

export default function MapScreen() {
  const { state } = useStoreContext();
  const {
    origin,
    destination,
    fullCoords,
    sampleIndices,
    bikePos,
    onInitialReady,
    progress,
    etaLeft,
    simIndex,
    hasRouteRemaining
  } = useMapScreenLogic();

  if (!destination) {
    return (
      <View style={styles.empty}>
        <Text>Aún no has agregado una dirección.</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <HeaderPerso />

      <MapView
        style={styles.map}
        initialRegion={{
          latitude: bikePos.latitude,
          longitude: bikePos.longitude,
          latitudeDelta: 0.09,
          longitudeDelta: 0.04,
        }}
      >
        {hasRouteRemaining && fullCoords.length > 1 && (
          <Polyline
            coordinates={fullCoords.slice(sampleIndices[simIndex])}
            strokeColor="#4E1F00"
            strokeWidth={6}
          />
        )}

        <Marker coordinate={bikePos}>
          <Icon name="motorbike" size={32} color="#4E1F00" />
        </Marker>

        <Marker coordinate={destination} />

        {fullCoords.length === 0 && (
          <MapViewDirections
            origin={origin}
            destination={destination}
            apikey={GOOGLE_MAPS_KEY}
            strokeWidth={0}
            onReady={onInitialReady}
          />
        )}
      </MapView>

      <DeliveryStatus
        progress={progress}
        eta={etaLeft}
        destinationName={state.deliveryAddress.description}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1 },
  map:       { flex: 1 },
  empty: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
