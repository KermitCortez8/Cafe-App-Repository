import React, { useEffect, useState } from 'react';
import { Image, StyleSheet, View } from 'react-native';

const images = [
  { uri: 'https://thumbs.dreamstime.com/b/caf%C3%A9-lunes-por-ciento-de-descuento-en-descuentos-precio-y-ofertas-especiales-cafeter%C3%ADa-o-restaurante-cupones-vales-con-214881580.jpg' },
  { uri: 'https://img.freepik.com/vector-premium/reduccion-precio-cafeteria-o-restaurante-martes-banner-publicidad-marketing-venta-productos-menor-costo-descuentos-50-ciento-descuento-cafe-leche-o-espresso-vector-estilo-plano_87689-3335.jpg' },
];
export default function PromoCarousel() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % images.length);
    }, 7000); // cambia cada 7 segundos
    return () => clearInterval(interval);
  }, []);

  return (
    <View style={styles.container}>
      <Image source={images[index]} style={styles.image} resizeMode="cover" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 16,
    borderRadius: 16,
    overflow: 'hidden',
  },
  image: {
    width: '100%',
    height: 140,
  },
});
