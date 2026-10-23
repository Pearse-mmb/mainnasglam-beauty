
import { useState } from 'react'

type Page =
  | 'home'
  | 'about'
  | 'services'
  | 'portfolio'
  | 'contact'
  | 'booking'

interface ServicesProps {
  onNavigate: (page: Page) => void
}

type Category =
  | 'In-Call Makeup'
  | 'Outcall Makeup'
  | 'Lessons'
  | 'Brows'
  | 'Lashes'
  | 'Braids'
  | "Men's Hairstyles"

type Service = {
  title: string
  desc: string
  price: number | null
  category: Category
  sizes?: { label: string; price: number }[]
  consultation?: boolean
}

const WHATSAPP_NUMBER = '447311304224'

// Replace these with Fatima's confirmed bank details if needed.
const BANK_NAME = 'CONFIRM BANK NAME'
const ACCOUNT_NAME = 'CONFIRM ACCOUNT NAME'
const ACCOUNT_NUMBER = 'CONFIRM ACCOUNT NUMBER'

const services: Service[] = [
  // MAKEUP
  {
    title: 'Soft / Full Glam',
    desc: 'A flawless glam look tailored to your skin tone and occasion.',
    price: 70,
    category: 'In-Call Makeup',
  },
  {
    title: 'Bridesmaids & Wedding Guest Glam',
    desc: 'Elegant, long-wearing makeup for weddings and special occasions.',
    price: 100,
    category: 'In-Call Makeup',
  },
  {
    title: 'Photoshoot Makeup',
    desc: 'Camera-ready makeup for personal branding and creative shoots.',
    price: 100,
    category: 'In-Call Makeup',
  },
  {
    title: 'Birthday Makeup & Photoshoot',
    desc: 'A glam look for your birthday or special celebration.',
    price: 100,
    category: 'In-Call Makeup',
  },
  {
    title: 'Soft / Full Glam — Home Service',
    desc: 'Professional makeup at your home or chosen venue.',
    price: 150,
    category: 'Outcall Makeup',
  },
  {
    title: 'Photoshoot Makeup + Touch-Up',
    desc: 'Camera-ready makeup at your location with touch-up included.',
    price: 150,
    category: 'Outcall Makeup',
  },
  {
    title: 'Bridal Makeup',
    desc: 'Long-lasting bridal makeup. Event details are required before booking.',
    price: 200,
    category: 'Outcall Makeup',
    consultation: true,
  },
  {
    title: 'Birthday Makeup & Photoshoot — Home Service',
    desc: 'Glam makeup at your location for your birthday and photos.',
    price: 150,
    category: 'Outcall Makeup',
  },
  {
    title: 'Bridal Makeup + Touch-Up',
    desc: 'Bridal makeup at your location plus touch-up service.',
    price: 250,
    category: 'Outcall Makeup',
    consultation: true,
  },

  // LESSONS
  {
    title: 'One-on-One Makeup Lesson',
    desc: 'A personalised lesson covering products, tools and techniques.',
    price: null,
    category: 'Lessons',
  },
  {
    title: 'Group Makeup Workshop — Half Day',
    desc: 'A hands-on group workshop covering makeup techniques.',
    price: null,
    category: 'Lessons',
  },
  {
    title: 'Group Makeup Workshop — Full Day',
    desc: 'An in-depth workshop covering preparation, base, eyes and finishing.',
    price: null,
    category: 'Lessons',
  },

  // BROWS
  {
    title: 'Ombré Brows',
    desc: 'Soft, shaded brows with a graduated finish.',
    price: 100,
    category: 'Brows',
  },
  {
    title: 'Combination Brows',
    desc: 'A combination brow service tailored to your desired look.',
    price: 150,
    category: 'Brows',
  },

  // LASHES
  {
    title: 'Classic Lash Set',
    desc: 'A classic lash look for everyday definition.',
    price: 50,
    category: 'Lashes',
  },
  {
    title: 'Hybrid Lash Set',
    desc: 'A blend of classic and volume lash styling.',
    price: 50,
    category: 'Lashes',
  },
  {
    title: 'Volume Lash Set',
    desc: 'A fuller lash look with added volume.',
    price: 80,
    category: 'Lashes',
  },
  {
    title: 'Cluster Lash Set',
    desc: 'A cluster lash set for a defined finish.',
    price: 40,
    category: 'Lashes',
  },

  // BRAIDS AND CORNROWS
  {
    title: 'Natural Stitch Cornrows',
    desc: 'Natural stitch cornrows. Braiding hair is not included.',
    price: null,
    category: 'Braids',
    sizes: [
      { label: '4–6 stitches', price: 30 },
      { label: '7–12 stitches', price: 50 },
    ],
  },
  {
    title: 'Feed-in Stitch Cornrows',
    desc: 'Feed-in stitch cornrows. Braiding hair is not included.',
    price: null,
    category: 'Braids',
    sizes: [
      { label: '4–6 stitches', price: 60 },
      { label: '7–12 stitches', price: 80 },
    ],
  },
  {
    title: 'Cornrows',
    desc: 'Choose your preferred cornrow size.',
    price: null,
    category: 'Braids',
    sizes: [
      { label: 'Large', price: 30 },
      { label: 'Medium', price: 50 },
    ],
  },
  {
    title: 'Knotless Braids',
    desc: 'Knotless braids in your preferred size.',
    price: null,
    category: 'Braids',
    sizes: [
      { label: 'Jumbo', price: 100 },
      { label: 'Medium', price: 120 },
      { label: 'Small', price: 150 },
    ],
  },
  {
    title: 'Box Braids',
    desc: 'Box braids in your preferred size.',
    price: null,
    category: 'Braids',
    sizes: [
      { label: 'Jumbo', price: 100 },
      { label: 'Medium', price: 120 },
      { label: 'Small', price: 150 },
    ],
  },
  {
    title: 'Goddess / Boho Braids',
    desc: 'Goddess or boho braids in your preferred size.',
    price: null,
    category: 'Braids',
    sizes: [
      { label: 'Jumbo', price: 120 },
      { label: 'Medium', price: 150 },
      { label: 'Small', price: 200 },
    ],
  },
  {
    title: 'Fulani Braids',
    desc: 'Fulani braids in your preferred size.',
    price: null,
    category: 'Braids',
    sizes: [
      { label: 'Large', price: 100 },
      { label: 'Medium', price: 130 },
      { label: 'Small', price: 160 },
    ],
  },
  {
    title: 'Freestyle Feed-in Cornrows',
    desc: 'Choose lemonade braids or another cornrow style.',
    price: null,
    category: 'Braids',
    sizes: [
      { label: 'Lemonade braids', price: 180 },
      { label: 'Other cornrow styles', price: 100 },
    ],
  },
  {
    title: 'Feed-in Twists',
    desc: 'Feed-in twists in your preferred size.',
    price: null,
    category: 'Braids',
    sizes: [
      { label: 'Jumbo', price: 80 },
      { label: 'Medium', price: 100 },
      { label: 'Small', price: 150 },
    ],
  },

  // MEN'S HAIRSTYLES — EXTENSIONS INCLUDED
  {
    title: "Men's Natural Cornrows",
    desc: 'Extensions included.',
    price: 40,
    category: "Men's Hairstyles",
  },
  {
    title: "Men's Feed-in Cornrows",
    desc: 'Extensions included.',
    price: 50,
    category: "Men's Hairstyles",
  },
  {
    title: "Men's Feed-in Twists",
    desc: 'Extensions included.',
    price: 65,
    category: "Men's Hairstyles",
  },
  {
    title: "Men's Natural Twists",
    desc: 'Extensions included.',
    price: 60,
    category: "Men's Hairstyles",
  },
  {
    title: "Men's Feed-in Singles",
    desc: 'Extensions included.',
    price: 50,
    category: "Men's Hairstyles",
  },
  {
    title: "Men's Natural Singles",
    desc: 'Extensions included.',
    price: 40,
    category: "Men's Hairstyles",
  },
]

