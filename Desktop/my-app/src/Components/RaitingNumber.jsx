import React from "react";
import "./RaitingNumber.css";

const RaitingNumber = (props) => {
  return (
    <li className={props.className} onClick={props.onClick}>
      {props.children}
    </li>
  );
};
export default RaitingNumber;
