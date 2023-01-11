import React from "react";
import "../Laptop.css";

export default function LaptopCloseNotice(props) {
  return (
    <div className="laptop_typing">
      <h1 className="laptop_typing_title">Hello world :)</h1>
      <p className="laptop_typing_small" onClick={props.onClick}>
        To start, click me!
      </p>
    </div>
  );
}
