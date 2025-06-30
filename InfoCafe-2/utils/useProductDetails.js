// util/useProductDetails.js
import { useState, useEffect, useMemo, useCallback } from 'react';
import { useStoreContext } from '../store/store';

export default function useProductDetails(product, navigation) {
  const { addToCart } = useStoreContext();

  const [selectedSize, setSelectedSize] = useState('M');
  const [quantity, setQuantity] = useState(1);
  const [showFullDescription, setShowFullDescription] = useState(false);

  const fullDescriptionText = product?.description || '';
  const MAX_DESCRIPTION_LENGTH = 150;

  const shortDescriptionText = useMemo(() => {
    return fullDescriptionText.length > MAX_DESCRIPTION_LENGTH
      ? fullDescriptionText.substring(0, MAX_DESCRIPTION_LENGTH) + '...'
      : fullDescriptionText;
  }, [fullDescriptionText]);

  const [currentPrice, setCurrentPrice] = useState('0.00');
  useEffect(() => {
    if (product?.prices?.length) {
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

  const toggleDescription = useCallback(() => {
    setShowFullDescription(prev => !prev);
  }, []);

  const handleAddToCart = useCallback(() => {
    if (!product || !Array.isArray(product.prices) || product.prices.length === 0) {
      console.warn('Producto inválido o sin precios.');
      return;
    }

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
    fullDescriptionText,
    shortDescriptionText,
    currentPrice,
    selectedSize,
    quantity,
    showFullDescription,
    setSelectedSize,
    setQuantity,
    toggleDescription,
    handleAddToCart,
  };
}
