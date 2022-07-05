import Link from "next/link";
import React from "react";

const ButtonReadmore = (props) => {
  return (
    <div className="button-read-more">
      <Link href={props.href}>
        <a className="read-more">
          {props.text}
          <span className="img-style"><img src="img/long-right-arrow.svg" className="img-style" alt="" /></span>
        </a>
      </Link>
    </div>
  );
};

export default ButtonReadmore;