const money = (amount: number) =>
  new Intl.NumberFormat('en-GB', {
    style: 'currency',
    currency: 'GBP',
    maximumFractionDigits: 2,
  }).format(amount)

function getLocalDate() {
  const date = new Date()
  const year = date.getFullYear()
  const month = String(date.getMonth() + 1).padStart(2, '0')
  const day = String(date.getDate()).padStart(2, '0')
  return `${year}-${month}-${day}`
}

function formatDate(date: string) {
  if (!date) return 'Not selected'
  return new Date(`${date}T12:00:00`).toLocaleDateString('en-GB', {
    weekday: 'long',
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  })
}

function ServiceCard({
  service,
  onBook,
}: {
  service: Service
  onBook: (service: Service) => void
}) {
  const startingPrice = service.sizes
    ? Math.min(...service.sizes.map((item) => item.price))
    : service.price

  return (
    <article
      className="group relative flex h-full flex-col justify-between overflow-hidden border border-white/70 bg-white/35 p-5 shadow-[0_8px_32px_rgba(74,51,40,0.08)] backdrop-blur-xl transition-all duration-300 hover:-translate-y-1 hover:border-[#B78A68] hover:bg-white/55 hover:shadow-[0_16px_40px_rgba(74,51,40,0.14)] sm:p-6 md:p-8"
      style={{ borderRadius: 'var(--radius)' }}
    >
      <div>
        <p className="mb-3 text-xs uppercase tracking-[0.18em] text-[#8C5E3A]">
          {service.category === 'In-Call Makeup'
            ? 'At the studio'
            : service.category === 'Outcall Makeup'
              ? 'I come to you'
              : service.category === 'Lessons'
                ? 'Education'
                : service.category === 'Braids'
                  ? 'Standard length: mid-back'
                  : service.category === "Men's Hairstyles"
                    ? 'Extensions included'
                    : 'Beauty service'}
        </p>

        <p className="mb-3 font-display text-3xl font-medium text-[#70452F]">
          {startingPrice === null
            ? 'Enquire'
            : service.sizes
              ? `From ${money(startingPrice)}`
              : money(startingPrice)}
        </p>

        <h3 className="mb-3 font-display text-xl font-medium leading-snug text-[#2B211B]">
          {service.title}
        </h3>

        <p className="text-sm leading-relaxed text-[#71645B]">{service.desc}</p>

        {service.category === 'Outcall Makeup' && (
          <p className="mt-4 text-xs leading-relaxed text-[#8C5E3A]">
            Transport costs are additional and will be confirmed before payment.
          </p>
        )}

        {service.category === 'Braids' && (
          <p className="mt-4 text-xs leading-relaxed text-[#8C5E3A]">
            Prices exclude extensions. Extra length and braiding hair are optional add-ons.
          </p>
        )}
      </div>

      <button
        type="button"
        onClick={() => onBook(service)}
        className="mt-8 w-full border border-[#6F4934] bg-[#6F4934]/90 px-4 py-3 text-xs font-semibold uppercase tracking-widest text-white shadow-sm backdrop-blur-md transition-all hover:border-[#4A2D1E] hover:bg-[#4A2D1E] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#8C5E3A] focus-visible:ring-offset-2 focus-visible:ring-offset-white"
        style={{ borderRadius: 'var(--radius)' }}
      >
        Book This Service →
      </button>
    </article>
  )
}

