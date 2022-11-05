import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html className={`scroll-smooth capitalize bg-gray-50`}>
      <Head />
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}