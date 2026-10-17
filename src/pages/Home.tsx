type Page = 'home' | 'about' | 'services' | 'portfolio'  | 'contact' | 'booking'

interface HomeProps {
  onNavigate: (page: Page) => void
}

const INSTAGRAM_DM = 'https://www.instagram.com/direct/new/'

export default function Home({ onNavigate }: HomeProps) {
  const go = (page: Page) => {
    onNavigate(page)
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <main>
      {/* Hero */}
   <section className="relative min-h-screen flex items-end pb-20 md:pb-28 overflow-hidden bg-[c]">
 

<img
  src="/landingpica.png"
  alt="/ty Glam — makeup by Amina"
  className="absolute inset-0 w-full h-full object-cover md:object-[center_30%] transition-transform duration-700"
/>
        <div className="absolute inset-0 bg-gradient-to-t from-[#1C1915] via-[#1C1915]/20 to-transparent" />
        <div className="relative max-w-7xl mx-auto px-6 lg:px-10 w-full">
          <p className="text-[#1C1915]  text-xs tracking-widest uppercase mb-6">Makeup Artist · Glasgow, Scotland</p>
          <h1 className="font-display text-5xl md:text-7xl lg:text-8xl font-medium text-[#FAF8F4] leading-none mb-8 max-w-3xl">
          Where beauty 
            
            <em>meets confidence,</em>
          </h1>
          <div className="flex flex-col sm:flex-row gap-4">
            <button
              onClick={() => go('portfolio')}
              className="px-8 py-3.5 bg-[#FAF8F4] text-[#1C1915] text-sm font-medium tracking-wide hover:bg-[#C8956C] hover:text-[#FAF8F4] transition-colors"
              style={{ borderRadius: 'var(--radius)' }}
            >
              View the Work
            </button>
            <a
              href={INSTAGRAM_DM}
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-3.5 border border-[#FAF8F4]/40 text-[#FAF8F4] text-sm font-medium tracking-wide hover:border-[#C8956C] hover:text-[#C8956C] transition-colors text-center"
              style={{ borderRadius: 'var(--radius)' }}
            >
              Book via Instagram
            </a>
          </div>
        </div>
      </section>

      {/* Intro statement */}
   
<section className="py-20 md:py-28 bg-[#FAF8F4]">
  <div className="max-w-7xl mx-auto px-6 lg:px-10">
    <div className="grid md:grid-cols-2 gap-12 lg:gap-16 items-center">

      {/* Text Content */}
      <div className="py-6">
        <p className="text-[#8C5E3A] text-xs tracking-widest uppercase mb-6">
          Amina Beauty Glam
        </p>

        <h2 className="font-display text-4xl md:text-5xl font-medium text-[#1C1915] leading-tight mb-8">
          Professional makeup artistry, brought to life.
        </h2>

        <p className="text-[#4A4540] leading-relaxed mb-8">
          Based in Glasgow, Scotland. Specialising in Soft Glam,
          Full Glam, Bridal, Birthday, Photoshoot makeup and Lash
          transformations. In-call and outcall services available —
          your look, your way.
        </p>

        <button
          onClick={() => go('about')}
          className="text-sm font-medium text-[#1C1915] border-b border-[#1C1915] pb-0.5 hover:text-[#8C5E3A] hover:border-[#8C5E3A] transition-colors"
        >
          About Amina Beauty Glam →
        </button>
      </div>

      {/* Image Container */}
      <div className="w-full aspect-[4/5] overflow-hidden bg-[#E6E0D6] rounded-sm">
        <img
          src="./ceo.jpeg"
          alt="Statement glam makeup look"
          className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
        />
      </div>

    </div>
  </div>
</section>

      {/* Services preview */}
    
<section className="py-20 md:py-28 bg-[#F3EFE8]">
  <div className="max-w-7xl mx-auto px-6 lg:px-10">

    {/* Section Heading */}
    <div className="flex items-end justify-between mb-14">
      <div>
        <p className="text-[#8C5E3A] text-xs tracking-widest uppercase mb-3">
          What We Offer
        </p>

        <h2 className="font-display text-4xl md:text-5xl font-medium text-[#1C1915]">
          Our Services
        </h2>

        <p className="text-[#7A726A] text-sm mt-4 max-w-lg leading-relaxed">
          From everyday glam to special occasions, beauty training
          and self-care, discover the service that's right for you.
        </p>
      </div>

      <button
        onClick={() => go('services')}
        className="hidden md:block text-sm font-medium text-[#4A4540] border-b border-[#4A4540] pb-0.5 hover:text-[#8C5E3A] hover:border-[#8C5E3A] transition-colors"
      >
        All services →
      </button>
    </div>

    {/* Service Categories */}
    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-12">

      {[
        {
          title: 'Makeup Artistry',
          desc: 'Soft glam, full glam, birthday glam and prom or graduation looks.',
          img: './hybridlashset.jpeg',
          alt: 'Professional makeup artistry',
        },
        {
          title: 'Bridal Beauty',
          desc: 'Bridal packages for civil and church weddings, engagements, bridal showers and bridesmaids.',
          img: './makeupa.jpeg',
          alt: 'Elegant bridal wedding styling',
        },
        {
          title: 'Home Service',
          desc: 'Enjoy your beauty appointment at home in Glasgow, surrounding areas or beyond.',
          img: 'https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?w=600&h=750&fit=crop&auto=format',
          alt: 'Beauty products and makeup tools',
        },
        // {
        //   title: 'Photography',
        //   desc: 'Phone photography sessions to capture your look, with pricing per outfit.',
        //   img: 'https://images.unsplash.com/photo-1516035069371-29a1b244cc32?w=600&h=750&fit=crop&auto=format',
        //   alt: 'Photography camera ready for a session',
        // },
        {
          title: 'Makeup Training',
          desc: 'Beginner, upgrade, private and self-makeup classes tailored to your learning goals.',
          img: './makeupd.png',
          alt: 'Makeup and beauty learning',
        },
        {
          title: 'Lashes & Brows',
          desc: 'Classic, hybrid, volume and cluster lashes, plus ombré and combination brows.',
          img: './clasiclashset.jpeg',
          alt: 'Eye makeup and beauty close-up',
        },
         {
      title: 'Hair Braiding & Plaiting',
      desc: 'Beautiful hair plaiting and braiding styles for women and men.',
      img: './smallgodessboho.jpeg',
      alt: 'Hair braiding and plaiting',
    }, 
      ].map((service) => (
        <button
          key={service.title}
          onClick={() => go('services')}
          className="group text-left w-full"
        >
          {/* Image */}
          <div className="aspect-[4/5] overflow-hidden bg-[#D8D0C4] mb-5">
            <img
              src={service.img}
              alt={service.alt}
              loading="lazy"
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
            />
          </div>

          {/* Category Details */}
          <div className="flex items-center justify-between gap-3 mb-2">
            <h3 className="font-display text-xl font-medium text-[#1C1915] group-hover:text-[#8C5E3A] transition-colors">
              {service.title}
            </h3>

            <span className="text-[#8C5E3A] text-lg transition-transform duration-300 group-hover:translate-x-1">
              →
            </span>
          </div>

          <p className="text-sm text-[#7A726A] leading-relaxed">
            {service.desc}
          </p>
        </button>
      ))}

    </div>

    {/* Mobile All Services Link */}
    <div className="mt-10 md:hidden">
      <button
        onClick={() => go('services')}
        className="text-sm font-medium text-[#4A4540] border-b border-[#4A4540] pb-0.5 hover:text-[#8C5E3A] transition-colors"
      >
        Explore all services →
      </button>
    </div>

  </div>
</section>

      {/* Portfolio teaser */}
        

<section className="py-20 md:py-28 bg-[#FAF8F4]">
  <div className="max-w-7xl mx-auto px-6 lg:px-10">

    {/* Portfolio Heading */}
    <div className="mb-12">
      <p className="text-[#8C5E3A] text-xs tracking-widest uppercase mb-3">
        A Collection of Beauty
      </p>

      <h1 className="font-display text-4xl md:text-5xl font-medium text-[#1C1915]">
        Our Portfolio
      </h1>

      <p className="text-[#7A726A] text-sm leading-relaxed mt-4 max-w-lg">
        Discover our signature glam, bridal beauty, lashes and
        hair artistry through our favourite looks and transformations.
      </p>
    </div>

    {/* Featured Video */}
    <div className="mb-16">
      <div className="flex items-center gap-3 mb-5">
        <span className="w-8 h-px bg-[#8C5E3A]" />
        <p className="text-xs tracking-widest uppercase text-[#8C5E3A]">
          Featured Work
        </p>
      </div>

      <div className="grid md:grid-cols-5 gap-6 md:gap-10 items-center">
        <div className="md:col-span-3 overflow-hidden bg-[#E6E0D6]">
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
          <p className="text-[#8C5E3A] text-xs tracking-widest uppercase mb-3">
            The Art of Glam
          </p>

          <h2 className="font-display text-3xl md:text-4xl font-medium text-[#1C1915] leading-tight">
            Beauty in Every Detail
          </h2>

          <p className="text-sm text-[#7A726A] leading-relaxed mt-5">
            A closer look at our artistry, attention to detail
            and the beauty behind every transformation.
          </p>

          <button
            onClick={() => go('services')}
            className="mt-7 text-sm font-medium text-[#4A4540] border-b border-[#4A4540] pb-1 hover:text-[#8C5E3A] hover:border-[#8C5E3A] transition-colors"
          >
            Explore Our Services →
          </button>
        </div>
      </div>
    </div>

    {/* Photo Gallery */}
    <div className="flex items-end justify-between mb-7">
      <div>
        <p className="text-[#8C5E3A] text-xs tracking-widest uppercase mb-3">
          The Gallery
        </p>
        <h2 className="font-display text-3xl md:text-4xl font-medium text-[#1C1915]">
          Our Favourite Looks
        </h2>
      </div>
    </div>

    <div className="grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-5">
      {[
        {
          src: '/hybridlashset.jpeg',
          alt: 'Hybrid lash transformation',
        },
        {
          src: '/makeupa.jpeg',
          alt: 'Bridal makeup look',
        },
        {
          src: '/clasiclashset.jpeg',
          alt: 'Classic lash beauty look',
        },
       
      
      ].map((item) => (
        <div
          key={item.src}
          className="aspect-[4/5] overflow-hidden bg-[#E6E0D6] group"
        >
          <img
            src={item.src}
            alt={item.alt}
            loading="lazy"
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
          />
        </div>
      ))}
    </div>

    {/* Closing Text */}
    <div className="mt-12 border-t border-[#E6E0D6] pt-7">
      <p className="text-sm text-[#7A726A] leading-relaxed max-w-lg">
        Every look tells a story. Explore our work and find
        inspiration for your next beauty appointment.
      </p>
    </div>

  </div>
</section>


      {/* CTA */}
     
<section className="py-24 md:py-32 bg-[#1C1915] text-center">
  <div className="max-w-2xl mx-auto px-6">
    <p className="text-[#C8956C] text-xs tracking-widest uppercase mb-6">
      Ready for Your Glam?
    </p>

    <h2 className="font-display text-4xl md:text-5xl font-medium text-[#FAF8F4] mb-8 leading-tight">
      Your next glam look starts here.
    </h2>

    <div className="flex flex-col sm:flex-row gap-4 justify-center">
      <a
        href={INSTAGRAM_DM}
        target="_blank"
        rel="noopener noreferrer"
        className="px-8 py-3.5 bg-[#FAF8F4] text-[#1C1915] text-sm font-medium tracking-wide hover:bg-[#C8956C] hover:text-[#FAF8F4] transition-colors text-center"
        style={{ borderRadius: 'var(--radius)' }}
      >
        Book via Instagram
      </a>

      <button
        onClick={() => go('contact')}
        className="px-8 py-3.5 border border-[#FAF8F4]/30 text-[#FAF8F4] text-sm font-medium tracking-wide hover:border-[#C8956C] hover:text-[#C8956C] transition-colors"
        style={{ borderRadius: 'var(--radius)' }}
      >
        Send an Enquiry
      </button>
    </div>
  </div>
</section>

<footer className="bg-[#14120F] border-t border-white/10 py-6">
  <div className="max-w-7xl mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-center sm:text-left">
    <p className="text-xs text-[#FAF8F4]/50">
      © {new Date().getFullYear()} Mainnasglam Beauty. All rights reserved.
    </p>

    <p className="text-xs text-[#FAF8F4]/50">
      Created by{' '}
      <a
        href="mailto:pearseboluwatife@gmail.com"
        className="text-[#C8956C] hover:text-[#FAF8F4] transition-colors"
      >
        Pearse One
      </a>
    </p>
  </div>
</footer>

    </main>
  )
}
