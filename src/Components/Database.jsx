import CircleLoading from "./CircleLoading.jsx";
import { auth, db } from "../App.js";
import { collection, doc, setDoc, getDoc } from "firebase/firestore";
import Main from "./Main.jsx";
import { useState, useEffect } from "react";

async function writeUserData(usersRef, user) {
  const userData = {
    uid: user.uid,
    email: user.email,
    displayName: user.displayName,
    photoUrl: user.photoURL,
  };
  const userDocRef = doc(usersRef, user.uid);
  await setDoc(userDocRef, userData)
    .then((docRef) => {
      console.log("Document written with ID: ", user.uid);
    })
    .catch((error) => {
      console.error("Error adding document: ", error);
    });
}

async function getUserData(usersRef, user) {
  const docRef = doc(usersRef, user.uid);
  const docSnap = await getDoc(docRef);
  if (docSnap.exists()) {
    return true;
  } else {
    return false;
  }
}

export async function login() {
  const user = auth.currentUser;
  const usersRef = collection(db, "users");
  console.log(auth);
  //
  await getUserData(usersRef, user).then((exists) => {
    if (exists) {
      return true;
    } else {
      writeUserData(usersRef, user);
      return true;
    }
  });
}

function Database() {
  const [loggedIn, setLoggedIn] = useState(false);
  useEffect(() => {
    const doLogin = async () => {
      await login();
      setLoggedIn(true);
    };
    doLogin();
  }, []);
  login();
  return loggedIn ? <Main /> : <CircleLoading />;
}

export default Database;
