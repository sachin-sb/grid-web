import React from "react";
import BlogStanderd from "../../components/Blog-standerd";

const BlogLight = () => {
  return (
    <section className="blog-light-style">
      <div className="cont">
        <h1 className="title1 mb-10">Blogs<span className="text-theme">.</span></h1>
      </div>
      <BlogStanderd />
    </section>
  );
};

export default BlogLight;
