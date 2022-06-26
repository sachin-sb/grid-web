/* eslint-disable @next/next/no-img-element */
import React from "react";
import Link from "next/link";
import ButtonOutline from "../../common/buttonOutline";


const blogCards = [
  {
    imgUrl: 'https://images.unsplash.com/photo-1510074377623-8cf13fb86c08?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1772&q=80',
  },
  {
    imgUrl: 'https://images.unsplash.com/photo-1567016546367-c27a0d56712e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80',
  },
  {
    imgUrl: 'https://images.unsplash.com/photo-1502810190503-8303352d0dd1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80',
  },
  {
    imgUrl: 'https://images.unsplash.com/photo-1618556658017-fd9c732d1360?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1664&q=80',
  },
]

const BlogStanderd = () => {
  return (
    <section className="blog-section">
      {blogCards.map((item, index) => (
        <div className="item" key={index}>
          <div className="img">
            <img src={item.imgUrl} className="wow imago" data-wow-delay=".3s" alt="" />
          </div>
          <div className="content">
            <div className="date">
              <span className="num">25.04.22</span>
            </div>
            <h4 className="title">
              Bored of Apes? Here’s an artist’s guide to  NFTs that won’t drive you bananas.
            </h4>
            <p className="description">
              Through our print magazine Wrap, the products we make, and the online content we publish…
            </p>
            <Link href="/blog-details/blog-details-dark">
              <a className="read-more mt-20"> <span>Read More</span>
                <img src="img/long-right-arrow.svg" className="img-style" alt="" /></a>
            </Link>
          </div>
        </div>
      ))}

      <div className="right-flex">
        <div className="info-msg">
          <h4 className="title4">
            Love reading? <br /> We’ve got more.
          </h4>

          <ButtonOutline buttonText="View our services" />
        </div>
      </div>
    </section>
  );
};

export default BlogStanderd;
