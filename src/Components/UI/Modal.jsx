import React from "react";
import style from "./Modal.module.css";
import ReactDOM from "react-dom";

const Backdrop = (props) => {
  return (
    <div
      className={style.backdrop}
      onClick={() => props.closeCustomize()}
    ></div>
  );
};

const ModalOverlay = (props) => {
  let modalClass;
  if (!props.animal) {
    modalClass = style.modal + " " + style.white;
  } else {
    modalClass = props.animal.adopted
      ? style.modal + " " + style.adopted
      : style.modal + " " + style["not-adopted"];
  }

  return (
    <div className={modalClass}>
      <div className={style.content}>{props.children}</div>
    </div>
  );
};

function Modal(props) {
  return (
    <>
      {ReactDOM.createPortal(
        <Backdrop closeCustomize={props.closeCustomize} />,
        document.getElementById("backdrop")
      )}
      {ReactDOM.createPortal(
        <ModalOverlay animal={props.animal}>{props.children}</ModalOverlay>,
        document.getElementById("backdrop")
      )}
    </>
  );
}

export default Modal;
