import React, { useEffect } from "react";
import BlogStanderd from "../../components/Blog-standerd";

const BlogLight = () => {
  useEffect(() => {
      var controller3 = new ScrollMagic.Controller()

      var second = new ScrollMagic.Scene({
        triggerElement: '#second',
        duration: "250%",
        triggerHook: 0.1,
      })
        .setClassToggle('#second', 'white-style')
        // .addIndicators() 
        // remove this before publishing
        .addTo(controller3);
  }, [])

  return (
    <>
      <div id="section-div" className="hide-mobile">
        <section className="blog-light-style black-style" id="second">
          <div className="cont">
            <h1 className="title1 mb-10 d-flex align-items-end">Blogs<span className="text-theme" style={{ bottom: 16, left: 5 }} /></h1>
          </div>
          <BlogStanderd />
        </section>
      </div>

      <section className="blog-light-style white-style hide-desktop">
        <div className="cont">
          <h1 className="title1 mb-10 d-flex align-items-end">Blogs<span className="text-theme" style={{ bottom: 16, left: 5 }} /></h1>
        </div>
        <BlogStanderd />
      </section>
    </>
  );
};

export default BlogLight;
