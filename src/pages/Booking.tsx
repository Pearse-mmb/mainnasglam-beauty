
import { useState, type FormEvent } from 'react'

type Page =
  | 'home'
  | 'about'
  | 'services'
  | 'portfolio'
  | 'contact'
  | 'booking'

interface BookingProps {
  onNavigate: (page: Page) => void
}

type BookingForm = {
  sessionType: string
  preferredDate: string
  alternateDate: string
  location: string
  locationDetails: string
  name: string
  email: string
  phone: string
  notes: string
}

const INSTAGRAM_URL =
  'https://www.instagram.com/mainnasglam_beauty/'

// Replace this with the business WhatsApp number before publishing.
// Use the international format without +, spaces, or dashes.
const WHATSAPP_NUMBER = '447XXXXXXXXX'

const sessionTypes = [
  { id: 'soft-glam', label: 'Soft Glam Makeup', category: 'Makeup', price: '£70' },
  { id: 'full-glam', label: 'Full Glam Makeup', category: 'Makeup', price: '£80' },
  { id: 'birthday-prom', label: 'Birthday & Prom Makeup', category: 'Makeup', price: '£80' },
  { id: 'bridal', label: 'Bridal Makeup', category: 'Makeup', price: 'Enquire' },
  { id: 'glasgow-home', label: 'Glasgow Home Service', category: 'Makeup', price: '£200' },
  { id: 'glasgow-environs', label: 'Glasgow Environs', category: 'Makeup', price: '£250' },
  { id: 'phone-photo', label: 'Phone Photoshoot Makeup', category: 'Makeup', price: '£60' },
  { id: 'classic-lashes', label: 'Classic Lashes', category: 'Lashes', price: '£50' },
  { id: 'hybrid-lashes', label: 'Hybrid Lashes', category: 'Lashes', price: '£50' },
  { id: 'volume-lashes', label: 'Volume Lashes', category: 'Lashes', price: '£80' },
  { id: 'cluster-lashes', label: 'Cluster Lashes', category: 'Lashes', price: '£40' },
  { id: 'ombre-brows', label: 'Ombré Brows', category: 'Brows', price: '£100' },
  { id: 'combination-brows', label: 'Combination Brows', category: 'Brows', price: '£150' },
  { id: 'braids', label: 'Braids & Cornrows', category: 'Hair', price: 'Enquire' },
  { id: 'waxing', label: 'Waxing', category: 'Self-Care', price: 'Enquire' },
  { id: 'training', label: 'Beauty Training', category: 'Training', price: 'Enquire' },
  { id: 'other', label: 'Other Beauty Enquiry', category: 'Other', price: 'Enquire' },
]

const locations = [
  'Glasgow',
  'Glasgow Environs',
  'Client Home or Venue',
  'Other Location',
  'To Be Discussed',
]

const inputClass =
  'w-full px-0 py-3 bg-transparent border-0 border-b border-[#D8D0C4] text-[#1C1915] text-sm placeholder-[#AEA8A0] focus:border-[#8C5E3A] outline-none'

function getLocalDate() {
  const date = new Date()
  const year = date.getFullYear()
  const month = String(date.getMonth() + 1).padStart(2, '0')
  const day = String(date.getDate()).padStart(2, '0')

  return `${year}-${month}-${day}`
}

