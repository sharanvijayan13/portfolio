'use client'

import { useEffect } from 'react'
import AOS from 'aos'
import Header from '@/components/Header'
import About from '@/components/About'
import TechStack from '@/components/TechStack'
import Projects from '@/components/Projects'
import Contact from '@/components/Contact'
import Social from '@/components/Social'
import Footer from '@/components/Footer'
import MobileMenu from '@/components/MobileMenu'

export default function Home() {
  useEffect(() => {
    AOS.init({
      duration: 800,
      easing: 'ease-out',
      once: true,
    })
  }, [])

  return (
    <>
      <Header />
      <About />
      <TechStack />
      <Projects />
      <Contact />
      <Social />
      <Footer />
      <MobileMenu />
    </>
  )
}
