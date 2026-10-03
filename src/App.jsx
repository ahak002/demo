import { useState } from 'react'
import { BrowserRouter, Link, NavLink, Route, Routes, useParams } from 'react-router-dom'
import './App.css'

const images = {
  hero: 'https://images.unsplash.com/photo-1516426122078-c23e76319801?auto=format&fit=crop&w=2200&q=85',
  serengeti: 'https://images.unsplash.com/photo-1516026672322-bc52d61a55d5?auto=format&fit=crop&w=1100&q=85',
  ngorongoro: 'https://images.unsplash.com/photo-1517457373958-b7bdd4587205?auto=format&fit=crop&w=1100&q=85',
  tarangire: 'https://images.unsplash.com/photo-1549366021-9f761d450615?auto=format&fit=crop&w=1100&q=85',
  mikumi: 'https://images.unsplash.com/photo-1534177616072-ef7dc120449d?auto=format&fit=crop&w=1100&q=85',
  nyerere: 'https://images.unsplash.com/photo-1547970810-dc1eac37d174?auto=format&fit=crop&w=1100&q=85',
  zanzibar: 'https://images.unsplash.com/photo-1518548419970-58e3b4079ab2?auto=format&fit=crop&w=1100&q=85',
  plane: 'https://images.unsplash.com/photo-1436491865332-7a61a109cc05?auto=format&fit=crop&w=1500&q=85',
  lodge: 'https://images.unsplash.com/photo-1510798831971-661eb04b3739?auto=format&fit=crop&w=1200&q=85',
  beach: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1100&q=85',
}

const destinations = [
  { name: 'Serengeti National Park', short: 'Serengeti', image: images.serengeti, region: 'Northern Circuit', description: 'Follow the rhythm of the wild across endless plains, home to the Great Migration and remarkable year-round wildlife.' },
  { name: 'Ngorongoro Crater', short: 'Ngorongoro', image: images.ngorongoro, region: 'Northern Circuit', description: 'Descend into a spectacular volcanic caldera for a close-up encounter with one of Africa’s richest wildlife habitats.' },
  { name: 'Tarangire National Park', short: 'Tarangire', image: images.tarangire, region: 'Northern Circuit', description: 'Discover ancient baobabs, quiet wilderness and some of Tanzania’s largest elephant herds.' },
  { name: 'Mikumi National Park', short: 'Mikumi', image: images.mikumi, region: 'Southern Circuit', description: 'An accessible safari escape with open horizons, plentiful wildlife and the beautiful Mkata floodplain.' },
  { name: 'Selous / Nyerere', short: 'Nyerere', image: images.nyerere, region: 'Southern Circuit', description: 'Explore a vast, untamed wilderness by game drive, boat safari or a guided walk along the Rufiji River.' },
  { name: 'Zanzibar', short: 'Zanzibar', image: images.zanzibar, region: 'Island Escape', description: 'Slow down on palm-fringed shores, explore historic Stone Town and swim in the turquoise Indian Ocean.' },
]

const packages = [
  { slug: '3-days-serengeti', title: '3 Days Serengeti Safari', days: '3 days', destination: 'Serengeti', image: images.serengeti, price: 'Request a quote', description: 'A rewarding short escape into the Serengeti with wildlife viewing, a professional guide, transport and accommodation.', type: 'Wildlife Safari' },
  { slug: '4-days-serengeti-ngorongoro', title: '4 Days Serengeti & Ngorongoro', days: '4 days', destination: 'Serengeti · Ngorongoro', image: images.ngorongoro, price: 'Request a quote', description: 'Experience the Serengeti plains and the famous Ngorongoro Crater on one unforgettable northern circuit journey.', type: 'Luxury Safari' },
  { slug: '5-days-tanzania-safari', title: '5 Days Tanzania Safari', days: '5 days', destination: 'Tarangire · Serengeti · Ngorongoro', image: images.tarangire, price: 'Request a quote', description: 'Visit three iconic parks, with time to enjoy Tarangire, explore the Serengeti and descend into the crater.', type: 'Family Safari' },
  { slug: 'zanzibar-safari', title: 'Zanzibar + Safari Package', days: '7+ days', destination: 'Safari · Zanzibar', image: images.zanzibar, price: 'Request a quote', description: 'Pair thrilling days on safari with a relaxing Indian Ocean beach holiday, tailored to your pace.', type: 'Beach + Safari' },
]

