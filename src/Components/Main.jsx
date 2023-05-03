import { login } from "./Database.jsx";
import Header from "./Header.jsx";
import { auth } from "../App.js";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import "./Main.css";

function Main() {
  return (
    <div className="login">
      <Header user={auth.currentUser} />
      <p>Logged in!</p>
      <div className="stats-container"></div>
      <div className="buttons-container">
        <Button variant="contained" onClick={addCollection}>
          Add Collection
        </Button>
        <TextField
          className="hidden"
          id="outlined-basic"
          label="Outlined"
          variant="outlined"
        />
        <Button className="hidden" variant="contained">
          Add Collection
        </Button>
      </div>
    </div>
  );
}

function addCollection() {
  const hidden = document.getElementsByClassName("hidden");
  Array.from(hidden).forEach((el) => {
    el.classList.remove("hidden");
    el.classList.add("puff-in-center");
  });
}

export default Main;
