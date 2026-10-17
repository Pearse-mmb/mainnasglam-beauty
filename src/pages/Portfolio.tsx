import { useState } from 'react'

type Page = 'home' | 'about' | 'services' | 'portfolio' |   'contact' | 'booking'

interface PortfolioProps {
  onNavigate: (page: Page) => void
}

type Category = 'All' | 'Soft Glam' | 'Full Glam' | 'Bridal' | 'Birthday' | 'Photoshoot' | 'Lashes'

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
    cat: 'Full Glam',
    img: '/makeupa.jpeg',
    title: 'Full Glam',
    aspect: 'aspect-[4/5]',
    credit: 'Full glam makeup look',
  },
  {
    id: 2,
    cat: 'Soft Glam',
    img: '/makeupb.jpeg',
    title: 'Soft Glam',
    aspect: 'aspect-square',
    credit: 'Soft glam makeup look',
  },
  {
    id: 3,
    cat: 'Bridal',
    img: '/makeupc.png',
    title: 'Bridal Glam',
    aspect: 'aspect-[4/5]',
    credit: 'Bridal makeup look',
  },
  {
    id: 4,
    cat: 'Lashes',
    img: '/clasiclashset.jpeg',
    title: 'Classic Lash Set',
    aspect: 'aspect-[4/3]',
    credit: 'Classic lash set',
  },
  {
    id: 5,
    cat: 'Full Glam',
    img: '/makeupd.png',
    title: 'Statement Glam',
    aspect: 'aspect-[3/4]',
    credit: 'Statement makeup look',
  },
  {
    id: 6,
    cat: 'Bridal',
    img: '/makeupe.png',
    title: 'Bridal Beauty',
    aspect: 'aspect-[4/3]',
    credit: 'Bridal beauty look',
  },
  {
    id: 7,
    cat: 'Soft Glam',
    img: '/landingpica.png',
    title: 'Signature Glam',
    aspect: 'aspect-[4/5]',
    credit: 'Signature beauty look',
  },
  {
    id: 8,
    cat: 'Lashes',
    img: '/hybridlash.png',
    title: 'Hybrid Lash Set',
    aspect: 'aspect-square',
    credit: 'Hybrid lash set',
  },
  {
    id: 9,
    cat: 'Photoshoot',
    img: '/makeupc.png',
    title: 'Photoshoot Glam',
    aspect: 'aspect-[4/5]',
    credit: 'Photoshoot makeup',
  },
  {
    id: 10,
    cat: 'Birthday',
    img: '/makeupb.jpeg',
    title: 'Birthday Glam',
    aspect: 'aspect-[4/5]',
    credit: 'Birthday makeup look',
  },
  {
    id: 11,
    cat: 'Bridal',
    img: '/makeupd.png',
    title: 'Bridal Transformation',
    aspect: 'aspect-[2/3]',
    credit: 'Bridal makeup transformation',
  },
  {
    id: 12,
    cat: 'Full Glam',
    img: '/makeupe.png',
    title: 'Event-Ready Glam',
    aspect: 'aspect-[3/4]',
    credit: 'Event makeup look',
  },
  {
    id: 13,
    cat: 'Lashes',
    img: '/hybridlashset.jpeg',
    title: 'Hybrid Lash Close-Up',
    aspect: 'aspect-[4/3]',
    credit: 'Hybrid lash set close-up',
  },
  {
    id: 14,
    cat: 'Photoshoot',
    img: '/makeupa.jpeg',
    title: 'Photoshoot Prep',
    aspect: 'aspect-[4/3]',
    credit: 'Photoshoot makeup look',
  },
  {
    id: 15,
    cat: 'Soft Glam',
    img: '/makeupe.png',
    title: 'Everyday Glam',
    aspect: 'aspect-[4/5]',
    credit: 'Soft glam makeup look',
  },
  {
    id: 16,
    cat: 'Birthday',
    img: '/makeupd.png',
    title: 'Birthday Beauty',
    aspect: 'aspect-[4/3]',
    credit: 'Birthday makeup look',
  },
]


