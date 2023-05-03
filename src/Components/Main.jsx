import { login } from "./Database.jsx";
import Header from "./Header.jsx";
import { auth } from "../App.js";

function Main() {
  return (
    <div className="login">
      <Header user={auth.currentUser} />
      <p>Logged in!</p>
    </div>
  );
}

export default Main;
