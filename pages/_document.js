import Document, { Html, Head, Main, NextScript } from "next/document";

class MyDocument extends Document {
  render() {
    return (
      <Html>
        <Head>
          <link
            href="https://fonts.googleapis.com/css2?family=Inter&display=optional"
            rel="stylesheet"
          />

          <link
            href="https://fonts.googleapis.com/css2?family=Aboreto&family=Montserrat:wght@300;400;500;600;700&display=swap"
            rel="stylesheet"
          ></link>

          <link
            href="https://fonts.googleapis.com/css2?family=Montserrat:wght@300;400;500;600;700&display=swap"
            rel="stylesheet"
          ></link>
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