const categories: Category[] = ['All', 'Soft Glam', 'Full Glam', 'Bridal', 'Birthday', 'Photoshoot', 'Lashes']

export default function Portfolio({ onNavigate }: PortfolioProps) {
  const [activeCategory, setActiveCategory] = useState<Category>('All')
  const [lightbox, setLightbox] = useState<typeof items[0] | null>(null)

  const filtered = activeCategory === 'All' ? items : items.filter((i) => i.cat === activeCategory)

  const go = (page: Page) => {
    onNavigate(page)
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <main className="pt-20">
      {/* Header */}
      <section className="py-16 md:py-24 bg-[#FAF8F4]">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <p className="text-[#8C5E3A] text-xs tracking-widest uppercase mb-4">The Work</p>
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-8">
            <h1 className="font-display text-5xl md:text-6xl lg:text-7xl font-medium text-[#1C1915] leading-none">
              Portfolio.
            </h1>
            <p className="max-w-xs text-[#4A4540] leading-relaxed">
              Makeup transformations across Soft Glam, Full Glam, Bridal, Birthday, Photoshoot, and Lash looks. Glasgow-based. Follow us on Instagram for the latest work.
            </p>
          </div>
        </div>
      </section>

      {/* Category filter */}
      <div className="sticky top-16 md:top-20 z-30 bg-[#FAF8F4]/95 backdrop-blur-md border-b border-[#D8D0C4]">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="flex gap-1 overflow-x-auto py-3" style={{ scrollbarWidth: 'none' }}>
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

      {/* Masonry grid */}
      <section className="py-12 md:py-16 bg-[#FAF8F4]">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="columns-2 md:columns-3 lg:columns-4 gap-3 md:gap-4 space-y-3 md:space-y-4">
            {filtered.map((item) => (
              <button
                key={item.id}
                onClick={() => setLightbox(item)}
                className="group w-full block overflow-hidden bg-[#E6E0D6] break-inside-avoid"
              >
                <div className={`relative w-full ${item.aspect} overflow-hidden`}>
                  <img
                    src={item.img}
                    alt={item.credit}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-[#1C1915]/0 group-hover:bg-[#1C1915]/40 transition-colors duration-300 flex items-end p-4">
                    <div className="translate-y-4 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-300">
                      <p className="text-[#C8956C] text-xs tracking-widest uppercase mb-0.5">{item.cat}</p>
                      <p className="text-[#FAF8F4] font-display text-sm font-medium">{item.title}</p>
                    </div>
                  </div>
                </div>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox */}
      {lightbox && (
        <div
          className="fixed inset-0 z-50 bg-[#1C1915]/96 flex items-center justify-center p-6"
          onClick={() => setLightbox(null)}
        >
          <button
            onClick={() => setLightbox(null)}
            className="absolute top-6 right-6 text-[#FAF8F4] hover:text-[#C8956C] text-sm tracking-widest uppercase"
          >
            Close ✕
          </button>
          <div
            className="max-w-xl w-full max-h-[85vh] flex flex-col"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={lightbox.img.replace(/w=\d+&h=\d+/, 'w=900&h=1100')}
              alt={lightbox.credit}
              className="w-full object-contain max-h-[74vh]"
            />
            <div className="mt-4 flex items-center justify-between">
              <div>
                <p className="text-[#C8956C] text-xs tracking-widest uppercase">{lightbox.cat}</p>
                <p className="text-[#FAF8F4] font-display text-xl font-medium">{lightbox.title}</p>
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
            <p className="text-[#C8956C] text-xs tracking-widest uppercase mb-2">More Work</p>
            <p className="font-display text-2xl md:text-3xl font-medium text-[#FAF8F4]">
              Follow Amina Beauty Glam on Instagram for daily looks.
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
          <p className="text-[#8C5E3A] text-xs tracking-widest uppercase mb-4">Ready for Your Glam?</p>
          <h2 className="font-display text-3xl md:text-4xl font-medium text-[#1C1915] mb-8 leading-tight">
            Book your look through Instagram DM.
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
