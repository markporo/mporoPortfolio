import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html>
      <Head>
          {/* <link rel="preconnect" href="https://fonts.googleapis.com">
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin> */}
        <link href="https://fonts.googleapis.com/css2?family=Nothing+You+Could+Do&family=Open+Sans&family=Reenie+Beanie&family=Swanky+and+Moo+Moo&display=swap" rel="stylesheet"></link>
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}