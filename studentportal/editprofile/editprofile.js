 // Import the functions you need from the SDKs you need
 import { initializeApp } from "https://www.gstatic.com/firebasejs/10.13.2/firebase-app.js";
 import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.13.2/firebase-analytics.js";
 import { set,ref,push,getDatabase } from "https://www.gstatic.com/firebasejs/10.13.2/firebase-database.js";
 // TODO: Add SDKs for Firebase products that you want to use
 // https://firebase.google.com/docs/web/setup#available-libraries

 // Your web app's Firebase configuration
 // For Firebase JS SDK v7.20.0 and later, measurementId is optional
 const firebaseConfig = {
   apiKey: "AIzaSyDPGmWFSXvL7tAxjD8xeIghzsos05L7i_4",
   authDomain: "registrationform-cc9e6.firebaseapp.com",
   databaseURL: "https://registrationform-cc9e6-default-rtdb.firebaseio.com",
   projectId: "registrationform-cc9e6",
   storageBucket: "registrationform-cc9e6.appspot.com",
   messagingSenderId: "822318557593",
   appId: "1:822318557593:web:7e4edbf284ca699ba84b08",
   measurementId: "G-BJS9L31DMJ"
 };

 // Initialize Firebase
 const app = initializeApp(firebaseConfig);
 const analytics = getAnalytics(app);
 const db = getDatabase();

let cnic = document.getElementById('cnic');
let firstname = document.getElementById('firstname');
let lastname = document.getElementById('lastname');

 window.save = () => {
  let obj = {
    cnic:cnic.value,
    firstname:firstname.value,
    lastname:lastname.value,

  }
  console.log(obj);

  obj.id = push(ref(db,"user")).key
  const referance = ref(db,`user/${obj.id}`)
  set(referance,obj)

  .then((res) => {
    console.log(res,"Send");
    alert("send")
    
  }).catch((err) => {
    console.log(err.massage);

    
  })
  
 }
