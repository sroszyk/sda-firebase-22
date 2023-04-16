import './../styles/styles.css'
import { initializeApp } from "firebase/app";
import { deleteObject, getDownloadURL, getStorage, listAll, ref, uploadBytes } from "firebase/storage";
import { addDoc, collection, deleteDoc, doc, getDoc, getDocs, getFirestore, onSnapshot, query, setDoc, updateDoc, where } from "firebase/firestore";
import { getDatabase, onChildAdded, onValue, ref as refdb, set } from "firebase/database";

const firebaseConfig = {
    apiKey: "AIzaSyAHyc5q5YaEgn6Z0rNU-WLFtdjxR7A_x6M",
    authDomain: "sda-firebase-fron22.firebaseapp.com",
    databaseURL: "https://sda-firebase-fron22-default-rtdb.europe-west1.firebasedatabase.app",
    projectId: "sda-firebase-fron22",
    storageBucket: "sda-firebase-fron22.appspot.com",
    messagingSenderId: "20519627447",
    appId: "1:20519627447:web:36d0217ba0b8ff1186bb32"
  };

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const storage = getStorage(app);
const db = getFirestore(app);
const rdb = getDatabase(app);

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
// const userNameInput = document.getElementById("userName");
// const userSurnameInput = document.getElementById("userSurname");
// const addUserBtn = document.getElementById("addUser");
// const collectionSelect = document.getElementById("collectionName");

// addUserBtn.addEventListener("click", () => {
//     const userName = userNameInput.value;
//     const userSurname = userSurnameInput.value;
//     const collectionName = collectionSelect.value;

//     const jkDoc = doc(db, collectionName, `${userName}${userSurname}`);
//     setDoc(jkDoc, {
//         name: userName,
//         surname: userSurname
//     }).then(() => {
//         userNameInput.value = "";
//         userSurnameInput.value = "";
//     });  
// })

// const docIdInput = document.getElementById("docId");
// const searchBtn = document.getElementById("search");
// const dataHeader = document.getElementById("data");

// searchBtn.addEventListener("click", () => {
//     const docId = docIdInput.value;

//     const myDoc = doc(db, "users", docId);
//     getDoc(myDoc).then(docData => {
//         if(docData.exists()){
//             const data = docData.data();
//             dataHeader.innerText = `${data.name} ${data.surname}`;
//         }
//         else {
//             dataHeader.innerText = "Not found";
//         }
//     })
// })

// const usersOrderedList = document.getElementById("usersList");
// const collectionNameSelect = document.getElementById("collectionName");

// collectionNameSelect.addEventListener("change", () => {
//     const usersColl = collection(db, collectionNameSelect.value);
//     usersOrderedList.innerHTML = "";

//     getDocs(usersColl).then((dataDocs) => {
//         dataDocs.docs.forEach(dataDoc => {
//             const data = dataDoc.data();
//             const li = document.createElement("li");

//             li.innerText = `${data.name} ${data.surname}`;

//             usersOrderedList.appendChild(li);
//         })
//     })
// });

// const nameInput = document.getElementById("name");
// const surnameInput = document.getElementById("surname");
// const addBtn = document.getElementById("add");
// const usersList = document.getElementById("users");
// const usersCollection = collection(db, "users");
// let userEditRef;

// function displayUsers() {
//     getDocs(usersCollection).then(docsData => {
//         usersList.innerHTML = "";

//         docsData.docs.forEach((docData) => {
//             const userData = docData.data();

//             const li = document.createElement("li");
//             const deleteBtn = document.createElement("button");
//             const editBtn = document.createElement("button");

//             deleteBtn.addEventListener("click", () => {
//                 deleteDoc(docData.ref).then(() => {
//                     displayUsers();
//                 });
//             });

//             editBtn.addEventListener("click", () => { 
//                 nameInput.value = userData.name;
//                 surnameInput.value = userData.surname;
//                 userEditRef = docData.ref;
//             });

//             li.innerText = `${userData.name} ${userData.surname}`;
//             deleteBtn.innerText = "Delete";
//             editBtn.innerText = "Edit";

//             usersList.appendChild(li);
//             li.appendChild(deleteBtn);
//             li.appendChild(editBtn);
//         })
//     })
// }
// displayUsers();

// addBtn.addEventListener("click", () => {
//     if(userEditRef){
//         updateDoc(userEditRef, {
//             name: nameInput.value,
//             surname: surnameInput.value 
//         }).then(() => {
//             displayUsers();
//             nameInput.value = "";
//             surnameInput.value = "";
//             userEditRef = undefined;
//         })
//     }
//     else {
//         addDoc(usersCollection, {
//             name: nameInput.value,
//             surname: surnameInput.value
//         }).then(() => {
//             displayUsers();
//             nameInput.value = "";
//             surnameInput.value = "";
//         })
//     }
// });

// const nameInput = document.getElementById("name");
// const searchBtn = document.getElementById("search");
// const usersList = document.getElementById("users");

// searchBtn.addEventListener("click", () => {
//     const usersColl = collection(db, "users");
//     const usersQuery = query(usersColl, where("name", "==", nameInput.value));

//     getDocs(usersQuery).then((docsData) => {
//         usersList.innerHTML = "";

//         docsData.docs.forEach((docData) => {
//             const li = document.createElement("li");
//             li.innerText = docData.id;
//             usersList.appendChild(li);
//         })
//     });
// });


// updateDoc(testRef, {
//     dzieci: ["Marysia"]
// })

// const aniaRef = doc(db, "users", "AniaDuda");

// const unsub = onSnapshot(aniaRef, (doc) => {
//     console.log(doc.data());
// })

// const nameInput = document.getElementById("name");
// const surnameInput = document.getElementById("surname");
// const addBtn = document.getElementById("add");
// const usersList = document.getElementById("users");

// addBtn.addEventListener("click", () => {
//     const name = nameInput.value;
//     const surname = surnameInput.value;

//     const userRef = refdb(rdb, `users/${name}${surname}`);
    
//     set(userRef, {
//         name: name,
//         surname: surname
//     }).then(() => {
//         nameInput.value = "";
//         surnameInput.value = "";
//     });
// })


// const usersRef = refdb(rdb, "users");
// // onValue(usersRef, (snapshot) => {
// //     usersList.innerHTML = "";
// //     snapshot.forEach((userSnapshot) => {
// //         const user = userSnapshot.val();

// //         const li = document.createElement("li");
// //         li.innerText = `${user.name} ${user.surname}`;

// //         usersList.appendChild(li);
// //     })
// // })

// onChildAdded(usersRef, (snapshot) => {
//     const user = snapshot.val();

//     const li = document.createElement("li");
//     li.innerText = `${user.name} ${user.surname}`;

//     usersList.appendChild(li);
// })


const userSelect = document.getElementById("user");
const messageTextArea = document.getElementById("message");
const sendBtn = document.getElementById("send");

sendBtn.addEventListener("click", () => {
    console.log(userSelect.value);
});

const usersRef = refdb(rdb, "users");
onChildAdded(usersRef, (snapshot) => {
    const user = snapshot.val();

    const option = document.createElement("option");
    option.innerText = `${user.name} ${user.surname}`;

    userSelect.appendChild(option);
});