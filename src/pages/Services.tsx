import { useEffect, useState } from 'react'
import { collection, onSnapshot } from 'firebase/firestore'
import { db } from '../lib/firebase'

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


const ACCOUNT_NUMBER = '33348140'
const SORT_CODE = "04-06-05";
const BANK_ADDRESS = "4th floor , The Featherstne building, 66 City Road, London, EC1Y 2AL";


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

function DateCalendar({
  selectedDate,
  blockedDates,
  onSelect,
}: {
  selectedDate: string
  blockedDates: string[]
  onSelect: (date: string) => void
}) {
  const [visibleMonth, setVisibleMonth] = useState(() => {
    const today = new Date()
    return new Date(today.getFullYear(), today.getMonth(), 1)
  })

  const today = getLocalDate()
  const year = visibleMonth.getFullYear()
  const month = visibleMonth.getMonth()
  const monthName = visibleMonth.toLocaleDateString('en-GB', {
    month: 'long',
    year: 'numeric',
  })
  const firstWeekday = new Date(year, month, 1).getDay()
  const daysInMonth = new Date(year, month + 1, 0).getDate()
  const calendarDays: (string | null)[] = [
    ...Array.from({ length: firstWeekday }, () => null),
    ...Array.from({ length: daysInMonth }, (_, index) => {
      return `${year}-${String(month + 1).padStart(2, '0')}-${String(index + 1).padStart(2, '0')}`
    }),
  ]
  const currentYear = Number(today.slice(0, 4))
  const currentMonth = Number(today.slice(5, 7)) - 1
  const isPreviousMonthDisabled =
    year < currentYear || (year === currentYear && month <= currentMonth)

  return (
    <div className="rounded-xl border border-[#D8C2AF] bg-white/80 p-4 shadow-sm sm:p-5">
      <div className="mb-5 flex items-center justify-between gap-3">
        <div>
          <p className="text-[10px] uppercase tracking-[0.2em] text-[#8C5E3A]">Appointment calendar</p>
          <h3 className="mt-1 font-display text-xl text-[#2B211B]">{monthName}</h3>
        </div>
        <div className="flex gap-2">
          <button type="button" onClick={() => setVisibleMonth(new Date(year, month - 1, 1))} disabled={isPreviousMonthDisabled} aria-label="Previous month" className="flex h-9 w-9 items-center justify-center rounded-full border border-[#D8D0C4] text-[#70452F] transition hover:bg-[#F5ECE4] disabled:cursor-not-allowed disabled:opacity-30">‹</button>
          <button type="button" onClick={() => setVisibleMonth(new Date(year, month + 1, 1))} aria-label="Next month" className="flex h-9 w-9 items-center justify-center rounded-full border border-[#D8D0C4] text-[#70452F] transition hover:bg-[#F5ECE4]">›</button>
        </div>
      </div>
      <div className="mb-2 grid grid-cols-7 gap-1">
        {['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].map((day) => (
          <div key={day} className="py-2 text-center text-[10px] font-medium uppercase tracking-wide text-[#8C8178] sm:text-xs">{day}</div>
        ))}
      </div>
      <div className="grid grid-cols-7 gap-1">
        {calendarDays.map((date, index) => {
          if (!date) return <div key={`empty-${index}`} className="aspect-square" />
          const dayNumber = Number(date.slice(8, 10))
          const isPast = date < today
          const isBlocked = blockedDates.includes(date)
          const isUnavailable = isPast || isBlocked
          const isSelected = selectedDate === date
          return (
            <button key={date} type="button" disabled={isUnavailable} aria-label={`${dayNumber}${isBlocked ? ', unavailable' : ''}`} aria-pressed={isSelected} title={isBlocked ? 'This date is unavailable' : isPast ? 'Past dates cannot be selected' : 'Select this date'} onClick={() => onSelect(date)} className={[
              'relative flex aspect-square min-w-0 items-center justify-center rounded-lg border text-xs transition-all duration-200 sm:text-sm',
              isSelected ? 'border-[#70452F] bg-[#70452F] font-semibold text-white shadow-md' : isUnavailable ? 'cursor-not-allowed border-[#E5DFD9] bg-[#EDE9E5] text-[#AAA19A] line-through' : 'border-transparent bg-[#FAF8F4] text-[#4A4540] hover:border-[#B78A68] hover:bg-[#F5ECE4]',
            ].join(' ')}>
              {dayNumber}
              {isBlocked && <span className="absolute bottom-1 h-1 w-1 rounded-full bg-[#B9AFA7]" />}
            </button>
          )
        })}
      </div>
      <div className="mt-5 flex flex-wrap gap-x-4 gap-y-2 border-t border-[#E8DFD6] pt-4">
        <div className="flex items-center gap-2 text-xs text-[#71645B]"><span className="h-3 w-3 rounded-sm border border-[#D8D0C4] bg-[#FAF8F4]" />Available</div>
        <div className="flex items-center gap-2 text-xs text-[#71645B]"><span className="h-3 w-3 rounded-sm border border-[#E5DFD9] bg-[#EDE9E5]" />Unavailable</div>
        <div className="flex items-center gap-2 text-xs text-[#71645B]"><span className="h-3 w-3 rounded-sm bg-[#70452F]" />Selected</div>
      </div>
    </div>
  )
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
  const [showPaymentInstructions, setShowPaymentInstructions] = useState(false)
  const [selectedOption, setSelectedOption] = useState('')
  const [extraLength, setExtraLength] = useState(false)
  const [needHair, setNeedHair] = useState(false)

  const [appointmentDate, setAppointmentDate] = useState('')
  const [appointmentTime, setAppointmentTime] = useState('')
  const [blockedDates, setBlockedDates] = useState<string[]>([])
  const [availabilityLoaded, setAvailabilityLoaded] = useState(false)
  const [availabilityError, setAvailabilityError] = useState(false)
  const [availabilityMessage, setAvailabilityMessage] = useState('')

  useEffect(() => {
    const unsubscribe = onSnapshot(
      collection(db, 'blockedDates'),
      (snapshot) => {
        setBlockedDates(snapshot.docs.map((document) => document.id))
        setAvailabilityLoaded(true)
        setAvailabilityError(false)
      },
      (error) => {
        console.error('Failed to load blocked dates:', error)
        setAvailabilityError(true)
        setAvailabilityLoaded(true)
      }
    )
    return () => unsubscribe()
  }, [])

  useEffect(() => {
    if (appointmentDate && blockedDates.includes(appointmentDate)) {
      setAppointmentDate('')
      setAppointmentTime('')
      setAvailabilityMessage('That date is no longer available. Please choose another date.')
    }
  }, [blockedDates, appointmentDate])
  const [customerName, setCustomerName] = useState('')
  const [customerPhone, setCustomerPhone] = useState('')
  const [customerEmail, setCustomerEmail] = useState('')
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
    setShowPaymentInstructions(false)
    setSelectedOption(service.sizes?.[0]?.label ?? '')
    setExtraLength(false)
    setNeedHair(false)
    setAppointmentDate('')
    setAppointmentTime('')
    setAvailabilityMessage('')
    setCustomerName('')
    setCustomerPhone('')
    setCustomerEmail('')
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
    setShowPaymentInstructions(false)
  }

  const continueToPayment = () => {
    if (!selectedService || !appointmentDate || !appointmentTime) return

    if (!availabilityLoaded || availabilityError) {
      setAvailabilityMessage('We couldn’t verify availability. Please try again shortly.')
      return
    }

    if (blockedDates.includes(appointmentDate) || appointmentDate < getLocalDate()) {
      setAppointmentDate('')
      setAppointmentTime('')
      setAvailabilityMessage('That date is unavailable. Please choose another date.')
      return
    }

    if (!customerName.trim() || !customerPhone.trim()) return
    if (isLesson && !customerEmail.trim()) return
    if (selectedService.sizes && !selectedOption) return
    if (isBridal && (!eventType.trim() || !eventVenue.trim() || !readyTime)) return
    if (isOutcall && !locationAddress.trim()) return
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
      isBridal
        ? `Event type: ${eventType}
Venue/location: ${eventVenue}
Time I need to be ready: ${readyTime}
Number of people needing makeup: ${peopleCount}
Touch-up: ${touchUp}`
        : '',
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
                a: 'Choose a service, complete the booking form, read the booking instructions, transfer the confirmed amount to Fatima’s verified account, then continue to WhatsApp and attach your payment receipt. For quote-based services or transport fees, agree the final amount first.',
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
                  {isBridal ? 'Bridal consultation' : isHair ? 'Hair booking' : 'Book your appointment'}
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

            {!showPaymentInstructions ? (
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
                {!availabilityLoaded && (
                  <div className="rounded-xl border border-[#D8D0C4] bg-white/70 p-5 text-sm text-[#7A726A]">
                    <span className="inline-flex items-center gap-2">
                      <span className="h-4 w-4 animate-spin rounded-full border-2 border-[#D8D0C4] border-t-[#8C5E3A]" />
                      Checking appointment availability...
                    </span>
                  </div>
                )}
                {availabilityLoaded && !availabilityError && (
                  <DateCalendar
                    selectedDate={appointmentDate}
                    blockedDates={blockedDates}
                    onSelect={(date) => {
                      if (blockedDates.includes(date) || date < getLocalDate()) {
                        setAvailabilityMessage('That date is unavailable. Please choose another date.')
                        return
                      }
                      setAppointmentDate(date)
                      setAppointmentTime('')
                      setAvailabilityMessage('')
                    }}
                  />
                )}
                {appointmentDate && (
                  <p className="mt-3 text-sm font-medium text-[#70452F]">Selected: {formatDate(appointmentDate)}</p>
                )}
                {availabilityError && (
                  <div className="rounded-xl border border-red-200 bg-red-50 p-4 text-sm text-red-800">
                    We couldn’t load appointment availability. Please refresh the page and try again.
                  </div>
                )}
                {availabilityMessage && (
                  <div role="status" aria-live="polite" className="mt-3 rounded-lg border border-[#D8C2AF] bg-[#F5ECE4] p-4">
                    <p className="flex items-center gap-2 text-sm font-medium text-[#70452F]">
                      <span aria-hidden="true">ⓘ</span>
                      Date unavailable
                    </p>
                    <p className="mt-1 text-sm leading-relaxed text-[#71645B]">{availabilityMessage}</p>
                  </div>
                )}
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

            {selectedService.category === 'Lessons' && (
              <div className="mt-5">
                <label className="mb-2 block text-sm font-medium text-[#1C1915]">Email address *</label>
                <input type="email" value={customerEmail} onChange={(event) => setCustomerEmail(event.target.value)} placeholder="you@example.com" className="w-full border border-[#D8D0C4] bg-white px-4 py-3 text-sm outline-none focus:border-[#8C5E3A]" />
              </div>
            )}

            {isOutcall && (
              <div className="mt-5">
                <label className="mb-2 block text-sm font-medium text-[#1C1915]">Appointment address or area *</label>
                <input value={locationAddress} onChange={(event) => setLocationAddress(event.target.value)} placeholder="Area, address or venue" className="w-full border border-[#D8D0C4] bg-white px-4 py-3 text-sm outline-none focus:border-[#8C5E3A]" />
              </div>
            )}

            {isBridal && (
              <div className="mt-6 border-t border-[#D8D0C4] pt-6">
                <p className="mb-4 text-xs uppercase tracking-widest text-[#8C5E3A]">Event consultation</p>
                <div className="grid gap-5 sm:grid-cols-2">
                  <div>
                    <label className="mb-2 block text-sm font-medium text-[#1C1915]">Event type *</label>
                    <input value={eventType} onChange={(event) => setEventType(event.target.value)} placeholder="Wedding, engagement..." className="w-full border border-[#D8D0C4] bg-white px-4 py-3 text-sm outline-none focus:border-[#8C5E3A]" />
                  </div>
                  <div>
                    <label className="mb-2 block text-sm font-medium text-[#1C1915]">Venue/location *</label>
                    <input value={eventVenue} onChange={(event) => setEventVenue(event.target.value)} placeholder="Venue or area" className="w-full border border-[#D8D0C4] bg-white px-4 py-3 text-sm outline-none focus:border-[#8C5E3A]" />
                  </div>
                  <div>
                    <label className="mb-2 block text-sm font-medium text-[#1C1915]">Time you need to be ready *</label>
                    <input type="time" value={readyTime} onChange={(event) => setReadyTime(event.target.value)} className="w-full border border-[#D8D0C4] bg-white px-4 py-3 text-sm outline-none focus:border-[#8C5E3A]" />
                  </div>
                  <div>
                    <label className="mb-2 block text-sm font-medium text-[#1C1915]">People needing makeup</label>
                    <select value={peopleCount} onChange={(event) => setPeopleCount(event.target.value)} className="w-full border border-[#D8D0C4] bg-white px-4 py-3 text-sm outline-none focus:border-[#8C5E3A]">
                      {['1', '2', '3', '4', '5', '6', '7', '8+'].map((count) => <option key={count}>{count}</option>)}
                    </select>
                  </div>
                </div>
                <div className="mt-5">
                  <label className="mb-2 block text-sm font-medium text-[#1C1915]">Touch-up service?</label>
                  <select value={touchUp} onChange={(event) => setTouchUp(event.target.value)} className="w-full border border-[#D8D0C4] bg-white px-4 py-3 text-sm outline-none focus:border-[#8C5E3A]">
                    <option>No</option>
                    <option>Yes</option>
                    <option>Please discuss with Fatima</option>
                  </select>
                </div>
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
                  !availabilityLoaded ||
                  availabilityError ||
                  !appointmentDate ||
                  !appointmentTime ||
                  !customerName.trim() ||
                  !customerPhone.trim() ||
                  (isLesson && !customerEmail.trim()) ||
                  (Boolean(selectedService.sizes) && !selectedOption) ||
                  (isBridal && (!eventType.trim() || !eventVenue.trim() || !readyTime)) ||
                  (isOutcall && !locationAddress.trim())
                }
                onClick={continueToPayment}
                className="flex flex-1 items-center justify-center gap-2 rounded-sm bg-[#6F4934] px-5 py-4 text-xs font-medium uppercase tracking-widest text-white transition-colors hover:bg-[#4A2D1E] disabled:cursor-not-allowed disabled:opacity-40"
              >
                Read Booking Instructions →
              </button>
            </div>
              </>
            ) : (
              <div className="space-y-6">
                <div className="rounded-xl border border-white/80 bg-white/55 p-5 shadow-sm backdrop-blur-xl sm:p-6">
                  <p className="mb-2 text-xs font-semibold uppercase tracking-[0.18em] text-[#8C5E3A]">Step 2 of 3</p>
                  <h3 className="font-display text-2xl text-[#2B211B]">Booking instructions</h3>
                  <p className="mt-3 text-sm leading-relaxed text-[#71645B]">Please check your service, appointment date and selected options before making a transfer. Your booking is not confirmed until Fatima confirms it.</p>
                  <ol className="mt-4 list-decimal space-y-2 pl-5 text-sm leading-relaxed text-[#4A4540]">
                    <li>Review the service and amount shown below.</li>
                    <li>For a fixed-price service, the suggested deposit is 50% of the listed service total. Confirm the amount with Fatima if you are unsure.</li>
                    <li>For lessons marked “Enquire” or any unconfirmed transport/add-on fee, message Fatima to agree the final amount before paying.</li>
                    <li>After paying, return to WhatsApp and attach your transfer receipt so Fatima can check it.</li>
                  </ol>
                </div>

{/*                     
      <div className="flex flex-wrap justify-between gap-2 border-b border-[#E6DCD2] pb-3">
        <span>Bank</span>
        <strong className="text-right text-[#2B211B]">{BANK_NAME}</strong>
      </div>

<div className="flex flex-wrap justify-between gap-2 border-b border-[#E6DCD2] pb-3">
  <span>Account name</span>
  <strong className="text-right text-[#2B211B]">{ACCOUNT_NAME}</strong>
</div> */}

<div className="flex flex-wrap justify-between gap-2 border-b border-[#E6DCD2] pb-3">
  <span>Account number</span>
  <strong className="text-right text-[#2B211B]">{ACCOUNT_NUMBER}</strong>
</div>

<div className="flex flex-wrap justify-between gap-2 border-b border-[#E6DCD2] pb-3">
  <span>Sort code</span>
  <strong className="text-right text-[#2B211B]">{SORT_CODE}</strong>
</div>

<div className="flex flex-wrap justify-between gap-2 border-b border-[#E6DCD2] pb-3">
  <span>Bank address</span>
  <strong className="text-right text-[#2B211B]">{BANK_ADDRESS}</strong>
</div>


                <div className="rounded-lg border border-[#D8C2AF] bg-[#F5ECE4]/80 p-4 text-sm leading-relaxed text-[#4A4540]">
                  <strong className="text-[#2B211B]">Important:</strong> Replace the placeholder bank details in the code with Fatima’s verified account details before publishing. Never transfer to an account until the account name and amount have been confirmed. If the service says “Quote required”, contact Fatima first instead of guessing the payment amount.
                </div>

                <div className="flex flex-col gap-3 sm:flex-row">
                  <button type="button" onClick={() => setShowPaymentInstructions(false)} className="border border-[#D8D0C4] px-5 py-3 text-sm text-[#1C1915] hover:border-[#8C5E3A]">← Back to booking</button>
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