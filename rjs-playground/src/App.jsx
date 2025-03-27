import LocalStorage from "./Components/Rs01-LocalStorage/LocalStorage";
import ToDo from "./Components/Rs02-ToDoList/ToDo";
import CopyInput from "./Components/Rs03-CopyPopupModal/CopyInput";
import FetchData from "./Components/Rs04-FetchData/FetchData";
import "./App.css";
import { UserProvider } from "./Context/UserContext";
import ShoppingCart from "./Components/Rs05 -ShoppingCart/ShoppingCart";
import Timer from "./Components/Rs06 - Timer/Timer";

function App() {
  return (
    <UserProvider>
      <LocalStorage />
      <hr />
      <ToDo />
      <hr />
      <CopyInput />
      <hr />
      <FetchData />
      <hr />
      <ShoppingCart />
      <hr />
      <Timer />
    </UserProvider>
  );
}

export default App;
