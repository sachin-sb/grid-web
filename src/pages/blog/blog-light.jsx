import React from "react";
import BlogStanderd from "../../components/Blog-standerd";

const BlogLight = () => {
  return (
    <section className="blog-light-style">
      <div className="cont">
        <h1 className="title1 mb-10 d-flex align-items-end">Blogs<span className="text-theme" style={{bottom: 16, left: 5}} /></h1>
      </div>
      <BlogStanderd />
    </section>
  );
};

export default BlogLight;
