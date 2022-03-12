import React from "react";
import { db } from "../../../Firebase";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";

import {
  collection,
  doc,
  getDocs,
  addDoc,
  updateDoc,
  deleteDoc,
} from "firebase/firestore";

function Volunteer() {
  const auth = getAuth();
  signInWithEmailAndPassword(auth, "thanatos786687@gmail.com", "786687123")
    .then((userCredential) => {
      // Signed in
      const user = userCredential.user;
      console.log("success...");
      // ...
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
    });

  const usersCollectionRef = collection(db, "Volunteers");

  const getUsers = async () => {
    const snap = await getDocs(usersCollectionRef);
    snap.forEach((doc) => {
      console.log(doc.id);
      console.log(doc.data().name);
      console.log(doc.data().email);
      console.log("---------------------------------------");
    });
  };

  return (
    <div style={{ backgroundColor: "wheat" }}>
      <table className="table">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Name</th>
            <th scope="col">Email</th>
            <th scope="col">Phone</th>
            <th scope="col">Address</th>
            <th scope="col">Place</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th scope="row">1</th>
            <td>Mark</td>
            <td>Otto</td>
            <td>@mdo</td>
            <td>@mdo</td>
            <td>@mdo</td>
          </tr>
        </tbody>
      </table>
      <button onClick={getUsers}>click</button>
    </div>
  );
}

export default Volunteer;
