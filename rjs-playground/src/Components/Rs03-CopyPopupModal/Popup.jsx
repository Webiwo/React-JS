import { createPortal } from "react-dom";
import "./modal.css";

const Popup = ({ show, msg }) => {
  return createPortal(
    <section>
      {show && (
        <div className="modal">
          <p>{msg}</p>
        </div>
      )}
    </section>,
    document.querySelector("#popup-content")
  );
};

export default Popup;
