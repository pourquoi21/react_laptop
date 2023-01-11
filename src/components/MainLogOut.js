import React, { useState } from "react";
import { BiLogOut } from "react-icons/bi";

export default function MainLogOut(props) {
  return (
    <div className="main_logout" onClick={props.handleClick}>
      <BiLogOut className="main_logout_button" color="#fff" />
      <p>Log Out</p>
    </div>
  );
}
