import LocalStorage from "./Components/Rs01-LocalStorage/LocalStorage";
import ToDo from "./Components/Rs02-ToDoList/ToDo";
import CopyInput from "./Components/Rs03-CopyPopupModal/CopyInput";
import "./App.css";

function App() {
  return (
    <>
      <LocalStorage />
      <hr />
      <ToDo />
      <hr />
      <CopyInput />
    </>
  );
}

export default App;
