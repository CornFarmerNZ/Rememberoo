import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import { getDatabase, ref, set } from "firebase/database";
import { auth } from "../App.js";
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

// const classes = new array(10);

function writeUserData() {}

function handleClick() {
  writeUserData();
}

export default Database;
