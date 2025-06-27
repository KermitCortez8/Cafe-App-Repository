import React from 'react';
import { SafeAreaView, ScrollView, View, StyleSheet } from 'react-native';
import CustomHeader from '../../InfoCafe-2/componentes/HeaderPerso';
import PromoCard from '../../InfoCafe-2/componentes/PromoCard';
import QuickActions from '../../InfoCafe-2/componentes/QuickActions';
import Section from '../../InfoCafe-2/componentes/Section';
import LogoutButton from '../../InfoCafe-2/componentes/LogoutButton';

export default function AccountScreen() {
  const quickActions = [
    { key:'orders', icon:'cart-outline',        label:'Pedidos',        onPress: ()=>{} },
    { key:'help',   icon:'help-circle-outline', label:'Ayuda',          onPress: ()=>{} },
    { key:'pay',    icon:'card-outline',        label:'Métodos de pago',onPress: ()=>{} },
  ];

  const sections = [
    {
      header:'Beneficios',
      items:[
        { key:'c1', icon:'cash-outline',  label:'Créditos: S/0.00', onPress: ()=>{} },
        { key:'c2', icon:'pricetag-outline', label:'Cupones',       onPress: ()=>{} },
        { key:'c3', icon:'star-outline',     label:'Loyalty',       onPress: ()=>{} },
      ],
    },
    {
      header:'Mi cuenta',
      items:[
        { key:'m1', icon:'ribbon-outline',        label:'Kopi Kap Pro',         onPress: ()=>{} },
        { key:'m2', icon:'location-outline',      label:'Direcciones',          onPress: ()=>{} },
        { key:'m3', icon:'card-outline',          label:'Métodos de pago',      onPress: ()=>{} },
        { key:'m4', icon:'document-text-outline', label:'Datos de facturación', onPress: ()=>{} },
        { key:'m5', icon:'help-circle-outline',   label:'Ayuda',                onPress: ()=>{} },
      ],
    },
    {
      header:'Configuración',
      items:[
        { key:'s1', icon:'notifications-outline', label:'Notificaciones', onPress: ()=>{} },
      ],
    },
    {
      header:'Más información',
      items:[
        { key:'i1', icon:'megaphone-outline',    label:'Conoce el Nuevo Rappi',  onPress: ()=>{} },
        { key:'i2', icon:'people-outline',       label:'Quiero ser Aliado Rappi',onPress: ()=>{} },
        { key:'i3', icon:'bicycle-outline',      label:'Quiero ser Repartidor',  onPress: ()=>{} },
        { key:'i4', icon:'document-outline',     label:'Términos y Condiciones', onPress: ()=>{} },
        { key:'i5', icon:'book-outline',         label:'Libro de Reclamaciones', onPress: ()=>{} },
        { key:'i6', icon:'lock-closed-outline',  label:'Política de Privacidad', onPress: ()=>{} },
      ],
    },
  ];

  return (
    <SafeAreaView style={styles.safeArea}>
      <CustomHeader />
      <ScrollView contentContainerStyle={styles.main}>
        <View style={styles.cards}>
          <PromoCard
            header="Kopi Kap Pro"
            title="Envíos gratis"
            subtitle="Promociones exclusivas y descuentos en tarifa de servicio."
            ctaLabel="Obtén tu prueba gratis"
            onPress={()=>{}}
          />
          <PromoCard
            colors={['#4E1F00','#A0522D']}
            header="Kopi Kap Pro"
            title="Beneficios Exclusivos"
            subtitle="Recibe beneficios vinculando tu primera tarjeta de crédito."
            ctaLabel="¡Lo quiero!"
            onPress={()=>{}}
          />
        </View>

        <QuickActions actions={quickActions} />

        {sections.map(sec => (
          <Section key={sec.header} header={sec.header} items={sec.items} />
        ))}

        <LogoutButton onPress={()=>{/* lógica de logout */}}/>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#fff',
  },
  main: {
    padding: 20,
  },
  cards: {
    flexDirection: 'column',
    marginVertical: 20,
  },
});
