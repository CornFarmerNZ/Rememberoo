import "./App.css";

import { useState } from "react";
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import {
  getAuth,
  GoogleAuthProvider,
  setPersistence,
  browserSessionPersistence,
  onAuthStateChanged,
} from "firebase/auth";
import Authentication from "./Components/Authentication";
import Database from "./Components/Database";

var serviceAccount = require("./serviceAccountKey.json");
export const app = initializeApp(serviceAccount);
export const db = getFirestore(app);
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();
setPersistence(auth, browserSessionPersistence);

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  onAuthStateChanged(auth, (user) => {
    if (user) {
      setIsLoggedIn(true);
    } else {
    }
  });

  return (
    <div className="App">
      <header className="App-header">
        {!isLoggedIn ? <Authentication /> : <Database />}
      </header>
    </div>
  );
}

export default App;
