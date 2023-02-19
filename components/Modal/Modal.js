import { useEffect } from "react";
import SubmitForm from "../SubmitForm/SubmitForm";
import { ModalBox, Overlay } from "./Modal.styled";
const Modal = ({ onClose }) => {
  useEffect(() => {
    const onCloseModal = (event) => {
      if (event.code === "Escape") {
        onClose();
      }
    };

    window.addEventListener("keydown", onCloseModal);

    return () => {
      window.removeEventListener("keydown", onCloseModal);
    };
  }, [onClose]);

  const onBackdropCloseModal = (event) => {
    if (event.target === event.currentTarget) {
      onClose();
    }
  };
  return (
    <Overlay onClick={onBackdropCloseModal}>
      <ModalBox>
        <SubmitForm onClose={onClose} />
      </ModalBox>
    </Overlay>
  );
};

export default Modal;
