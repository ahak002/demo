import { Link } from 'react-router-dom'
import { Icon } from './Shared'
import { companyDetails } from '../data'

function Footer() {
  return <footer className="site-footer"><div className="container footer-main">
    <div className="footer-brand"><Link className="brand brand-light" to="/"><span className="brand-mark">Z<span>.</span></span><span className="brand-copy"><strong>ZANZIBAR<br />LUXURY HOLIDAY</strong><small>AFRICAN ADVENTURES, CURATED.</small></span></Link><p>From the spice island of Zanzibar to the wild heart of Tanzania, we create journeys that feel personal, effortless and memorable.</p><div className="social-links"><a href="https://wa.me/255773958595" target="_blank" rel="noreferrer">WA</a><a href="mailto:zanzibarluxuryholiday@gmail.com" target="_blank" rel="noreferrer">MAIL</a></div></div>
    <div className="footer-column"><h3>Explore</h3><Link to="/">Home</Link><Link to="/flights">Flights</Link><Link to="/safaris">Safari Tours</Link><Link to="/about">About Us</Link><Link to="/contact">Contact</Link></div>
    <div className="footer-column"><h3>Our services</h3><Link to="/safaris">Wildlife safaris</Link><Link to="/safaris">Beach holidays</Link><Link to="/contact">Air ticketing</Link><Link to="/contact">Airport transfers</Link><Link to="/contact">Tailor-made travel</Link></div>
    <div className="footer-note"><span className="eyebrow eyebrow-light">LET'S PLAN YOUR NEXT</span><h3>Wild days,<br />quiet beaches,<br />beautiful memories.</h3><Link className="footer-contact" to="/contact">Talk to our team <Icon name="arrow" size={16} /></Link></div>
  </div><div className="container footer-bottom"><span>© 2026 Zanzibar Luxury Holiday. All Rights Reserved.</span><span>{companyDetails.address}</span><Link to="/contact">Privacy &amp; enquiries</Link></div></footer>
}


export default Footer