export default function Services({ onNavigate }: ServicesProps) {
  const [selectedService, setSelectedService] = useState<Service | null>(null)
  const [showBookingPolicy, setShowBookingPolicy] = useState(false)
  const [policyAccepted, setPolicyAccepted] = useState(false)
  const [showPaymentInstructions, setShowPaymentInstructions] = useState(false)
  const [selectedOption, setSelectedOption] = useState('')
  const [extraLength, setExtraLength] = useState(false)
  const [needHair, setNeedHair] = useState(false)

  const [appointmentDate, setAppointmentDate] = useState('')
  const [appointmentTime, setAppointmentTime] = useState('')
  const [customerName, setCustomerName] = useState('')
  const [customerPhone, setCustomerPhone] = useState('')
  const [customerEmail, setCustomerEmail] = useState('')
  const [learningGoals, setLearningGoals] = useState('')
  const [groupSize, setGroupSize] = useState('')
  const [locationAddress, setLocationAddress] = useState('')
  const [eventType, setEventType] = useState('')
  const [eventVenue, setEventVenue] = useState('')
  const [readyTime, setReadyTime] = useState('')
  const [peopleCount, setPeopleCount] = useState('1')
  const [touchUp, setTouchUp] = useState('No')
  const [allergyNotes, setAllergyNotes] = useState('')
  const [photoConsent, setPhotoConsent] = useState('No')
  const [specialRequests, setSpecialRequests] = useState('')

  // Each service type can show the questions needed for that booking process.
  const isHair = selectedService?.category === 'Braids'
  const isBridal = Boolean(selectedService?.consultation)
  const isOutcall = selectedService?.category === 'Outcall Makeup'
  const isLesson = selectedService?.category === 'Lessons'
  const isGroupLesson = Boolean(selectedService?.title.includes('Group Makeup Workshop'))
  const isEventMakeup = Boolean(selectedService && [
    'Bridesmaids & Wedding Guest Glam',
    'Photoshoot Makeup',
    'Birthday Makeup & Photoshoot',
    'Photoshoot Makeup + Touch-Up',
    'Birthday Makeup & Photoshoot — Home Service',
  ].includes(selectedService.title))
  const needsEventDetails = isBridal || isEventMakeup
  const needsTouchUpDetails = Boolean(selectedService?.title.includes('Touch-Up')) || isBridal

  const chosenPrice = selectedService
    ? selectedService.sizes
      ? selectedService.sizes.find((item) => item.label === selectedOption)?.price ?? null
      : selectedService.price
    : null

  const addOns =
    isHair && selectedService
      ? (extraLength ? 30 : 0) + (needHair ? 15 : 0)
      : 0

  const totalPrice = chosenPrice === null ? null : chosenPrice + addOns
  const deposit = totalPrice === null ? null : totalPrice * 0.5
  const balance = totalPrice === null ? null : totalPrice - (deposit ?? 0)

  const whatsappReady = WHATSAPP_NUMBER.replace(/\D/g, '').length >= 10

  const openBooking = (service: Service) => {
    setSelectedService(service)
    setShowBookingPolicy(false)
    setPolicyAccepted(false)
    setShowPaymentInstructions(false)
    setSelectedOption(service.sizes?.[0]?.label ?? '')
    setExtraLength(false)
    setNeedHair(false)
    setAppointmentDate('')
    setAppointmentTime('')
    setCustomerName('')
    setCustomerPhone('')
    setCustomerEmail('')
    setLearningGoals('')
    setGroupSize('')
    setLocationAddress('')
    setEventType('')
    setEventVenue('')
    setReadyTime('')
    setPeopleCount('1')
    setTouchUp('No')
    setAllergyNotes('')
    setPhotoConsent('No')
    setSpecialRequests('')
  }

  const closeBooking = () => {
    setSelectedService(null)
    setShowBookingPolicy(false)
    setPolicyAccepted(false)
    setShowPaymentInstructions(false)
  }

  const continueToPolicy = () => {
    if (!selectedService || !appointmentDate || !appointmentTime) return
    if (!customerName.trim() || !customerPhone.trim()) return
    if (isLesson && (!customerEmail.trim() || !learningGoals.trim())) return
    if (isGroupLesson && !groupSize.trim()) return
    if (selectedService.sizes && !selectedOption) return
    if (needsEventDetails && (!eventType.trim() || !eventVenue.trim() || !readyTime)) return
    if (isOutcall && !locationAddress.trim()) return
    setShowBookingPolicy(true)
    setPolicyAccepted(false)
  }

  const continueToPayment = () => {
    if (!policyAccepted) return
    setShowPaymentInstructions(true)
  }

  const sendBooking = () => {
    if (!selectedService || !showPaymentInstructions) return

    const priceDetails =
      totalPrice === null
        ? 'Price: Please confirm the final quote with Fatima before payment.'
        : `Service total: ${money(totalPrice)}
Suggested 50% deposit: ${money(deposit!)}
Remaining balance: ${money(balance!)}`

    const message = [
      'Hello Fatima! I would like to request a booking with Mainnasglam_Beauty.',
      '',
      'BOOKING DETAILS',
      `Service: ${selectedService.title}`,
      selectedOption ? `Size/style: ${selectedOption}` : '',
      isHair ? `Length: ${extraLength ? 'Extra length (+£30)' : 'Standard mid-back'}` : '',
      isHair ? `Braiding hair: ${needHair ? 'Needed (+£15)' : 'Bringing my own'}` : '',
      `Preferred date: ${formatDate(appointmentDate)}`,
      `Preferred time: ${appointmentTime}`,
      isOutcall ? `Location/address: ${locationAddress.trim()}` : '',
      '',
      'CUSTOMER DETAILS',
      `Name: ${customerName.trim()}`,
      `Phone: ${customerPhone.trim()}`,
      customerEmail.trim() ? `Email: ${customerEmail.trim()}` : '',
      '',
      'PRICE',
      priceDetails,
      isOutcall ? 'Transport fee: Additional; please confirm before payment.' : '',
      needsEventDetails
        ? `Event type: ${eventType}
Event/venue location: ${eventVenue}
Time I need to be ready: ${readyTime}${isBridal || selectedService.title.includes('Bridesmaids') ? `\nNumber of people needing makeup: ${peopleCount}` : ''}${needsTouchUpDetails ? `\nTouch-up service: ${touchUp}` : ''}`
        : '',
      isLesson ? `Learning goals: ${learningGoals.trim()}` : '',
      isGroupLesson ? `Expected group size: ${groupSize.trim()}` : '',
      allergyNotes.trim() ? `Relevant allergy/skin notes: ${allergyNotes.trim()}` : '',
      `Photo/video consent for business promotion: ${photoConsent}`,
      `Special requests: ${specialRequests.trim() || 'None'}`,
      '',
      'I have followed the booking instructions and am contacting you on WhatsApp with my booking details. I will attach my payment receipt in this chat if payment has been made. Please confirm receipt and appointment status.',
    ]
      .filter(Boolean)
      .join('\n')

    const url = `https://wa.me/${WHATSAPP_NUMBER.replace(/\D/g, '')}?text=${encodeURIComponent(message)}`
    window.open(url, '_blank', 'noopener,noreferrer')
  }

  const sections: {
    title: string
    eyebrow: string
    description: string
    category: Category
    alternate?: boolean
  }[] = [
    {
      title: 'In-Call Makeup',
      eyebrow: 'At My Studio',
      description: 'You come to me for your appointment in Glasgow.',
      category: 'In-Call Makeup',
    },
    {
      title: 'Outcall / Home Service',
      eyebrow: 'I Come to You',
      description: 'Professional makeup at your home or chosen venue.',
      category: 'Outcall Makeup',
      alternate: true,
    },
    {
      title: 'Brows',
      eyebrow: 'Define Your Look',
      description: 'Brow services tailored to your preferred finish.',
      category: 'Brows',
    },
    {
      title: 'Lashes',
      eyebrow: 'Lash Services',
      description: 'Choose the lash set that suits your look.',
      category: 'Lashes',
      alternate: true,
    },
    {
      title: 'Braids, Cornrows & Twists',
      eyebrow: 'Hair Styling',
      description: 'Standard length is mid-back. Braiding prices exclude extensions.',
      category: 'Braids',
    },
    {
      title: "Men's Hairstyles",
      eyebrow: 'Men’s Section',
      description: 'Extensions are included in these listed prices.',
      category: "Men's Hairstyles",
      alternate: true,
    },
    {
      title: 'Makeup Lessons',
      eyebrow: 'Education',
      description: 'Private lessons and group workshops. Contact Fatima for a quote.',
      category: 'Lessons',
    },
  ]

  return (
    <main className="bg-[#FAF8F4] pt-20">
      <section className="py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <p className="mb-4 text-xs uppercase tracking-widest text-[#8C5E3A]">What I Offer</p>
          <div className="flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
            <h1 className="font-display text-5xl font-medium leading-none text-[#1C1915] md:text-6xl lg:text-7xl">
              Our Services.
            </h1>
            <p className="max-w-sm leading-relaxed text-[#4A4540]">
              Explore makeup, brows, lashes and hairstyling. Choose a service to open its booking form, with extra questions where needed for bridal, home-service, hair and lesson bookings.
            </p>
          </div>
        </div>
      </section>

      {sections.map((section) => {
        const items = services.filter((service) => service.category === section.category)
        if (!items.length) return null

        return (
          <section
            key={section.category}
            className={`border-t border-[#D8D0C4] py-16 md:py-20 ${section.alternate ? 'bg-[#F3EFE8]' : ''}`}
          >
            <div className="mx-auto max-w-7xl px-6 lg:px-10">
              <div className="mb-10">
                <p className="mb-2 text-xs uppercase tracking-widest text-[#8C5E3A]">{section.eyebrow}</p>
                <h2 className="font-display text-3xl font-medium text-[#1C1915] md:text-4xl">{section.title}</h2>
                <p className="mt-2 max-w-2xl text-sm leading-relaxed text-[#7A726A]">{section.description}</p>
              </div>

              {section.category === 'Outcall Makeup' && (
                <div className="mb-10 bg-[#1C1915] px-5 py-4 text-sm leading-relaxed text-[#FAF8F4]" style={{ borderRadius: 'var(--radius)' }}>
                  <span className="font-medium text-[#C8956C]">Please note:</span> Transport costs are not included and will be confirmed before payment.
                </div>
              )}

              <div className={`grid gap-5 ${section.category === 'In-Call Makeup' ? 'sm:grid-cols-2 lg:grid-cols-4' : section.category === 'Lessons' ? 'md:grid-cols-3' : 'sm:grid-cols-2 lg:grid-cols-3'}`}>
                {items.map((service) => (
                  <ServiceCard key={service.title} service={service} onBook={openBooking} />
                ))}
              </div>
            </div>
          </section>
        )
      })}

      <section className="border-t border-[#D8D0C4] bg-[#F3EFE8] py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <div className="max-w-2xl">
            <p className="mb-4 text-xs uppercase tracking-widest text-[#8C5E3A]">Good to Know</p>
            <h2 className="mb-8 font-display text-3xl font-medium text-[#1C1915] md:text-4xl">Before you book.</h2>
            {[
              {
                q: 'What is the booking process?',
                a: 'Choose a service, complete the booking form, read and accept the booking policy, review payment instructions, confirm the amount with Fatima where needed, then continue to WhatsApp. Attach your payment receipt if you have paid. Your appointment is not confirmed until Fatima confirms it.',
              },
              {
                q: 'Are transport fees included?',
                a: 'No. Outcall transport fees are confirmed separately before payment.',
              },
              {
                q: 'What is the standard braiding length?',
                a: 'The standard length is mid-back. Extra length is a £30 add-on. Braiding hair is listed as a £15 add-on. Men’s hairstyle prices include extensions.',
              },
              {
                q: 'Is my appointment confirmed after submitting?',
                a: 'No. Submit your booking details on WhatsApp and wait for Fatima to confirm the appointment. The website does not show live availability or verify transfers.',
              },
            ].map(({ q, a }) => (
              <div key={q} className="border-t border-[#D8D0C4] py-6">
                <h3 className="mb-2 font-medium text-[#1C1915]">{q}</h3>
                <p className="text-sm leading-relaxed text-[#7A726A]">{a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#1C1915] py-20 text-center">
        <div className="mx-auto max-w-xl px-6">
          <p className="mb-4 text-xs uppercase tracking-widest text-[#C8956C]">Your Glam Experience</p>
          <h2 className="mb-8 font-display text-3xl font-medium text-[#FAF8F4] md:text-4xl">Let’s get you booked.</h2>
          <button
            type="button"
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="bg-[#FAF8F4] px-7 py-3.5 text-sm font-medium text-[#1C1915] transition-colors hover:bg-[#C8956C]"
            style={{ borderRadius: 'var(--radius)' }}
          >
            Explore Services ↑
          </button>
        </div>
      </section>

      {selectedService && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center overflow-y-auto bg-[#1C1915]/70 p-3 backdrop-blur-sm sm:p-6"
          onMouseDown={(event) => {
            if (event.target === event.currentTarget) setSelectedService(null)
          }}
        >
          <div
            role="dialog"
            aria-modal="true"
            aria-labelledby="booking-title"
            className="my-auto max-h-[92vh] w-full max-w-2xl overflow-y-auto bg-[#FAF8F4] p-5 shadow-2xl sm:p-8 md:p-10"
            style={{ borderRadius: 'var(--radius)' }}
          >
            <div className="mb-8 flex items-start justify-between gap-4">
              <div>
                <p className="mb-2 text-xs uppercase tracking-widest text-[#8C5E3A]">Mainnasglam_Beauty</p>
                <h2 id="booking-title" className="font-display text-2xl font-medium text-[#1C1915] sm:text-3xl">
                  {isBridal ? 'Bridal consultation' : isEventMakeup ? 'Event makeup booking' : isHair ? 'Hair booking' : isLesson ? 'Makeup lesson enquiry' : 'Book your appointment'}
                </h2>
                <p className="mt-2 text-sm text-[#7A726A]">{selectedService.title}</p>
              </div>
              <button
                type="button"
                onClick={closeBooking}
                aria-label="Close booking"
                className="flex h-10 w-10 shrink-0 items-center justify-center border border-[#D8D0C4] text-xl text-[#1C1915] hover:border-[#8C5E3A]"
              >
                ×
              </button>
            </div>

            {!showBookingPolicy ? (
              <>
            {selectedService.sizes && (
              <div className="mb-5">
                <label className="mb-2 block text-sm font-medium text-[#1C1915]">Choose size or style *</label>
                <select
                  value={selectedOption}
                  onChange={(event) => setSelectedOption(event.target.value)}
                  className="w-full border border-[#D8D0C4] bg-white px-4 py-3 text-sm outline-none focus:border-[#8C5E3A]"
                >
                  {selectedService.sizes.map((item) => (
                    <option key={item.label} value={item.label}>{item.label} — {money(item.price)}</option>
                  ))}
                </select>
              </div>
            )}

            {isHair && (
              <div className="mb-5 grid gap-5 sm:grid-cols-2">
                <label className="flex items-center gap-3 border border-[#D8D0C4] bg-white p-4 text-sm text-[#1C1915]">
                  <input type="checkbox" checked={extraLength} onChange={(event) => setExtraLength(event.target.checked)} className="accent-[#8C5E3A]" />
                  Extra length (+£30)
                </label>
                <label className="flex items-center gap-3 border border-[#D8D0C4] bg-white p-4 text-sm text-[#1C1915]">
                  <input type="checkbox" checked={needHair} onChange={(event) => setNeedHair(event.target.checked)} className="accent-[#8C5E3A]" />
                  I need braiding hair (+£15)
                </label>
              </div>
            )}

            <div className="mb-6 border border-[#D8D0C4] bg-white/60 p-4">
              <p className="text-sm text-[#7A726A]">Estimated service total</p>
              <p className="mt-1 font-display text-2xl text-[#8C5E3A]">
                {totalPrice === null ? 'Price on enquiry' : money(totalPrice)}
              </p>
              <p className="mt-2 text-xs text-[#7A726A]">Final price and any add-ons must be confirmed by Fatima before payment.</p>
            </div>

            <div className="grid gap-5 sm:grid-cols-2">
              <div>
                <label className="mb-2 block text-sm font-medium text-[#1C1915]">Preferred date *</label>
                <input type="date" min={getLocalDate()} value={appointmentDate} onChange={(event) => setAppointmentDate(event.target.value)} className="w-full border border-[#D8D0C4] bg-white px-4 py-3 text-sm outline-none focus:border-[#8C5E3A]" />
              </div>
              <div>
                <label className="mb-2 block text-sm font-medium text-[#1C1915]">Preferred time *</label>
                <select value={appointmentTime} onChange={(event) => setAppointmentTime(event.target.value)} className="w-full border border-[#D8D0C4] bg-white px-4 py-3 text-sm outline-none focus:border-[#8C5E3A]">
                  <option value="">Select a time</option>
                  {['09:00 AM', '10:00 AM', '11:00 AM', '12:00 PM', '01:00 PM', '02:00 PM', '03:00 PM', '04:00 PM', '05:00 PM', '06:00 PM'].map((time) => <option key={time}>{time}</option>)}
                </select>
              </div>
            </div>

            <div className="mt-5 grid gap-5 sm:grid-cols-2">
              <div>
                <label className="mb-2 block text-sm font-medium text-[#1C1915]">Full name *</label>
                <input value={customerName} onChange={(event) => setCustomerName(event.target.value)} placeholder="Your full name" autoComplete="name" className="w-full border border-[#D8D0C4] bg-white px-4 py-3 text-sm outline-none focus:border-[#8C5E3A]" />
              </div>
              <div>
                <label className="mb-2 block text-sm font-medium text-[#1C1915]">Phone number *</label>
                <input type="tel" value={customerPhone} onChange={(event) => setCustomerPhone(event.target.value)} placeholder="Include country code" autoComplete="tel" className="w-full border border-[#D8D0C4] bg-white px-4 py-3 text-sm outline-none focus:border-[#8C5E3A]" />
              </div>
            </div>

            {isLesson && (
              <div className="mt-5 space-y-5">
                <div>
                  <label className="mb-2 block text-sm font-medium text-[#1C1915]">Email address *</label>
                  <input type="email" value={customerEmail} onChange={(event) => setCustomerEmail(event.target.value)} placeholder="you@example.com" className="w-full border border-[#D8D0C4] bg-white px-4 py-3 text-sm outline-none focus:border-[#8C5E3A]" />
                </div>
                <div>
                  <label className="mb-2 block text-sm font-medium text-[#1C1915]">What would you like to learn? *</label>
                  <textarea value={learningGoals} onChange={(event) => setLearningGoals(event.target.value)} placeholder="Tell Fatima what skills or techniques you want to focus on" rows={3} className="w-full resize-y border border-[#D8D0C4] bg-white px-4 py-3 text-sm outline-none focus:border-[#8C5E3A]" />
                </div>
                {isGroupLesson && <div>
                  <label className="mb-2 block text-sm font-medium text-[#1C1915]">Expected group size *</label>
                  <select value={groupSize} onChange={(event) => setGroupSize(event.target.value)} className="w-full border border-[#D8D0C4] bg-white px-4 py-3 text-sm outline-none focus:border-[#8C5E3A]">
                    <option value="">Select group size</option>
                    {['2–5 people', '6–10 people', '11–15 people', '16+ people'].map((size) => <option key={size}>{size}</option>)}
                  </select>
                </div>}
              </div>
            )}

            {isOutcall && (
              <div className="mt-5">
                <label className="mb-2 block text-sm font-medium text-[#1C1915]">Appointment address or area *</label>
                <input value={locationAddress} onChange={(event) => setLocationAddress(event.target.value)} placeholder="Area, address or venue" className="w-full border border-[#D8D0C4] bg-white px-4 py-3 text-sm outline-none focus:border-[#8C5E3A]" />
              </div>
            )}

            {needsEventDetails && (
              <div className="mt-6 border-t border-[#D8D0C4] pt-6">
                <p className="mb-4 text-xs uppercase tracking-widest text-[#8C5E3A]">{isBridal ? 'Detailed bridal consultation' : 'Event / photoshoot details'}</p>
                <div className="grid gap-5 sm:grid-cols-2">
                  <div>
                    <label className="mb-2 block text-sm font-medium text-[#1C1915]">{isBridal ? 'Event type *' : 'Event / shoot type *'}</label>
                    <input value={eventType} onChange={(event) => setEventType(event.target.value)} placeholder={isBridal ? 'Wedding, engagement...' : 'Birthday, wedding, branding shoot...'} className="w-full border border-[#D8D0C4] bg-white px-4 py-3 text-sm outline-none focus:border-[#8C5E3A]" />
                  </div>
                  <div>
                    <label className="mb-2 block text-sm font-medium text-[#1C1915]">{isOutcall ? 'Event venue / location *' : 'Venue or shoot location *'}</label>
                    <input value={eventVenue} onChange={(event) => setEventVenue(event.target.value)} placeholder="Venue or area" className="w-full border border-[#D8D0C4] bg-white px-4 py-3 text-sm outline-none focus:border-[#8C5E3A]" />
                  </div>
                  <div>
                    <label className="mb-2 block text-sm font-medium text-[#1C1915]">Time you need to be ready *</label>
                    <input type="time" value={readyTime} onChange={(event) => setReadyTime(event.target.value)} className="w-full border border-[#D8D0C4] bg-white px-4 py-3 text-sm outline-none focus:border-[#8C5E3A]" />
                  </div>
                  {(isBridal || selectedService.title.includes('Bridesmaids')) && <div>
                    <label className="mb-2 block text-sm font-medium text-[#1C1915]">People needing makeup</label>
                    <select value={peopleCount} onChange={(event) => setPeopleCount(event.target.value)} className="w-full border border-[#D8D0C4] bg-white px-4 py-3 text-sm outline-none focus:border-[#8C5E3A]">
                      {['1', '2', '3', '4', '5', '6', '7', '8+'].map((count) => <option key={count}>{count}</option>)}
                    </select>
                  </div>}
                </div>
                {needsTouchUpDetails && <div className="mt-5">
                  <label className="mb-2 block text-sm font-medium text-[#1C1915]">Touch-up service?</label>
                  <select value={touchUp} onChange={(event) => setTouchUp(event.target.value)} className="w-full border border-[#D8D0C4] bg-white px-4 py-3 text-sm outline-none focus:border-[#8C5E3A]">
                    <option>No</option>
                    <option>Yes</option>
                    <option>Please discuss with Fatima</option>
                  </select>
                </div>}
              </div>
            )}

            {['In-Call Makeup', 'Outcall Makeup', 'Brows', 'Lashes'].includes(selectedService.category) && (
              <div className="mt-5">
                <label className="mb-2 block text-sm font-medium text-[#1C1915]">Relevant skin or product sensitivities (optional)</label>
                <textarea value={allergyNotes} onChange={(event) => setAllergyNotes(event.target.value)} placeholder="Anything Fatima should know for this service" rows={2} className="w-full resize-y border border-[#D8D0C4] bg-white px-4 py-3 text-sm outline-none focus:border-[#8C5E3A]" />
              </div>
            )}

            <div className="mt-5">
              <label className="mb-2 block text-sm font-medium text-[#1C1915]">Photo/video consent for business promotion</label>
              <select value={photoConsent} onChange={(event) => setPhotoConsent(event.target.value)} className="w-full border border-[#D8D0C4] bg-white px-4 py-3 text-sm outline-none focus:border-[#8C5E3A]">
                <option value="No">No, I do not consent</option>
                <option value="Yes">Yes, I consent</option>
              </select>
            </div>

            <div className="mt-5">
              <label className="mb-2 block text-sm font-medium text-[#1C1915]">Additional requests (optional)</label>
              <textarea value={specialRequests} onChange={(event) => setSpecialRequests(event.target.value)} placeholder="Any other requests" rows={3} className="w-full resize-y border border-[#D8D0C4] bg-white px-4 py-3 text-sm outline-none focus:border-[#8C5E3A]" />
            </div>

            <div className="mt-6 border-l-2 border-[#8C5E3A] bg-white/55 p-4 text-sm leading-relaxed text-[#4A4540] backdrop-blur-md">
              <strong className="text-[#1C1915]">Before continuing:</strong> Review the booking details and instructions on the next screen. For services marked “Enquire” and home-service transport fees, the final amount must be agreed with Fatima before transferring.
            </div>

            <div className="mt-6 flex flex-col gap-3 sm:flex-row">
              <button type="button" onClick={closeBooking} className="border border-[#D8D0C4] px-5 py-3 text-sm text-[#1C1915] hover:border-[#8C5E3A]">
                Cancel
              </button>
              <button
                type="button"
                disabled={
                  !appointmentDate ||
                  !appointmentTime ||
                  !customerName.trim() ||
                  !customerPhone.trim() ||
                  (isLesson && (!customerEmail.trim() || !learningGoals.trim())) ||
                  (isGroupLesson && !groupSize.trim()) ||
                  (Boolean(selectedService.sizes) && !selectedOption) ||
                  (needsEventDetails && (!eventType.trim() || !eventVenue.trim() || !readyTime)) ||
                  (isOutcall && !locationAddress.trim())
                }
                onClick={continueToPolicy}
                className="flex flex-1 items-center justify-center gap-2 rounded-sm bg-[#6F4934] px-5 py-4 text-xs font-medium uppercase tracking-widest text-white transition-colors hover:bg-[#4A2D1E] disabled:cursor-not-allowed disabled:opacity-40"
              >
                Read Booking Policy →
              </button>
            </div>
              </>
            ) : !showPaymentInstructions ? (
              <div className="space-y-6">
                <div className="rounded-xl border border-white/80 bg-white/55 p-5 shadow-sm backdrop-blur-xl sm:p-6">
                  <p className="mb-2 text-xs font-semibold uppercase tracking-[0.18em] text-[#8C5E3A]">Step 2 of 3</p>
                  <h3 className="font-display text-2xl text-[#2B211B]">Booking policy &amp; terms</h3>
                  <p className="mt-3 text-sm leading-relaxed text-[#71645B]">Kindly read the terms and conditions below before proceeding with your booking.</p>
                </div>

                <section className="rounded-xl border border-[#CBB8A7] bg-white/65 p-5 sm:p-6">
                  <h4 className="mb-3 text-sm font-semibold uppercase tracking-widest text-[#8C5E3A]">Deposits</h4>
                  <ul className="list-disc space-y-2 pl-5 text-sm leading-relaxed text-[#4A4540]">
                    <li>A 50% non-refundable deposit is required to secure an appointment.</li>
                    <li>The deposit is deducted from the total service cost.</li>
                    <li>The remaining balance must be paid by cash or bank transfer on the appointment day.</li>
                  </ul>
                </section>

                <section className="rounded-xl border border-[#CBB8A7] bg-white/65 p-5 sm:p-6">
                  <h4 className="mb-3 text-sm font-semibold uppercase tracking-widest text-[#8C5E3A]">All appointments</h4>
                  <ul className="list-disc space-y-2 pl-5 text-sm leading-relaxed text-[#4A4540]">
                    <li>Avoid scheduling other commitments close to your appointment, as the service may take longer than expected.</li>
                    <li>No plus-ones are allowed, except a client under 10 years old attending with a parent or carer.</li>
                    <li>Standard braiding extensions are included in the cost and standard length is waist length. Curly or customised extensions cost an additional £20, blow-drying costs £10, and curled ends cost £15.</li>
                    <li>If you prefer to bring your own extensions, they must be pre-stretched and dropped off at Fatima’s address at least 24 hours before the appointment for preparation.</li>
                  </ul>
                </section>

                <section className="rounded-xl border border-[#CBB8A7] bg-white/65 p-5 sm:p-6">
                  <h4 className="mb-3 text-sm font-semibold uppercase tracking-widest text-[#8C5E3A]">Microblading &amp; lash extensions</h4>
                  <p className="mb-3 text-sm leading-relaxed text-[#4A4540]">Fatima’s supplied policy says not to book these services if any of the following apply to you:</p>
                  <ul className="list-disc space-y-2 pl-5 text-sm leading-relaxed text-[#4A4540]">
                    <li>Pregnant or breastfeeding.</li>
                    <li>History of severe keloids.</li>
                    <li>Taking blood thinners.</li>
                    <li>Uncontrolled diabetes.</li>
                    <li>History of severe allergic reactions.</li>
                    <li>Perfectly defined natural brows.</li>
                    <li>Significant immune problems.</li>
                    <li>Recently had Botox around the brows.</li>
                    <li>Bleeding or clotting problems.</li>
                  </ul>
                </section>

                <section className="rounded-xl border border-[#CBB8A7] bg-white/65 p-5 sm:p-6">
                  <h4 className="mb-3 text-sm font-semibold uppercase tracking-widest text-[#8C5E3A]">Cancellations &amp; rescheduling</h4>
                  <ul className="list-disc space-y-2 pl-5 text-sm leading-relaxed text-[#4A4540]">
                    <li>If you cancel, your 50% deposit will be forfeited.</li>
                    <li>You may reschedule once, provided you give at least 48 hours’ notice before the appointment day.</li>
                  </ul>
                </section>

                <section className="rounded-xl border border-[#CBB8A7] bg-white/65 p-5 sm:p-6">
                  <h4 className="mb-3 text-sm font-semibold uppercase tracking-widest text-[#8C5E3A]">Lateness</h4>
                  <ul className="list-disc space-y-2 pl-5 text-sm leading-relaxed text-[#4A4540]">
                    <li>Please arrive on time. A 10-minute grace period is allowed.</li>
                    <li>11–20 minutes late: £15 late fee.</li>
                    <li>21–30 minutes late: £30 late fee.</li>
                    <li>More than 30 minutes late: the appointment is automatically cancelled and the deposit is forfeited. No rescheduling is allowed for that booking; a new booking requires a new deposit.</li>
                  </ul>
                </section>

                <section className="rounded-xl border border-[#CBB8A7] bg-white/65 p-5 sm:p-6">
                  <h4 className="mb-3 text-sm font-semibold uppercase tracking-widest text-[#8C5E3A]">Hair requirements</h4>
                  <p className="mb-3 text-sm leading-relaxed text-[#4A4540]">For hair appointments, your hair must be:</p>
                  <ol className="list-decimal space-y-2 pl-5 text-sm leading-relaxed text-[#4A4540]">
                    <li>Freshly washed.</li>
                    <li>Properly detangled.</li>
                    <li>Blow-dried.</li>
                    <li>Completely free of oils and products.</li>
                    <li>At least 4 inches long. Hair shorter than 4 inches may result in cancellation; please confirm your hair length before booking.</li>
                  </ol>
                </section>

                <section className="rounded-xl border border-[#CBB8A7] bg-white/65 p-5 sm:p-6">
                  <h4 className="mb-3 text-sm font-semibold uppercase tracking-widest text-[#8C5E3A]">Face preparation</h4>
                  <p className="text-sm leading-relaxed text-[#4A4540]">For microblading, lash appointments or makeup, arrive with a freshly washed face and no makeup or face lotion.</p>
                </section>

                <section className="rounded-xl border border-[#CBB8A7] bg-white/65 p-5 sm:p-6">
                  <h4 className="mb-3 text-sm font-semibold uppercase tracking-widest text-[#8C5E3A]">Photos &amp; social media</h4>
                  <ul className="list-disc space-y-2 pl-5 text-sm leading-relaxed text-[#4A4540]">
                    <li>Photos or videos of clients’ work may be taken for promotion and social media. If you do not want to be featured, inform Fatima.</li>
                    <li>Please tag or mention Mainnasglam_Beauty when sharing your look.</li>
                  </ul>
                </section>

                <label className="flex cursor-pointer items-start gap-3 rounded-xl border border-[#8C5E3A]/40 bg-[#F5ECE4] p-4 text-sm leading-relaxed text-[#2B211B]">
                  <input type="checkbox" checked={policyAccepted} onChange={(event) => setPolicyAccepted(event.target.checked)} className="mt-1 h-4 w-4 shrink-0 accent-[#8C5E3A]" />
                  <span><strong>I have read and agree to the booking terms and conditions.</strong> I understand that continuing means I am agreeing to this policy.</span>
                </label>

                <div className="flex flex-col gap-3 sm:flex-row">
                  <button type="button" onClick={() => { setShowBookingPolicy(false); setPolicyAccepted(false) }} className="border border-[#D8D0C4] px-5 py-3 text-sm text-[#1C1915] hover:border-[#8C5E3A]">← Back to booking form</button>
                  <button type="button" disabled={!policyAccepted} onClick={continueToPayment} className="flex flex-1 items-center justify-center gap-2 bg-[#6F4934] px-5 py-4 text-xs font-semibold uppercase tracking-widest text-white transition-colors hover:bg-[#4A2D1E] disabled:cursor-not-allowed disabled:opacity-40">Agree &amp; Continue to Payment →</button>
                </div>
                <p className="text-center text-xs leading-relaxed text-[#7A726A]">Your service is selected. Review any add-ons before continuing. Thank you, and see you soon x</p>
              </div>
            ) : (
              <div className="space-y-6">
                <div className="rounded-xl border border-white/80 bg-white/55 p-5 shadow-sm backdrop-blur-xl sm:p-6">
                  <p className="mb-2 text-xs font-semibold uppercase tracking-[0.18em] text-[#8C5E3A]">Step 3 of 3</p>
                  <h3 className="font-display text-2xl text-[#2B211B]">Booking instructions &amp; payment</h3>
                  <p className="mt-3 text-sm leading-relaxed text-[#71645B]">Please check your service, appointment date and selected options before making a transfer. Your booking is not confirmed until Fatima confirms it.</p>
                  <ol className="mt-4 list-decimal space-y-2 pl-5 text-sm leading-relaxed text-[#4A4540]">
                    <li>Review the service and amount shown below.</li>
                    <li>For a fixed-price service, the suggested deposit is 50% of the listed service total. Confirm the amount with Fatima if you are unsure.</li>
                    <li>For lessons marked “Enquire” or any unconfirmed transport/add-on fee, message Fatima to agree the final amount before paying.</li>
                    <li>After paying, return to WhatsApp and attach your transfer receipt so Fatima can check it.</li>
                  </ol>
                </div>

                <div className="rounded-xl border border-[#CBB8A7] bg-white/65 p-5 backdrop-blur-xl sm:p-6">
                  <p className="mb-3 text-xs font-semibold uppercase tracking-[0.18em] text-[#8C5E3A]">Payment details</p>
                  <div className="space-y-3 text-sm text-[#4A4540]">
                    <div className="grid grid-cols-1 gap-1 border-b border-[#E6DCD2] pb-3 sm:grid-cols-[110px_minmax(0,1fr)] sm:gap-4"><span className="text-sm text-[#71645B]">Bank</span><strong className="min-w-0 break-words text-left text-sm leading-relaxed text-[#2B211B] [overflow-wrap:anywhere] sm:text-right">{BANK_NAME}</strong></div>
                    <div className="grid grid-cols-1 gap-1 border-b border-[#E6DCD2] pb-3 sm:grid-cols-[110px_minmax(0,1fr)] sm:gap-4"><span className="text-sm text-[#71645B]">Account name</span><strong className="min-w-0 break-words text-left text-sm leading-relaxed text-[#2B211B] [overflow-wrap:anywhere] sm:text-right">{ACCOUNT_NAME}</strong></div>
                    <div className="grid grid-cols-1 gap-1 border-b border-[#E6DCD2] pb-3 sm:grid-cols-[110px_minmax(0,1fr)] sm:gap-4"><span className="text-sm text-[#71645B]">Account number</span><strong className="min-w-0 break-words text-left text-sm leading-relaxed text-[#2B211B] [overflow-wrap:anywhere] sm:text-right">{ACCOUNT_NUMBER}</strong></div>
                    <div className="flex flex-wrap justify-between gap-2 pt-1"><span>Service total</span><strong className="text-right text-[#2B211B]">{totalPrice === null ? 'Quote required' : money(totalPrice)}</strong></div>
                    <div className="flex flex-wrap justify-between gap-2"><span>Suggested 50% deposit</span><strong className="text-right text-[#70452F]">{deposit === null ? 'Confirm with Fatima' : money(deposit)}</strong></div>
                    {isOutcall && <p className="border-t border-[#E6DCD2] pt-3 text-xs leading-relaxed">Home-service transport is additional and is not included in this amount.</p>}
                  </div>
                </div>

                <div className="rounded-lg border border-[#D8C2AF] bg-[#F5ECE4]/80 p-4 text-sm leading-relaxed text-[#4A4540]">
                  <strong className="text-[#2B211B]">Important:</strong> Replace the placeholder bank details in the code with Fatima’s verified account details before publishing. Never transfer to an account until the account name and amount have been confirmed. If the service says “Quote required”, contact Fatima first instead of guessing the payment amount.
                </div>

                <div className="flex flex-col gap-3 sm:flex-row">
                  <button type="button" onClick={() => setShowPaymentInstructions(false)} className="border border-[#D8D0C4] px-5 py-3 text-sm text-[#1C1915] hover:border-[#8C5E3A]">← Back to policy</button>
                  <button type="button" onClick={sendBooking} className="flex flex-1 items-center justify-center gap-2 rounded-sm bg-[#6F4934] px-5 py-4 text-xs font-semibold uppercase tracking-widest text-white transition-colors hover:bg-[#4A2D1E]">{totalPrice === null ? 'Confirm Quote on WhatsApp ↗' : 'I’ve Paid — Continue to WhatsApp ↗'}</button>
                </div>
                <p className="text-center text-xs leading-relaxed text-[#7A726A]">WhatsApp will open with your booking details. Attach your payment receipt in the chat before sending. The website cannot verify payment automatically.</p>
              </div>
            )}
          </div>
        </div>
      )}
    </main>
  )
}
