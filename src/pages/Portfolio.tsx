import { useState } from 'react'

type Page = 'home' | 'about' | 'services' | 'portfolio' | 'contact' | 'booking'

interface PortfolioProps {
  onNavigate: (page: Page) => void
}

type Category = 'All' | 'Makeup' | 'Microblading' | 'Lashes' | 'Braids'

const INSTAGRAM_DM = 'https://www.instagram.com/direct/new/'

const items: {
  id: number
  cat: Category
  img: string
  title: string
  aspect: string
  credit: string
}[] = [
  {
    id: 1,
    cat: 'Makeup',
    img: '/makeupa.jpeg',
    title: 'Full Glam',
    aspect: 'aspect-[4/5]',
    credit: 'Full glam makeup look',
  },
  {
    id: 2,
    cat: 'Makeup',
    img: '/makeupc.png',
    title: 'Bridal Glam',
    aspect: 'aspect-[4/5]',
    credit: 'Bridal makeup look',
  },
  {
    id: 4,
    cat: 'Makeup',
    img: '/makeupd.png',
    title: 'Statement Glam',
    aspect: 'aspect-[3/4]',
    credit: 'Statement makeup look',
  },
  {
    id: 5,
    cat: 'Makeup',
    img: '/makeupe.png',
    title: 'Bridal Beauty',
    aspect: 'aspect-[4/3]',
    credit: 'Bridal beauty look',
  },

  // MICROBLADING
  {
    id: 8,
    cat: 'Microblading',
    img: '/bladingq.jpeg',
    title: 'Microblading',
    aspect: 'aspect-[4/5]',
    credit: 'Microblading brow treatment',
  },
  {
    id: 9,
    cat: 'Microblading',
    img: '/ob.jpeg',
    title: 'Brow Artistry',
    aspect: 'aspect-[4/5]',
    credit: 'Eyebrow treatment',
  },
  {
    id: 10,
    cat: 'Microblading',
    img: '/ob1.jpeg',
    title: 'Brow Enhancement',
    aspect: 'aspect-[4/5]',
    credit: 'Eyebrow enhancement',
  },
  {
    id: 11,
    cat: 'Microblading',
    img: '/ob2.jpeg',
    title: 'Brow Results',
    aspect: 'aspect-[4/5]',
    credit: 'Microblading results',
  },

  // LASHES
  {
    id: 3,
    cat: 'Lashes',
    img: '/clasiclashset.jpeg',
    title: 'Classic Lash Set',
    aspect: 'aspect-[4/5]',
    credit: 'Classic lash extensions',
  },
  {
    id: 6,
    cat: 'Lashes',
    img: '/hybridlash.png',
    title: 'Hybrid Lash Set',
    aspect: 'aspect-square',
    credit: 'Hybrid lash extensions',
  },
  {
    id: 7,
    cat: 'Lashes',
    img: '/hybridlashset.jpeg',
    title: 'Hybrid Lash Close-Up',
    aspect: 'aspect-[4/3]',
    credit: 'Hybrid lash extensions close-up',
  },

  // BRAIDS
  {
    id: 12,
    cat: 'Braids',
    img: '/mbb.jpeg',
    title: 'Braided Hairstyle',
    aspect: 'aspect-[4/5]',
    credit: 'Braided hairstyle',
  },
  {
    id: 13,
    cat: 'Braids',
    img: '/mba.jpeg',
    title: 'Braids Styling',
    aspect: 'aspect-square',
    credit: 'Braided hair styling',
  },
];

const categories: Category[] = [
  'All',
  'Makeup',
  'Microblading',
  'Lashes',
  'Braids',
]