export default function Booking({ onNavigate }: BookingProps) {
  const [step, setStep] = useState<1 | 2 | 3>(1)
  const [submitted, setSubmitted] = useState(false)
  const [form, setForm] = useState<BookingForm>({
    sessionType: '',
    preferredDate: '',
    alternateDate: '',
    location: '',
    locationDetails: '',
    name: '',
    email: '',
    phone: '',
    notes: '',
  })

  const [error, setError] = useState('')

  const selectedService = sessionTypes.find(
    (service) => service.id === form.sessionType,
  )

  const go = (page: Page) => {
    onNavigate(page)
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const updateForm = (field: keyof BookingForm, value: string) => {
    setForm((current) => ({ ...current, [field]: value }))
    setError('')
  }

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setError('')

    if (!selectedService) {
      setStep(1)
      setError('Please select a beauty service.')
      return
    }

    if (!form.preferredDate || form.preferredDate < getLocalDate()) {
      setStep(2)
      setError('Please choose a valid date today or in the future.')
      return
    }

    if (
      form.alternateDate &&
      form.alternateDate < getLocalDate()
    ) {
      setStep(2)
      setError('Your alternative date must be today or in the future.')
      return
    }

    if (!form.location) {
      setStep(2)
      setError('Please select your preferred location.')
      return
    }

    if (
      !WHATSAPP_NUMBER ||
      WHATSAPP_NUMBER.includes('X')
    ) {
      setError(
        'The business WhatsApp number has not been configured yet. Please use Instagram to enquire or contact the website administrator.',
      )
      return
    }

    const message = [
      'Hello Mainnasglam Beauty! I would like to request a booking.',
      '',
      'BOOKING DETAILS',
      `Service: ${selectedService.label}`,
      `Listed price: ${selectedService.price}`,
      `Preferred date: ${form.preferredDate}`,
      `Alternative date: ${form.alternateDate || 'Not provided'}`,
      `Preferred location: ${form.location}`,
      `Location details: ${form.locationDetails || 'Not provided'}`,
      '',
      'CUSTOMER DETAILS',
      `Name: ${form.name}`,
      `Email: ${form.email || 'Not provided'}`,
      `Phone: ${form.phone || 'Not provided'}`,
      `Additional notes: ${form.notes || 'None'}`,
      '',
      'Please confirm availability and any applicable booking requirements. Thank you!',
    ].join('\n')

    const whatsappUrl =
      `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`

    window.open(whatsappUrl, '_blank', 'noopener,noreferrer')
    setSubmitted(true)
  }

  return (
    <main className="pt-20 bg-[#FAF8F4]">
      {/* Header */}
      <section className="py-16 md:py-24 bg-[#FAF8F4]">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <p className="text-[#8C5E3A] text-xs tracking-widest uppercase mb-4">
            Your Beauty Appointment
          </p>

          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-8">
            <h1 className="font-display text-5xl md:text-6xl lg:text-7xl font-medium text-[#1C1915] leading-none">
              Book Your Glam.
            </h1>

            <p className="max-w-sm text-[#4A4540] leading-relaxed">
              From makeup and lashes to brows and braids, tell us what
              you have in mind. Send your booking request through
              WhatsApp and let us help you plan your appointment.
            </p>
          </div>
        </div>
      </section>

      {/* Booking process */}
      <section className="py-10 bg-[#F3EFE8] border-y border-[#D8D0C4]">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { num: '01', label: 'Choose your service' },
              { num: '02', label: 'Pick a date and location' },
              { num: '03', label: 'Share your details' },
              { num: '04', label: 'Confirm via WhatsApp' },
            ].map(({ num, label }) => (
              <div key={num} className="text-center">
                <p className="text-[#8C5E3A] text-xs font-medium tracking-widest mb-2">
                  {num}
                </p>
                <p className="text-[#4A4540] text-xs leading-snug">
                  {label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Booking form */}
      <section className="py-16 md:py-24 pb-28">
        <div className="max-w-3xl mx-auto px-6 lg:px-10">
          {submitted ? (
            <div className="text-center py-16">
              <div className="w-16 h-16 rounded-full bg-[#F3EFE8] flex items-center justify-center mx-auto mb-8">
                <svg
                  className="w-7 h-7 text-[#8C5E3A]"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={1.5}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M5 13l4 4L19 7"
                  />
                </svg>
              </div>

              <h2 className="font-display text-3xl md:text-4xl font-medium text-[#1C1915] mb-4">
                Your request is ready!
              </h2>

              <p className="text-[#7A726A] leading-relaxed max-w-md mx-auto mb-8">
                WhatsApp should have opened with your booking details.
                Please review the message and press Send to submit your
                request. Your appointment is not confirmed until
                Mainnasglam Beauty confirms availability.
              </p>

              <div className="flex flex-col sm:flex-row justify-center gap-3">
                <button
                  type="button"
                  onClick={() => {
                    setSubmitted(false)
                    setStep(1)
                  }}
                  className="px-7 py-3 border border-[#D8D0C4] text-[#1C1915] text-sm font-medium hover:border-[#8C5E3A]"
                  style={{ borderRadius: 'var(--radius)' }}
                >
                  Make Another Request
                </button>

                <button
                  type="button"
                  onClick={() => go('home')}
                  className="px-7 py-3 bg-[#1C1915] text-[#FAF8F4] text-sm font-medium hover:bg-[#8C5E3A]"
                  style={{ borderRadius: 'var(--radius)' }}
                >
                  Return Home
                </button>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-12">
              {/* Step indicator */}
              <div className="flex flex-wrap items-center gap-3">
                {([1, 2, 3] as const).map((s) => (
                  <div key={s} className="flex items-center gap-3">
                    <button
                      type="button"
                      onClick={() => {
                        if (s < step) {
                          setStep(s)
                          setError('')
                        }
                      }}
                      disabled={s >= step}
                      aria-label={`Step ${s}`}
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
                      {s === 1
                        ? 'Service'
                        : s === 2
                          ? 'Date & location'
                          : 'Your details'}
                    </span>

                    {s < 3 && (
                      <span className="text-[#D8D0C4] mx-1">—</span>
                    )}
                  </div>
                ))}
              </div>

              {error && (
                <div
                  role="alert"
                  className="p-4 border border-[#C8956C] bg-[#F3EFE8] text-sm text-[#1C1915]"
                >
                  {error}
                </div>
              )}

              {/* Step 1: Service */}
              {step === 1 && (
                <div>
                  <h2 className="font-display text-2xl md:text-3xl font-medium text-[#1C1915] mb-3">
                    What would you love to book?
                  </h2>

                  <p className="text-sm text-[#7A726A] mb-8">
                    Choose a service to see its listed price. Services
                    marked Enquire require a personalised quote.
                  </p>

                  <div className="grid sm:grid-cols-2 gap-3">
                    {sessionTypes.map((service) => (
                      <button
                        type="button"
                        key={service.id}
                        onClick={() => updateForm('sessionType', service.id)}
                        aria-pressed={form.sessionType === service.id}
                        className={`text-left px-5 py-4 border transition-colors ${
                          form.sessionType === service.id
                            ? 'border-[#8C5E3A] bg-[#F3EFE8]'
                            : 'border-[#D8D0C4] hover:border-[#8C5E3A]'
                        }`}
                        style={{ borderRadius: 'var(--radius)' }}
                      >
                        <p className="text-[#8C5E3A] text-xs tracking-widest uppercase mb-1">
                          {service.category}
                        </p>

                        <div className="flex justify-between items-start gap-3">
                          <p className="text-[#1C1915] text-sm font-medium">
                            {service.label}
                          </p>

                          <span className="text-xs text-[#8C5E3A] whitespace-nowrap">
                            {service.price}
                          </span>
                        </div>
                      </button>
                    ))}
                  </div>

                  <div className="mt-10">
                    <button
                      type="button"
                      disabled={!form.sessionType}
                      onClick={() => {
                        setStep(2)
                        setError('')
                      }}
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

              {/* Step 2: Date and location */}
              {step === 2 && (
                <div>
                  <h2 className="font-display text-2xl md:text-3xl font-medium text-[#1C1915] mb-3">
                    When and where?
                  </h2>

                  <p className="text-sm text-[#7A726A] mb-8">
                    Your requested date is a preference, not a confirmed
                    appointment. We will confirm availability with you.
                  </p>

                  <div className="space-y-8">
                    <div>
                      <label
                        htmlFor="preferredDate"
                        className="text-[#9A928A] text-xs tracking-widest uppercase block mb-1"
                      >
                        Preferred Date *
                      </label>

                      <input
                        id="preferredDate"
                        type="date"
                        min={getLocalDate()}
                        value={form.preferredDate}
                        onChange={(e) =>
                          updateForm('preferredDate', e.target.value)
                        }
                        className={inputClass}
                        required
                      />
                    </div>

                    <div>
                      <label
                        htmlFor="alternateDate"
                        className="text-[#9A928A] text-xs tracking-widest uppercase block mb-1"
                      >
                        Alternative Date (optional)
                      </label>

                      <input
                        id="alternateDate"
                        type="date"
                        min={getLocalDate()}
                        value={form.alternateDate}
                        onChange={(e) =>
                          updateForm('alternateDate', e.target.value)
                        }
                        className={inputClass}
                      />
                    </div>

                    <fieldset>
                      <legend className="text-[#9A928A] text-xs tracking-widest uppercase mb-3">
                        Preferred Location *
                      </legend>

                      <div className="flex flex-col gap-2">
                        {locations.map((location) => (
                          <button
                            type="button"
                            key={location}
                            onClick={() => updateForm('location', location)}
                            aria-pressed={form.location === location}
                            className={`text-left px-4 py-3 border text-sm transition-colors ${
                              form.location === location
                                ? 'border-[#8C5E3A] bg-[#F3EFE8] text-[#1C1915]'
                                : 'border-[#D8D0C4] text-[#4A4540] hover:border-[#8C5E3A]'
                            }`}
                            style={{ borderRadius: 'var(--radius)' }}
                          >
                            {location}
                          </button>
                        ))}
                      </div>
                    </fieldset>

                    {form.location === 'Other Location' && (
                      <div>
                        <label
                          htmlFor="locationDetails"
                          className="text-[#9A928A] text-xs tracking-widest uppercase block mb-1"
                        >
                          Specify Your Location
                        </label>

                        <input
                          id="locationDetails"
                          type="text"
                          value={form.locationDetails}
                          onChange={(e) =>
                            updateForm('locationDetails', e.target.value)
                          }
                          placeholder="Enter your area or postcode"
                          className={inputClass}
                        />
                      </div>
                    )}
                  </div>

                  <div className="flex gap-4 mt-10">
                    <button
                      type="button"
                      onClick={() => {
                        setStep(1)
                        setError('')
                      }}
                      className="px-6 py-3 border border-[#D8D0C4] text-[#4A4540] text-sm font-medium hover:border-[#8C5E3A]"
                      style={{ borderRadius: 'var(--radius)' }}
                    >
                      ← Back
                    </button>

                    <button
                      type="button"
                      disabled={!form.preferredDate || !form.location}
                      onClick={() => {
                        if (
                          form.preferredDate < getLocalDate() ||
                          (form.alternateDate &&
                            form.alternateDate < getLocalDate())
                        ) {
                          setError('Please choose a valid date today or in the future.')
                          return
                        }

                        if (
                          form.location === 'Other Location' &&
                          !form.locationDetails.trim()
                        ) {
                          setError('Please specify your preferred location.')
                          return
                        }

                        setError('')
                        setStep(3)
                      }}
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

              {/* Step 3: Customer details */}
              {step === 3 && (
                <div>
                  <h2 className="font-display text-2xl md:text-3xl font-medium text-[#1C1915] mb-3">
                    Let's get to know you.
                  </h2>

                  <p className="text-sm text-[#7A726A] mb-8">
                    Add your contact details so we can discuss your
                    appointment and confirm the booking.
                  </p>

                  <div className="space-y-8">
                    <div>
                      <label
                        htmlFor="name"
                        className="text-[#9A928A] text-xs tracking-widest uppercase block mb-1"
                      >
                        Full Name *
                      </label>

                      <input
                        id="name"
                        type="text"
                        required
                        autoComplete="name"
                        placeholder="Your full name"
                        value={form.name}
                        onChange={(e) => updateForm('name', e.target.value)}
                        className={inputClass}
                      />
                    </div>

                    <div>
                      <label
                        htmlFor="email"
                        className="text-[#9A928A] text-xs tracking-widest uppercase block mb-1"
                      >
                        Email (optional)
                      </label>

                      <input
                        id="email"
                        type="email"
                        autoComplete="email"
                        placeholder="you@example.com"
                        value={form.email}
                        onChange={(e) => updateForm('email', e.target.value)}
                        className={inputClass}
                      />
                    </div>

                    <div>
                      <label
                        htmlFor="phone"
                        className="text-[#9A928A] text-xs tracking-widest uppercase block mb-1"
                      >
                        Phone / WhatsApp Number
                      </label>

                      <input
                        id="phone"
                        type="tel"
                        autoComplete="tel"
                        placeholder="+44..."
                        value={form.phone}
                        onChange={(e) => updateForm('phone', e.target.value)}
                        className={inputClass}
                      />
                    </div>

                    <div>
                      <label
                        htmlFor="notes"
                        className="text-[#9A928A] text-xs tracking-widest uppercase block mb-1"
                      >
                        Additional Details (optional)
                      </label>

                      <textarea
                        id="notes"
                        rows={4}
                        placeholder="Tell us about your occasion, preferred style, or any questions..."
                        value={form.notes}
                        onChange={(e) => updateForm('notes', e.target.value)}
                        className={`${inputClass} resize-none`}
                      />
                    </div>

                    <div className="p-5 bg-[#F3EFE8] border border-[#D8D0C4]">
                      <p className="text-xs tracking-widest uppercase text-[#8C5E3A] mb-3">
                        Your Booking Summary
                      </p>

                      <div className="space-y-2 text-sm text-[#4A4540]">
                        <p>
                          <span className="font-medium text-[#1C1915]">
                            Service:
                          </span>{' '}
                          {selectedService?.label}
                        </p>
                        <p>
                          <span className="font-medium text-[#1C1915]">
                            Listed price:
                          </span>{' '}
                          {selectedService?.price}
                        </p>
                        <p>
                          <span className="font-medium text-[#1C1915]">
                            Preferred date:
                          </span>{' '}
                          {form.preferredDate}
                        </p>
                        <p>
                          <span className="font-medium text-[#1C1915]">
                            Location:
                          </span>{' '}
                          {form.locationDetails
                            ? `${form.location} — ${form.locationDetails}`
                            : form.location}
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-4 mt-10">
                    <button
                      type="button"
                      onClick={() => {
                        setStep(2)
                        setError('')
                      }}
                      className="px-6 py-3 border border-[#D8D0C4] text-[#4A4540] text-sm font-medium hover:border-[#8C5E3A]"
                      style={{ borderRadius: 'var(--radius)' }}
                    >
                      ← Back
                    </button>

                    <button
                      type="submit"
                      className="px-8 py-3 bg-[#1C1915] text-[#FAF8F4] text-sm font-medium hover:bg-[#8C5E3A] transition-colors"
                      style={{ borderRadius: 'var(--radius)' }}
                    >
                      Continue to WhatsApp →
                    </button>
                  </div>

                  <p className="text-xs text-[#7A726A] mt-5 leading-relaxed">
                    Your WhatsApp message will be prepared for you to
                    review and send. Your appointment is not confirmed
                    until Mainnasglam Beauty replies.
                  </p>
                </div>
              )}
            </form>
          )}

          {/* Alternative contact */}
          <div className="text-center border-t border-[#D8D0C4] mt-16 pt-8">
            <p className="text-sm text-[#7A726A] mb-3">
              Prefer to enquire directly?
            </p>

            <a
              href={INSTAGRAM_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-[#8C5E3A] hover:text-[#1C1915] underline underline-offset-4"
            >
              Contact Mainnasglam Beauty on Instagram →
            </a>
          </div>
        </div>
      </section>
    </main>
  )
}
