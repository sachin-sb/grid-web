import React from "react";

const ButtonOutline = (props) => {
  return (
    <div className={`button-section ${props.className}`}>
      <button className="btn-outline">
        <span>{props.buttonText}</span>
        <img src="img/long-right-arrow.svg" className="img-style" alt="" />
      </button>
    </div>
  );
};

export default ButtonOutline;
