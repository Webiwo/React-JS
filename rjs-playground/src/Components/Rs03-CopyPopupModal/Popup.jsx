import { createPortal } from "react-dom";
import "./modal.css";

const Popup = ({ copied, date }) => {
  return createPortal(
    <section>
      {copied && (
        <div className="modal">
          <p>
            Date <strong> {date} </strong> has been copied
          </p>
        </div>
      )}
    </section>,
    document.querySelector("#popup-content")
  );
};

export default Popup;
