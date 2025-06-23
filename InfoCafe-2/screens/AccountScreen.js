import React from 'react';
import { SafeAreaView, ScrollView, View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import CustomHeader from '../../InfoCafe-2/componentes/HeaderPerso';
import { Ionicons } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';

export default function AccountScreen() {
  return (
    <SafeAreaView style={styles.safeArea}>
      {/* Encabezado ya implementado */}
      <CustomHeader />

      {/* Contenido principal debajo del encabezado */}
      <ScrollView contentContainerStyle={styles.mainContent}>

        {/* Tarjetas de ejemplo */}
        <View style={styles.cardsContainer}>
           {/* Tarjeta 1: Promoción de envíos gratis y promociones exclusivas */}
      <LinearGradient
        colors={['#FFB300', '#FF8C00']}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 1 }}
        style={styles.cardGradient}
      >
        <View style={styles.cardContent}>
          <Text style={styles.cardHeader}>Kopi Kap Pro</Text>
          <Text style={styles.cardTitle}>Envíos gratis</Text>
          <Text style={styles.cardSubtitle}>
            Promociones exclusivas y descuentos en tarifa de servicio.
          </Text>
          <TouchableOpacity style={styles.ctaButton}>
            <Text style={styles.ctaButtonText}>Obtén tu prueba gratis</Text>
          </TouchableOpacity>
        </View>
      </LinearGradient>

      {/* Tarjeta 2: Beneficios al vincular tu primera tarjeta de crédito */}
      <LinearGradient
        colors={['#4E1F00', '#A0522D']}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 1 }}
        style={styles.cardGradient}
      >
        <View style={styles.cardContent}>
          <Text style={styles.cardHeader}>Kopi Kap Pro</Text>
          <Text style={styles.cardTitle}>Beneficios Exclusivos</Text>
          <Text style={styles.cardSubtitle}>
            Recibe beneficios vinculando tu primer tarjeta de crédito.
          </Text>
          <TouchableOpacity style={styles.ctaButton}>
            <Text style={styles.ctaButtonText}>¡Lo quiero!</Text>
          </TouchableOpacity>
        </View>
      </LinearGradient> 
        </View>

        {/* 3 Rectángulos con íconos */}
        <View style={styles.rectanglesContainer}>
          <View style={styles.rectangle}>
            <Ionicons
              name="cart-outline"
              size={24}
              color="#4E1F00"
              style={styles.rectangleIcon}
            />
            <Text style={styles.rectangleText}>Pedidos</Text>
          </View>
          <View style={styles.rectangle}>
            <Ionicons
              name="help-circle-outline"
              size={24}
              color="#4E1F00"
              style={styles.rectangleIcon}
            />
            <Text style={styles.rectangleText}>Ayuda</Text>
          </View>
          <View style={styles.rectangle}>
            <Ionicons
              name="card-outline"
              size={24}
              color="#4E1F00"
              style={styles.rectangleIcon}
            />
            <Text style={styles.rectangleText}>Métodos de pago</Text>
          </View>
        </View>

        {/* Secciones adicionales */}
        <View style={styles.sectionsContainer}>
          {/* Sección: Beneficios */}
          <View style={styles.section}>
            <Text style={styles.sectionHeader}>Beneficios</Text>
            <View style={styles.sectionItem}>
              <View style={styles.itemContainer}>
                <Ionicons
                  name="cash-outline"
                  size={20}
                  color="#4E1F00"
                  style={styles.itemIcon}
                />
                <Text style={styles.itemText}>Créditos: S/0.00</Text>
              </View>
              <Ionicons
                name="chevron-forward-outline"
                size={20}
                color="#4E1F00"
              />
            </View>
            <View style={styles.sectionItem}>
              <View style={styles.itemContainer}>
                <Ionicons
                  name="pricetag-outline"
                  size={20}
                  color="#4E1F00"
                  style={styles.itemIcon}
                />
                <Text style={styles.itemText}>Cupones</Text>
              </View>
              <Ionicons
                name="chevron-forward-outline"
                size={20}
                color="#4E1F00"
              />
            </View>
            <View style={styles.sectionItem}>
              <View style={styles.itemContainer}>
                <Ionicons
                  name="star-outline"
                  size={20}
                  color="#4E1F00"
                  style={styles.itemIcon}
                />
                <Text style={styles.itemText}>Loyalty</Text>
              </View>
              <Ionicons
                name="chevron-forward-outline"
                size={20}
                color="#4E1F00"
              />
            </View>
          </View>

          {/* Sección: Mi cuenta */}
          <View style={styles.section}>
            <Text style={styles.sectionHeader}>Mi cuenta</Text>
            <View style={styles.sectionItem}>
              <View style={styles.itemContainer}>
                <Ionicons
                  name="ribbon-outline"
                  size={20}
                  color="#4E1F00"
                  style={styles.itemIcon}
                />
                <Text style={styles.itemText}>Kopi Kap Pro</Text>
              </View>
              <Ionicons
                name="chevron-forward-outline"
                size={20}
                color="#4E1F00"
              />
            </View>
            <View style={styles.sectionItem}>
              <View style={styles.itemContainer}>
                <Ionicons
                  name="location-outline"
                  size={20}
                  color="#4E1F00"
                  style={styles.itemIcon}
                />
                <Text style={styles.itemText}>Direcciones</Text>
              </View>
              <Ionicons
                name="chevron-forward-outline"
                size={20}
                color="#4E1F00"
              />
            </View>
            <View style={styles.sectionItem}>
              <View style={styles.itemContainer}>
                <Ionicons
                  name="card-outline"
                  size={20}
                  color="#4E1F00"
                  style={styles.itemIcon}
                />
                <Text style={styles.itemText}>Métodos de pago</Text>
              </View>
              <Ionicons
                name="chevron-forward-outline"
                size={20}
                color="#4E1F00"
              />
            </View>
            <View style={styles.sectionItem}>
              <View style={styles.itemContainer}>
                <Ionicons
                  name="document-text-outline"
                  size={20}
                  color="#4E1F00"
                  style={styles.itemIcon}
                />
                <Text style={styles.itemText}>Datos de facturación</Text>
              </View>
              <Ionicons
                name="chevron-forward-outline"
                size={20}
                color="#4E1F00"
              />
            </View>
            <View style={styles.sectionItem}>
              <View style={styles.itemContainer}>
                <Ionicons
                  name="help-circle-outline"
                  size={20}
                  color="#4E1F00"
                  style={styles.itemIcon}
                />
                <Text style={styles.itemText}>Ayuda</Text>
              </View>
              <Ionicons
                name="chevron-forward-outline"
                size={20}
                color="#4E1F00"
              />
            </View>
          </View>

          {/* Sección: Configuración */}
          <View style={styles.section}>
            <Text style={styles.sectionHeader}>Configuración</Text>
            <View style={styles.sectionItem}>
              <View style={styles.itemContainer}>
                <Ionicons
                  name="notifications-outline"
                  size={20}
                  color="#4E1F00"
                  style={styles.itemIcon}
                />
                <Text style={styles.itemText}>Notificaciones</Text>
              </View>
              <Ionicons
                name="chevron-forward-outline"
                size={20}
                color="#4E1F00"
              />
            </View>
          </View>


          {/* Sección: Más información */}
        <View style={styles.section}>
          <Text style={styles.sectionHeader}>Más información</Text>
          <View style={styles.sectionItem}>
            <View style={styles.itemContainer}>
              <Ionicons name="megaphone-outline" size={20} color="#4E1F00" style={styles.itemIcon} />
              <Text style={styles.itemText}>Conoce el Nuevo Rappi</Text>
            </View>
            <Ionicons name="chevron-forward-outline" size={20} color="#4E1F00" />
          </View>
          <View style={styles.sectionItem}>
            <View style={styles.itemContainer}>
              <Ionicons name="people-outline" size={20} color="#4E1F00" style={styles.itemIcon} />
              <Text style={styles.itemText}>Quiero ser Aliado Rappi</Text>
            </View>
            <Ionicons name="chevron-forward-outline" size={20} color="#4E1F00" />
          </View>
          <View style={styles.sectionItem}>
            <View style={styles.itemContainer}>
              <Ionicons name="bicycle-outline" size={20} color="#4E1F00" style={styles.itemIcon} />
              <Text style={styles.itemText}>Quiero ser Repartidor</Text>
            </View>
            <Ionicons name="chevron-forward-outline" size={20} color="#4E1F00" />
          </View>
          <View style={styles.sectionItem}>
            <View style={styles.itemContainer}>
              <Ionicons name="document-outline" size={20} color="#4E1F00" style={styles.itemIcon} />
              <Text style={styles.itemText}>Términos y Condiciones</Text>
            </View>
            <Ionicons name="chevron-forward-outline" size={20} color="#4E1F00" />
          </View>
          <View style={styles.sectionItem}>
            <View style={styles.itemContainer}>
              <Ionicons name="book-outline" size={20} color="#4E1F00" style={styles.itemIcon} />
              <Text style={styles.itemText}>Libro de Reclamaciones</Text>
            </View>
            <Ionicons name="chevron-forward-outline" size={20} color="#4E1F00" />
          </View>
          <View style={styles.sectionItem}>
            <View style={styles.itemContainer}>
              <Ionicons name="lock-closed-outline" size={20} color="#4E1F00" style={styles.itemIcon} />
              <Text style={styles.itemText}>Política de Privacidad</Text>
            </View>
            <Ionicons name="chevron-forward-outline" size={20} color="#4E1F00" />
          </View>
        </View>

        {/* Botones de Cerrar Sesión */}
        <View style={styles.logoutContainer}>
          <TouchableOpacity style={styles.logoutButton}>
            <Text style={styles.logoutButtonText}>Cerrar sesión</Text>
          </TouchableOpacity>
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
  mainContent: {
    padding: 20,
  },
  title: {
    fontSize: 26,
    fontWeight: 'bold',
    color: '#4E1F00',
    marginBottom: 10,
  },
  description: {
    fontSize: 16,
    lineHeight: 22,
    color: '#333',
    marginBottom: 20,
  },
    cardsContainer: {
    flexDirection: 'column',
    marginVertical: 20,
  },
  cardGradient: {
    borderRadius: 16,
    padding: 2, // Grosor del borde degradado
    marginBottom: 20,
    // Sombras para iOS
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 6,
    // Elevación para Android
    elevation: 6,
  },
  cardContent: {
    backgroundColor: '#fff',
    borderRadius: 14,
    padding: 20,
  },
  cardHeader: {
    fontSize: 14,
    fontWeight: '600',
    color: '#4E1F00',
    marginBottom: 8,
  },
  cardTitle: {
    fontSize: 20,
    fontWeight: '700',
    color: '#4E1F00',
    marginBottom: 6,
  },
  cardSubtitle: {
    fontSize: 14,
    color: '#666',
    marginBottom: 12,
    lineHeight: 20,
  },
  ctaButton: {
    alignSelf: 'flex-start',
    backgroundColor: '#4E1F00',
    paddingVertical: 8,
    paddingHorizontal: 16,
    borderRadius: 8,
  },
  ctaButtonText: {
    color: '#fff',
    fontSize: 14,
    fontWeight: '600',
  },
  rectanglesContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 20,
  },
  rectangle: {
    backgroundColor: '#F8F8F8',
    borderRadius: 8,
    padding: 15,
    width: '30%',
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 3,
    elevation: 2,
  },
  rectangleIcon: {
    marginBottom: 5,
  },
  rectangleText: {
    fontSize: 14,
    color: '#4E1F00',
    textAlign: 'center',
  },
  section: {
    marginTop: 30,
    backgroundColor: '#FAFAF8',
    borderRadius: 8,
    padding: 15,
  },
  sectionHeader: {
    fontSize: 18,
    fontWeight: '600',
    color: '#4E1F00',
    marginBottom: 10,
  },
  sectionItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
    paddingVertical: 10,
  },
  itemContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  itemIcon: {
    marginRight: 10,
  },
  itemText: {
    fontSize: 16,
    color: '#333',
  },
  logoutContainer: {
    marginTop: 30,
  },
  logoutButton: {
    backgroundColor: '#4E1F00',
    paddingVertical: 12,
    borderRadius: 8,
    alignItems: 'center',
    marginBottom: 10,
  },
  logoutButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '600',
  },
  footerContainer: {
    alignItems: 'center',
    marginTop: 20,
  },
  footerText: {
    fontSize: 12,
    color: '#999',
  },
});