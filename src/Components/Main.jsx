import { login } from "./Database.jsx";
import Header from "./Header.jsx";
import { auth } from "../App.js";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Collection from "./Collection.jsx";
import "./Main.css";

function Main() {
  return (
    <div className="main-container">
      <div className="header-container">
        <Header user={auth.currentUser} />
      </div>
      <div className="stats-container"></div>
      <div className="collection-container">
        <Collection />
      </div>
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
