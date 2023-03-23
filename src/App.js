import logo from "./logo.svg";
import "./App.css";
import Button from "@mui/material/Button";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Button onClick={handleClick} variant="contained">
          Contained
        </Button>
      </header>
    </div>
  );
}

function handleClick() {
  console.log("Button clicked");
}

export default App;
