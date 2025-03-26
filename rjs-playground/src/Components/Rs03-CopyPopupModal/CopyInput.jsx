import { useState, useContext } from "react";
import { UserContext } from "../../Context/UserContext";
import Popup from "./Popup";
import Modal from "./Modal";

const CopyInput = () => {
  const [inputValue, setInputName] = useState(() => {
    return new Date().toISOString().split("T")[0];
  });

  const { user } = useContext(UserContext);

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

  const getMessage = () => `${user}, date ${inputValue} has been copied`;

  return (
    <div>
      <h2>Copy date, display it in popup and modal</h2>
      <input type="date" value={inputValue} onChange={handleChange} />
      <button onClick={handleCopy}>Copy</button>
      <button onClick={() => handleModal(true)}>Show copied date</button>
      <Popup show={copied} msg={getMessage()} />
      <Modal
        showModal={showModal}
        msg={getMessage()}
        onClose={() => handleModal(false)}
      />
    </div>
  );
};

export default CopyInput;
