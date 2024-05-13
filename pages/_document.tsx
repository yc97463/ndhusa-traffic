import Navbar from "@/components/layout/navbar";
import Footer from "@/components/layout/footer";
import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="zh-TW">
      <Head>
        {/* Google Fonts */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link href="https://fonts.googleapis.com/css2?family=IBM+Plex+Sans+Condensed:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;1,100;1,200;1,300;1,400;1,500;1,600;1,700&family=IBM+Plex+Sans:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;1,100;1,200;1,300;1,400;1,500;1,600;1,700&family=Noto+Sans+TC:wght@100..900&family=Noto+Serif+TC&family=PT+Sans:ital,wght@0,400;0,700;1,400;1,700&display=swap" rel="stylesheet" />

        { /* Favicon */ }
        <link rel="shortcut icon" href="/img/ndhusa-logo-favicon.png" type="image/x-icon" />
        <link rel="icon" href="/img/ndhusa-logo-favicon.png" type="image/x-icon" />
        <link rel="bookmark" href="/img/ndhusa-logo-favicon.png" type="image/x-icon" />
        <link rel="apple-touch-icon-precomposed" href="/img/ndhusa-logo-favicon.png"></link>

      </Head>
      <body>
      <Navbar />
        <Main />
        <NextScript />
        <Footer />
      </body>
    </Html>
  );
}
