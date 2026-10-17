
import { BrowserRouter, useLocation, useNavigate } from 'react-router-dom'
import Nav from './components/Nav'
import Footer from './components/Footer'
import Home from './pages/Home'
import About from './pages/About'
import Services from './pages/Services'
import Portfolio from './pages/Portfolio'
import Contact from './pages/Contact'
import Booking from './pages/Booking'
import Admin from './pages/Admin'

type Page =
  | 'home'
  | 'about'
  | 'services'
  | 'portfolio'
  | 'contact'
  | 'booking'
  | 'admin'

const validPages: Page[] = [
  'home',
  'about',
  'services',
  'portfolio',
  'contact',
  'booking',
  'admin',
]

function AppContent() {
  const location = useLocation()
  const routerNavigate = useNavigate()

  const path = location.pathname.replace(/^\/+|\/+$/g, '')
  const currentPage: Page = path === ''
    ? 'home'
    : validPages.includes(path as Page)
      ? (path as Page)
      : 'home'

  const navigate = (page: Page) => {
    routerNavigate(page === 'home' ? '/' : `/${page}`)
  }

  // Keep the admin area separate from the public website.
  if (currentPage === 'admin') {
    return <Admin onBack={() => navigate('home')} />
  }

  const pages: Record<Page, React.ReactNode> = {
    home: <Home onNavigate={navigate} />,
    about: <About onNavigate={navigate} />,
    services: <Services onNavigate={navigate} />,
    portfolio: <Portfolio onNavigate={navigate} />,
    contact: <Contact onNavigate={navigate} />,
    booking: <Booking onNavigate={navigate} />,
    admin: <Admin onBack={() => navigate('home')} />,
  }

  return (
    <div className="min-h-screen flex flex-col bg-[#FAF8F4]">
      <Nav currentPage={currentPage} onNavigate={navigate} />

      <div className="flex-1">
        {pages[currentPage]}
      </div>

      <Footer onNavigate={navigate} />
    </div>
  )
}

export default function App() {
  return (
    <BrowserRouter>
      <AppContent />
    </BrowserRouter>
  )
}
