// CartScreen.js
import React, { useState, useEffect } from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  Image,
  Dimensions,
  Platform,
  FlatList,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { useNavigation } from '@react-navigation/native'; // Importar useNavigation

// --- IMPORTA TUS DATOS DE CAFÉ LOCALES DIRECTAMENTE AQUÍ ---
// Asegúrate de que esta ruta sea correcta para tu ProductosData.js
import CoffeeData from '../../data/ProductosData';

const { width } = Dimensions.get('window');

// --- Función auxiliar para obtener el precio según el tamaño ---
const getPriceForSize = (pricesArray, size) => {
  const priceObj = pricesArray.find(p => p.size === size);
  return priceObj ? parseFloat(priceObj.price) : 0;
};

// Recibe 'route' como prop para acceder a los parámetros de navegación
export default function CartScreen({ route }) {
  const navigation = useNavigation(); // Hook para la navegación
  const [deliveryType, setDeliveryType] = useState('Deliver');
  // Inicializa cartItems con los datos pasados por navegación, o un array vacío si no hay
  const [cartItems, setCartItems] = useState(route.params?.cartItems || []);

  // Si necesitas actualizar el estado local de cartItems cuando cambian los parámetros de navegación,
  // puedes usar useEffect. Esto es útil si el usuario regresa a la pantalla del carrito
  // y el estado del carrito ha cambiado en otra parte de la aplicación.
  useEffect(() => {
    if (route.params?.cartItems) {
      setCartItems(route.params.cartItems);
    }
  }, [route.params?.cartItems]);


  const [deliveryAddress, setDeliveryAddress] = useState(
    '2nd Door Emi\nCarnation St., Sunflower Village, Brgy. Garden'
  );
  const pickUpLocation = 'Tienda Principal Kopi Kap\nAvenida Siempreviva 742, Springfield';

  // --- Lógica para buscar detalles del producto ---
  const getProductDetails = (productId) => {
    return CoffeeData.find(product => product.id === productId);
  };

  // --- Lógica para actualizar la cantidad de un ítem en el carrito ---
  // NOTA: Esta función ahora solo actualizará el estado LOCAL del carrito.
  // Para que los cambios persistan en PrincipalViewScreen, necesitarías pasar
  // una función de actualización desde PrincipalViewScreen o usar un Context API.
  const updateItemQuantity = (productId, selectedSize, newQuantity) => {
    setCartItems(currentItems =>
      currentItems.map(item =>
        item.productId === productId && item.selectedSize === selectedSize
          ? { ...item, quantity: Math.max(1, newQuantity) } // Asegura cantidad mínima de 1
          : item
      ).filter(item => item.quantity > 0) // Elimina items con cantidad 0
    );
  };

  // --- Cálculos de Precios Dinámicos ---
  const calculateSubtotal = () => {
    let subtotal = 0;
    cartItems.forEach(item => {
      const product = getProductDetails(item.productId);
      if (product && product.prices) {
        const itemPrice = getPriceForSize(product.prices, item.selectedSize);
        subtotal += itemPrice * item.quantity;
      }
    });
    return subtotal;
  };

  const subtotal = calculateSubtotal();
  const deliveryFeeOriginal = 30.00;
  const deliveryFeeDiscounted = 10.00;
  const currentDeliveryFee = deliveryType === 'Deliver' ? deliveryFeeDiscounted : 0;

  const totalPayment = subtotal + currentDeliveryFee;

  // --- Componente para un solo ítem del carrito (para usar en FlatList) ---
  const CartItem = ({ item, onUpdateQuantity }) => {
    const product = getProductDetails(item.productId);

    if (!product) {
      return <Text style={styles.errorTextItem}>Producto no encontrado: {item.productId}</Text>;
    }

    const itemPrice = getPriceForSize(product.prices, item.selectedSize);

    return (
      <View style={styles.cartItemContainer}>
        <Image
          source={product.image}
          style={styles.cartItemImage}
        />
        <View style={styles.cartItemDetails}>
          <Text style={styles.cartItemName}>{product.name}</Text>
          <Text style={styles.cartItemSubtitle}>
            {product.category} ({item.selectedSize})
          </Text>
          <Text style={styles.cartItemPrice}>
            {product.prices[0].currency} {(itemPrice * item.quantity).toFixed(2)}
          </Text>
        </View>
        <View style={styles.quantityControl}>
          <TouchableOpacity
            onPress={() => onUpdateQuantity(item.productId, item.selectedSize, item.quantity - 1)}
            style={styles.quantityButton}
          >
            <Text style={styles.quantityButtonText}>-</Text>
          </TouchableOpacity>
          <Text style={styles.quantityText}>{item.quantity}</Text>
          <TouchableOpacity
            onPress={() => onUpdateQuantity(item.productId, item.selectedSize, item.quantity + 1)}
            style={styles.quantityButton}
          >
            <Text style={styles.quantityButtonText}>+</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  };


  return (
    <SafeAreaView style={styles.safeArea}>
      <ScrollView contentContainerStyle={styles.scrollViewContent}>
        {/* === HEADER (Kopi Kap, My Cup, Iconos) === */}
        <View style={styles.topBackground}>
          <View style={styles.header}>
            <TouchableOpacity style={styles.headerIcon} onPress={() => navigation.goBack()}>
              {/* Puedes usar navigation.goBack() o un icono de 'back' */}
              <Ionicons name="arrow-back" size={28} color="#fff" />
            </TouchableOpacity>
            <View style={styles.headerTitleContainer}>
              <Text style={styles.headerTitle}>Kopi Kap</Text>
              <Text style={styles.headerSubtitle}>My Cup</Text>
            </View>
            <TouchableOpacity style={styles.headerIcon}>
              <Ionicons name="person-circle-outline" size={32} color="#fff" />
            </TouchableOpacity>
          </View>

          {/* === TOGGLE (Deliver / Pick Up) === */}
          <View style={styles.toggleContainer}>
            <TouchableOpacity
              style={[styles.toggleButton, deliveryType === 'Deliver' && styles.toggleButtonActive]}
              onPress={() => setDeliveryType('Deliver')}
            >
              <Text
                style={[
                  styles.toggleButtonText,
                  deliveryType === 'Deliver' && styles.toggleButtonTextActive,
                ]}
              >
                Deliver
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={[styles.toggleButton, deliveryType === 'Pick Up' && styles.toggleButtonActive]}
              onPress={() => setDeliveryType('Pick Up')}
            >
              <Text
                style={[
                  styles.toggleButtonText,
                  deliveryType === 'Pick Up' && styles.toggleButtonTextActive,
                ]}
              >
                Pick Up
              </Text>
            </TouchableOpacity>
          </View>

          {/* === SECCIÓN DE DIRECCIÓN/PICK UP === */}
          {deliveryType === 'Deliver' ? (
            <View style={styles.addressCard}>
              <Text style={styles.addressTitle}>Delivery Address</Text>
              <Text style={styles.addressDetail}>{deliveryAddress.split('\n')[0]}</Text>
              <Text style={styles.addressDetailSmall}>{deliveryAddress.split('\n')[1]}</Text>
              <View style={styles.addressButtonsContainer}>
                <TouchableOpacity
                  style={styles.addressButton}
                  onPress={() => alert('Navegar a pantalla de edición de dirección')}
                >
                  <Text style={styles.addressButtonText}>Edit Address</Text>
                </TouchableOpacity>
                <TouchableOpacity
                  style={styles.addressButton}
                  onPress={() => alert('Navegar a pantalla para añadir nota')}
                >
                  <Text style={styles.addressButtonText}>Add Note</Text>
                </TouchableOpacity>
              </View>
            </View>
          ) : (
            <View style={styles.addressCard}>
              <Text style={styles.addressTitle}>Pick Up Location</Text>
              <Text style={styles.addressDetail}>{pickUpLocation.split('\n')[0]}</Text>
              <Text style={styles.addressDetailSmall}>{pickUpLocation.split('\n')[1]}</Text>
              <View style={styles.addressButtonsContainer}>
                <TouchableOpacity
                  style={styles.addressButton}
                  onPress={() => alert('Navegar a selección de tienda de recogida')}
                >
                  <Text style={styles.addressButtonText}>Change Location</Text>
                </TouchableOpacity>
              </View>
            </View>
          )}
        </View>

        <View style={styles.mainContent}>
          {/* === LISTA DE ÍTEMS DEL CARRITO === */}
          {cartItems.length > 0 ? (
            <FlatList
              data={cartItems}
              keyExtractor={(item) => item.productId + item.selectedSize}
              renderItem={({ item }) => (
                <CartItem item={item} onUpdateQuantity={updateItemQuantity} />
              )}
              scrollEnabled={false} // Para que el ScrollView principal maneje el scroll
              ListHeaderComponent={<Text style={styles.cartItemsHeader}>Your Order</Text>}
              ListFooterComponent={
                <>
                  {/* === SECCIÓN DE DESCUENTO (PLACEHOLDER) === */}
                  <TouchableOpacity style={styles.discountContainer}>
                    <Ionicons name="pricetag" size={20} color="green" />
                    <Text style={styles.discountText}>1 Discount is applied</Text>
                    <Ionicons name="chevron-forward" size={20} color="#888" style={styles.discountArrow}/>
                  </TouchableOpacity>
                  <View style={{ height: 10 }} />
                </>
              }
            />
          ) : (
            <Text style={styles.emptyCartText}>Tu carrito está vacío.</Text>
          )}

          {/* === RESUMEN DE PAGO === */}
          <View style={styles.paymentSummaryContainer}>
            <Text style={styles.paymentSummaryTitle}>Payment Summary</Text>
            <View style={styles.paymentRow}>
              <Text style={styles.paymentLabel}>Price</Text>
              <Text style={styles.paymentValue}>$ {subtotal.toFixed(2)}</Text>
            </View>
            {deliveryType === 'Deliver' && (
              <View style={styles.paymentRow}>
                <Text style={styles.paymentLabel}>Delivery Fee</Text>
                <View style={styles.deliveryFeeValues}>
                  <Text style={styles.paymentValueStrikethrough}>
                    $ {deliveryFeeOriginal.toFixed(2)}
                  </Text>
                  <Text style={styles.paymentValue}>$ {currentDeliveryFee.toFixed(2)}</Text>
                </View>
              </View>
            )}

            <View style={styles.divider} />
            <View style={styles.paymentRow}>
              <Text style={styles.totalPaymentLabel}>Total Payment</Text>
              <Text style={styles.totalPaymentValue}>$ {totalPayment.toFixed(2)}</Text>
            </View>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#fff',
  },
  scrollViewContent: {
    flexGrow: 1,
  },
  topBackground: {
    backgroundColor: '#1E88E5', // Color verde como en la captura
    paddingBottom: 20,
    borderBottomLeftRadius: 30,
    borderBottomRightRadius: 30,
    ...Platform.select({
      ios: {
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.1,
        shadowRadius: 5,
      },
      android: {
        elevation: 8,
      },
    }),
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 15,
    paddingVertical: 10,
    marginTop: Platform.OS === 'android' ? 20 : 0,
  },
  headerIcon: {
    padding: 5,
  },
  headerTitleContainer: {
    alignItems: 'center',
  },
  headerTitle: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#fff',
  },
  headerSubtitle: {
    fontSize: 14,
    color: '#fff',
    opacity: 0.8,
  },
  toggleContainer: {
    flexDirection: 'row',
    backgroundColor: 'rgba(255,255,255,0.2)', // Fondo semitransparente para los botones
    borderRadius: 25,
    marginHorizontal: width * 0.1, // Ajusta los márgenes para centrar
    padding: 5,
    marginTop: 20,
    marginBottom: 20,
  },
  toggleButton: {
    flex: 1,
    paddingVertical: 10,
    borderRadius: 20,
    alignItems: 'center',
  },
  toggleButtonActive: {
    backgroundColor: '#fff',
    ...Platform.select({
      ios: {
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 3,
      },
      android: {
        elevation: 3,
      },
    }),
  },
  toggleButtonText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 16,
  },
  toggleButtonTextActive: {
    color: '#1E88E5', // Color de texto activo similar al color de fondo
  },
  addressCard: {
    backgroundColor: '#fff',
    borderRadius: 15,
    marginHorizontal: 15,
    padding: 20,
    marginTop: -40, // Se superpone ligeramente con el fondo verde
    ...Platform.select({
      ios: {
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.1,
        shadowRadius: 5,
      },
      android: {
        elevation: 8,
      },
    }),
  },
  addressTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
    color: '#333',
  },
  addressDetail: {
    fontSize: 16,
    color: '#555',
  },
  addressDetailSmall: {
    fontSize: 14,
    color: '#777',
    marginBottom: 15,
  },
  addressButtonsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: 10,
  },
  addressButton: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 20,
    paddingVertical: 8,
    paddingHorizontal: 15,
  },
  addressButtonText: {
    color: '#555',
    fontSize: 14,
    fontWeight: '600',
  },

  mainContent: {
    backgroundColor: '#f5f5f5', // Fondo gris claro para el contenido principal
    flex: 1,
    padding: 15,
    paddingTop: 30,
  },
  cartItemsHeader: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 15,
  },
  cartItemContainer: {
    flexDirection: 'row',
    backgroundColor: '#fff',
    borderRadius: 15,
    padding: 15,
    alignItems: 'center',
    marginBottom: 10,
    ...Platform.select({
      ios: {
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 3,
      },
      android: {
        elevation: 3,
      },
    }),
  },
  cartItemImage: {
    width: 60,
    height: 60,
    borderRadius: 10,
    marginRight: 15,
    backgroundColor: '#eee',
  },
  cartItemDetails: {
    flex: 1,
  },
  cartItemName: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
  },
  cartItemSubtitle: {
    fontSize: 14,
    color: '#777',
  },
  cartItemPrice: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#007bff', // Un color azul para el precio
    marginTop: 5,
  },
  quantityControl: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#f0f0f0',
    borderRadius: 20,
    paddingHorizontal: 5,
  },
  quantityButton: {
    padding: 8,
  },
  quantityButtonText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
  },
  quantityText: {
    fontSize: 16,
    fontWeight: 'bold',
    marginHorizontal: 10,
    color: '#333',
  },
  emptyCartText: {
    fontSize: 16,
    color: '#777',
    textAlign: 'center',
    paddingVertical: 20,
  },
  errorTextItem: {
    fontSize: 14,
    color: 'red',
    padding: 10,
    backgroundColor: '#ffe0e0',
    borderRadius: 8,
    marginBottom: 10,
  },
  discountContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fff',
    borderRadius: 15,
    padding: 15,
    marginTop: 10,
    marginBottom: 10,
    ...Platform.select({
      ios: {
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 3,
      },
      android: {
        elevation: 3,
      },
    }),
  },
  discountText: {
    flex: 1,
    marginLeft: 10,
    fontSize: 16,
    fontWeight: 'bold',
    color: 'green',
  },
  discountArrow: {
    marginRight: 5,
  },
  paymentSummaryContainer: {
    backgroundColor: '#fff',
    borderRadius: 15,
    padding: 20,
    marginBottom: 20,
    ...Platform.select({
      ios: {
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 3,
      },
      android: {
        elevation: 3,
      },
    }),
  },
  paymentSummaryTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 15,
    color: '#333',
  },
  paymentRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 10,
    alignItems: 'center',
  },
  paymentLabel: {
    fontSize: 16,
    color: '#555',
  },
  paymentValue: {
    fontSize: 16,
    fontWeight: '600',
    color: '#333',
  },
  deliveryFeeValues: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  paymentValueStrikethrough: {
    fontSize: 14,
    color: '#999',
    textDecorationLine: 'line-through',
    marginRight: 5,
  },
  divider: {
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
    marginVertical: 10,
  },
  totalPaymentLabel: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
  },
  totalPaymentValue: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#1E88E5', // Color azul para el total, como el header
  },
});