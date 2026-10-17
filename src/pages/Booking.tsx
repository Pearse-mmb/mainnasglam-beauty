import { useState } from 'react'

type Page = 'home' | 'about' | 'services' | 'portfolio' |  'contact' | 'booking'

interface BookingProps {
  onNavigate: (page: Page) => void
}

const sessionTypes = [
  { id: 'portrait-individual', label: 'Individual Portrait', cat: 'Portraits' },
  { id: 'portrait-couple', label: 'Couple Portrait', cat: 'Portraits' },
  { id: 'portrait-family', label: 'Family Sitting', cat: 'Portraits' },
  { id: 'brand', label: 'Brand & Editorial', cat: 'Brand' },
  { id: 'product', label: 'Product Photography', cat: 'Brand' },
  { id: 'event', label: 'Event Coverage', cat: 'Events' },
  { id: 'commission', label: 'Creative Commission', cat: 'Commission' },
]

const locations = ['Glasgow City Centre', 'Outdoor Location — Glasgow', 'Home or Venue', 'Studio (TBC)', 'To be Discussed']

export default function Booking({ onNavigate }: BookingProps) {
  const [step, setStep] = useState<1 | 2 | 3>(1)
  const [form, setForm] = useState({
    sessionType: '',
    location: '',
    preferredDate: '',
    alternateDate: '',
    name: '',
    email: '',
    phone: '',
    notes: '',
  })
  const [submitted, setSubmitted] = useState(false)

  const go = (page: Page) => {
    onNavigate(page)
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitted(true)
  }

  const inputClass = 'w-full px-0 py-3 bg-transparent border-0 border-b border-[#D8D0C4] text-[#1C1915] text-sm placeholder-[#AEA8A0] focus:border-[#8C5E3A] outline-none'

  return (
    <main className="pt-20">
      {/* Header */}
      <section className="py-16 md:py-24 bg-[#FAF8F4]">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <p className="text-[#8C5E3A] text-xs tracking-widest uppercase mb-4">Book a Session</p>
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-8">
            <h1 className="font-display text-5xl md:text-6xl lg:text-7xl font-medium text-[#1C1915] leading-none">
              Booking.
            </h1>
            <p className="max-w-sm text-[#4A4540] leading-relaxed">
              Complete the form below to request a session. I'll follow up personally to confirm availability and details.
            </p>
          </div>
        </div>
      </section>

      {/* Process steps */}
      <section className="py-12 bg-[#F3EFE8] border-y border-[#D8D0C4]">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="grid grid-cols-3 md:grid-cols-4 gap-6">
            {[
              { num: '01', label: 'Submit request' },
              { num: '02', label: 'Confirmation within 2–3 days' },
              { num: '03', label: 'Deposit & final details' },
              { num: '04', label: 'Session day' },
            ].map(({ num, label }) => (
              <div key={num} className="text-center">
                <p className="text-[#8C5E3A] text-xs font-medium tracking-widest mb-2">{num}</p>
                <p className="text-[#4A4540] text-xs leading-snug">{label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Booking form */}
      <section className="py-16 md:py-24 pb-28 bg-[#FAF8F4]">
        <div className="max-w-3xl mx-auto px-6 lg:px-10">
          {submitted ? (
            <div className="text-center py-20">
              <div className="w-16 h-16 rounded-full bg-[#F3EFE8] flex items-center justify-center mx-auto mb-8">
                <svg className="w-7 h-7 text-[#8C5E3A]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <h2 className="font-display text-3xl md:text-4xl font-medium text-[#1C1915] mb-4">Booking request received.</h2>
              <p className="text-[#7A726A] leading-relaxed max-w-sm mx-auto mb-10">
                Thank you for submitting your request. I'll review the details and get back to you within 2–3 working days to confirm availability.
              </p>
              <button
                onClick={() => go('home')}
                className="px-7 py-3 bg-[#1C1915] text-[#FAF8F4] text-sm font-medium hover:bg-[#8C5E3A]"
                style={{ borderRadius: 'var(--radius)' }}
              >
                Return Home
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-12">
              {/* Step indicator */}
              <div className="flex items-center gap-3">
                {([1, 2, 3] as const).map((s) => (
                  <div key={s} className="flex items-center gap-3">
                    <button
                      type="button"
                      onClick={() => s < step && setStep(s)}
                      className={`w-8 h-8 rounded-full text-xs font-medium flex items-center justify-center transition-colors ${
                        step === s
                          ? 'bg-[#1C1915] text-[#FAF8F4]'
                          : step > s
                          ? 'bg-[#8C5E3A] text-[#FAF8F4] cursor-pointer'
                          : 'bg-[#E6E0D6] text-[#9A928A]'
                      }`}
                    >
                      {step > s ? '✓' : s}
                    </button>
                    <span className="text-xs text-[#7A726A]">
                      {s === 1 ? 'Session type' : s === 2 ? 'Date & location' : 'Your details'}
                    </span>
                    {s < 3 && <span className="text-[#D8D0C4] mx-2">—</span>}
                  </div>
                ))}
              </div>

              {/* Step 1: Session Type */}
              {step === 1 && (
                <div>
                  <h2 className="font-display text-2xl font-medium text-[#1C1915] mb-8">
                    What kind of session are you interested in?
                  </h2>
                  <div className="grid sm:grid-cols-2 gap-3">
                    {sessionTypes.map((type) => (
                      <button
                        type="button"
                        key={type.id}
                        onClick={() => setForm({ ...form, sessionType: type.id })}
                        className={`text-left px-5 py-4 border transition-colors ${
                          form.sessionType === type.id
                            ? 'border-[#1C1915] bg-[#F3EFE8]'
                            : 'border-[#D8D0C4] hover:border-[#8C5E3A]'
                        }`}
                        style={{ borderRadius: 'var(--radius)' }}
                      >
                        <p className="text-[#8C5E3A] text-xs tracking-widest uppercase mb-1">{type.cat}</p>
                        <p className="text-[#1C1915] text-sm font-medium">{type.label}</p>
                      </button>
                    ))}
                  </div>
                  <div className="mt-10">
                    <button
                      type="button"
                      disabled={!form.sessionType}
                      onClick={() => setStep(2)}
                      className={`px-8 py-3.5 text-sm font-medium tracking-wide transition-colors ${
                        form.sessionType
                          ? 'bg-[#1C1915] text-[#FAF8F4] hover:bg-[#8C5E3A]'
                          : 'bg-[#E6E0D6] text-[#9A928A] cursor-not-allowed'
                      }`}
                      style={{ borderRadius: 'var(--radius)' }}
                    >
                      Continue →
                    </button>
                  </div>
                </div>
              )}

              {/* Step 2: Date & Location */}
              {step === 2 && (
                <div>
                  <h2 className="font-display text-2xl font-medium text-[#1C1915] mb-8">
                    When and where?
                  </h2>
                  <div className="space-y-8">
                    <div>
                      <label className="text-[#9A928A] text-xs tracking-widest uppercase block mb-1">
                        Preferred Date
                      </label>
                      <input
                        type="date"
                        value={form.preferredDate}
                        onChange={(e) => setForm({ ...form, preferredDate: e.target.value })}
                        className={inputClass}
                        required
                      />
                    </div>
                    <div>
                      <label className="text-[#9A928A] text-xs tracking-widest uppercase block mb-1">
                        Alternate Date (optional)
                      </label>
                      <input
                        type="date"
                        value={form.alternateDate}
                        onChange={(e) => setForm({ ...form, alternateDate: e.target.value })}
                        className={inputClass}
                      />
                    </div>
                    <div>
                      <label className="text-[#9A928A] text-xs tracking-widest uppercase block mb-3">
                        Preferred Location
                      </label>
                      <div className="flex flex-col gap-2">
                        {locations.map((loc) => (
                          <button
                            type="button"
                            key={loc}
                            onClick={() => setForm({ ...form, location: loc })}
                            className={`text-left px-4 py-3 border text-sm transition-colors ${
                              form.location === loc
                                ? 'border-[#1C1915] bg-[#F3EFE8] text-[#1C1915]'
                                : 'border-[#D8D0C4] text-[#4A4540] hover:border-[#8C5E3A]'
                            }`}
                            style={{ borderRadius: 'var(--radius)' }}
                          >
                            {loc}
                          </button>
                        ))}
                      </div>
                    </div>
                  </div>
                  <div className="flex gap-4 mt-10">
                    <button
                      type="button"
                      onClick={() => setStep(1)}
                      className="px-6 py-3 border border-[#D8D0C4] text-[#4A4540] text-sm font-medium hover:border-[#8C5E3A] hover:text-[#8C5E3A]"
                      style={{ borderRadius: 'var(--radius)' }}
                    >
                      ← Back
                    </button>
                    <button
                      type="button"
                      disabled={!form.preferredDate || !form.location}
                      onClick={() => setStep(3)}
                      className={`px-8 py-3 text-sm font-medium tracking-wide transition-colors ${
                        form.preferredDate && form.location
                          ? 'bg-[#1C1915] text-[#FAF8F4] hover:bg-[#8C5E3A]'
                          : 'bg-[#E6E0D6] text-[#9A928A] cursor-not-allowed'
                      }`}
                      style={{ borderRadius: 'var(--radius)' }}
                    >
                      Continue →
                    </button>
                  </div>
                </div>
              )}

              {/* Step 3: Personal details */}
              {step === 3 && (
                <div>
                  <h2 className="font-display text-2xl font-medium text-[#1C1915] mb-8">
                    Your details.
                  </h2>
                  <div className="space-y-8">
                    <div className="grid sm:grid-cols-2 gap-6">
                      <div>
                        <label className="text-[#9A928A] text-xs tracking-widest uppercase block mb-1">Full Name</label>
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
                      <label className="text-[#9A928A] text-xs tracking-widest uppercase block mb-1">Phone (optional)</label>
                      <input
                        type="tel"
                        placeholder="+44 7XXX XXXXXX"
                        value={form.phone}
                        onChange={(e) => setForm({ ...form, phone: e.target.value })}
                        className={inputClass}
                      />
                    </div>
                    <div>
                      <label className="text-[#9A928A] text-xs tracking-widest uppercase block mb-1">Additional Notes</label>
                      <textarea
                        rows={4}
                        placeholder="Anything else you'd like me to know about the session…"
                        value={form.notes}
                        onChange={(e) => setForm({ ...form, notes: e.target.value })}
                        className={`${inputClass} resize-none`}
                      />
                    </div>
                  </div>
                  <div className="flex gap-4 mt-10">
                    <button
                      type="button"
                      onClick={() => setStep(2)}
                      className="px-6 py-3 border border-[#D8D0C4] text-[#4A4540] text-sm font-medium hover:border-[#8C5E3A] hover:text-[#8C5E3A]"
                      style={{ borderRadius: 'var(--radius)' }}
                    >
                      ← Back
                    </button>
                    <button
                      type="submit"
                      className="px-8 py-3 bg-[#1C1915] text-[#FAF8F4] text-sm font-medium hover:bg-[#8C5E3A]"
                      style={{ borderRadius: 'var(--radius)' }}
                    >
                      Submit Booking Request
                    </button>
                  </div>
                </div>
              )}
            </form>
          )}
        </div>
      </section>
    </main>
  )
}
