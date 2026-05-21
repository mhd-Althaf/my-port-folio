import { lazy, Suspense, useEffect, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import Navbar from './components/layout/Navbar'
import Footer from './components/layout/Footer'
import ScrollProgress from './components/layout/ScrollProgress'
import CustomCursor from './components/layout/CustomCursor'
import BackgroundGradients from './components/layout/BackgroundGradients'
import Loader from './components/layout/Loader'
import Hero from './components/sections/Hero'
import About from './components/sections/About'
import Skills from './components/sections/Skills'
import Contact from './components/sections/Contact'

const Projects = lazy(() => import('./components/sections/Projects'))
const Journey = lazy(() => import('./components/sections/Journey'))

export default function App() {
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const t = setTimeout(() => setLoading(false), 1200)
    return () => clearTimeout(t)
  }, [])

  return (
    <>
      <AnimatePresence mode="wait">{loading && <Loader key="loader" />}</AnimatePresence>

      {!loading && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <a
            href="#home"
            className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-[200] focus:px-4 focus:py-2 focus:bg-cyan-600 focus:text-white focus:rounded-lg"
          >
            Skip to content
          </a>
          <ScrollProgress />
          <CustomCursor />
          <BackgroundGradients />
          <Navbar />
          <main>
            <Hero />
            <About />
            <Skills />
            <Suspense fallback={<SectionFallback />}>
              <Projects />
            </Suspense>
            <Suspense fallback={<SectionFallback />}>
              <Journey />
            </Suspense>
            <Contact />
          </main>
          <Footer />
        </motion.div>
      )}
    </>
  )
}

function SectionFallback() {
  return (
    <div className="section-padding flex justify-center py-20">
      <div className="w-10 h-10 border-2 border-cyan-500/30 border-t-cyan-400 rounded-full animate-spin" />
    </div>
  )
}
