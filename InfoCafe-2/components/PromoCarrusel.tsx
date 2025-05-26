import React, { useEffect, useRef, useState } from 'react';
import {
  FlatList,
  Image,
  StyleSheet,
  View,
  Dimensions,
  NativeSyntheticEvent,
  NativeScrollEvent,
} from 'react-native';

const { width } = Dimensions.get('window');

const images = [
  {
    uri: 'https://thumbs.dreamstime.com/b/caf%C3%A9-lunes-por-ciento-de-descuento-en-descuentos-precio-y-ofertas-especiales-cafeter%C3%ADa-o-restaurante-cupones-vales-con-214881580.jpg',
  },
  {
    uri: 'https://img.freepik.com/vector-premium/reduccion-precio-cafeteria-o-restaurante-martes-banner-publicidad-marketing-venta-productos-menor-costo-descuentos-50-ciento-descuento-cafe-leche-o-espresso-vector-estilo-plano_87689-3335.jpg',
  },
];

// Triplicamos para loop infinito visual
const infiniteImages = [...images, ...images, ...images];
const middleIndex = images.length;

export default function PromoCarousel() {
  const [index, setIndex] = useState(middleIndex);
  const flatListRef = useRef<FlatList>(null);

  useEffect(() => {
    flatListRef.current?.scrollToIndex({ index, animated: false });

    const interval = setInterval(() => {
      scrollTo(index + 1);
    }, 6000);

    return () => clearInterval(interval);
  }, [index]);

  const scrollTo = (nextIndex: number) => {
    flatListRef.current?.scrollToIndex({ index: nextIndex, animated: true });
    setIndex(nextIndex);
  };

  const onScrollEnd = (e: NativeSyntheticEvent<NativeScrollEvent>) => {
    const contentOffsetX = e.nativeEvent.contentOffset.x;
    const currentIndex = Math.round(contentOffsetX / (width - 32));
    let newIndex = currentIndex;

    if (currentIndex >= infiniteImages.length - images.length) {
      newIndex = middleIndex;
      flatListRef.current?.scrollToIndex({ index: newIndex, animated: false });
    }

    if (currentIndex < images.length) {
      newIndex = middleIndex;
      flatListRef.current?.scrollToIndex({ index: newIndex, animated: false });
    }

    setIndex(newIndex);
  };

  return (
    <View style={styles.container}>
      <FlatList
        ref={flatListRef}
        data={infiniteImages}
        keyExtractor={(_, i) => i.toString()}
        renderItem={({ item }) => (
          <View style={styles.imageWrapper}>
            <Image source={item} style={styles.image} />
          </View>
        )}
        horizontal
        pagingEnabled
        showsHorizontalScrollIndicator={false}
        onMomentumScrollEnd={onScrollEnd}
        getItemLayout={(_, i) => ({
          length: width - 32,
          offset: (width - 32) * i,
          index: i,
        })}
        initialScrollIndex={middleIndex}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 16,
    borderRadius: 16,
    overflow: 'hidden',
    backgroundColor: '#fff',
  },
  imageWrapper: {
    width: width - 32,
    aspectRatio: 2.5,
  },
  image: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
  },
});
