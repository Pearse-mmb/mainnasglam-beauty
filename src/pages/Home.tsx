
type Page = 'home' | 'about' | 'services' | 'portfolio' | 'contact' | 'booking'

interface HomeProps {
  onNavigate: (page: Page) => void
}

const INSTAGRAM_DM = 'https://www.instagram.com/mainnasglam_beauty/'

export default function Home({ onNavigate }: HomeProps) {
  const go = (page: Page) => {
    onNavigate(page)
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <main className="w-full overflow-hidden text-[#211713] bg-[#FBF6F0]">
      {/* Hero */}
      <section className="relative min-h-[90vh] md:min-h-screen flex items-end pb-16 pt-28 md:pb-28 overflow-hidden bg-[#211713]">
        <img
          src="/landingpica.png"
          alt="Mainnasglam Beauty — makeup by Amina"
          className="absolute inset-0 w-full h-full object-cover object-center md:object-[center_30%] transition-transform duration-700"
        />

        {/* Dark espresso overlay for improved mobile readability */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#170F0C] via-[#170F0C]/85 to-[#170F0C]/50" />

        <div className="relative max-w-7xl mx-auto px-5 sm:px-8 lg:px-10 w-full z-10">
          <p className="text-[#C7B5A5] text-[11px] sm:text-xs tracking-[0.2em] uppercase mb-4 font-semibold">
            Beauty & Self-Care · Glasgow, United Kingdom
          </p>

          <h1 className="font-display text-4xl sm:text-6xl lg:text-8xl font-normal tracking-[-0.035em] text-[#E8D8C8] leading-[1.1] mb-6 max-w-4xl">
            Where Beauty <br />
            <em className="text-[#B89A83] not-italic font-serif">
              Meets Confidence
            </em>
          </h1>

          <p className="text-[#D0C0B2] text-sm sm:text-base leading-relaxed max-w-2xl mb-8 font-normal">
            Makeup · Microblading · Lashes · Braids · Waxing
            <br className="hidden sm:block" />
            <span className="block sm:inline mt-1 sm:mt-0">
              {" "}Your beauty, your style, your confidence — all in one place.
            </span>
          </p>

          <div className="flex flex-col sm:flex-row gap-3.5 sm:gap-4 w-full sm:w-auto">
            <button
              onClick={() => go('portfolio')}
              className="w-full sm:w-auto px-8 py-3.5 bg-[#E8D8C8] text-[#211713] text-sm font-semibold tracking-wide hover:bg-[#B89A83] transition-colors text-center"
              style={{ borderRadius: 'var(--radius)' }}
            >
              Explore our services
            </button>

            <a
              href={INSTAGRAM_DM}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto px-8 py-3.5 border border-[#C7B5A5]/70 text-[#E8D8C8] text-sm font-semibold tracking-wide hover:border-[#B89A83] hover:text-[#B89A83] transition-colors text-center"
              style={{ borderRadius: 'var(--radius)' }}
            >
              Book via Instagram
            </a>
          </div>
        </div>
      </section>

      {/* Intro statement */}
      <section className="py-16 md:py-28 bg-[#FBF6F0]">
        <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-10">
          <div className="grid md:grid-cols-2 gap-10 lg:gap-16 items-center">
            <div>
              <p className="text-[#8C5228] text-[11px] sm:text-xs tracking-[0.2em] uppercase font-semibold mb-3">
                Mainnasglam Beauty
              </p>

              <h2 className="font-display text-3xl sm:text-5xl font-normal tracking-[-0.035em] text-[#211713] leading-tight mb-5">
                Hey Queens and Kings, <br className="hidden sm:block" />
                <em className="text-[#8C5228] not-italic font-serif">
                  it’s lovely to have you here.
                </em>
              </h2>

              <p className="text-[#51433A] text-sm sm:text-base leading-relaxed mb-4">
                I’m Fatima, a home-based beauty service provider in Glasgow. Our services include Makeup, Microblading, Lash Extensions, and Braids.
              </p>

              <p className="text-[#51433A] text-sm sm:text-base leading-relaxed mb-6">
                I aim to slay you to perfection. You can rest assured to have a personalized, well-pampered, and comfortable session with me — and I just can’t wait to have you!
              </p>

              <button
                onClick={() => go('about')}
                className="text-sm font-medium text-[#211713] border-b border-[#211713] pb-0.5 hover:text-[#8C5228] hover:border-[#8C5228] transition-colors inline-flex items-center gap-1.5"
              >
                About Mainnasglam <span className="text-base">→</span>
              </button>
            </div>

            <div className="w-full aspect-[4/5] overflow-hidden bg-[#E5D5C6] rounded-sm shadow-sm">
              <img
                src="/ceo.jpeg"
                alt="Fatima - Mainnasglam Beauty"
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Services preview */}
      <section className="py-16 md:py-28 bg-[#F0E7DE]">
        <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-10">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 md:mb-14 gap-4">
            <div>
              <p className="text-[#8C5228] text-[11px] sm:text-xs tracking-[0.2em] uppercase font-semibold mb-3">
                What We Offer
              </p>

              <h2 className="font-display text-3xl sm:text-5xl font-normal tracking-[-0.035em] text-[#211713]">
                Our Services
              </h2>

              <p className="text-[#68584E] text-sm mt-3 max-w-lg leading-relaxed">
                Discover our signature categories: makeup, microblading,
                lashes, braids, and waxing.
              </p>
            </div>

            <button
              onClick={() => go('services')}
              className="hidden md:inline-flex text-sm font-medium text-[#51433A] border-b border-[#51433A] pb-0.5 hover:text-[#8C5228] hover:border-[#8C5228] transition-colors items-center gap-1"
            >
              All services →
            </button>
          </div>

          {/* Service Categories Grid */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-10 sm:gap-y-12">
            {[
              {
                title: 'Makeup',
                desc: 'Soft glam, full glam, birthday, prom, graduation and photoshoot looks.',
                img: '/makeupa.jpeg',
                alt: 'Makeup artistry',
              },
              {
                title: 'Microblading',
                desc: 'Ombré brows and combination brows for beautifully defined eyebrows.',
                img: '/bladingq.jpeg',
                alt: 'Brow artistry',
              },
              {
                title: 'Lashes',
                desc: 'Classic, hybrid, volume and cluster lash sets to suit your preferred look.',
                img: '/hybridlash.png',
                alt: 'Professional lash extensions',
              },
              {
                title: 'Braids',
                desc: 'Goddess and boho braids, Fulani braids, stitch braids and feed-in cornrows.',
                img: '/smallgodessboho.jpeg',
                alt: 'Goddess boho braids',
              },
              // {
              //   title: 'Waxing',
              //   desc: 'Waxing services for smooth skin and your personal self-care routine.',
              //   img: 'https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?w=600&h=750&fit=crop&auto=',
              //   alt: 'Professional skincare treatment',
              // },
            ].map((service) => (
              <button
                key={service.title}
                onClick={() => go('services')}
                className="group text-left w-full focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#8C5228]"
              >
                <div className="aspect-[4/5] overflow-hidden bg-[#DCCABD] mb-4 rounded-sm">
                  <img
                    src={service.img}
                    alt={service.alt}
                    loading="lazy"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                </div>

                <div className="flex items-center justify-between gap-3 mb-2">
                  <h3 className="font-display text-xl font-medium tracking-[-0.015em] text-[#211713] group-hover:text-[#8C5228] transition-colors">
                    {service.title}
                  </h3>

                  <span className="text-[#8C5228] text-lg transition-transform duration-300 group-hover:translate-x-1">
                    →
                  </span>
                </div>

                <p className="text-sm text-[#68584E] leading-relaxed">
                  {service.desc}
                </p>
              </button>
            ))}
          </div>

          {/* Mobile All Services Link */}
          <div className="mt-8 md:hidden">
            <button
              onClick={() => go('services')}
              className="text-sm font-medium text-[#211713] border-b border-[#211713] pb-0.5 hover:text-[#8C5228] transition-colors"
            >
              Explore all services →
            </button>
          </div>
        </div>
      </section>

      {/* Portfolio teaser */}
      <section className="py-16 md:py-28 bg-[#FBF6F0]">
        <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-10">
          <div className="mb-10 md:mb-12">
            <p className="text-[#8C5228] text-[11px] sm:text-xs tracking-[0.2em] uppercase font-semibold mb-3">
              A Collection of Beauty
            </p>

            <h2 className="font-display text-3xl sm:text-5xl font-normal tracking-[-0.035em] text-[#211713]">
              Our Portfolio
            </h2>

            <p className="text-[#68584E] text-sm leading-relaxed mt-3 max-w-lg">
              Discover our signature glam, bridal beauty, lashes, and hair
              artistry through our favourite looks and transformations.
            </p>
          </div>

          {/* Featured Video */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <span className="w-6 h-px bg-[#8C5228]" />
              <p className="text-[11px] tracking-[0.2em] uppercase font-semibold text-[#8C5228]">
                Featured Work
              </p>
            </div>

            <div className="grid md:grid-cols-5 gap-6 md:gap-10 items-center">
              <div className="md:col-span-3 overflow-hidden bg-[#E5D5C6] rounded-sm">
                <video
                  controls
                  playsInline
                  preload="metadata"
                  poster="/portfolio-video-cover.jpeg"
                  className="w-full aspect-video object-cover"
                >
                  <source src="/mp fulani.mp4" type="video/mp4" />
                  Your browser does not support this video.
                </video>
              </div>

              <div className="md:col-span-2 py-2">
                <p className="text-[#8C5228] text-[11px] tracking-[0.2em] uppercase font-semibold mb-2">
                  The Art of Glam
                </p>

                <h3 className="font-display text-2xl sm:text-3xl font-normal tracking-[-0.03em] text-[#211713] leading-tight">
                  Beauty in Every Detail
                </h3>

                <p className="text-sm text-[#68584E] leading-relaxed mt-4">
                  A closer look at our artistry, attention to detail, and the
                  transformation behind every appointment.
                </p>

                <button
                  onClick={() => go('services')}
                  className="mt-6 text-sm font-medium text-[#211713] border-b border-[#211713] pb-1 hover:text-[#8C5228] hover:border-[#8C5228] transition-colors inline-flex items-center gap-1"
                >
                  Explore Our Services →
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 md:py-32 bg-[#211713] text-center">
        <div className="max-w-2xl mx-auto px-5 sm:px-8">
          <p className="text-[#E0A96D] text-[11px] sm:text-xs tracking-[0.2em] uppercase font-semibold mb-4">
            Ready for Your Glam?
          </p>

          <h2 className="font-display text-3xl sm:text-5xl font-normal tracking-[-0.035em] text-[#FBF6F0] mb-8 leading-tight">
            Your next glam look starts here.
          </h2>

          <div className="flex flex-col sm:flex-row gap-3.5 sm:gap-4 justify-center">
            <a
              href={INSTAGRAM_DM}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto px-8 py-3.5 bg-[#FBF6F0] text-[#211713] text-sm font-semibold tracking-wide hover:bg-[#E0A96D] transition-colors text-center"
              style={{ borderRadius: 'var(--radius)' }}
            >
              Book via Instagram
            </a>

            <button
              onClick={() => go('contact')}
              className="w-full sm:w-auto px-8 py-3.5 border border-[#FBF6F0]/40 text-[#FBF6F0] text-sm font-semibold tracking-wide hover:border-[#E0A96D] hover:text-[#E0A96D] transition-colors"
              style={{ borderRadius: 'var(--radius)' }}
            >
              Send an Enquiry
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#170F0C] border-t border-white/10 py-6">
        <div className="max-w-7xl mx-auto px-5 sm:px-8 flex flex-col sm:flex-row items-center justify-between gap-3 text-center sm:text-left">
          <p className="text-xs text-[#FBF6F0]/60">
            © {new Date().getFullYear()} Mainnasglam Beauty. All rights reserved.
          </p>

          <p className="text-xs text-[#FBF6F0]/60">
            Created by{' '}
            <a
              href="mailto:pearseboluwatife@gmail.com"
              className="text-[#E0A96D] hover:text-[#FBF6F0] transition-colors"
            >
              Pearse One
            </a>
          </p>
        </div>
      </footer>
    </main>
  )
}
