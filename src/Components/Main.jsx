import { login } from "./Database.jsx";
import Header from "./Header.jsx";
import { auth } from "../App.js";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Collection from "./Collection.jsx";
import LibraryAddIcon from "@mui/icons-material/LibraryAdd";
import "./Main.css";

function Main() {
  return (
    <div className="main-container">
      <div className="header-container">
        <Header user={auth.currentUser} />
      </div>
      <div className="stats-container">
        <div>
          <div className="font-header">Streak (Days)</div>
          <div>5</div>
        </div>
        <div>
          <div className="font-header">Collection count</div>
          <div>23</div>
        </div>
        <div>
          <div className="font-header">Cards remembered</div>
          <div>1074</div>
        </div>
      </div>
      <div className="collection-container">
        <Collection />
        <Collection />
        <Collection />
        <Collection />
        <Collection />
        <Collection />
        <Collection />
        <Collection />
        <Collection />
        <Collection />
        <Collection />
        <Collection />
      </div>
      <div className="buttons-container">
        <div className="add-new-icon-container font-header">
          <LibraryAddIcon className="icon-add" onClick={addCollection} />
          Add a new Collection
        </div>

        <TextField
          className="hidden"
          id="outlined-basic"
          label="Collection"
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
    el.classList.add("slide-in-left");
  });
}

export default Main;
