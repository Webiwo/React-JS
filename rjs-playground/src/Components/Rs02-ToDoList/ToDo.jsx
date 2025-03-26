import { useRef, useState, useContext } from "react";
import { UserContext } from "../../Context/UserContext";

const ToDo = () => {
  const [todos, setTodos] = useState([]);
  const [item, setItem] = useState("");
  const inputRef = useRef(null);
  const { user } = useContext(UserContext);

  const handleChange = (event) => setItem(event.target.value);

  const handleSubmit = (event) => {
    event.preventDefault();

    const newItem = item.trim();
    if (newItem) {
      setTodos([...todos, newItem]);
      setItem("");
    }
  };

  const handleFocus = () => inputRef.current.focus();

  return (
    <>
      <h2>ToDo list for {user}</h2>
      <form onSubmit={handleSubmit}>
        <input
          ref={inputRef}
          type="text"
          value={item}
          onChange={handleChange}
          placeholder="Add a new ToDo"
        />
        <button type="sumbit" onClick={handleFocus}>
          Add
        </button>
      </form>
      <ul>
        {todos.map((td, index) => (
          <li key={index}>{td}</li>
        ))}
      </ul>
    </>
  );
};

export default ToDo;
