import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
    apiKey: "AIzaSyCddX32hTTmBA1_O_TnJPCpeDRbI30Oyas",
    authDomain: "e-commerce-typescript.firebaseapp.com",
    projectId: "e-commerce-typescript",
    storageBucket: "e-commerce-typescript.appspot.com",
    messagingSenderId: "552800904405",
    appId: "1:552800904405:web:3b46ab8ff7c14bd300ee5c",
    measurementId: "G-HQ85YR0ZBQ"
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);