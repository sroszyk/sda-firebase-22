import './../styles/styles.css'
import { initializeApp } from "firebase/app";
import { deleteObject, getDownloadURL, getStorage, listAll, ref, uploadBytes } from "firebase/storage";
import {doc, getFirestore, setDoc} from "firebase/firestore";

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
const db = getFirestore(app);

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

// const storageRef = ref(storage);
// listAll(storageRef).then(res => {
//     res.items.forEach(item => {
//         getDownloadURL(item).then(url => {
//             const card = document.createElement("div");
//             card.classList.add("card");

//             const img = document.createElement("img");
//             card.appendChild(img);

//             const text = document.createElement("div");
//             text.classList.add("text");
//             card.appendChild(text);

//             img.src = url;
//             text.innerText = item.fullPath;

//             document.body.appendChild(card);
//         })
//     })
// })

// const albums = document.getElementById("albums");
// const sendBtn = document.getElementById("sendPhoto");
// const fileInput = document.getElementById("file");
// const container = document.getElementById("container");

// sendBtn.addEventListener("click", () => {
//     if (albums.value) {
//         const file = fileInput.files[0];
//         const imageRef = ref(storage, `${albums.value}/${file.name}`);
//         uploadBytes(imageRef, file).then(() => {
//             fileInput.value = "";
//             console.log("WYSLANO!");
//         })
//     }
// })

// const storageRef = ref(storage);
// listAll(storageRef).then(res => {
//     res.prefixes.forEach(prefix => {
//         const option = document.createElement("option");
//         option.innerText = prefix.fullPath;
//         albums.appendChild(option);
//     })
// })

// albums.addEventListener("change", () => {
//     if (albums.value) {
//         const folderRef = ref(storage, albums.value);

//         listAll(folderRef).then(res => {
//             container.innerHTML = "";

//             res.items.forEach(item => {
//                 getDownloadURL(item).then((url) => {
//                     const img = document.createElement("img");
//                     img.src = url;
//                     img.style.width = "100px"
//                     container.appendChild(img);
//                 })
//             })
//         })
//     }
// })


// const albums = document.getElementById("albums");
// const images = document.getElementById("images");

// const storageRef = ref(storage);
// listAll(storageRef).then(res => {
//     res.prefixes.forEach(prefix => {
//         const listItem = document.createElement("li");
//         listItem.innerText = prefix.name;

//         listItem.addEventListener("click", () => {
//             listAll(prefix).then(imgRes => {
//                 images.innerHTML = "";
//                 imgRes.items.forEach((item) => {
//                     const imageItem = document.createElement("li");
//                     const deleteBtn = document.createElement("button");

//                     deleteBtn.innerText = "Delete";
//                     deleteBtn.addEventListener("click", () => {
//                         deleteObject(item).then(() => {
//                             images.removeChild(imageItem);
//                         })
//                     })

//                     imageItem.innerText = item.name;
//                     imageItem.appendChild(deleteBtn);

//                     images.appendChild(imageItem);
//                 })
//             })
//         })

//         albums.appendChild(listItem);
//     })
// })
const userNameInput = document.getElementById("userName");
const userSurnameInput = document.getElementById("userSurname");
const addUserBtn = document.getElementById("addUser");


addUserBtn.addEventListener("click", () => {
    const userName = userNameInput.value;
    const userSurname = userSurnameInput.value;

    const jkDoc = doc(db, "users", `${userName}${userSurname}`);
    setDoc(jkDoc, {
        name: userName,
        surname: userSurname
    }).then(() => {
        userNameInput.value = "";
        userSurnameInput.value = "";
    });  
})
