
import { useState, useEffect } from 'react'

type Page =
  | 'home'
  | 'about'
  | 'services'
  | 'portfolio'
  | 'contact'
  | 'booking'

interface NavProps {
  currentPage: Page
  onNavigate: (page: Page) => void
}

const links: { label: string; page: Page }[] = [
  { label: 'About', page: 'about' },
  { label: 'Services', page: 'services' },
  { label: 'Portfolio', page: 'portfolio' },

  { label: 'Contact', page: 'contact' },
]

export default function Nav({ currentPage, onNavigate }: NavProps) {
  const [menuOpen, setMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 40)
    }

    onScroll()

    window.addEventListener('scroll', onScroll)

    return () => {
      window.removeEventListener('scroll', onScroll)
    }
  }, [])

  const go = (page: Page) => {
    onNavigate(page)
    setMenuOpen(false)
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <>
      {/* Main Header */}
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled || menuOpen
            ? 'bg-[#FAF8F4]/95 backdrop-blur-md border-b border-[#D8D0C4]'
            : 'bg-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-10 flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <button
            onClick={() => go('home')}
            className="font-display text-lg md:text-xl font-medium tracking-tight text-[#1C1915] hover:text-[#8C5E3A] transition-colors"
          >
            Amina Beauty Glam
          </button>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
           
{links.map(({ label, page }) => {
  const isWhite =
    !scrolled &&
    !menuOpen &&
    currentPage === 'home'

  return (
    <button
      key={page}
      onClick={() => go(page)}
      aria-current={
        currentPage === page ? 'page' : undefined
      }
      className={`nav-link text-sm font-medium tracking-wide transition-colors ${
        isWhite
          ? '!text-white hover:!text-[#D8B89A]'
          : '!text-[#1C1915] hover:!text-[#8C5E3A]'
      }`}
    >
      {label}
    </button>
  )
})}


            {/* Book Now */}
            <a
              href="https://www.instagram.com/direct/new/"
              target="_blank"
              rel="noopener noreferrer"
              className="ml-2 px-5 py-2 text-sm font-medium tracking-wide bg-[#1C1915] text-[#FAF8F4] hover:bg-[#8C5E3A] border border-transparent transition-colors"
              style={{ borderRadius: 'var(--radius)' }}
            >
              Book Now
            </a>
          </nav>

          {/* Mobile Hamburger */}
          <button
            onClick={() => setMenuOpen((open) => !open)}
            className={`md:hidden flex flex-col gap-1.5 p-2 transition-colors ${
              menuOpen || scrolled
                ? 'text-[#1C1915]'
                : 'text-[#FAF8F4]'
            }`}
            aria-label={menuOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={menuOpen}
          >
            <span
              className={`block w-6 h-0.5 bg-current transition-all duration-300 ${
                menuOpen ? 'rotate-45 translate-y-2' : ''
              }`}
            />
            <span
              className={`block w-6 h-0.5 bg-current transition-all duration-300 ${
                menuOpen ? 'opacity-0' : ''
              }`}
            />
            <span
              className={`block w-6 h-0.5 bg-current transition-all duration-300 ${
                menuOpen ? '-rotate-45 -translate-y-2' : ''
              }`}
            />
          </button>
        </div>
      </header>

      {/* Mobile Menu */}
      <div
        className={`fixed inset-0 z-40 bg-[#FAF8F4] flex flex-col justify-center px-10 transition-all duration-500 ${
          menuOpen
            ? 'opacity-100 pointer-events-auto'
            : 'opacity-0 pointer-events-none'
        }`}
        aria-hidden={!menuOpen}
      >
        <nav className="flex flex-col gap-6">
          {links.map(({ label, page }) => (
            <button
              key={page}
              onClick={() => go(page)}
              tabIndex={menuOpen ? 0 : -1}
              aria-current={
                currentPage === page ? 'page' : undefined
              }
              className={`text-left font-display text-4xl font-medium transition-colors ${
                currentPage === page
                  ? 'text-[#8C5E3A]'
                  : 'text-[#1C1915] hover:text-[#8C5E3A]'
              }`}
            >
              {label}
            </button>
          ))}

          {/* Mobile Book Now */}
          <a
            href="https://www.instagram.com/direct/new/"
            target="_blank"
            rel="noopener noreferrer"
            tabIndex={menuOpen ? 0 : -1}
            className="text-left font-display text-4xl font-medium text-[#8C5E3A] hover:text-[#1C1915] transition-colors block"
            onClick={() => setMenuOpen(false)}
          >
            Book Now
          </a>
        </nav>

        {/* Social Links */}
        <div className="flex gap-6 mt-16">
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            tabIndex={menuOpen ? 0 : -1}
            className="text-[#7A726A] hover:text-[#1C1915] text-sm tracking-widest uppercase"
          >
            Instagram
          </a>

          <a
            href="https://tiktok.com"
            target="_blank"
            rel="noopener noreferrer"
            tabIndex={menuOpen ? 0 : -1}
            className="text-[#7A726A] hover:text-[#1C1915] text-sm tracking-widest uppercase"
          >
            TikTok
          </a>
        </div>
      </div>
    </>
  )
}