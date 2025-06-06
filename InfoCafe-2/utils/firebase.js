import { initializeApp } from 'firebase/app';
import { getDatabase, ref, get } from 'firebase/database';
import { getStorage, ref as storageRef, uploadBytesResumable, getDownloadURL } from 'firebase/storage';  // Importación de Firebase Storage

// Configuración de Firebase
const firebaseConfig = {
  apiKey: "AIzaSyAKkKFrC5blAQBkducQC2gAQw6bavgzpWo",
  authDomain: "info-cafe-1e08a.firebaseapp.com",
  projectId: "info-cafe-1e08a",
  databaseURL: "https://info-cafe-1e08a-default-rtdb.firebaseio.com/",
  storageBucket: "info-cafe-1e08a.firebasestorage.app",
  messagingSenderId: "1037396173946",
  appId: "1:1037396173946:web:63541b9dabd804328c87c3"
};

// Inicializar Firebase
const app = initializeApp(firebaseConfig);
const database = getDatabase(app);
const storage = getStorage(app); // Referencia al servicio de Storage

// Función para obtener categorías
export const getCategories = async () => {
  const categoryRef = ref(database, 'categories/');
  try {
    const snapshot = await get(categoryRef);
    if (snapshot.exists()) {
      return snapshot.val().filter(item => item !== null); // Filtrar null
    }
    return [];
  } catch (error) {
    console.error('Error al obtener categorías:', error);
    return [];
  }
};

// Función para obtener cafés
export const getCoffees = async () => {
  const coffeeRef = ref(database, 'coffees/');
  try {
    const snapshot = await get(coffeeRef);
    if (snapshot.exists()) {
      return Object.values(snapshot.val());
    }
    return [];
  } catch (error) {
    console.error('Error al obtener cafés:', error);
    return [];
  }
};

// Función para subir una imagen a Firebase Storage y obtener la URL
export const uploadImage = async (uri, imageName) => {
  const storageReference = storageRef(storage, 'images/' + imageName);  // Ruta de almacenamiento en Firebase
  const response = await fetch(uri);
  const blob = await response.blob();
  const uploadTask = uploadBytesResumable(storageReference, blob);

  return new Promise((resolve, reject) => {
    uploadTask.on('state_changed', 
      null,
      (error) => reject(error), // Si hay error en la carga
      async () => {
        // Obtener la URL de la imagen una vez que se haya subido
        const downloadURL = await getDownloadURL(uploadTask.snapshot.ref);
        resolve(downloadURL);
      }
    );
  });
};