const services = [
  { number: '01', icon: '✈', title: 'International Flight Tickets', description: 'Thoughtful flight options and personal booking assistance for journeys around the world.' },
  { number: '02', icon: '♧', title: 'Tanzania Safari Tours', description: 'Private and small-group adventures, planned with local knowledge and care.' },
  { number: '03', icon: '⌂', title: 'Hotel Booking', description: 'From comfortable city stays to intimate safari lodges and beach retreats.' },
  { number: '04', icon: '↗', title: 'Airport Transfers', description: 'Reliable arrival and departure transfers, arranged around your itinerary.' },
  { number: '05', icon: '✳', title: 'Tailor-made Travel', description: 'A personal itinerary shaped around your interests, timing and travel style.' },
]

const destinationsAbroad = ['Dubai', 'Istanbul', 'Nairobi', 'Johannesburg', 'London', 'Doha', 'Mumbai', 'Addis Ababa']
const safariTypes = ['Wildlife Safari', 'Family Safari', 'Luxury Safari', 'Budget Safari', 'Honeymoon Safari', 'Beach + Safari']

function Icon({ name, size = 18 }) {
  const paths = {
    arrow: <><path d="M5 12h14" /><path d="m12 5 7 7-7 7" /></>,
    plane: <><path d="m2 16 20-5-20-5 4 5-4 5Z" /><path d="m6 11 4 1" /></>,
    pin: <><path d="M20 10c0 5-8 12-8 12S4 15 4 10a8 8 0 1 1 16 0Z" /><circle cx="12" cy="10" r="2.5" /></>,
    clock: <><circle cx="12" cy="12" r="9" /><path d="M12 7v5l3 2" /></>,
    menu: <><path d="M4 7h16M4 12h16M4 17h16" /></>,
    close: <><path d="m6 6 12 12M18 6 6 18" /></>,
    phone: <path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3.1 19.4 19.4 0 0 1-6-6A19.8 19.8 0 0 1 2.1 4.2 2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1 1 .4 2 .7 2.9a2 2 0 0 1-.5 2.1L8 8a16 16 0 0 0 6 6l1.3-1.3a2 2 0 0 1 2.1-.5c.9.3 1.9.6 2.9.7a2 2 0 0 1 1.7 2Z" />,
  }
  return <svg aria-hidden="true" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">{paths[name]}</svg>
}

function WhatsAppLink({ className = 'whatsapp-link', children = 'Chat on WhatsApp' }) {
  return <a className={className} href="https://wa.me/255000000000" target="_blank" rel="noreferrer" aria-label="Chat with Kasa Travel on WhatsApp (placeholder number)"><span className="wa-mark">◉</span>{children}</a>
}

function Header() {
  const [menuOpen, setMenuOpen] = useState(false)
  const closeMenu = () => setMenuOpen(false)
  return <header className="site-header">
    <div className="top-strip"><div className="container top-strip-inner"><span>Made for the moments that move you.</span><span className="top-contact"><Icon name="phone" size={13} /> Tanzania · +255 (0) 000 000 000</span></div></div>
    <div className="container nav-shell">
      <Link className="brand" to="/" onClick={closeMenu} aria-label="Kasa Travel home"><span className="brand-mark">K<span>.</span></span><span className="brand-copy"><strong>KASA TRAVEL</strong><small>YOUR JOURNEY, OUR PASSION.</small></span></Link>
      <button className="menu-toggle" aria-label={menuOpen ? 'Close navigation' : 'Open navigation'} aria-expanded={menuOpen} onClick={() => setMenuOpen(!menuOpen)}><Icon name={menuOpen ? 'close' : 'menu'} size={22} /></button>
      <nav className={`main-nav ${menuOpen ? 'is-open' : ''}`} aria-label="Main navigation">
        <NavLink to="/" end onClick={closeMenu}>Home</NavLink><NavLink to="/flights" onClick={closeMenu}>Flights</NavLink><NavLink to="/safaris" onClick={closeMenu}>Safari Tours</NavLink><NavLink to="/about" onClick={closeMenu}>About Us</NavLink><NavLink to="/contact" onClick={closeMenu}>Contact</NavLink>
        <Link className="button button-small nav-book" to="/contact" onClick={closeMenu}>Book Now <Icon name="arrow" size={15} /></Link><WhatsAppLink className="nav-whatsapp" />
      </nav>
    </div>
  </header>
}

