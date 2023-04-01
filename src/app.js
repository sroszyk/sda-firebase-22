import './../styles/styles.css'
import { initializeApp } from "firebase/app";
import { getDownloadURL, getStorage, ref, uploadBytes } from "firebase/storage";

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
const header = document.getElementById("status");
const fileNameInput = document.getElementById("filename");

btn.addEventListener("click", () => {    
    const file = input.files[0];
    const imageRef = ref(storage, fileNameInput.value);
    
    header.innerText = "PRZESYŁAM!";
    uploadBytes(imageRef, file).then(() => {
        header.innerText = "PRZESŁANO!";
        
        getDownloadURL(imageRef).then(url => {
            const img = document.createElement("img");
            img.src = url;
            document.body.appendChild(img);
        })
    })
})