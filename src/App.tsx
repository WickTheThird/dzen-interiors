import { Nav } from './components/Nav'
import { Hero } from './components/Hero'
import { BeforeAfter } from './components/BeforeAfter'
import { Projects } from './components/Projects'
import { Gallery } from './components/Gallery'
import { About } from './components/About'
import { Instagram } from './components/Instagram'
import { Contact } from './components/Contact'
import { useReveal } from './hooks/useReveal'

export default function App() {
  useReveal()
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <BeforeAfter />
        <Projects />
        <Gallery />
        <About />
        <Instagram />
        <Contact />
      </main>
    </>
  )
}
