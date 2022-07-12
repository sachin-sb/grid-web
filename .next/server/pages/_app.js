"use strict";
(() => {
var exports = {};
exports.id = 888;
exports.ids = [888];
exports.modules = {

/***/ 8252:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ _app)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);
// EXTERNAL MODULE: external "next/head"
var head_ = __webpack_require__(968);
var head_default = /*#__PURE__*/__webpack_require__.n(head_);
;// CONCATENATED MODULE: external "next/script"
const script_namespaceObject = require("next/script");
var script_default = /*#__PURE__*/__webpack_require__.n(script_namespaceObject);
;// CONCATENATED MODULE: ./src/components/Cursor/index.jsx



const Cursor = ()=>{
    React.useEffect(()=>{
        mousecursor();
    }, []);
    return(/*#__PURE__*/ _jsxs(_Fragment, {
        children: [
            /*#__PURE__*/ _jsx("div", {
                className: "mouse-cursor cursor-outer"
            }),
            /*#__PURE__*/ _jsx("div", {
                className: "mouse-cursor cursor-inner"
            })
        ]
    }));
};
/* harmony default export */ const components_Cursor = ((/* unused pure expression or super */ null && (Cursor)));

// EXTERNAL MODULE: ./src/components/Scroll-to-top/index.jsx + 1 modules
var Scroll_to_top = __webpack_require__(6518);
;// CONCATENATED MODULE: ./src/common/customFunctions.js
var opacity = 0;
var intervalID = 0;
function show(el) {
    opacity = Number(window.getComputedStyle(el).getPropertyValue("opacity"));
    if (opacity < 1) {
        opacity = opacity + 1;
        el.style.opacity = opacity;
    } else {
        clearInterval(intervalID);
    }
}
function hide(el) {
    opacity = Number(window.getComputedStyle(el).getPropertyValue("opacity"));
    if (opacity > 0) {
        opacity = 0;
        el.style.opacity = opacity;
    } else {
        clearInterval(intervalID);
    }
}
const delay = (time, callback)=>{
    setTimeout(function() {
        callback;
    }, time);
};
const fadeIn = (el, time)=>{
    setInterval(show(el), time);
};
const fadeOut = (el, time)=>{
    setInterval(hide(el), time);
};
const getSiblings = (e)=>{
    let siblings = [];
    if (!e.parentNode) {
        return siblings;
    }
    let sibling = e.parentNode.firstChild;
    while(sibling){
        if (sibling.nodeType === 1 && sibling !== e) {
            siblings.push(sibling);
        }
        sibling = sibling.nextSibling;
    }
    return siblings;
};
const animateEl = (el, to)=>{
    function draw() {
        el.style.left = to;
    }
    draw();
};

;// CONCATENATED MODULE: ./src/common/loadingPace.js

const loadingPace = ()=>{
    Pace.on("start", function() {
        //When Pace Start
        document.querySelector("#preloader").classList.remove("isdone");
    });
    Pace.on("done", function() {
        //When Pace End
        if (document.querySelector(".hamenu")) {
            delay(300, animateEl(document.querySelector(".hamenu"), "-100%"));
            document.querySelector(".topnav .menu-icon").classList.remove("open");
        }
        document.querySelector("#preloader").classList.add("isdone");
    });
    if (document.querySelector("body").classList.contains("pace-done")) {
        document.querySelector("#preloader").classList.add("isdone");
    }
    document.addEventListener("load", ()=>{
        document.querySelector("#preloader").classList.add("isdone");
    });
};
/* harmony default export */ const common_loadingPace = (loadingPace);

;// CONCATENATED MODULE: ./src/data/app.json
const app_namespaceObject = {"QP":true};
;// CONCATENATED MODULE: ./src/components/Loading-Screen/index.jsx





const LoadingScreen = ()=>{
    external_react_default().useEffect(()=>{
        let bodyEl = document.querySelector("body");
        if (app_namespaceObject.QP) {
            common_loadingPace();
            if (bodyEl.classList.contains("hideX")) {
                bodyEl.classList.remove("hideX");
            }
        } else {
            bodyEl.classList.add("hideX");
        }
    });
    return(/*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: `${app_namespaceObject.QP === true ? "showX" : "hideX"}`,
                children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    id: "preloader"
                })
            }),
            app_namespaceObject.QP ? /*#__PURE__*/ jsx_runtime_.jsx((script_default()), {
                id: "pace",
                strategy: "beforeInteractive",
                src: "/js/pace.min.js"
            }) : ""
        ]
    }));
};
/* harmony default export */ const Loading_Screen = (LoadingScreen);

;// CONCATENATED MODULE: ./src/pages/_app.js








function MyApp({ Component , pageProps  }) {
    return(/*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
        children: [
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)((head_default()), {
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("title", {
                        children: "Grid Design Studio"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("link", {
                        rel: "icon",
                        href: "/img/favicon.ico"
                    })
                ]
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(Loading_Screen, {
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(Component, {
                ...pageProps
            }),
            /*#__PURE__*/ jsx_runtime_.jsx((script_default()), {
                id: "wow",
                src: "/js/wow.min.js"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx((script_default()), {
                strategy: "beforeInteractive",
                id: "splitting",
                src: "/js/splitting.min.js"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx((script_default()), {
                id: "simpleParallax",
                src: "/js/simpleParallax.min.js"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx((script_default()), {
                id: "isotope",
                strategy: "beforeInteractive",
                src: "/js/isotope.pkgd.min.js"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx((script_default()), {
                id: "initWow",
                strategy: "lazyOnload",
                children: `new WOW().init();`
            })
        ]
    }));
}
/* harmony default export */ const _app = (MyApp);


/***/ }),

/***/ 968:
/***/ ((module) => {

module.exports = require("next/head");

/***/ }),

/***/ 6689:
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ 997:
/***/ ((module) => {

module.exports = require("react/jsx-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [518], () => (__webpack_exec__(8252)));
module.exports = __webpack_exports__;

})();