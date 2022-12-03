import { Roboto } from '@next/font/google'

import Navbar from './Navbar'
import Cta from './Cta'

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
      <div className={`${roboto.variable} font-roboto overflow-hidden dark:bg-black`}>
        <Navbar />
        <main className='flex flex-col gap-2 items-center relative overflow-hidden dark:bg-black'>{children}</main>
        <Cta />
      </div>
    )
}