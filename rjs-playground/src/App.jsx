import LocalStorage from "./Components/Rs01-LocalStorage/LocalStorage";
import ToDo from "./Components/Rs02-ToDoList/ToDo";
import CopyInput from "./Components/Rs03-CopyPopupModal/CopyInput";
import FetchData from "./Components/Rs04-FetchData/FetchData";
import "./App.css";

function App() {
  return (
    <>
      <LocalStorage />
      <hr />
      <ToDo />
      <hr />
      <CopyInput />
      <hr />
      <FetchData />
    </>
  );
}

export default App;
