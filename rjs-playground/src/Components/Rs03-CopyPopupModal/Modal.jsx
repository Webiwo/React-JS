import { createPortal } from "react-dom";

const Modal = ({ showModal, date, onClose }) => {
  return createPortal(
    <section>
      {showModal && (
        <div className="modal">
          <p>
            Date <strong> {date} </strong> has been copied
          </p>
          <button onClick={onClose}>Close</button>
        </div>
      )}
    </section>,
    document.querySelector("#popup-content")
  );
};

export default Modal;
