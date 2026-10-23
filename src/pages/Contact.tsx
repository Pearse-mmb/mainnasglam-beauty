import { useState } from 'react'

type Page = 'home' | 'about' | 'services' | 'portfolio' |   'contact' | 'booking'

interface ContactProps {
  onNavigate: (page: Page) => void
}

const InstagramIcon = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
    <circle cx="12" cy="12" r="4"/>
    <circle cx="17.5" cy="6.5" r="0.5" fill="currentColor" stroke="none"/>
  </svg>
)

const TikTokIcon = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
    <path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-2.88 2.5 2.89 2.89 0 01-2.89-2.89 2.89 2.89 0 012.89-2.89c.28 0 .54.04.79.1V9.01a6.32 6.32 0 00-.79-.05 6.34 6.34 0 00-6.34 6.34 6.34 6.34 0 006.34 6.34 6.34 6.34 0 006.33-6.34V8.98a8.2 8.2 0 004.82 1.55V7.1a4.85 4.85 0 01-1.05-.41z"/>
  </svg>
)

export default function Contact({ onNavigate }: ContactProps) {
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' })
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    setTimeout(() => {
      setLoading(false)
      setSubmitted(true)
    }, 1200)
  }

  const go = (page: Page) => {
    onNavigate(page)
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const inputClass = 'w-full px-0 py-3 bg-transparent border-0 border-b border-[#D8D0C4] text-[#1C1915] text-sm placeholder-[#AEA8A0] focus:border-[#8C5E3A] outline-none'

  return (
    <main className="pt-20">
      {/* Header */}
      <section className="py-16 md:py-24 bg-[#FAF8F4]">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <p className="text-[#8C5E3A] text-xs tracking-widest uppercase mb-4">Contact</p>
          <h1 className="font-display text-5xl md:text-6xl lg:text-7xl font-medium text-[#1C1915] leading-none">
            Get in touch.
          </h1>
        </div>
      </section>

      {/* Main content */}
      <section className="pb-24 bg-[#FAF8F4]">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="grid md:grid-cols-2 gap-16 lg:gap-28">
            {/* Info */}
            <div>
              <p className="text-[#4A4540] leading-relaxed mb-12 max-w-sm">
                For enquiries about sessions, commissions, the shop, or anything else — fill in the form or reach out on social. All messages receive a personal response.
              </p>

              <div className="space-y-10">
                <div>
                  <p className="text-[#9A928A] text-xs tracking-widest uppercase mb-3">Location</p>
                  <p className="text-[#1C1915] font-medium">Glasgow, Scotland</p>
                  <p className="text-[#7A726A] text-sm mt-1">Available for travel across Scotland and beyond</p>
                </div>

                <div>
                  <p className="text-[#9A928A] text-xs tracking-widest uppercase mb-4">Follow</p>
                  <div className="flex flex-col gap-4">
                    <a
                      href="https://www.instagram.com/mainnasglam_beauty/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-3 text-[#1C1915] hover:text-[#8C5E3A] group"
                    >
                      <span className="text-[#7A726A] group-hover:text-[#8C5E3A]"><InstagramIcon /></span>
                      <div>
                        <p className="text-sm font-medium">Instagram</p>
                        <p className="text-xs text-[#7A726A]">@studio</p>
                      </div>
                    </a>
                    <a
                  href="https://www.tiktok.com/@mainnasglam_beauty"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-3 text-[#1C1915] hover:text-[#8C5E3A] group"
                    >
                      <span className="text-[#7A726A] group-hover:text-[#8C5E3A]"><TikTokIcon /></span>
                      <div>
                        <p className="text-sm font-medium">TikTok</p>
                        <p className="text-xs text-[#7A726A]">@studio</p>
                      </div>
                    </a>
                  </div>
                </div>

                <div>
                  <p className="text-[#9A928A] text-xs tracking-widest uppercase mb-3">Response Time</p>
                  <p className="text-[#7A726A] text-sm leading-relaxed">
                    All enquiries receive a personal reply within 2–3 working days.
                  </p>
                </div>

                <div className="pt-4">
                  <button
                    onClick={() => go('booking')}
                    className="flex items-center gap-2 text-sm font-medium text-[#1C1915] border-b border-[#1C1915] pb-0.5 hover:text-[#8C5E3A] hover:border-[#8C5E3A]"
                  >
                    Want to book a session? Use the booking form →
                  </button>
                </div>
              </div>
            </div>

            {/* Form */}
            <div>
              {submitted ? (
                <div className="py-16 text-center">
                  <div className="w-12 h-12 rounded-full bg-[#F3EFE8] flex items-center justify-center mx-auto mb-6">
                    <svg className="w-5 h-5 text-[#8C5E3A]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <h3 className="font-display text-2xl font-medium text-[#1C1915] mb-4">Message received.</h3>
                  <p className="text-[#7A726A] text-sm leading-relaxed max-w-xs mx-auto">
                    Thank you for getting in touch. I'll reply personally within 2–3 working days.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-8">
                  <div className="grid sm:grid-cols-2 gap-6">
                    <div>
                      <label className="text-[#9A928A] text-xs tracking-widest uppercase block mb-1">Name</label>
                      <input
                        type="text"
                        required
                        placeholder="Your name"
                        value={form.name}
                        onChange={(e) => setForm({ ...form, name: e.target.value })}
                        className={inputClass}
                      />
                    </div>
                    <div>
                      <label className="text-[#9A928A] text-xs tracking-widest uppercase block mb-1">Email</label>
                      <input
                        type="email"
                        required
                        placeholder="your@email.com"
                        value={form.email}
                        onChange={(e) => setForm({ ...form, email: e.target.value })}
                        className={inputClass}
                      />
                    </div>
                  </div>

                  <div>
                    <label className="text-[#9A928A] text-xs tracking-widest uppercase block mb-1">Subject</label>
                    <select
                      value={form.subject}
                      onChange={(e) => setForm({ ...form, subject: e.target.value })}
                      className={`${inputClass} cursor-pointer`}
                      required
                    >
                      <option value="" disabled>Select a subject</option>
                      <option>Portrait Session Enquiry</option>
                      <option>Brand & Editorial Enquiry</option>
                      <option>Event Photography Enquiry</option>
                      <option>Creative Commission</option>
                      <option>Shop / Prints Enquiry</option>
                      <option>General Enquiry</option>
                    </select>
                  </div>

                  <div>
                    <label className="text-[#9A928A] text-xs tracking-widest uppercase block mb-1">Message</label>
                    <textarea
                      required
                      rows={6}
                      placeholder="Tell me about your project or question…"
                      value={form.message}
                      onChange={(e) => setForm({ ...form, message: e.target.value })}
                      className={`${inputClass} resize-none`}
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={loading}
                    className={`w-full py-4 text-sm font-medium tracking-wide transition-colors ${
                      loading
                        ? 'bg-[#D8D0C4] text-[#7A726A] cursor-not-allowed'
                        : 'bg-[#1C1915] text-[#FAF8F4] hover:bg-[#8C5E3A]'
                    }`}
                    style={{ borderRadius: 'var(--radius)' }}
                  >
                    {loading ? 'Sending…' : 'Send Message'}
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
