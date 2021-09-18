import Document, { DocumentContext, Head, Html, Main, NextScript } from 'next/document';
import { ThemeScriptTag } from 'tailwind-darkmode-toggle';
class MyDocument extends Document {
  static async getInitialProps(ctx: DocumentContext) {
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps };
  }

  render() {
    return (
      <Html lang='en'>
        <ThemeScriptTag />
        <Head>
          <link rel="shortcut icon" href="" />
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


