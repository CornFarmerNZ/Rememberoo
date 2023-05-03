import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import { auth, db } from "../App.js";
import { collection, doc, setDoc, getDoc } from "firebase/firestore";

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

function handleClick() {
  const user = auth.currentUser;
  const usersRef = collection(db, "users");
  console.log(auth);
  //
  getUserData(usersRef, user).then((exists) => {
    if (exists) {
      //user already exists in database
    } else {
      writeUserData(usersRef, user);
    }
  });
}

function Database() {
  return (
    <div className="database-container">
      <TextField
        id="outlined-basic note"
        label="Description"
        variant="outlined"
      />
      <br></br>
      <br></br>
      <Button
        className="button-add-user"
        id="button-add-user"
        onClick={handleClick}
        variant="contained"
      >
        Submit
      </Button>
    </div>
  );
}

export default Database;
