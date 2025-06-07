// cafe-context.js
import { ref, get } from 'firebase/database';
import { database } from './firebase'; // Asegúrate de que esta importación es correcta
import { getStorage, ref as storageRef, getDownloadURL } from 'firebase/storage';  // Importamos Storage de Firebase

// Función para obtener cafés desde Firebase Realtime Database
export const getCoffees = async () => {
  const coffeeRef = ref(database, 'coffees/');
  try {
    const snapshot = await get(coffeeRef);
    if (snapshot.exists()) {
      const coffees = snapshot.val(); // Obtener los cafés

      // Añadir las URLs de las imágenes de Firebase Storage
      const updatedCoffees = await Promise.all(
        Object.values(coffees).map(async (coffee) => {
          // Comprobamos si existe el nombre de la imagen
          if (coffee.imageName) {
            const imageUrl = await getImageUrl(coffee.imageName); // Obtener la URL de la imagen
            return { ...coffee, imageUrl }; // Añadir la URL de la imagen al café
          } else {
            console.warn('imageName is undefined for coffee:', coffee);
            return { ...coffee, imageUrl: 'https://example.com/defaultImage.jpg' }; // URL predeterminada si falta la imagen
          }
        })
      );

      return updatedCoffees; // Retornar los cafés con las URLs de las imágenes
    }
    return [];
  } catch (error) {
    console.error('Error al obtener cafés:', error);
    return [];
  }
};

// Función para obtener la URL de la imagen desde Firebase Storage
const getImageUrl = async (imageName) => {
  if (!imageName) {
    return null;  // Si no hay nombre de la imagen, retornamos null
  }

  const storage = getStorage();
  const imageRef = storageRef(storage, `coffees/${imageName}`);  // Suponiendo que las imágenes están en la carpeta 'coffees/'

  try {
    const url = await getDownloadURL(imageRef); // Obtener la URL de la imagen
    return url;
  } catch (error) {
    console.error('Error al obtener la URL de la imagen:', error);
    return 'https://example.com/defaultImage.jpg'; // Retorna una URL predeterminada en caso de error
  }
};

// Función para obtener categorías desde Firebase Realtime Database
export const getCategories = async () => {
  const categoryRef = ref(database, 'categories/');
  try {
    const snapshot = await get(categoryRef);
    if (snapshot.exists()) {
      return snapshot.val(); // Retorna las categorías
    }
    return [];
  } catch (error) {
    console.error('Error al obtener categorías:', error);
    return [];
  }
};
