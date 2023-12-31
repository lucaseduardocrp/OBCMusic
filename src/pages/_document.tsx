/* eslint-disable @next/next/no-title-in-document-head */
import Document, { Html, Head, Main, NextScript, DocumentContext } from 'next/document';
import { ServerStyleSheet } from 'styled-components';
export default class MyDocument extends Document {
  static async getInitialProps(ctx: DocumentContext) {
    const sheet = new ServerStyleSheet();
    const originalRenderPage = ctx.renderPage;

    try {
      ctx.renderPage = () =>
        originalRenderPage({
          enhanceApp: (App) => (props) =>
            sheet.collectStyles(<App {...props} />)
        });

      const initialProps = await Document.getInitialProps(ctx);
      return {
        ...initialProps,
        styles: [
          <>
            {initialProps.styles}
            {sheet.getStyleElement()}
          </>
        ]
      };
    } finally {
      sheet.seal();
    }
  }

  render() {
    return (
      <Html lang="pt-BR">
        <Head>
          <meta name="viewport" content="width=device-width, initial-scale=1.0" />
          <meta name="keywords" content="Frontend, Desenvolvedor Front-end, Freelancer, UI Designer, Developer" />
          <meta name="robots" content="index,follow" />
          <meta name="author" content="Lucas Eduardo Crespo de Carvalho" />

          {/* Primary Meta Tags */}
          <meta name="title" content="Onebitmusic — A musical immersion" />
          <meta name="description" content="A Sua Melhor Experiência
          Musical Digital.
          Prepare-se para uma experiência incrível e envolvente, onde a arte se une à performance para criar momentos inesquecíveis. Nossos shows artísticos são projetados para encantar, inspirar e transportar você para um mundo de criatividade e expressão.
          " />

          {/* Open Graph / Facebook */}
          <meta property="og:type" content="website" />
          <meta property="og:url" content="https://metatags.io" />
          <meta property="og:title" content="Onebitmusic — A musical immersion" />
          <meta property="og:description" content="A Sua Melhor Experiência
          Musical Digital.
          Prepare-se para uma experiência incrível e envolvente, onde a arte se une à performance para criar momentos inesquecíveis. Nossos shows artísticos são projetados para encantar, inspirar e transportar você para um mundo de criatividade e expressão.
          " />
          <meta property="og:image" content="https://metatags.io/images/meta-tags.png" />

          {/* Twitter */}
          <meta property="twitter:card" content="summary_large_image" />
          <meta property="twitter:url" content="https://metatags.io" />
          <meta property="twitter:title" content="Onebitmusic — A musical immersion" />
          <meta property="twitter:description" content="A Sua Melhor Experiência
          Musical Digital.
          Prepare-se para uma experiência incrível e envolvente, onde a arte se une à performance para criar momentos inesquecíveis. Nossos shows artísticos são projetados para encantar, inspirar e transportar você para um mundo de criatividade e expressão.
          " />
          <meta property="twitter:image" content="https://metatags.io/images/meta-tags.png" />

          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link rel="preconnect" href="https://fonts.gstatic.com" />
          <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500;700;900&family=Raleway:wght@500;600;700;800&display=swap" rel="stylesheet" />

          <link rel="shortcut icon" href="/Favicon.svg" type="image/x-icon" />
          <title> Onebitmusic - Musical Immersion </title>
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}