import React from "react";

const ButtonPrimary = (props) => {
  return (
    <div className="button-section">
      <button className="btn-red">
        <span>{props.buttonText}</span>
        <img src="img/long-right-arrow.svg" className="img-style" alt="" />
      </button>
    </div>
  );
};

export default ButtonPrimary;