function Footer() {
  return <footer className="site-footer"><div className="container footer-main">
    <div className="footer-brand"><Link className="brand brand-light" to="/"><span className="brand-mark">K<span>.</span></span><span className="brand-copy"><strong>KASA TRAVEL</strong><small>YOUR JOURNEY, OUR PASSION.</small></span></Link><p>From the world’s great cities to Tanzania’s wild heart, let’s make your next journey one to remember.</p><div className="social-links"><a href="https://instagram.com" target="_blank" rel="noreferrer">IG</a><a href="https://facebook.com" target="_blank" rel="noreferrer">FB</a><a href="https://tiktok.com" target="_blank" rel="noreferrer">TK</a><a href="https://wa.me/255000000000" target="_blank" rel="noreferrer">WA</a></div></div>
    <div className="footer-column"><h3>Explore</h3><Link to="/">Home</Link><Link to="/flights">International Flights</Link><Link to="/safaris">Safari Tours</Link><Link to="/about">About Kasa</Link><Link to="/contact">Contact</Link></div>
    <div className="footer-column"><h3>Our services</h3><Link to="/flights">Flight booking assistance</Link><Link to="/safaris">Safari experiences</Link><Link to="/contact">Hotel accommodation</Link><Link to="/contact">Airport transfers</Link><Link to="/contact">Tailor-made travel</Link></div>
    <div className="footer-note"><span className="eyebrow eyebrow-light">LET’S PLAN YOUR NEXT</span><h3>Great journeys<br />start with a hello.</h3><Link className="footer-contact" to="/contact">Talk to our team <Icon name="arrow" size={16} /></Link></div>
  </div><div className="container footer-bottom"><span>© 2026 Kasa Travel. All Rights Reserved.</span><span>Based in Tanzania · Travelling everywhere</span><Link to="/contact">Privacy &amp; enquiries</Link></div></footer>
}

function PageLayout({ children }) {
  return <><Header /><main>{children}</main><Footer /></>
}

function PageIntro({ eyebrow, title, description, image }) {
  return <section className="page-intro" style={{ backgroundImage: `linear-gradient(90deg, rgba(12,34,27,.88), rgba(12,34,27,.48)), url("${image}")` }}><div className="container page-intro-copy"><span className="eyebrow eyebrow-light">{eyebrow}</span><h1>{title}</h1><p>{description}</p></div></section>
}

function InquiryNotice() {
  return <p className="form-notice" role="status">This demo form is not connected to a booking system and does not send or store your details. Please contact our team directly to arrange your trip.</p>
}

function FlightSearch({ compact = false }) {
  const [submitted, setSubmitted] = useState(false)
  const [tripType, setTripType] = useState('Round trip')
  return <form className={`flight-form ${compact ? 'flight-form-compact' : 'flight-form-detailed'}`} onSubmit={event => { event.preventDefault(); setSubmitted(true) }}>
    {!compact && <div className="trip-type"><label><input type="radio" name="trip" value="Round trip" checked={tripType === 'Round trip'} onChange={event => setTripType(event.target.value)} /> Round trip</label><label><input type="radio" name="trip" value="One way" checked={tripType === 'One way'} onChange={event => setTripType(event.target.value)} /> One way</label></div>}
    <div className="flight-fields">
      <label className="field"><span>From</span><input required placeholder="e.g. Dar es Salaam" /></label><span className="route-swap" aria-hidden="true">↔</span>
      <label className="field"><span>To</span><input required placeholder="Where to?" /></label><label className="field"><span>Departure</span><input required type="date" /></label><label className="field"><span>Return</span><input type="date" disabled={tripType === 'One way'} /></label>
      {compact
        ? <label className="field"><span>Passengers</span><select defaultValue="1"><option value="1">1 traveller</option><option>2 travellers</option><option>3 travellers</option><option>4+ travellers</option></select></label>
        : <><label className="field"><span>Adults</span><select defaultValue="1"><option>1</option><option>2</option><option>3</option><option>4+</option></select></label><label className="field"><span>Children</span><select defaultValue="0"><option>0</option><option>1</option><option>2</option><option>3+</option></select></label></>}
      <label className="field"><span>Travel class</span><select defaultValue="Economy"><option>Economy</option><option>Premium Economy</option><option>Business</option><option>First</option></select></label>
      <button className="button search-button" type="submit"><Icon name="plane" size={17} /> Search flights</button>
    </div>{submitted && <InquiryNotice />}
  </form>
}

