import './../styles/styles.css'
import { initializeApp } from "firebase/app";
import { getDownloadURL, getStorage, listAll, ref, uploadBytes } from "firebase/storage";

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

// const btn = document.getElementById("mySend");
// const input = document.getElementById("myFile");
// const header = document.getElementById("status");
// const fileNameInput = document.getElementById("filename");

// btn.addEventListener("click", () => {    
//     const file = input.files[0];
//     const imageRef = ref(storage, fileNameInput.value);

//     header.innerText = "PRZESYŁAM!";
//     uploadBytes(imageRef, file).then(() => {
//         header.innerText = "PRZESŁANO!";

//         getDownloadURL(imageRef).then(url => {
//             const img = document.createElement("img");
//             img.src = url;
//             document.body.appendChild(img);
//         })
//     })
// })

// const searchBtn = document.getElementById("searchBtn");
// const filenameInput = document.getElementById("filename");
// const img = document.getElementById("imageView");
// const messageHeader = document.getElementById("message");

// searchBtn.addEventListener("click", () => {
//     const imageRef = ref(storage, filenameInput.value);

//     getDownloadURL(imageRef).then((url) => {
//         img.src = url;
//         messageHeader.innerText = "";
//     }).catch(() => {
//         messageHeader.innerText = "Nie ma takiego pliku!";
//     })
// })

// const list = document.getElementById("list");
// const storageRef = ref(storage);
// const image = document.getElementById("image");

// listAll(storageRef).then(res => {
//     res.items.forEach(item => {
//         const listItem = document.createElement("li");
//         const button = document.createElement("button");

//         button.innerText = "Show";
//         listItem.innerText = item.fullPath;

//         button.addEventListener("click", () => {
//             getDownloadURL(item).then(url => {
//                 image.src = url;
//             })
//         });

//         listItem.appendChild(button);
//         list.appendChild(listItem);
//     })
// })

const storageRef = ref(storage);
listAll(storageRef).then(res => {
    res.items.forEach(item => {
        getDownloadURL(item).then(url => {
            const card = document.createElement("div");
            card.classList.add("card");

            const img = document.createElement("img");
            card.appendChild(img);

            const text = document.createElement("div");
            text.classList.add("text");
            card.appendChild(text);

            img.src = url;
            text.innerText = item.fullPath;

            document.body.appendChild(card);
        })
    })
})