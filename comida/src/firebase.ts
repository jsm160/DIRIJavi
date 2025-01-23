// Importar las funciones necesarias de los SDK de Firebase
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getDatabase } from "firebase/database"; // Para Realtime Database
import { getAuth } from "firebase/auth"; // Para Authentication
import { getFirestore } from "firebase/firestore"; // Para Firestore
import { getStorage } from "firebase/storage"; // Para Storage

// Configuración de Firebase
const firebaseConfig = {
  apiKey: "AIzaSyB53pxu9jG1jaxw3ML-ukF_FjSvObBoRgI",
  authDomain: "diri-267ab.firebaseapp.com",
  databaseURL: "https://diri-267ab-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "diri-267ab",
  storageBucket: "diri-267ab.appspot.com", // Corregí el valor, ya que probablemente sea ".appspot.com"
  messagingSenderId: "158202519628",
  appId: "1:158202519628:web:57522339c4a424821a94e9",
  measurementId: "G-5ZJ1ZH7WFH",
};

// Inicializar Firebase
const app = initializeApp(firebaseConfig);

// Inicializar Analytics (opcional, si tu app no usa Analytics, puedes eliminar esta línea)
const analytics = getAnalytics(app);

// Inicializar otros servicios de Firebase
const database = getDatabase(app); // Realtime Database
const auth = getAuth(app); // Authentication
const firestore = getFirestore(app); // Firestore
const storage = getStorage(app); // Storage

// Exportar las instancias inicializadas para usarlas en otros archivos
export { app, analytics, database, auth, firestore, storage };