export default function Portfolio({ onNavigate }: PortfolioProps) {
  const [activeCategory, setActiveCategory] = useState<Category>('All')
  const [lightbox, setLightbox] = useState<typeof items[0] | null>(null)

  const filtered =
    activeCategory === 'All'
      ? items
      : items.filter((item) => item.cat === activeCategory)

  const go = (page: Page) => {
    onNavigate(page)
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <main className="pt-20">
      {/* Header */}
      <section className="py-16 md:py-24 bg-[#FAF8F4]">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <p className="text-[#8C5E3A] text-xs tracking-widest uppercase mb-4">
            The Work
          </p>

          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-8">
            <h1 className="font-display text-5xl md:text-6xl lg:text-7xl font-medium text-[#1C1915] leading-none">
              Portfolio.
            </h1>

            <p className="max-w-xs text-[#4A4540] leading-relaxed">
              Explore our beauty transformations, from makeup and microblading
              to lash extensions and braids. Based in Glasgow, United Kingdom,
              we are available to travel worldwide.
            </p>
          </div>
        </div>
      </section>

      {/* Category Filter */}
      <div className="sticky top-16 md:top-20 z-30 bg-[#FAF8F4]/95 backdrop-blur-md border-b border-[#D8D0C4]">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div
            className="flex gap-1 overflow-x-auto py-3"
            style={{ scrollbarWidth: 'none' }}
          >
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`flex-shrink-0 px-4 py-2 text-xs font-medium tracking-widest uppercase transition-colors ${
                  activeCategory === cat
                    ? 'bg-[#1C1915] text-[#FAF8F4]'
                    : 'text-[#7A726A] hover:text-[#1C1915]'
                }`}
                style={{ borderRadius: 'var(--radius)' }}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Portfolio Grid */}
      <section className="py-12 md:py-16 bg-[#FAF8F4]">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          {filtered.length > 0 ? (
            <div className="columns-2 md:columns-3 lg:columns-4 gap-3 md:gap-4 space-y-3 md:space-y-4">
              {filtered.map((item) => (
                <button
                  key={item.id}
                  onClick={() => setLightbox(item)}
                  className="group w-full block overflow-hidden bg-[#E6E0D6] break-inside-avoid"
                  aria-label={`View ${item.title}`}
                >
                  <div className={`relative w-full ${item.aspect} overflow-hidden`}>
                    <img
                      src={item.img}
                      alt={item.credit}
                      loading="lazy"
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    />

                    <div className="absolute inset-0 bg-[#1C1915]/0 group-hover:bg-[#1C1915]/40 transition-colors duration-300 flex items-end p-4">
                      <div className="translate-y-4 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-300">
                        <p className="text-[#C8956C] text-xs tracking-widest uppercase mb-0.5">
                          {item.cat}
                        </p>

                        <p className="text-[#FAF8F4] font-display text-sm font-medium">
                          {item.title}
                        </p>
                      </div>
                    </div>
                  </div>
                </button>
              ))}
            </div>
          ) : (
            <div className="py-20 text-center">
              <p className="font-display text-2xl text-[#1C1915] mb-3">
                {activeCategory} Portfolio
              </p>

              <p className="text-[#7A726A]">
                New work will be added here soon. Please check back for updates.
              </p>
            </div>
          )}
        </div>
      </section>

      {/* Lightbox */}
      {lightbox && (
        <div
          className="fixed inset-0 z-50 bg-[#1C1915]/96 flex items-center justify-center p-6"
          onClick={() => setLightbox(null)}
          role="dialog"
          aria-modal="true"
          aria-label={lightbox.title}
        >
          <button
            onClick={() => setLightbox(null)}
            className="absolute top-6 right-6 text-[#FAF8F4] hover:text-[#C8956C] text-sm tracking-widest uppercase"
            aria-label="Close image"
          >
            Close ✕
          </button>

          <div
            className="max-w-xl w-full max-h-[85vh] flex flex-col"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={lightbox.img}
              alt={lightbox.credit}
              className="w-full object-contain max-h-[74vh]"
            />

            <div className="mt-4 flex items-center justify-between gap-4">
              <div>
                <p className="text-[#C8956C] text-xs tracking-widest uppercase">
                  {lightbox.cat}
                </p>

                <p className="text-[#FAF8F4] font-display text-xl font-medium">
                  {lightbox.title}
                </p>
              </div>

              <a
                href={INSTAGRAM_DM}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-[#FAF8F4] border-b border-[#FAF8F4]/40 pb-0.5 hover:border-[#C8956C] hover:text-[#C8956C] transition-colors"
              >
                Book This Look →
              </a>
            </div>
          </div>
        </div>
      )}

      {/* Instagram CTA */}
      <section className="py-16 bg-[#1C1915]">
        <div className="max-w-7xl mx-auto px-6 lg:px-10 flex flex-col md:flex-row items-center justify-between gap-8">
          <div>
            <p className="text-[#C8956C] text-xs tracking-widest uppercase mb-2">
              More Work
            </p>

            <p className="font-display text-2xl md:text-3xl font-medium text-[#FAF8F4]">
              Follow Mainnasglam Beauty on Instagram for more looks.
            </p>
          </div>

          <div className="flex gap-4 flex-shrink-0">
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 bg-[#FAF8F4] text-[#1C1915] text-sm font-medium hover:bg-[#C8956C] hover:text-[#FAF8F4] transition-colors"
              style={{ borderRadius: 'var(--radius)' }}
            >
              Instagram →
            </a>

            <a
              href="https://tiktok.com"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 border border-[#FAF8F4]/30 text-[#FAF8F4] text-sm font-medium hover:border-[#C8956C] hover:text-[#C8956C] transition-colors"
              style={{ borderRadius: 'var(--radius)' }}
            >
              TikTok →
            </a>
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="py-20 bg-[#F3EFE8] text-center">
        <div className="max-w-xl mx-auto px-6">
          <p className="text-[#8C5E3A] text-xs tracking-widest uppercase mb-4">
            Ready for Your Glam?
          </p>

          <h2 className="font-display text-3xl md:text-4xl font-medium text-[#1C1915] mb-8 leading-tight">
            Book our services
          </h2>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href={INSTAGRAM_DM}
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-3.5 bg-[#1C1915] text-[#FAF8F4] text-sm font-medium hover:bg-[#8C5E3A] transition-colors"
              style={{ borderRadius: 'var(--radius)' }}
            >
              Click to Book
            </a>

            <button
              onClick={() => go('services')}
              className="px-8 py-3.5 border border-[#1C1915] text-[#1C1915] text-sm font-medium hover:border-[#8C5E3A] hover:text-[#8C5E3A] transition-colors"
              style={{ borderRadius: 'var(--radius)' }}
            >
              View All Services
            </button>
          </div>
        </div>
      </section>
    </main>
  )
}
