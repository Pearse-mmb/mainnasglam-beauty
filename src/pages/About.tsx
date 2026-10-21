
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

  const terms = [
    {
      title: 'Deposits',
      content: [
        'A 50% non-refundable deposit is required to secure your booking. This will be deducted from the total price, and the balance will be paid in cash or by transfer on the day of your appointment.',
      ],
    },
    {
      title: 'All Appointments',
      content: [
        'Kindly avoid booking other commitments close to your appointment time, as services may take longer in certain circumstances.',
        'No plus-ones are allowed, except for a client under 10 who must attend with their parent or carer.',
        'All braiding extensions are included in the cost (standard length: waist length). Curly/customised extensions cost £20, blow-drying costs £10, and curled ends cost £15. If you wish to bring your own extensions, they must be pre-stretched and dropped off at my address at least 24 hours before your appointment for preparation.',
        'For microblading and lash extensions, please do not book if you are pregnant, breastfeeding, taking blood thinners, have a history of severe keloids, uncontrolled diabetes, severe allergic reactions, significant immune problems, or bleeding/clotting problems. Please also avoid booking if you have recently had Botox around the brows. The client also lists naturally well-defined brows as a reason not to book for microblading.',
      ],
    },
    {
      title: 'Cancellation & Rescheduling',
      content: [
        'Cancelling an appointment means forfeiting your 50% deposit.',
        'You may reschedule once, provided you give at least 48 hours’ notice before your appointment day.',
      ],
    },
    {
      title: 'Lateness',
      content: [
        'Please ensure you arrive on time. A 10-minute grace period is allowed.',
        '11–20 minutes late: £15 fee.',
        '21–30 minutes late: £30 fee.',
        'More than 30 minutes late: your appointment will automatically be cancelled, and you will lose your deposit with no option to reschedule. You can make a fresh booking by paying a new deposit.',
      ],
    },
    {
      title: 'Hair Requirements',
      content: [
        'Before your appointment, please ensure your hair is freshly washed, properly detangled, blow-dried, and 100% free of oils and products.',
        'Your hair must be at least 4 inches long. If it is shorter than 4 inches, your appointment will be cancelled, so kindly confirm your hair length before booking.',
      ],
    },
    {
      title: 'Face Requirements',
      content: [
        'Before your microblading, lash, or makeup appointment, please ensure your face is freshly washed and free of makeup and face lotion.',
      ],
    },
    {
      title: 'Social Media',
      content: [
        'I take photos and videos of my work on clients for promotional purposes, including posting on my social media pages. If you do not wish to be featured, kindly inform me.',
        'Please don’t forget to tag or mention us.',
      ],
    },
  ]

  return (
    <main className="pt-20">
      {/* Page Header */}
      <section className="py-16 md:py-24 bg-[#FAF8F4]">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <p className="text-[#8C5E3A] text-xs tracking-widest uppercase mb-4">
            About Mainnasglam Beauty
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
            {/* Existing Image */}
            <div className="aspect-[4/5] overflow-hidden bg-[#E6E0D6] md:sticky md:top-28">
              <img
                src="/landingpica.png"
                alt="Mainnasglam Beauty — beauty, elegance and self-care"
                className="w-full h-full object-cover"
              />
            </div>

            {/* Updated About Copy */}
            <div className="space-y-8">
              <div>
                <p className="text-[#8C5E3A] text-xs tracking-widest uppercase mb-4">
                  Meet Fatima
                </p>

                <h2 className="font-display text-3xl md:text-4xl font-medium text-[#1C1915] mb-6 leading-snug">
                  Hey Queens and Kings,
                  <br />
                  <em>it’s lovely to have you here.</em>
                </h2>

                <div className="space-y-5 text-[#4A4540] leading-relaxed">
                  <p>
                    I’m Fatima, a home-based beauty service provider in
                    Glasgow. Our services include Makeup, Microblading,
                    Lash Extensions and Braids.
                  </p>

                  <p>
                    I aim to slay you to perfection. You can be assured
                    of a personalised, well-pampered and comfortable
                    session with me, and I just can’t wait to have you.
                  </p>

                  <p>
                    Kindly read the terms and conditions below before
                    booking.
                  </p>
                </div>
              </div>

              {/* Existing Business Details */}
              <div className="border-t border-[#D8D0C4] pt-8 grid grid-cols-2 gap-8">
                {[
                  { label: 'Founder', value: 'Fatima' },
                  {
                    label: 'Location',
                    value: 'Glasgow, Scotland',
                  },
                  {
                    label: 'Services',
                    value: 'Makeup · Microblading · Lashes · Braids',
                  },
                  {
                    label: 'Appointments',
                    value: 'Booking required',
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

              <button
                onClick={() => go('booking')}
                className="px-7 py-3 bg-[#1C1915] text-[#FAF8F4] text-sm font-medium hover:bg-[#8C5E3A] transition-colors"
                style={{ borderRadius: 'var(--radius)' }}
              >
                Choose Your Service
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Terms & Conditions */}
      <section className="py-20 md:py-28 bg-[#F3EFE8]">
        <div className="max-w-5xl mx-auto px-6 lg:px-10">
          <div className="max-w-3xl mb-12">
            <p className="text-[#8C5E3A] text-xs tracking-widest uppercase mb-4">
              Before You Book
            </p>

            <h2 className="font-display text-4xl md:text-5xl font-medium text-[#1C1915] leading-tight">
              Terms & Conditions
            </h2>

            <p className="text-[#4A4540] leading-relaxed mt-5">
              Please read each section carefully before choosing your
              service and any required add-ons.
            </p>
          </div>

          <div className="space-y-0">
            {terms.map((term, index) => (
              <article
                key={term.title}
                className="border-t border-[#D8D0C4] py-7 md:py-9"
              >
                <div className="grid md:grid-cols-[180px_1fr] gap-4 md:gap-10">
                  <div>
                    <p className="text-[#8C5E3A] text-xs tracking-widest mb-2">
                      {String(index + 1).padStart(2, '0')}
                    </p>

                    <h3 className="font-display text-xl md:text-2xl font-medium text-[#1C1915]">
                      {term.title}
                    </h3>
                  </div>

                  <div className="space-y-4">
                    {term.content.map((paragraph, paragraphIndex) => (
                      <p
                        key={paragraphIndex}
                        className="text-sm md:text-base text-[#4A4540] leading-7"
                      >
                        {paragraph}
                      </p>
                    ))}
                  </div>
                </div>
              </article>
            ))}
          </div>

          {/* Closing Note */}
          <div className="mt-8 bg-[#1C1915] p-7 md:p-10">
            <p className="text-[#C8956C] text-xs tracking-widest uppercase mb-4">
              Thank You
            </p>

            <h3 className="font-display text-2xl md:text-3xl text-[#FAF8F4] mb-4">
              Kindly note
            </h3>

            <p className="text-[#FAF8F4]/80 text-sm leading-7 mb-7">
              By booking, you agree to our terms and conditions. Now
              it’s time to choose your service and add-ons, if required.
            </p>

            <p className="font-display text-xl text-[#FAF8F4] mb-7">
              Thanks, and see you soon. x
            </p>

            <button
              onClick={() => go('booking')}
              className="px-7 py-3 bg-[#FAF8F4] text-[#1C1915] text-sm font-medium hover:bg-[#C8956C] transition-colors"
              style={{ borderRadius: 'var(--radius)' }}
            >
              Choose Your Service →
            </button>
          </div>
        </div>
      </section>

      {/* Beauty Philosophy */}
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
              <div key={num} className="border-t border-[#3A3530] pt-8">
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

      {/* Social Links — Existing Location and Design */}
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
