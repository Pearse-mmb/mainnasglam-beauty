import { useState } from 'react'

type Page = 'home' | 'about' | 'services' | 'portfolio' | 'contact' | 'booking'
type Category = 'All' | 'Makeup' | 'Microblading' | 'Lashes' | 'Braids'

interface PortfolioProps {
  onNavigate: (page: Page) => void
}

type PortfolioItem = {
  id: number
  cat: Exclude<Category, 'All'>
  img: string
  title: string
  credit: string
}

const INSTAGRAM_DM = 'https://www.instagram.com/mainnasglam_beauty/'


/*
 * Keep each image assigned to its correct service category.
 * When adding work, place it in the matching category and use its exact
 * filename from the public folder.
 */
const items: PortfolioItem[] = [
  // MAKEUP IMAGES ONLY
  {
    id: 1,
    cat: 'Makeup',
    img: '/makeupa.jpeg',
    title: 'Full Glam',
    credit: 'Full glam makeup look',
  },
  {
    id: 2,
    cat: 'Makeup',
    img: '/makeupc.png',
    title: 'Bridal Glam',
    credit: 'Bridal makeup look',
  },
  {
    id: 4,
    cat: 'Makeup',
    img: '/makeupd.png',
    title: 'Statement Glam',
    credit: 'Statement makeup look',
  },
  {
    id: 5,
    cat: 'Makeup',
    img: '/makeupe.png',
    title: 'Bridal Beauty',
    credit: 'Bridal beauty look',
  },

  // MICROBLADING / BROWS IMAGES ONLY
  {
    id: 8,
    cat: 'Microblading',
    img: '/bladingq.jpeg',
    title: 'Microblading',
    credit: 'Microblading brow treatment',
  },
  {
    id: 9,
    cat: 'Microblading',
    img: '/ob.jpeg',
    title: 'Brow Artistry',
    credit: 'Eyebrow treatment',
  },
  {
    id: 10,
    cat: 'Microblading',
    img: '/ob1.jpeg',
    title: 'Brow Enhancement',
    credit: 'Eyebrow enhancement',
  },
  {
    id: 11,
    cat: 'Microblading',
    img: '/ob2.jpeg',
    title: 'Brow Results',
    credit: 'Microblading results',
  },

  // LASH IMAGES ONLY
  {
    id: 3,
    cat: 'Lashes',
    img: '/clasiclashset.jpeg',
    title: 'Classic Lash Set',
    credit: 'Classic lash extensions',
  },
  {
    id: 6,
    cat: 'Lashes',
    img: '/hybridlash.png',
    title: 'Hybrid Lash Set',
    credit: 'Hybrid lash extensions',
  },
  {
    id: 7,
    cat: 'Lashes',
    img: '/hybridlashset.jpeg',
    title: 'Hybrid Lash Close-Up',
    credit: 'Hybrid lash extensions close-up',
  },

  // BRAID IMAGES ONLY
  {
    id: 12,
    cat: 'Braids',
    img: '/mbb.jpeg',
    title: 'Braided Hairstyle',
    credit: 'Braided hairstyle',
  },
  {
    id: 13,
    cat: 'Braids',
    img: '/mba.jpeg',
    title: 'Braids Styling',
    credit: 'Braided hair styling',
  },
]

const categories: Category[] = ['All', 'Makeup', 'Microblading', 'Lashes', 'Braids']
const serviceCategories: Exclude<Category, 'All'>[] = [
  'Makeup',
  'Microblading',
  'Lashes',
  'Braids',
]

