import Button from "@mui/material/Button";
import { auth, provider } from "../App.js";
import {
  signInWithPopup,
  inMemoryPersistence,
  browserSessionPersistence,
  setPersistence,
} from "firebase/auth";
import Cookies from "universal-cookie";

const cookies = new Cookies();

function Authentication(props) {
  const signInWithGoogle = async () => {
    //   const result = await signInWithPopup(auth, provider);
    //   cookies.set("auth-token", result.user.refreshToken);
    //   props.updateAuth(true);

    // Existing and future Auth states are now persisted in the current
    // session only. Closing the window would clear any existing state even
    // if a user forgets to sign out.
    // ...
    // New sign-in will be persisted with session persistence.
    return signInWithPopup(auth, provider);
  };
  return (
    <div className="authenticator">
      <p>Sign in with Google</p>
      <Button onClick={signInWithGoogle}>Sign in with Google</Button>
    </div>
  );
}

export default Authentication;
