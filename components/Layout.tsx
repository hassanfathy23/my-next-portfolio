import Navbar from './Navbar'
import Cta from './Cta'
import { Roboto } from '@next/font/google'

import { useAppSelector } from '../store/hooks';

const roboto = Roboto({
  weight: '500',
  variable: '--font-roboto',
  subsets: ['latin']
})

type AppProps = {
  children: React.ReactNode
}

export default function Layout({children}: AppProps) {
  // const modalIsOpen = useAppSelector(state => state.ui.modalIsOpen)
    return (
      <div className={`${roboto.variable} font-roboto overflow-hidden`}>
        <Navbar />
        <main className='flex flex-col gap-2 items-center relative overflow-hidden'>{children}</main>
        <Cta />
      </div>
    )
}