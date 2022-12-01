import Navbar from './Navbar'
import Cta from './Cta'
import { Roboto } from '@next/font/google'

const roboto = Roboto({
  weight: '500',
  variable: '--font-roboto',
  subsets: ['latin']
})

type AppProps = {
  children: React.ReactNode
}

export default function Layout({children}: AppProps) {
    return (
      <div className={`${roboto.variable} font-roboto`}>
        <Navbar />
        <main className='flex flex-col gap-2 items-center'>{children}</main>
        <Cta />
      </div>
    )
}