import { useState } from "react";
import FormReview from "./FormReview";
import Button from "../partials/Button";

const ModalReview = ({ immobile }) => {
  const [showModal, setShowModal] = useState(false);

  const handleClose = () => setShowModal(false);
  const handleShow = () => setShowModal(true);

  return (
    <div className="text-center">
      <Button onclick={handleShow} text={"Aggiungi Recensione"} />

      {showModal && (
        <div
          className="modal fade show"
          id="staticBackdrop"
          tabIndex="-1"
          aria-labelledby="staticBackdropLabel"
          aria-hidden="false"
          style={{ display: "block" }}
        >
          <div className="modal-dialog-centered modal-dialog">
            <div className="modal-content">
              <div className="modal-header bg-wine">
                <h5 className="fw-semibold text-white-smoke my-auto">
                  {" "}
                  Aggiungi la nuova recensione
                </h5>

                <button
                  type="button"
                  className="btn-close"
                  onClick={handleClose}
                  aria-label="Close"
                ></button>
              </div>
              <div className="modal-body bg-white-smoke">
                {" "}
                <FormReview handleClose={handleClose} immobile={immobile} />
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ModalReview;
