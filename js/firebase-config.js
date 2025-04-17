import { initializeApp } from "https://www.gstatic.com/firebasejs/11.0.2/firebase-app.js";
import { getDatabase } from "https://www.gstatic.com/firebasejs/11.0.2/firebase-database.js";

const firebaseConfig = {
    apiKey: "AIzaSyD0XiNuclG9x6nxPBqSWTAvJZ2FRG0eMIY",
    authDomain: "aboutme-789d0.firebaseapp.com",
    databaseURL: "https://aboutme-789d0-default-rtdb.firebaseio.com",
    projectId: "aboutme-789d0",
    storageBucket: "aboutme-789d0.firebasestorage.app",
    messagingSenderId: "661064784574",
    appId: "1:661064784574:web:c8da037fa1cb0207381cef",
    measurementId: "G-5XWJMBK6PT"
  };

const app = initializeApp(firebaseConfig);
const database = getDatabase(app);

export { database };