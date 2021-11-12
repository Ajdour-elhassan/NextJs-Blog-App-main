import Document, { Html, Head, Main, NextScript } from "next/document";

class My_Document extends Document {
  render() {
    return (
      <Html lang="en">
        <Head>
          <body>
            <Main />
            <NextScript />
            <div id="notifications"></div>
          </body>
        </Head>
      </Html>
    );
  }
}

export default My_Document;
