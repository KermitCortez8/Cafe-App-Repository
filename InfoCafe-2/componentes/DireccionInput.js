import React from 'react';
import {
  View, Text, TextInput,
  FlatList, TouchableOpacity,
  StyleSheet
} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import useDireccionInput from '../../InfoCafe-2/utils/useDirectionInput';

export default function DireccionInput() {
  const {
    input,
    onChangeText,
    predictions,
    handleSelect,
    readyToSave,
    isSaved,
    handleSave,
    handleEdit
  } = useDireccionInput();

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Dirección de entrega</Text>

      <TextInput
        style={styles.input}
        placeholder="Ingresar una dirección de envío"
        placeholderTextColor="#999"
        value={input}
        onChangeText={onChangeText}
        editable={!isSaved}
      />

      <FlatList
        data={predictions}
        keyExtractor={i => i.place_id}
        style={styles.list}
        keyboardShouldPersistTaps="handled"
        renderItem={({ item }) => (
          <TouchableOpacity style={styles.item} onPress={() => handleSelect(item)}>
            <Text>{item.description}</Text>
          </TouchableOpacity>
        )}
      />

      <View style={styles.buttonsRow}>
        <TouchableOpacity
          style={[styles.button, { opacity: readyToSave && !isSaved ? 1 : 0.5 }]}
          onPress={handleSave}
          disabled={!readyToSave || isSaved}
        >
          <Ionicons name="location-outline" size={18} color="#fff" style={styles.icon} />
          <Text style={styles.buttonText}>Agregar Dirección</Text>
        </TouchableOpacity>

        {isSaved && (
          <TouchableOpacity
            style={[styles.button, styles.editButton]}
            onPress={handleEdit}
          >
            <Ionicons name="create-outline" size={18} color="#fff" style={styles.icon} />
            <Text style={styles.buttonText}>Editar Texto</Text>
          </TouchableOpacity>
        )}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: 400,
    backgroundColor: '#F8F8F8',
    alignSelf: 'center',
    padding: 16,
    borderRadius: 8,
    marginVertical: 10
  },
  title: { fontSize: 18, fontWeight: '600', color: '#333', marginBottom: 8 },
  input: {
    fontSize: 16, color: '#333', backgroundColor: '#fff',
    paddingVertical: 12, paddingHorizontal: 14,
    borderRadius: 6, marginBottom: 10
  },
  list: {
    backgroundColor: '#fff', maxHeight: 200,
    marginBottom: 10, borderRadius: 6
  },
  item: { padding: 12, borderBottomWidth: 1, borderBottomColor: '#eee' },
  buttonsRow: { flexDirection: 'row', alignItems: 'center', marginTop: 10 },
  button: {
    flexDirection: 'row',
    backgroundColor: '#4E1F00',
    paddingVertical: 6,
    paddingHorizontal: 12,
    borderRadius: 6,
    alignItems: 'center'
  },
  editButton: { backgroundColor: '#999', marginLeft: 10 },
  buttonText: { color: '#fff', fontSize: 14, fontWeight: 'bold' },
  icon: { marginRight: 6 }
});