function SectionHeading({ eyebrow, title, description, link, to = '/safaris', centered = false }) {
  return <div className={`section-heading ${centered ? 'centered' : ''}`}><div><span className="eyebrow">{eyebrow}</span><h2>{title}</h2>{description && <p>{description}</p>}</div>{link && <Link className="text-link" to={to}>{link}<Icon name="arrow" size={16} /></Link>}</div>
}

function DestinationCard({ item, index }) {
  return <article className="destination-card"><Link to={`/safaris/${item.short.toLowerCase()}`} className="destination-image"><img src={item.image} alt={`${item.name} landscape`} loading="lazy" /><span className="card-index">0{index + 1}</span><span className="image-arrow"><Icon name="arrow" size={17} /></span></Link><div className="destination-copy"><span className="card-kicker">{item.region}</span><h3>{item.name}</h3><p>{item.description}</p><Link className="text-link" to={`/safaris/${item.short.toLowerCase()}`}>View safari <Icon name="arrow" size={15} /></Link></div></article>
}

function PackageCard({ item }) {
  return <article className="package-card"><Link to={`/safaris/${item.slug}`} className="package-image"><img src={item.image} alt={item.title} loading="lazy" /><span className="package-duration"><Icon name="clock" size={14} /> {item.days}</span><span className="package-image-link"><Icon name="arrow" size={17} /></span></Link><div className="package-copy"><div className="package-meta"><span>{item.type}</span><span><Icon name="pin" size={13} /> Tanzania</span></div><h3>{item.title}</h3><p>{item.description}</p>  <div className="package-foot"><div><small>Starting from</small><strong>{item.price}</strong></div><div className="package-actions"><Link className="button button-outline" to={`/safaris/${item.slug}`}>View details</Link><Link className="button package-book-button" to="/contact">Book now</Link></div></div></div></article>
}

