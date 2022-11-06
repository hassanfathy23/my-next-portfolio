import Navbar from './Navbar'
import Cta from './Cta'

export default function Layout({children}) {
    return (
      <>
        <Navbar />
        <main className='flex flex-col gap-2 items-center'>{children}</main>
        <Cta />
      </>
    )
}