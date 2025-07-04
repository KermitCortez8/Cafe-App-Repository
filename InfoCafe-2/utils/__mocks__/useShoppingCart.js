// __mocks__/useShoppingCart.js
export const useShoppingCart = () => ({
  cartItems: [
    {
      id: '1',
      name: 'Café Americano',
      image: { uri: 'https://fakeimg.pl/100x100/' },
      prices: [
        { size: 'Mediano', price: '5.00', quantity: 2 },
        { size: 'Grande', price: '6.50', quantity: 1 }
      ]
    }
  ],
  calculatedDeliveryFee: 2.5,
  subtotal: 17.0,
  totalPayment: 19.5,
  removeFromCart: jest.fn(),
  handlePlaceOrder: jest.fn(),
  isOrderEnabled: true
});
