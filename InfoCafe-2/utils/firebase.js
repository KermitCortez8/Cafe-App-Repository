// firebase.js
import { initializeApp } from 'firebase/app';
import { getDatabase } from 'firebase/database';
import { getStorage } from 'firebase/storage';

// Configuración de Firebase
const firebaseConfig = {
  apiKey: "AIzaSyAKkKFrC5blAQBkducQC2gAQw6bavgzpWo",
  authDomain: "info-cafe-1e08a.firebaseapp.com",
  projectId: "info-cafe-1e08a",
  databaseURL: "https://info-cafe-1e08a-default-rtdb.firebaseio.com/",
  storageBucket: "gs://info-cafe-1e08a.firebasestorage.app",
  messagingSenderId: "1037396173946",
  appId: "1:1037396173946:web:63541b9dabd804328c87c3"
};

// Inicializar Firebase
const app = initializeApp(firebaseConfig);

// Exportar la configuración e instancias de Firebase
const database = getDatabase(app);
const storage = getStorage(app);

export { app, database, storage };
