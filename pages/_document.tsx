import { Html, Head, Main, NextScript } from 'next/document'


export default function Document() {
  return (
    <Html lang='en' className={`scroll-smooth overscroll-none capitalize bg-gray-50`}>
      <Head>
      <link rel="shortcut icon" href="/images/favicon.ico" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}