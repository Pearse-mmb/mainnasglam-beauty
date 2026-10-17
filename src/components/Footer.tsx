type Page = 'home' | 'about' | 'services' | 'portfolio' |  'contact' | 'booking'

interface FooterProps {
  onNavigate: (page: Page) => void
}

const InstagramIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
    <circle cx="12" cy="12" r="4"/>
    <circle cx="17.5" cy="6.5" r="0.5" fill="currentColor" stroke="none"/>
  </svg>
)

const TikTokIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
    <path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-2.88 2.5 2.89 2.89 0 01-2.89-2.89 2.89 2.89 0 012.89-2.89c.28 0 .54.04.79.1V9.01a6.32 6.32 0 00-.79-.05 6.34 6.34 0 00-6.34 6.34 6.34 6.34 0 006.34 6.34 6.34 6.34 0 006.33-6.34V8.98a8.2 8.2 0 004.82 1.55V7.1a4.85 4.85 0 01-1.05-.41z"/>
  </svg>
)

export default function Footer({ onNavigate }: FooterProps) {
  const go = (page: Page) => {
    onNavigate(page)
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <footer className="bg-[#1C1915] text-[#FAF8F4]">
      <div className="max-w-7xl mx-auto px-6 lg:px-10 pt-16 pb-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 mb-12 border-b border-[#3A3530] pb-12">
          {/* Brand */}
          <div className="md:col-span-2">
            <button
              onClick={() => go('home')}
              className="font-display text-2xl font-medium text-[#FAF8F4] hover:text-[#C8956C] mb-4 block"
            >
              Amina Beauty Glam
            </button>
            <p className="text-[#9A928A] text-sm leading-relaxed max-w-xs">
              Professional makeup artist based in Glasgow, Scotland. Glam, Bridal, Birthday, Photoshoot and Lash transformations.
            </p>
            <div className="flex gap-4 mt-6">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#9A928A] hover:text-[#FAF8F4] transition-colors"
                aria-label="Instagram"
              >
                <InstagramIcon />
              </a>
              <a
                href="https://tiktok.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#9A928A] hover:text-[#FAF8F4] transition-colors"
                aria-label="TikTok"
              >
                <TikTokIcon />
              </a>
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="text-xs font-medium tracking-widest uppercase text-[#6A6260] mb-5">Pages</h4>
            <nav className="flex flex-col gap-3">
              {(['about', 'services', 'portfolio', 'shop', 'contact', 'booking'] as Page[]).map((page) => (
                <button
                  key={page}
                  onClick={() => go(page)}
                  className="text-left text-sm text-[#9A928A] hover:text-[#FAF8F4] capitalize"
                >
                  {page}
                </button>
              ))}
            </nav>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-xs font-medium tracking-widest uppercase text-[#6A6260] mb-5">Get in Touch</h4>
            <div className="flex flex-col gap-3 text-sm text-[#9A928A]">
              <span>Glasgow, Scotland</span>
              <button
                onClick={() => go('contact')}
                className="text-left text-[#C8956C] hover:text-[#FAF8F4]"
              >
                Send an Enquiry →
              </button>
              <a
                href="https://www.instagram.com/direct/new/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-left text-[#C8956C] hover:text-[#FAF8F4]"
              >
                Book via Instagram →
              </a>
            </div>
          </div>
        </div>

        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4 text-xs text-[#6A6260]">
          <p>© {new Date().getFullYear()} Amina Beauty Glam. Glasgow, Scotland. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="hover:text-[#9A928A] tracking-widest uppercase">Instagram</a>
            <a href="https://tiktok.com" target="_blank" rel="noopener noreferrer" className="hover:text-[#9A928A] tracking-widest uppercase">TikTok</a>
          </div>
        </div>
      </div>
    </footer>
  )
}
