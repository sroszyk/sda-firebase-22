import './../styles/styles.css'
import { initializeApp } from "firebase/app";
import { getStorage, ref, uploadBytes } from "firebase/storage";

const firebaseConfig = {
    apiKey: "AIzaSyAHyc5q5YaEgn6Z0rNU-WLFtdjxR7A_x6M",
    authDomain: "sda-firebase-fron22.firebaseapp.com",
    projectId: "sda-firebase-fron22",
    storageBucket: "sda-firebase-fron22.appspot.com",
    messagingSenderId: "20519627447",
    appId: "1:20519627447:web:36d0217ba0b8ff1186bb32"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const storage = getStorage(app);

const btn = document.getElementById("mySend");
const input = document.getElementById("myFile");

btn.addEventListener("click", () => {
    const file = input.files[0];
    const imageRef = ref(storage, "image.jpg");

    uploadBytes(imageRef, file).then(() => {
        console.log("SUKCES");
    })
})