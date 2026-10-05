import { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { Icon, WhatsAppLink } from './Shared'
import { companyDetails } from '../data'

function Header() {
  const [menuOpen, setMenuOpen] = useState(false)
  const closeMenu = () => setMenuOpen(false)
  return <header className="site-header">
    <div className="top-strip"><div className="container top-strip-inner"><span>Made for unforgettable journeys.</span><span className="top-contact"><Icon name="phone" size={13} /> {companyDetails.address} · {companyDetails.phone}</span></div></div>
    <div className="container nav-shell">
      <Link className="brand" to="/" onClick={closeMenu} aria-label="Zanzibar Luxury Holiday home"><span className="brand-mark">Z<span>.</span></span><span className="brand-copy"><strong>ZANZIBAR<br />LUXURY HOLIDAY</strong><small>AFRICAN ADVENTURES, CURATED.</small></span></Link>
      <button className="menu-toggle" aria-label={menuOpen ? 'Close navigation' : 'Open navigation'} aria-expanded={menuOpen} onClick={() => setMenuOpen(!menuOpen)}><Icon name={menuOpen ? 'close' : 'menu'} size={22} /></button>
      <nav className={`main-nav ${menuOpen ? 'is-open' : ''}`} aria-label="Main navigation">
        <NavLink to="/" end onClick={closeMenu}>Home</NavLink><NavLink to="/flights" onClick={closeMenu}>Flights</NavLink><NavLink to="/safaris" onClick={closeMenu}>Safari Tours</NavLink><NavLink to="/about" onClick={closeMenu}>About Us</NavLink><NavLink to="/contact" onClick={closeMenu}>Contact</NavLink>
        <Link className="button button-small nav-book" to="/contact" onClick={closeMenu}>Book Now <Icon name="arrow" size={15} /></Link><WhatsAppLink className="nav-whatsapp" />
      </nav>
    </div>
  </header>
}


export default Header
