/* eslint-disable @next/next/no-img-element */
import React, { useEffect } from "react";
import Link from "next/link";
import ButtonOutline from "../../common/buttonOutline";
import gsap from "gsap";


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
  {
    imgUrl: 'https://images.unsplash.com/photo-1502810190503-8303352d0dd1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80',
  },
  {
    imgUrl: 'https://images.unsplash.com/photo-1618556658017-fd9c732d1360?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1664&q=80',
  },
]

const BlogStanderd = () => {

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    gsap.from(".animation-card .ani-sec", 1, {
      y: 100,
      ease: "power4.out",
      delay: 0.5,
      skewY: 0,
      stagger: {
        amount: 0.3
      },
      autoAlpha: 0,
      scrollTrigger: {
        trigger: '#animationActive',
        start: 'top 80%',
        markers: false
      },
    })
  }, [])
  return (
    <>
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
    </section>

    <div id="animationActive"></div>
      <div className="animation-card">
        <div className="right-flex ani-sec">
          <div className="info-msg">
            <h4 className="title4">
              Love reading? <br /> We’ve got more.
            </h4>

            <ButtonOutline buttonText="View all blogs" />
          </div>
        </div>
      </div>
    </>
  );
};

export default BlogStanderd;
