// util/useProductDetails.js
import { useState, useEffect, useMemo, useCallback } from 'react';
import { useStoreContext } from '../store/store';

export default function useProductDetails(product, navigation) {
  const { addToCart } = useStoreContext();

  // Estados locales
  const [selectedSize, setSelectedSize] = useState('M');
  const [quantity, setQuantity] = useState(1);
  const [showFullDescription, setShowFullDescription] = useState(false);

  // Descripción corta / larga
  const fullDescriptionText = product?.description || '';
  const MAX_DESCRIPTION_LENGTH = 150;
  const shortDescriptionText = useMemo(() => {
    return fullDescriptionText.length > MAX_DESCRIPTION_LENGTH
      ? fullDescriptionText.substring(0, MAX_DESCRIPTION_LENGTH) + '...'
      : fullDescriptionText;
  }, [fullDescriptionText]);

  // Precio calculado
  const [currentPrice, setCurrentPrice] = useState('0.00');
  useEffect(() => {
    if (product?.prices?.length) {
      // Si el size actual no existe, escogemos el primero
      const defaultSize = product.prices[0].size;
      if (!product.prices.some(p => p.size === selectedSize)) {
        setSelectedSize(defaultSize);
      }
      const priceObj =
        product.prices.find(p => p.size === selectedSize) || product.prices[0];
      const unit = parseFloat(priceObj.price);
      setCurrentPrice(`${priceObj.currency}${(unit * quantity).toFixed(2)}`);
    } else {
      setCurrentPrice('N/A');
    }
  }, [product, selectedSize, quantity]);

  // Toggle descripción
  const toggleDescription = useCallback(() => {
    setShowFullDescription(prev => !prev);
  }, []);

  // Al agregar al carrito
  const handleAddToCart = useCallback(() => {
    const priceObj =
      product.prices.find(p => p.size === selectedSize) || product.prices[0];
    const cartItem = {
      ...product,
      prices: [{ ...priceObj, quantity }],
    };
    addToCart(cartItem);
    navigation.navigate('Pedido', { screen: 'Deliver' });
  }, [addToCart, navigation, product, selectedSize, quantity]);

  return {
    // datos
    fullDescriptionText,
    shortDescriptionText,
    currentPrice,
    // estados
    selectedSize,
    quantity,
    showFullDescription,
    // setters / handlers
    setSelectedSize,
    setQuantity,
    toggleDescription,
    handleAddToCart,
  };
}
