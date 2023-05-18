import Card from '@/components/common/card'
import Navbar from '@/components/common/navbar'
import HeroSection from '@/components/herosection'
import Image from 'next/image'

export default function Home() {
  return (
  <>
  <Navbar />
  <HeroSection />
  <Card />
  </>
  )
}
