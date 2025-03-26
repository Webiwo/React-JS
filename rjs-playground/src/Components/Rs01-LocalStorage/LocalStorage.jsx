import { useState, useRef, useContext, useEffect } from "react";
import { UserContext } from "../../Context/UserContext";

const LocalStorage = () => {
  const { user, updateUser } = useContext(UserContext);
  const [inputName, setInputName] = useState("");
  const inputRef = useRef(null);

  useEffect(() => {
    const savedName = localStorage.getItem("name");
    updateUser(savedName ? JSON.parse(savedName) : "");
  }, []);

  const handleChange = (event) => {
    setInputName(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const newName = inputName.trim();
    if (newName) {
      updateUser(newName);
      localStorage.setItem("name", JSON.stringify(newName));
      setInputName("");
    }
  };

  const handleFocus = () => inputRef.current.focus();

  return (
    <>
      <h2>Hello {user}!</h2>
      <form onSubmit={handleSubmit}>
        <input
          ref={inputRef}
          type="text"
          value={inputName}
          onChange={handleChange}
          placeholder="Enter your name"
        />
        <button type="submit" onClick={handleFocus}>
          Save
        </button>
        <p>
          {inputName && "New name: "}
          {inputName}
        </p>
      </form>
    </>
  );
};

export default LocalStorage;