function HomePage() {
  return <PageLayout>
    <section className="hero" style={{ backgroundImage: `linear-gradient(90deg, rgba(9,31,24,.73) 0%, rgba(12,34,27,.39) 53%, rgba(12,34,27,.13) 100%), url("${images.hero}")` }}>
      <div className="container hero-inner"><div className="hero-copy"><span className="eyebrow eyebrow-light"><span className="eyebrow-dot" /> TANZANIA, AND THE WORLD BEYOND</span><h1>Explore the world<br />with <em>Kasa Travel.</em></h1><p>International flights &amp; unforgettable<br className="desktop-break" /> Tanzania safari experiences.</p><div className="hero-actions"><Link className="button" to="/flights">Book a flight <Icon name="arrow" size={17} /></Link><Link className="button button-glass" to="/safaris">Explore safaris</Link></div></div><div className="hero-caption"><span>01 / 04</span><span className="caption-rule" /><span>THE SERENGETI, TANZANIA</span></div></div>
      <div className="hero-stamp"><span>THE<br />WILD<br /><strong>CALLS</strong></span><span className="stamp-star">✳</span></div>
    </section>
    <section className="flight-search-section"><div className="container"><div className="search-intro"><span className="eyebrow">YOUR NEXT JOURNEY</span><h2>Where to next?</h2></div><FlightSearch compact /></div></section>
    <section className="services-section section-pad"><div className="container"><SectionHeading eyebrow="THOUGHTFULLY ARRANGED" title="Travel, made personal." description="Considered support at every step, whether you're taking off or setting out on safari." /><div className="services-grid">{services.map(service => <article className="service-card" key={service.number}><span className="service-number">{service.number}</span><span className="service-icon">{service.icon}</span><h3>{service.title}</h3><p>{service.description}</p><Link to={service.title.includes('Flight') ? '/flights' : '/contact'} className="service-arrow" aria-label={`Learn about ${service.title}`}><Icon name="arrow" size={16} /></Link></article>)}</div></div></section>
    <section className="destinations-section section-pad"><div className="container"><SectionHeading eyebrow="A LAND OF CONTRASTS" title="Find your wild." description="From endless savannah to island shores, discover the places that make Tanzania extraordinary." link="All destinations" /><div className="destination-grid">{destinations.map((item, index) => <DestinationCard key={item.short} item={item} index={index} />)}</div></div></section>
    <section className="packages-section section-pad"><div className="container"><SectionHeading eyebrow="MADE FOR YOUR KIND OF WILD" title="Safari, your way." description="Small details make a big journey. Find your starting point, then let us tailor the rest." link="View all safaris" /><div className="package-grid">{packages.map(item => <PackageCard key={item.slug} item={item} />)}</div></div></section>
    <section className="home-story"><div className="story-image"><img src={images.lodge} alt="A peaceful lodge surrounded by nature" loading="lazy" /></div><div className="story-copy"><span className="eyebrow">ROOTED IN TANZANIA</span><h2>More than a trip.<br /><em>A feeling that stays.</em></h2><p>We believe the best journeys begin with listening. As a Tanzania-based travel team, we bring local insight and considered care to every flight, safari and stay we arrange.</p><Link className="button" to="/about">Meet Kasa Travel <Icon name="arrow" size={16} /></Link></div><span className="story-deco">K</span></section>
    <section className="home-cta"><div className="container home-cta-inner"><div><span className="eyebrow eyebrow-light">YOUR STORY STARTS HERE</span><h2>Tell us where<br />you dream of going.</h2></div><div className="home-cta-actions"><p>Flights, a safari, a few days by the sea — we’ll help you bring the pieces together.</p><Link className="button button-light" to="/contact">Let’s plan your trip <Icon name="arrow" size={17} /></Link></div></div></section>
  </PageLayout>
}

function FlightsPage() {
  return <PageLayout><PageIntro eyebrow="GO FURTHER, WITH KASA" title={<>The world is<br />closer than you think.</>} description="International flight assistance, made personal. Tell us where you’re headed and our team can help you explore your options." image={images.plane} /><section className="flights-page section-pad"><div className="container"><div className="flight-page-intro"><div><span className="eyebrow">FLIGHT ENQUIRY</span><h2>Let’s find your way there.</h2><p>Share your travel plans and a Kasa Travel advisor can assist with your request. No live availability or fares are shown on this website.</p></div><div className="flight-help"><span className="help-icon"><Icon name="plane" size={21} /></span><div><strong>Personal assistance</strong><span>From route ideas to booking support.</span></div></div></div><FlightSearch /><div className="popular-destinations"><SectionHeading eyebrow="FROM TANZANIA, TO EVERYWHERE" title="Popular destinations" description="Some of the routes our travellers ask us about." /><div className="international-grid">{destinationsAbroad.map((destination, index) => <div className="international-card" key={destination}><span className="intl-number">0{index + 1}</span><span className="intl-plane"><Icon name="plane" size={18} /></span><strong>{destination}</strong><span className="intl-region">{index < 4 ? 'International' : 'Long-haul'}</span></div>)}</div></div><div className="flight-note"><strong>Every trip is different.</strong><span>Flight schedules, fares and seat availability change. Send us an enquiry and our team can help you discuss suitable options; this site does not provide real-time results.</span><WhatsAppLink /></div></div></section></PageLayout>
}

