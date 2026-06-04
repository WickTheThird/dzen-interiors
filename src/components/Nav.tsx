import { useEffect, useState } from 'react'
import { site } from '../content/site'

const links = [
  { label: 'Proiecte', href: '#proiecte' },
  { label: 'Despre', href: '#despre' },
  { label: 'Instagram', href: '#instagram' },
  { label: 'Contact', href: '#contact' },
]

export function Nav() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-colors duration-500 ease-calm ${
        scrolled ? 'bg-ink/80 backdrop-blur-md' : 'bg-transparent'
      }`}
    >
      <nav className="edge flex h-16 items-center justify-between md:h-20">
        <a
          href="#top"
          className="font-display text-lg tracking-wider2 text-bone"
        >
          {site.brandMark}
          <span className="text-sand">.</span>
        </a>
        <ul className="hidden items-center gap-9 md:flex">
          {links.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                className="text-sm text-bone/70 transition-colors duration-300 hover:text-bone"
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>
        <a href="#contact" className="btn-ghost px-5 py-2 text-xs">
          Solicită ofertă
        </a>
      </nav>
    </header>
  )
}
