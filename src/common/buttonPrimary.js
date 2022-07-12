import Link from "next/link";
import React from "react";

const ButtonPrimary = (props) => {
  return (
    <Link href={props.href}>
      <a className={`button-section ${props.className}`}>
        <button className="btn-red">
          <span>{props.buttonText}</span>
          <img src="img/long-right-arrow.svg" className="img-style" alt="" />
        </button>
      </a>
    </Link>
  );
};

export default ButtonPrimary;
