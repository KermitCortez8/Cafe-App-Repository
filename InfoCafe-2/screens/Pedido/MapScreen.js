import * as React from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import MapView,{Marker,Polyline} from 'react-native-maps';
//import MapViewDirections from 'react-native-maps-directions';




export default function MapScreen() {
  const navigation = useNavigation();

  const [origin, setOrigin]=React.useState({
    latitude: -12.128194228925047, 
    longitude: -76.98560206529099,
  });


  const [destination, setDestination]=React.useState({
    latitude: -12.12653685283966, 
    longitude: -77.00967416229048,
  });


  return (
    <View style={styles.container}>
      <MapView 
        style={styles.map}
        initialRegion={{
          latitude: origin.latitude, 
          longitude: origin.longitude,
          latitudeDelta: 0.09,
          longitudeDelta: 0.04,
        }}
      >
        <Marker 
          coordinate={origin}

        />
        <Marker
          draggable
          coordinate={destination}
          onDragEnd={(direction) => setDestination(direction.nativeEvent.coordinate)}
        />

        <MapViewDirections
          origin={origin}
          destination={destination}
          apikey=''
        />

        <Polyline
          coordinates={[origin,destination]}
          strokeColor="brown"
          strokeWidth={6}
        />
      </MapView>      
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },

  text: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#4E1F00',
    marginBottom: 20,
  },
  map:{
    width: '100%',
    height: '100%'
  }

});