function SafarisPage() {
  const [duration, setDuration] = useState('Any duration')
  const [destination, setDestination] = useState('All destinations')
  const [price, setPrice] = useState('Any price')
  const [type, setType] = useState('All safari types')
  const filtered = packages.filter(item => (duration === 'Any duration' || (duration === '1–3 days' ? parseInt(item.days) <= 3 : duration === '4–6 days' ? parseInt(item.days) >= 4 && parseInt(item.days) <= 6 : parseInt(item.days) >= 7)) && (destination === 'All destinations' || item.destination.toLowerCase().includes(destination.toLowerCase())) && (price === 'Any price' || item.price === 'Request a quote') && (type === 'All safari types' || item.type === type))
  return <PageLayout><PageIntro eyebrow="EXPLORE TANZANIA" title={<>Wild places.<br />Wonderful journeys.</>} description="Thoughtfully planned safari experiences, shaped around what you love and the way you want to travel." image={images.serengeti} /><section className="safari-listing section-pad"><div className="container"><SectionHeading eyebrow="THE KASA COLLECTION" title="Find your kind of safari." description="Browse a few ways to experience Tanzania. Every journey can be tailored to you." /><div className="filter-bar"><span className="filter-label">REFINE YOUR JOURNEY</span><label><span className="sr-only">Filter by duration</span><select value={duration} onChange={event => setDuration(event.target.value)}><option>Any duration</option><option>1–3 days</option><option>4–6 days</option><option>7+ days</option></select></label><label><span className="sr-only">Filter by destination</span><select value={destination} onChange={event => setDestination(event.target.value)}><option>All destinations</option>{destinations.map(item => <option key={item.short}>{item.short}</option>)}</select></label><label><span className="sr-only">Filter by price</span><select value={price} onChange={event => setPrice(event.target.value)}><option>Any price</option><option>Price on request</option></select></label><label><span className="sr-only">Filter by safari type</span><select value={type} onChange={event => setType(event.target.value)}><option>All safari types</option>{safariTypes.map(item => <option key={item}>{item}</option>)}</select></label><span className="filter-count">{filtered.length} journeys</span></div>{filtered.length ? <div className="package-grid listing-grid">{filtered.map(item => <PackageCard key={item.slug} item={item} />)}</div> : <div className="empty-filter"><h3>No journeys match those filters just yet.</h3><p>Try a different combination, or tell us what you have in mind and we’ll help create a trip for you.</p><button className="text-link button-reset" onClick={() => { setDuration('Any duration'); setDestination('All destinations'); setPrice('Any price'); setType('All safari types') }}>Clear filters <Icon name="arrow" size={15} /></button></div>}</div></section><section className="destinations-section section-pad safari-destinations"><div className="container"><SectionHeading eyebrow="WHERE WILL YOU GO?" title="Tanzania, in every direction." description="Meet the landscapes, wildlife and coastlines that make each itinerary its own." /><div className="destination-grid">{destinations.map((item, index) => <DestinationCard key={item.short} item={item} index={index} />)}</div></div></section></PageLayout>
}

