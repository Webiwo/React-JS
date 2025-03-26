import { createPortal } from "react-dom";

const Modal = ({ showModal, msg, onClose }) => {
  return createPortal(
    <section>
      {showModal && (
        <div className="modal">
          <p>{msg}</p>
          <button onClick={onClose}>Close</button>
        </div>
      )}
    </section>,
    document.querySelector("#popup-content")
  );
};

export default Modal;
