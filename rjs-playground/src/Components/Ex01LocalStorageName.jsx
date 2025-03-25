import { useState, useRef } from "react";

const Ex01LocalStorageName = () => {
  const [currentName, setCurrentName] = useState(() => {
    const savedName = localStorage.getItem("name");
    return savedName ? JSON.parse(savedName) : "";
  });
  const [inputName, setInputName] = useState("");
  const inputRef = useRef(null);

  const handleChange = (event) => {
    setInputName(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const newName = inputName.trim();
    if (newName) {
      setCurrentName(newName);
      localStorage.setItem("name", JSON.stringify(newName));
      setInputName("");
    }
  };

  const handleFocus = () => inputRef.current.focus();

  return (
    <>
      <h2>Hello {currentName}!</h2>
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

export default Ex01LocalStorageName;