export default function Portfolio({ onNavigate }: PortfolioProps) {
  const [activeCategory, setActiveCategory] = useState<Category>('All')
  const [lightbox, setLightbox] = useState<PortfolioItem | null>(null)

  const go = (page: Page) => {
    onNavigate(page)
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const renderImageGrid = (categoryItems: PortfolioItem[]) => (
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 md:gap-5">
      {categoryItems.map((item) => (
        <button
          key={item.id}
          type="button"
          onClick={() => setLightbox(item)}
          className="group block w-full min-w-0 overflow-hidden rounded-lg bg-[#F0E7DE] text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-[#8C5228] focus-visible:ring-offset-2"
          aria-label={`View ${item.title}`}
        >
          <div className="relative aspect-[4/5] w-full overflow-hidden">
            <img
              src={item.img}
              alt={item.credit}
              loading="lazy"
              className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
            />
            <div className="absolute inset-0 flex items-end bg-[#211713]/0 p-3 transition-colors duration-300 group-hover:bg-[#211713]/45 md:p-4">
              <div className="translate-y-2 opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
                <p className="mb-1 text-[10px] font-semibold uppercase tracking-[0.16em] text-[#E0A96D] md:text-xs">
                  {item.cat}
                </p>
                <p className="font-display text-sm font-medium text-white md:text-base">
                  {item.title}
                </p>
              </div>
            </div>
          </div>
          <div className="bg-[#FBF6F0] px-3 py-3 md:px-4">
            <p className="truncate text-sm font-medium text-[#211713]">{item.title}</p>
            <p className="mt-1 text-xs text-[#68584E]">{item.cat}</p>
          </div>
        </button>
      ))}
    </div>
  )

  return (
    <main className="min-w-0 overflow-x-clip pt-20">
      {/* Page heading */}
      <section className="bg-[#FBF6F0] py-14 md:py-20">
        <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-10">
          <p className="mb-4 text-xs font-semibold uppercase tracking-[0.22em] text-[#8C5228]">
            The Work
          </p>
          <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
            <h1 className="font-display text-5xl font-medium leading-tight tracking-tight text-[#211713] md:text-6xl lg:text-7xl">
              Portfolio.
            </h1>
            <p className="max-w-md text-sm leading-7 text-[#68584E] md:text-base">
              Explore our beauty work by category, from makeup and brow artistry
              to lash extensions and braids. Based in Glasgow, United Kingdom,
              with travel available by arrangement.
            </p>
          </div>
        </div>
      </section>

      {/* Category filter */}
      <nav
        aria-label="Portfolio categories"
        className="sticky top-16 z-30 border-b border-[#DCCABD] bg-[#FBF6F0]/95 backdrop-blur-md md:top-20"
      >
        <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-10">
          <div className="flex gap-2 overflow-x-auto py-3" style={{ scrollbarWidth: 'none' }}>
            {categories.map((cat) => (
              <button
                key={cat}
                type="button"
                onClick={() => setActiveCategory(cat)}
                aria-pressed={activeCategory === cat}
                className={`flex-shrink-0 rounded-full px-4 py-2.5 text-xs font-semibold uppercase tracking-wider transition-colors ${
                  activeCategory === cat
                    ? 'bg-[#8C5228] text-white'
                    : 'text-[#68584E] hover:bg-[#F0E7DE] hover:text-[#211713]'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </nav>

      {/* All shows separate category sections; selecting a category shows only its images. */}
      <section className="bg-[#FBF6F0] py-10 md:py-16">
        <div className="mx-auto max-w-7xl space-y-14 px-5 sm:px-6 md:space-y-20 lg:px-10">
          {activeCategory === 'All' ? (
            serviceCategories.map((category) => {
              const categoryItems = items.filter((item) => item.cat === category)

              return (
                <section key={category} aria-labelledby={`portfolio-${category.toLowerCase()}`}>
                  <div className="mb-6 flex items-end justify-between gap-4 border-b border-[#DCCABD] pb-4 md:mb-8">
                    <div>
                      <p className="mb-2 text-[10px] font-semibold uppercase tracking-[0.22em] text-[#8C5228] md:text-xs">
                        Our Work
                      </p>
                      <h2
                        id={`portfolio-${category.toLowerCase()}`}
                        className="font-display text-2xl font-medium text-[#211713] md:text-3xl"
                      >
                        {category}
                      </h2>
                    </div>
                    <button
                      type="button"
                      onClick={() => setActiveCategory(category)}
                      className="flex-shrink-0 text-xs font-semibold text-[#8C5228] transition-colors hover:text-[#946343] md:text-sm"
                    >
                      View all →
                    </button>
                  </div>
                  {categoryItems.length > 0 ? (
                    renderImageGrid(categoryItems)
                  ) : (
                    <p className="py-8 text-sm text-[#68584E]">
                      New {category.toLowerCase()} work will be added here soon.
                    </p>
                  )}
                </section>
              )
            })
          ) : (
            <section aria-labelledby="selected-portfolio-category">
              <div className="mb-6 border-b border-[#DCCABD] pb-4 md:mb-8">
                <p className="mb-2 text-[10px] font-semibold uppercase tracking-[0.22em] text-[#8C5228] md:text-xs">
                  Portfolio Category
                </p>
                <h2
                  id="selected-portfolio-category"
                  className="font-display text-2xl font-medium text-[#211713] md:text-3xl"
                >
                  {activeCategory}
                </h2>
              </div>
              {renderImageGrid(items.filter((item) => item.cat === activeCategory))}
            </section>
          )}
        </div>
      </section>

      {/* Image lightbox */}
      {lightbox && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-[#211713]/95 p-4 sm:p-6"
          onClick={() => setLightbox(null)}
          role="dialog"
          aria-modal="true"
          aria-label={lightbox.title}
        >
          <button
            type="button"
            onClick={() => setLightbox(null)}
            className="absolute right-4 top-4 rounded-full border border-white/30 px-4 py-2 text-xs font-semibold uppercase tracking-wider text-white transition-colors hover:bg-white/10 sm:right-6 sm:top-6"
            aria-label="Close image"
          >
            Close ✕
          </button>

          <div
            className="flex max-h-[88vh] w-full max-w-2xl flex-col"
            onClick={(event) => event.stopPropagation()}
          >
            <img
              src={lightbox.img}
              alt={lightbox.credit}
              className="max-h-[72vh] w-full rounded-lg object-contain"
            />
            <div className="mt-4 flex flex-col gap-3 text-white sm:flex-row sm:items-center sm:justify-between">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#E0A96D]">
                  {lightbox.cat}
                </p>
                <p className="mt-1 font-display text-xl font-medium">{lightbox.title}</p>
              </div>
              <a
                href={INSTAGRAM_DM}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex w-fit items-center rounded-full bg-[#8C5228] px-5 py-3 text-sm font-semibold text-white transition-colors hover:bg-[#946343]"
              >
                Book This Look →
              </a>
            </div>
          </div>
        </div>
      )}

      {/* Instagram call to action */}
      <section className="bg-[#211713] py-14 md:py-16">
        <div className="mx-auto flex max-w-7xl flex-col gap-6 px-5 sm:px-6 md:flex-row md:items-center md:justify-between lg:px-10">
          <div className="max-w-2xl">
            <p className="mb-2 text-xs font-semibold uppercase tracking-[0.22em] text-[#E0A96D]">
              More Work
            </p>
            <p className="font-display text-2xl font-medium text-white md:text-3xl">
              Follow Mainnasglam Beauty for more looks and transformations.
            </p>
          </div>
          <div className="flex flex-col gap-3 sm:flex-row">
            <a
              href="https://www.instagram.com/mainnasglam_beauty/"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full bg-[#FBF6F0] px-6 py-3 text-center text-sm font-semibold text-[#211713] transition-colors hover:bg-[#F0E7DE]"
            >
              Instagram →
            </a>
            <a
          href="https://www.tiktok.com/@mainnasglam_beauty"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full border border-white/40 px-6 py-3 text-center text-sm font-semibold text-white transition-colors hover:border-[#E0A96D] hover:text-[#E0A96D]"
            >
              TikTok →
            </a>
          </div>
        </div>
      </section>

      {/* Bottom call to action */}
      <section className="bg-[#F0E7DE] py-16 text-center md:py-20">
        <div className="mx-auto max-w-xl px-5">
          <p className="mb-4 text-xs font-semibold uppercase tracking-[0.22em] text-[#8C5228]">
            Ready for Your Glam?
          </p>
          <h2 className="mb-8 font-display text-3xl font-medium leading-tight text-[#211713] md:text-4xl">
            Your next look starts here.
          </h2>
          <div className="flex flex-col justify-center gap-3 sm:flex-row">
            <a
              href={INSTAGRAM_DM}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full bg-[#8C5228] px-8 py-3.5 text-sm font-semibold text-white transition-colors hover:bg-[#946343]"
            >
              Click to Book
            </a>
            <button
              type="button"
              onClick={() => go('services')}
              className="rounded-full border border-[#211713]/25 px-8 py-3.5 text-sm font-semibold text-[#211713] transition-colors hover:border-[#8C5228] hover:text-[#946343]"
            >
              View All Services
            </button>
          </div>
        </div>
      </section>
    </main>
  )
}
