
import { useState, useEffect } from 'react'

type Page = 'home' | 'about' | 'services' | 'portfolio' | 'contact' | 'booking'

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
  const [lightText, setLightText] = useState(true)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)

      const header = document.querySelector('header')
      if (!header) return

      const headerRect = header.getBoundingClientRect()
      const x = Math.min(window.innerWidth - 1, Math.max(0, window.innerWidth / 2))
      const y = Math.min(window.innerHeight - 1, Math.max(0, headerRect.bottom + 4))
      const elements = document.elementsFromPoint(x, y)

      const section = elements.find((element) => {
        const tag = element.tagName.toLowerCase()
        return tag === 'section'
      })

      if (section) {
        const background = getComputedStyle(section).backgroundColor
        const isDark =
          section.classList.contains('text-white') ||
          background === 'rgb(28, 25, 21)' ||
          background === 'rgb(20, 18, 15)' ||
          section.querySelector('.bg-gradient-to-t') !== null

        setLightText(isDark)
      }
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    window.addEventListener('resize', handleScroll)
    handleScroll()

    return () => {
      window.removeEventListener('scroll', handleScroll)
      window.removeEventListener('resize', handleScroll)
    }
  }, [])

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : ''

    return () => {
      document.body.style.overflow = ''
    }
  }, [menuOpen])

  const handleNavigate = (page: Page) => {
    setMenuOpen(false)
    onNavigate(page)
  }

  const navText = lightText
    ? 'text-white hover:text-[#C8956C]'
    : 'text-[#1C1915] hover:text-[#8C5E3A]'

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? 'bg-[#FAF8F4]/95 backdrop-blur-md shadow-sm'
            : 'bg-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="h-20 flex items-center justify-between">
            <button
              type="button"
              onClick={() => handleNavigate('home')}
              className={`font-display text-xl md:text-2xl tracking-[0.12em] font-semibold relative z-[60] transition-colors ${
                menuOpen || scrolled
                  ? 'text-[#1C1915]'
                  : navText
              }`}
              aria-label="Go to homepage"
            >
              MAINNASGLAM
            </button>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center gap-8 lg:gap-10">
              {links.map(({ label, page }) => (
                <button
                  key={page}
                  type="button"
                  onClick={() => handleNavigate(page)}
                  className={`text-sm tracking-wide transition-colors ${
                    menuOpen || scrolled
                      ? currentPage === page
                        ? 'text-[#8C5E3A]'
                        : 'text-[#1C1915] hover:text-[#8C5E3A]'
                      : currentPage === page
                        ? lightText
                          ? 'text-[#C8956C]'
                          : 'text-[#8C5E3A]'
                        : navText
                  }`}
                >
                  {label}
                </button>
              ))}

              <button
                type="button"
                onClick={() => handleNavigate('booking')}
                className="bg-[#8C5E3A] text-white px-6 py-3 text-sm tracking-wide hover:bg-[#6F472B] transition-colors"
              >
                Book Now
              </button>
            </nav>

            {/* Mobile Menu Toggle */}
            <button
              type="button"
              onClick={() => setMenuOpen(!menuOpen)}
              className={`md:hidden relative z-[60] flex items-center justify-center w-10 h-10 ${
                menuOpen || scrolled
                  ? 'text-[#1C1915]'
                  : navText
              }`}
              aria-label={menuOpen ? 'Close menu' : 'Open menu'}
              aria-expanded={menuOpen}
            >
              {menuOpen ? (
                <svg width="25" height="25" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round">
                  <path d="M18 6 6 18" />
                  <path d="m6 6 12 12" />
                </svg>
              ) : (
                <svg width="25" height="25" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round">
                  <path d="M3 7h18" />
                  <path d="M3 12h18" />
                  <path d="M3 17h18" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Navigation */}
      <div
        className={`fixed inset-0 z-40 md:hidden bg-[#FAF8F4] transition-all duration-300 ${
          menuOpen
            ? 'opacity-100 visible'
            : 'opacity-0 invisible pointer-events-none'
        }`}
      >
        <div className="h-full overflow-y-auto flex flex-col px-8 sm:px-10 pt-28 pb-8">
          <nav className="flex flex-col gap-4">
            {links.map(({ label, page }) => (
              <button
                key={page}
                type="button"
                onClick={() => handleNavigate(page)}
                className={`text-left font-display text-2xl sm:text-3xl font-medium transition-colors ${
                  currentPage === page
                    ? 'text-[#8C5E3A]'
                    : 'text-[#1C1915] hover:text-[#8C5E3A]'
                }`}
              >
                {label}
              </button>
            ))}

            <button
              type="button"
              onClick={() => handleNavigate('booking')}
              className="text-left font-display text-2xl sm:text-3xl font-medium text-[#8C5E3A] hover:text-[#1C1915] transition-colors"
            >
              Book Now
            </button>
          </nav>

          <div className="mt-10 pt-6 border-t border-[#1C1915]/10">
            <p className="text-[10px] uppercase tracking-[0.25em] text-[#8C5E3A] mb-4">
              Follow Along
            </p>

                    <a
            href="https://www.instagram.com/mainnasglam_beauty/"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto px-8 py-3.5 border border-[#FBF6F0]/60 text-[#FBF6F0] text-sm font-semibold tracking-wide hover:border-[#E0A96D] hover:text-[#E0A96D] transition-colors text-center"
            style={{ borderRadius: 'var(--radius)' }}
          >
            Book via Instagram
          </a>
          </div>

          <p className="mt-auto pt-10 text-xs tracking-wide text-[#1C1915]/50">
            Beauty & Self-Care · Glasgow, United Kingdom
          </p>
        </div>
      </div>
    </>
  )
}
