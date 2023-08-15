import { Html, Head, Main, NextScript } from 'next/document'


export default function Document() {
  return (
    <Html lang='en' className={`scroll-smooth overscroll-none capitalize bg-gray-50 dark:bg-black`}>
      <Head>
      <link rel="shortcut icon" href="/images/favicon.ico" />
      </Head>
      <body className="bg-gray-50 dark:bg-black">
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}