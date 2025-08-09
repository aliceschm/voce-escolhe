import "./App.css";
import Button from "./components/Button";

function App() {
  function handleClick() {
    alert("Clicou no botão!");
  }

  return <Button text="Test" onClick={handleClick} />;
}

export default App;
