import { useState } from "react";
import Popup from "./Popup";
import Modal from "./Modal";

const CopyInput = () => {
  const [inputValue, setInputName] = useState(() => {
    return new Date().toISOString().split("T")[0];
  });

  const [copied, setCopied] = useState(false);
  const [showModal, setShowModal] = useState(false);

  const handleChange = (event) => {
    setInputName(event.target.value);
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(inputValue).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 3000);
    });
  };

  const handleModal = (isModal) => setShowModal(isModal);

  return (
    <div>
      <h2>Copy date, display it in popup and modal</h2>
      <input type="date" value={inputValue} onChange={handleChange} />
      <button onClick={handleCopy}>Copy</button>
      <button onClick={() => handleModal(true)}>Show copied date</button>
      <Popup copied={copied} date={inputValue} />
      <Modal
        showModal={showModal}
        date={inputValue}
        onClose={() => handleModal(false)}
      />
    </div>
  );
};

export default CopyInput;
