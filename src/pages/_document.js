import Document, { Html, Head, Main, NextScript } from "next/document";

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx);
    return {
      ...initialProps,
    };
  }

  render() {
    return (
      <Html lang="en">
        <Head>
          <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
          <link rel="shortcut icon" href="/img/favicon.ico" />
          <meta
            name="keywords"
            content="Creative agency based in Gurgaon, India."
          />
          <meta
            name="description"
            content="An in-person Designathon where design students and seasoned industry professionals are provided with a platform to experience design problems"
          />
          <meta name="author" content="Grid Design Studio" />

          <meta property="og:type" content="website" />
          <meta property="og:site_name" content="Grid Design Studio" />
          <meta property="og:title" content="Grid Design Studio - We are a bunch of creative folks using the power of design to create seamless product experiences." />
          <meta property="og:image" content="https://grid-studio.netlify.app/og.png" />
          <meta property="og:image:url" content="https://grid-studio.netlify.app/og.png" />
          <meta property="og:image:alt" content="Grid Design Studio : Creative agency based in Gurgaon, India." />
          <meta property="og:image:width" content="1200" />
          <meta property="og:image:height" content="630" />
          <meta property="og:image:type" content="images/png" />
          <meta property="og:description" content="An in-person Designathon where design students and seasoned industry professionals are provided with a platform to experience design problems" />


          <meta name="twitter:card" content="summary" />
          <meta name="twitter:site" content="Twitter @Grid_Design_Studio" />
          <meta name="twitter:title" content="Grid Design Studio - We are a bunch of creative folks using the power of design to create seamless product experiences." />
          <meta name="twitter:description" content="An in-person Designathon where design students and seasoned industry professionals are provided with a platform to experience design problems" />
          <meta name="twitter:image" content="https://grid-studio.netlify.app/og.png" />

          {/* <script src="http://code.jquery.com/jquery-1.11.3.min.js"></script> */}
          <script src="https://cdnjs.cloudflare.com/ajax/libs/ScrollMagic/2.0.8/ScrollMagic.min.js" />
          <script src="https://cdnjs.cloudflare.com/ajax/libs/ScrollMagic/2.0.5/plugins/animation.velocity.min.js" />
          <script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.9.1/ScrollTrigger.min.js"></script>
          <script src="https://cdnjs.cloudflare.com/ajax/libs/ScrollMagic/2.0.8/plugins/animation.gsap.min.js" />
          <script src="https://cdnjs.cloudflare.com/ajax/libs/ScrollMagic/2.0.8/plugins/debug.addIndicators.min.js" />
          <script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.9.1/ScrollTrigger.min.js"></script>
          <script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/1.20.3/TweenMax.min.js" />
          <script src="ttps://cdn.jsdelivr.net/npm/locomotive-scroll@3.5.4/dist/locomotive-scroll.min.js" />
        </Head>

        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
