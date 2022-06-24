import React from "react";
import scrollToTop from "../../common/scrollToTo";

const ScrollToTop = () => {
  React.useEffect(() => {
    scrollToTop()
  }, [])
  return (
    <div className="progress-wrap cursor-pointer">
      <svg className="progress-circle svg-content" width="18" height="30" viewBox="0 0 18 30">
        <path d="M-24.6,16.1H1.062l-6.3,6.3,1.632,1.575,9-9-9-9L-5.185,7.552l6.247,6.3-25.666-.08Z" transform="translate(-5.977 5.396) rotate(-90)" />
      </svg>
    </div>
  );
};

export default ScrollToTop;


