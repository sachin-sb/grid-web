import React from "react";
import Script from "next/script";
import loadingPace from "../../common/loadingPace.js";
import appData from "../../data/app.json";
import Lottie from "lottie-react";
import groovyWalkAnimation from "../../../public/json/loader.json";

const LoadingScreen = () => {
  React.useEffect(() => {
    let bodyEl = document.querySelector("body");
    if (appData.showLoading) {
      loadingPace();

      if (bodyEl.classList.contains("hideX")) {
        bodyEl.classList.remove("hideX");
      }
    } else {
      bodyEl.classList.add("hideX");
    }
  });
  return (
    <>
      <div className={`${appData.showLoading === true ? "showX" : "hideX"}`}>
        <div id="preloader">
          <Lottie animationData={groovyWalkAnimation} style={{ width: 100, height: 100 }} loop={true} />
        </div>
      </div>
      {appData.showLoading ? (
        <Script
          id="pace"
          strategy="beforeInteractive"
          src="/js/pace.min.js"
        ></Script>
      ) : (
        ""
      )}
    </>
  );
};

export default LoadingScreen;
