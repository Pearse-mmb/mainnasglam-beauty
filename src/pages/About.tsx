
type Page =
  | 'home'
  | 'about'
  | 'services'
  | 'portfolio'
  | 'contact'
  | 'booking'

interface AboutProps {
  onNavigate: (page: Page) => void
}

export default function About({ onNavigate }: AboutProps) {
  const go = (page: Page) => {
    onNavigate(page)
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <main className="pt-20">
      {/* Page Header */}
      <section className="py-16 md:py-24 bg-[#FAF8F4]">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <p className="text-[#8C5E3A] text-xs tracking-widest uppercase mb-4">
            About Mainnasglam_Beauty
          </p>

          <h1 className="font-display text-5xl md:text-6xl lg:text-7xl font-medium text-[#1C1915] leading-none">
            Beauty meets
            <br />
            <em>confidence.</em>
          </h1>
        </div>
      </section>

      {/* Main About Section */}
      <section className="pb-20 md:pb-28 bg-[#FAF8F4]">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="grid md:grid-cols-2 gap-16 items-start">
            {/* Image */}
            <div className="aspect-[4/5] overflow-hidden bg-[#E6E0D6] md:sticky md:top-28">
              <img
                src="/landingpica.png"
                alt="Mainnasglam Beauty — beauty, elegance and self-care"
                className="w-full h-full object-cover"
              />
            </div>

            {/* About Copy */}
            <div className="space-y-10">
              <div>
                <p className="text-[#8C5E3A] text-xs tracking-widest uppercase mb-4">
                  Meet Fatima
                </p>

                <h2 className="font-display text-3xl md:text-4xl font-medium text-[#1C1915] mb-6 leading-snug">
                  Your beauty, your confidence.
                  <br />
                  <em>Your moment to glow.</em>
                </h2>

                <p className="text-[#4A4540] leading-relaxed mb-5">
                  Welcome to Mainnasglam_Beauty, where beauty meets
                  confidence. I'm Fatima, a home-based beauty service
                  provider passionate about helping you look good, feel
                  amazing, and embrace your natural beauty.
                </p>

                <p className="text-[#4A4540] leading-relaxed mb-5">
                  I believe everyone deserves to feel confident and
                  effortlessly glamorous. That's why I focus on
                  personalised treatments, expert care, and attention
                  to every detail, creating a beauty experience tailored
                  to your individual needs.
                </p>

                <p className="text-[#4A4540] leading-relaxed">
                  Whether you're getting ready for a special occasion
                  or simply taking time out for some well-deserved
                  pampering, my goal is to help you feel refreshed,
                  beautiful, and confident every time you choose
                  Mainnasglam_Beauty.
                </p>
              </div>

              {/* Business Details */}
              <div className="border-t border-[#D8D0C4] pt-10 grid grid-cols-2 gap-8">
                {[
                  {
                    label: 'Founder',
                    value: 'Fatima',
                  },
                  {
                    label: 'Business Type',
                    value: 'Home-based Beauty Services',
                  },
                  {
                    label: 'Our Focus',
                    value: 'Beauty · Elegance · Self-care',
                  },
                  {
                    label: 'Appointments',
                    value: 'Get in touch to enquire',
                  },
                ].map(({ label, value }) => (
                  <div key={label}>
                    <p className="text-[#9A928A] text-xs tracking-widest uppercase mb-1">
                      {label}
                    </p>
                    <p className="text-[#1C1915] text-sm font-medium">
                      {value}
                    </p>
                  </div>
                ))}
              </div>

              {/* Action Buttons */}
              <div className="flex flex-wrap gap-4">
                <button
                  onClick={() => go('contact')}
                  className="px-7 py-3 bg-[#1C1915] text-[#FAF8F4] text-sm font-medium hover:bg-[#8C5E3A] transition-colors"
                  style={{ borderRadius: 'var(--radius)' }}
                >
                  Book an Appointment
                </button>

                <button
                  onClick={() => go('services')}
                  className="px-7 py-3 border border-[#1C1915] text-[#1C1915] text-sm font-medium hover:border-[#8C5E3A] hover:text-[#8C5E3A] transition-colors"
                  style={{ borderRadius: 'var(--radius)' }}
                >
                  Explore Our Services
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Beauty Philosophy */}
      <section className="py-20 md:py-28 bg-[#1C1915]">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="max-w-3xl mb-14">
            <p className="text-[#C49A75] text-xs tracking-widest uppercase mb-4">
              The Mainnasglam Experience
            </p>

            <h2 className="font-display text-4xl md:text-5xl font-medium text-[#FAF8F4] leading-tight">
              More than beauty.
              <br />
              <em>A feeling of confidence.</em>
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-10">
            {[
              {
                num: '01',
                title: 'Personalised Care',
                desc: 'Every client is unique. We focus on your individual preferences and needs to create a beauty experience that feels personal to you.',
              },
              {
                num: '02',
                title: 'Beauty & Elegance',
                desc: 'Our goal is to enhance your natural beauty and help you feel glamorous, confident, and ready for every special moment.',
              },
              {
                num: '03',
                title: 'Self-care Matters',
                desc: 'You deserve time to yourself. Enjoy a beauty experience centred on care, relaxation, and leaving you feeling refreshed.',
              },
            ].map(({ num, title, desc }) => (
              <div
                key={num}
                className="border-t border-[#3A3530] pt-8"
              >
                <p className="text-[#C49A75] text-xs font-medium tracking-widest mb-4">
                  {num}
                </p>

                <h3 className="font-display text-2xl font-medium text-[#FAF8F4] mb-4">
                  {title}
                </h3>

                <p className="text-[#B8AFA5] text-sm leading-relaxed">
                  {desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Social Links */}
      <section className="py-16 bg-[#F3EFE8]">
        <div className="max-w-7xl mx-auto px-6 lg:px-10 flex flex-col md:flex-row items-center justify-between gap-8">
          <div>
            <p className="text-[#8C5E3A] text-xs tracking-widest uppercase mb-3">
              Stay Connected
            </p>

            <p className="font-display text-2xl md:text-3xl font-medium text-[#1C1915]">
              Your next glow-up starts here.
            </p>
          </div>

          <div className="flex gap-6">
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm font-medium text-[#1C1915] border-b border-[#1C1915] pb-0.5 hover:text-[#8C5E3A] hover:border-[#8C5E3A] transition-colors"
            >
              Instagram →
            </a>

            <a
              href="https://tiktok.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm font-medium text-[#1C1915] border-b border-[#1C1915] pb-0.5 hover:text-[#8C5E3A] hover:border-[#8C5E3A] transition-colors"
            >
              TikTok →
            </a>
          </div>
        </div>
      </section>
    </main>
  )
}