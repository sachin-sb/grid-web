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
            content="Home | Grid Design Studio | Design Agency"
          />
          <meta
            name="description"
            content="A global design agency crafting experiences using power of design that move businesses & people."
          />
          <meta name="author" content="Grid Design Studio" />

          <meta property="og:type" content="website" />
          <meta property="og:site_name" content="Grid Design Studio" />
          <meta property="og:title" content="Grid Design Studio - A global design agency crafting experiences using power of design that move businesses & people." />
          <meta property="og:image" content="https://grid-studio.netlify.app/og.png" />
          <meta property="og:image:url" content="https://grid-studio.netlify.app/og.png" />
          <meta property="og:image:alt" content="Grid Design Studio : Creative agency based in Gurgaon, India." />
          <meta property="og:image:width" content="1200" />
          <meta property="og:image:height" content="630" />
          <meta property="og:image:type" content="images/png" />
          <meta property="og:description" content="A global design agency crafting experiences using power of design that move businesses & people." />

          <meta name="twitter:card" content="summary" />
          <meta name="twitter:site" content="Twitter @Grid_Design_Studio" />
          <meta name="twitter:title" content="Grid Design Studio - A global design agency crafting experiences using power of design that move businesses & people." />
          <meta name="twitter:description" content="A global design agency crafting experiences using power of design that move businesses & people." />
          <meta name="twitter:image" content="https://grid-studio.netlify.app/og.png" />

          <script async src="https://www.googletagmanager.com/gtag/js?id=undefined"></script>
          <script
            dangerouslySetInnerHTML={{
              __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', undefined, {
            page_path: window.location.pathname,
            })
              `,
            }}
          />

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
