import { BrowserRouter, Link, Route, Routes } from 'react-router-dom'
import { Icon } from './components/Shared'
import { PageLayout } from './components/PageShared'
import HomePage from './pages/HomePage'
import FlightsPage from './pages/FlightsPage'
import SafarisPage from './pages/SafarisPage'
import SafariDetailPage from './pages/SafariDetailPage'
import ContactPage from './pages/ContactPage'
import AboutPage from './pages/AboutPage'
import './App.css'



function NotFoundPage() {
  return <PageLayout><section className="not-found"><span className="eyebrow">A LITTLE OFF COURSE</span><h1>We can help you find your way.</h1><p>The page youâ€™re looking for isnâ€™t here. Letâ€™s get you back to the good part.</p><Link className="button" to="/">Back to home <Icon name="arrow" size={16} /></Link></section></PageLayout>
}

function AppRoutes() {
  return <Routes><Route path="/" element={<HomePage />} /><Route path="/flights" element={<FlightsPage />} /><Route path="/safaris" element={<SafarisPage />} /><Route path="/safaris/:slug" element={<SafariDetailPage />} /><Route path="/about" element={<AboutPage />} /><Route path="/contact" element={<ContactPage />} /><Route path="*" element={<NotFoundPage />} /></Routes>
}

export default function App() {
  return <BrowserRouter><AppRoutes /></BrowserRouter>
}