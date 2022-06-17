import Link from "next/link";
import React from "react";

const ButtonReadmore = (props) => {
  return (
    <div className="button-read-more">
      <Link href={props.href}>
        <a className="read-more"> <span>{props.text}</span>
          <img src="img/long-right-arrow.svg" className="img-style" alt="" /></a>
      </Link>
    </div>
  );
};

export default ButtonReadmore;