function SafariDetailPage() {
  const { slug } = useParams()
  const item = packages.find(packageItem => packageItem.slug === slug) || destinations.find(destinationItem => destinationItem.short.toLowerCase() === slug)
  const title = item?.title || item?.name || 'Tanzania Safari'
  const image = item?.image || images.serengeti
  const description = item?.description || 'Explore the remarkable wildlife, open plains and unforgettable landscapes of Tanzania with a safari shaped around you.'
  const [submitted, setSubmitted] = useState(false)
  return <PageLayout><PageIntro eyebrow="YOUR TANZANIA SAFARI" title={title} description={description} image={image} /><section className="detail-section section-pad"><div className="container detail-layout"><div className="detail-main"><div className="detail-image"><img src={image} alt={`${title} safari`} /><span><Icon name="pin" size={15} /> Tanzania, East Africa</span></div><div className="detail-summary"><span className="eyebrow">THE EXPERIENCE</span><h2>A closer connection to the wild.</h2><p>{description} Our local team will work with you to refine the route, pace, lodge style and travel dates to suit your plans.</p></div><div className="detail-block"><span className="eyebrow">A JOURNEY TO MAKE YOUR OWN</span><h3>Sample itinerary</h3><div className="itinerary"><div><span>DAY 01</span><div><strong>Arrive &amp; settle in</strong><p>Meet your local team, transfer to your accommodation and ease into the adventure.</p></div></div><div><span>DAY 02</span><div><strong>Into the wild</strong><p>Set out with your professional guide to explore the landscapes and wildlife at your pace.</p></div></div><div><span>DAY 03+</span><div><strong>Explore, then unwind</strong><p>Continue your journey through the region before a relaxed return or onward connection.</p></div></div></div><p className="itinerary-footnote">This is an indicative outline, not a confirmed itinerary. Routes and activities depend on your final travel plans.</p></div><div className="included-grid"><div className="included-card"><span className="eyebrow">THOUGHTFULLY INCLUDED</span><h3>Included services</h3><ul><li>Private safari vehicle and professional guide</li><li>Accommodation options matched to your style</li><li>Park fees and activities as agreed in your quote</li><li>Pre-trip planning and local assistance</li></ul></div><div className="included-card muted-card"><span className="eyebrow">A FEW THINGS TO PLAN</span><h3>Not included</h3><ul><li>International and domestic flights</li><li>Travel insurance and personal expenses</li><li>Visa fees and optional activities</li><li>Services not specified in your final itinerary</li></ul></div></div></div><aside className="detail-sidebar"><div className="detail-booking"><span className="eyebrow">MAKE IT YOURS</span><h3>Let’s plan this safari.</h3><p>Share a few details and our team can help with a personalised itinerary and quote.</p><div className="detail-facts"><span><Icon name="clock" size={16} /> {item?.days || 'Tailor-made duration'}</span><span><Icon name="pin" size={16} /> {item?.destination || item?.region || 'Tanzania'}</span><strong>{item?.price || 'Request a quote'}</strong></div><form onSubmit={event => { event.preventDefault(); setSubmitted(true) }}><label className="field"><span>Your name</span><input required placeholder="Full name" /></label><label className="field"><span>Email address</span><input required type="email" placeholder="you@example.com" /></label><label className="field"><span>Travel dates</span><input type="text" placeholder="When would you like to go?" /></label><label className="field"><span>Tell us a little more</span><textarea rows="3" placeholder="Travellers, interests, questions..." /></label><button className="button full-button" type="submit">Send safari enquiry <Icon name="arrow" size={16} /></button>{submitted && <InquiryNotice />}</form><WhatsAppLink className="sidebar-whatsapp" /></div></aside></div></section></PageLayout>
}

function AboutPage() {
  return <PageLayout><PageIntro eyebrow="THE PEOPLE BEHIND THE JOURNEY" title={<>A little closer<br />to what matters.</>} description="Kasa Travel brings international flight assistance and memorable Tanzania travel experiences together, with a personal touch." image={images.ngorongoro} /><section className="about-intro section-pad"><div className="container about-intro-grid"><div className="about-heading"><span className="eyebrow">WHO WE ARE</span><h2>Travel feels different when someone truly cares.</h2></div><div className="about-text"><p>Kasa Travel is a Tanzania-based travel agency helping people arrange international flights and discover the places that make Tanzania unforgettable. We combine thoughtful planning with a personal understanding of the journeys our travellers want to take.</p><p>Whether you’re travelling across the world, heading into the bush or bringing the whole family together by the sea, we’re here to make every step feel easier and more considered.</p><Link className="text-link" to="/contact">Start a conversation <Icon name="arrow" size={16} /></Link></div></div></section><section className="about-values"><div className="about-photo"><img src={images.serengeti} alt="Wildlife in the Serengeti" loading="lazy" /></div><div className="values-content"><span className="eyebrow eyebrow-light">WHAT GUIDES US</span><div className="value-item"><span>01</span><div><h3>Our mission</h3><p>To make meaningful travel more accessible through personal assistance, considered itineraries and genuine care.</p></div></div><div className="value-item"><span>02</span><div><h3>Our vision</h3><p>To be a trusted travel partner connecting people to Tanzania and the wider world, one remarkable journey at a time.</p></div></div><div className="value-item"><span>03</span><div><h3>Why Kasa</h3><p>Local understanding, responsive support and the flexibility to make every trip feel like your own.</p></div></div></div></section><section className="why-section section-pad"><div className="container"><SectionHeading eyebrow="THE KASA DIFFERENCE" title="Good journeys begin with good people." description="From your first question to the details along the way, we’re here to help." centered /><div className="benefit-grid">{['Professional travel assistance', 'Personalized travel packages', 'Experienced safari planning', 'Reliable customer support', 'Competitive travel options', 'Easy WhatsApp booking'].map((benefit, index) => <div className="benefit" key={benefit}><span>0{index + 1}</span><strong>{benefit}</strong><Icon name="arrow" size={16} /></div>)}</div></div></section><ContactBand /></PageLayout>
}

