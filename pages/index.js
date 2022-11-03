import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import Cta from '../components/Cta'
import Features from '../components/Features'
import Stack from '../components/Stack'

export default function Home() {
  return (
    <div>
      <Navbar />
      <Hero />
      <Stack />
      <Features />
      <Cta />
    </div>
  )
}
