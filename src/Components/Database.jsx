import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import { auth, db } from "../App.js";
import { collection, doc, setDoc } from "firebase/firestore";
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

function writeUserData() {
  const usersRef = collection(db, "users");
  var user = auth.currentUser;

  const userData = {
    uid: user.uid,
    email: user.email,
    displayName: user.displayName,
    photoUrl: user.photoURL,
  };

  const userDocRef = doc(usersRef, user.uid);
  setDoc(userDocRef, userData)
    .then((docRef) => {
      console.log("Document written with ID: ", user.uid);
    })
    .catch((error) => {
      console.error("Error adding document: ", error);
    });
}

function handleClick() {
  console.log(auth);
  writeUserData();
}

export default Database;
