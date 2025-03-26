import { useRef, useState } from "react";

const ToDo = () => {
  const [todos, setTodos] = useState([]);
  const [item, setItem] = useState("");
  const inputRef = useRef(null);

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
      <h2>ToDo List</h2>
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