function ContactBand() {
  return <section className="contact-band"><div className="container contact-band-inner"><div><span className="eyebrow eyebrow-light">WE’RE HERE TO HELP</span><h2>Let’s make a plan.</h2></div><Link className="button button-light" to="/contact">Talk to our team <Icon name="arrow" size={16} /></Link></div></section>
}

function ContactPage() {
  const [submitted, setSubmitted] = useState(false)
  return <PageLayout><PageIntro eyebrow="WE’D LOVE TO HEAR FROM YOU" title={<>Your next journey<br />starts with a hello.</>} description="Tell us what you’re dreaming up. Our team is here to help with flights, safaris and all the details in between." image={images.beach} /><section className="contact-page section-pad"><div className="container contact-layout"><div className="contact-info"><span className="eyebrow">GET IN TOUCH</span><h2>Here when<br />you need us.</h2><p>Reach out with a question or a trip idea. We’ll be happy to help you work through the next steps.</p><div className="contact-detail"><span className="contact-symbol"><Icon name="phone" size={18} /></span><div><small>PHONE</small><a href="tel:+255000000000">+255 (0) 000 000 000</a></div></div><div className="contact-detail"><span className="contact-symbol"><span className="wa-mark">◉</span></span><div><small>WHATSAPP</small><a href="https://wa.me/255000000000" target="_blank" rel="noreferrer">+255 (0) 000 000 000</a></div></div><div className="contact-detail"><span className="contact-symbol">✉</span><div><small>EMAIL</small><a href="mailto:hello@kasatravel.example">hello@kasatravel.example</a></div></div><div className="contact-detail"><span className="contact-symbol"><Icon name="pin" size={18} /></span><div><small>OFFICE</small><span>Dar es Salaam, Tanzania</span></div></div><div className="office-hours"><small>BUSINESS HOURS</small><p>Monday – Friday · 9:00 am – 5:00 pm EAT<br />Saturday · By appointment</p></div><WhatsAppLink /></div><div className="contact-form-card"><span className="eyebrow">SEND AN ENQUIRY</span><h2>How can we help?</h2><p>Leave us a few details and we’ll be ready to talk through your plans.</p><form className="contact-form" onSubmit={event => { event.preventDefault(); setSubmitted(true) }}><div className="form-row"><label className="field"><span>Full name</span><input required placeholder="Your name" /></label><label className="field"><span>Email address</span><input required type="email" placeholder="you@example.com" /></label></div><div className="form-row"><label className="field"><span>Phone</span><input type="tel" placeholder="+255 ..." /></label><label className="field"><span>Travel service</span><select defaultValue=""><option value="" disabled>Select a service</option><option>International flights</option><option>Tanzania safari</option><option>Hotel accommodation</option><option>Airport transfer</option><option>Customized travel package</option></select></label></div><label className="field"><span>Travel date (if known)</span><input type="date" /></label><label className="field"><span>Your message</span><textarea required rows="5" placeholder="Tell us a little about your plans..." /></label><button className="button" type="submit">Send inquiry <Icon name="arrow" size={16} /></button>{submitted && <InquiryNotice />}</form></div></div></section></PageLayout>
}

function NotFoundPage() {
  return <PageLayout><section className="not-found"><span className="eyebrow">A LITTLE OFF COURSE</span><h1>We can help you find your way.</h1><p>The page you’re looking for isn’t here. Let’s get you back to the good part.</p><Link className="button" to="/">Back to home <Icon name="arrow" size={16} /></Link></section></PageLayout>
}

function AppRoutes() {
  return <Routes><Route path="/" element={<HomePage />} /><Route path="/flights" element={<FlightsPage />} /><Route path="/safaris" element={<SafarisPage />} /><Route path="/safaris/:slug" element={<SafariDetailPage />} /><Route path="/about" element={<AboutPage />} /><Route path="/contact" element={<ContactPage />} /><Route path="*" element={<NotFoundPage />} /></Routes>
}

export default function App() {
  return <BrowserRouter><AppRoutes /></BrowserRouter>
}