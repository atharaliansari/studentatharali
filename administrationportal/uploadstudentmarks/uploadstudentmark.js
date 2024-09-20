 // Import the functions you need from the SDKs you need
 import { initializeApp } from "https://www.gstatic.com/firebasejs/10.13.2/firebase-app.js";
 import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.13.2/firebase-analytics.js";
 import {set,push,ref, getDatabase } from "https://www.gstatic.com/firebasejs/10.13.2/firebase-database.js";
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



 let course = document.getElementById('course').value;
 let studentid = document.getElementById('studentid').value;
 let marks = document.getElementById('marks').value;
 let totalmarks = document.getElementById('totalmarks').value;
 let grade = document.getElementById('grade').value;

window.save = () => {
  document.getElementById('dataform')

  let course = document.getElementById('course').value
  let studentId = document.getElementById('studentid').value
  let totalMarks = document.getElementById('totalmarks').value
  let marks = document.getElementById('marks').value
  let grade = document.getElementById('grade').value

  let obj = {
    course: course,
    studentId: studentId,
    totalMarks: totalMarks,
    marks: marks,
    grade: grade,
  }
  console.log(obj)
  obj.id = push(ref(db, 'user')).key;
  const reference = ref(db, `user/${obj.id}`)
  set(reference, obj)
    .then((res) => {
      console.log(res, 'send');
    })
    .catch((err) => {
      console.log(err.message);
    })

  document.getElementById('cartContainer')
  cartContainer.innerHTML += `
  <div class='border-4 rounded-lg'>
  <h2 class='text-start ps-1 ms-2'> <strong>Course:</strong> ${course} </h2>
  <h2 class='text-start ps-1 ms-2'> <strong>Student Id:</strong> ${studentId} </h2>
  <h2 class='text-start ps-1 ms-2'> <strong>Marks:</strong> ${marks} </h2>
  <h2 class='text-start ps-1 ms-2'> <strong>Total Marks:</strong> ${totalMarks} </h2>
  <h2 class='text-start ps-1 ms-2'> <strong>Grade:</strong> ${grade} </h2>
  </div>
  <br>`
  
}


/* <div class="overflow-x-auto">
<table class="min-w-full bg-white border border-gray-300 rounded-lg shadow-lg">
    <thead>
        <tr class="bg-cyan-950 text-white">
            <th class="py-3 px-4 text-left font-semibold">Course</th>
            <th class="py-3 px-4 text-left font-semibold">Student ID</th>
            <th class="py-3 px-4 text-left font-semibold">Marks</th>
            <th class="py-3 px-4 text-left font-semibold">Total Marks</th>
            <th class="py-3 px-4 text-left font-semibold">Grade</th>
        </tr>
    </thead>
    <tbody>
        <tr class="bg-gray-100">
            <td class="py-3 px-4 border-b">Course Name</td>
            <td class="py-3 px-4 border-b">12345</td>
            <td class="py-3 px-4 border-b">85</td>
            <td class="py-3 px-4 border-b">100</td>
            <td class="py-3 px-4 border-b">A</td>
        </tr>
    </tbody>
</table>
</div>

<br>` */
