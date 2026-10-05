import { useState } from 'react'
import { Link } from 'react-router-dom'
import Header from './Header'
import Footer from './Footer'
import { Icon, WhatsAppLink } from './Shared'
import { images } from '../data'

export function PageLayout({ children }) {
  return <><Header /><main>{children}</main><Footer /></>
}

export function PageIntro({ eyebrow, title, description, image }) {
  return <section className="page-intro" style={{ backgroundImage: `linear-gradient(90deg, rgba(12,34,27,.88), rgba(12,34,27,.48)), url("${image}")` }}><div className="container page-intro-copy"><span className="eyebrow eyebrow-light">{eyebrow}</span><h1>{title}</h1><p>{description}</p></div></section>
}

export function InquiryNotice() {
  return <p className="form-notice" role="status">This demo form is not connected to a booking system and does not send or store your details. Please contact our team directly to arrange your trip.</p>
}

export function FlightSearch({ compact = false }) {
  const [submitted, setSubmitted] = useState(false)
  const [tripType, setTripType] = useState('Round trip')
  return <form className={`flight-form ${compact ? 'flight-form-compact' : 'flight-form-detailed'}`} onSubmit={event => { event.preventDefault(); setSubmitted(true) }}>
    {!compact && <div className="trip-type"><label><input type="radio" name="trip" value="Round trip" checked={tripType === 'Round trip'} onChange={event => setTripType(event.target.value)} /> Round trip</label><label><input type="radio" name="trip" value="One way" checked={tripType === 'One way'} onChange={event => setTripType(event.target.value)} /> One way</label></div>}
    <div className="flight-fields">
      <label className="field"><span>From</span><input required placeholder="e.g. Dar es Salaam" /></label><span className="route-swap" aria-hidden="true">â†”</span>
      <label className="field"><span>To</span><input required placeholder="Where to?" /></label><label className="field"><span>Departure</span><input required type="date" /></label><label className="field"><span>Return</span><input type="date" disabled={tripType === 'One way'} /></label>
      {compact
        ? <label className="field"><span>Passengers</span><select defaultValue="1"><option value="1">1 traveller</option><option>2 travellers</option><option>3 travellers</option><option>4+ travellers</option></select></label>
        : <><label className="field"><span>Adults</span><select defaultValue="1"><option>1</option><option>2</option><option>3</option><option>4+</option></select></label><label className="field"><span>Children</span><select defaultValue="0"><option>0</option><option>1</option><option>2</option><option>3+</option></select></label></>}
      <label className="field"><span>Travel class</span><select defaultValue="Economy"><option>Economy</option><option>Premium Economy</option><option>Business</option><option>First</option></select></label>
      <button className="button search-button" type="submit"><Icon name="plane" size={17} /> Search flights</button>
    </div>{submitted && <InquiryNotice />}
  </form>
}

export function SectionHeading({ eyebrow, title, description, link, to = '/safaris', centered = false }) {
  return <div className={`section-heading ${centered ? 'centered' : ''}`}><div><span className="eyebrow">{eyebrow}</span><h2>{title}</h2>{description && <p>{description}</p>}</div>{link && <Link className="text-link" to={to}>{link}<Icon name="arrow" size={16} /></Link>}</div>
}

export function DestinationCard({ item, index }) {
  return <article className="destination-card"><Link to={`/safaris/${item.short.toLowerCase()}`} className="destination-image"><img src={item.image} alt={`${item.name} landscape`} loading="lazy" /><span className="card-index">0{index + 1}</span><span className="image-arrow"><Icon name="arrow" size={17} /></span></Link><div className="destination-copy"><span className="card-kicker">{item.region}</span><h3>{item.name}</h3><p>{item.description}</p><Link className="text-link" to={`/safaris/${item.short.toLowerCase()}`}>View safari <Icon name="arrow" size={15} /></Link></div></article>
}

export function PackageCard({ item }) {
  return <article className="package-card"><Link to={`/safaris/${item.slug}`} className="package-image"><img src={item.image} alt={item.title} loading="lazy" /><span className="package-duration"><Icon name="clock" size={14} /> {item.days}</span><span className="package-image-link"><Icon name="arrow" size={17} /></span></Link><div className="package-copy"><div className="package-meta"><span>{item.type}</span><span><Icon name="pin" size={13} /> Tanzania</span></div><h3>{item.title}</h3><p>{item.description}</p>  <div className="package-foot"><div><small>Starting from</small><strong>{item.price}</strong></div><div className="package-actions"><Link className="button button-outline" to={`/safaris/${item.slug}`}>View details</Link><Link className="button package-book-button" to="/contact">Book now</Link></div></div></div></article>
}

