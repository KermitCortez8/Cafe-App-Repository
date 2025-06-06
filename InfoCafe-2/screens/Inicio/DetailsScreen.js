// screens/Inicio/DetailsScreen.js
import React, { useState } from 'react';
import { ScrollView, StyleSheet, View } from 'react-native';
import Header from '../../../InfoCafe-2/componentes/Header';
import ProductImage from '../../../InfoCafe-2/componentes/ProductImage';
import ProductInfo from '../../../InfoCafe-2/componentes/ProductInfo';
import Description from '../../../InfoCafe-2/componentes/Description';
import SizeSelector from '../../../InfoCafe-2/componentes/SizeSelector';

export default function DetailsScreen({ route, navigation }) {
  const { product } = route.params;
  const [selectedSize, setSelectedSize] = useState('M');
  const [showFullDescription, setShowFullDescription] = useState(false);

  const description = 'A cappuccino is an approximately 150 ml (5 oz) beverage, with 25 ml of espresso coffee and 85 ml of fresh milk.';

  return (
    <ScrollView style={styles.container}>
      <Header title="Details" onBack={() => navigation.navigate('PrincipalView')} />

      <ProductImage image={product.image} />

      <View style={styles.infoContainer}>
        <ProductInfo name={product.name} variant={product.variant} rating={product.rating} />

        <View style={styles.separator} />

        <Description
          description={description}
          showFull={showFullDescription}
          onReadMore={() => setShowFullDescription(true)}
        />

        <SizeSelector selectedSize={selectedSize} onSelectSize={setSelectedSize} />
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#fff' },
  infoContainer: { paddingHorizontal: 20 },
  separator: {
    height: 1,
    backgroundColor: '#ddd',
    marginVertical: 16,
  },
});
