import { initializeApp } from 'firebase/app'
import { getAuth } from "firebase/auth";
import { useState, useEffect } from 'react';

const useFirebase = () => {
    const firebaseConfig = {
        apiKey: "AIzaSyA1mXFRP-oU2w2W-CjhXKRjZ3pCyGhVw5o",
        authDomain: "tractrac-dashboard.firebaseapp.com",
        projectId: "tractrac-dashboard",
        storageBucket: "tractrac-dashboard.appspot.com",
        messagingSenderId: "878247928173",
        appId: "1:878247928173:web:894e7aa18dbfbc16123a64"
    };

    const app = initializeApp(firebaseConfig);
    const auth = getAuth(app);
}

export default useFirebase