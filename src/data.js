const images = {
  hero: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=2200&q=85',
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

const companyDetails = {
  name: 'Zanzibar Luxury Holiday',
  phone: '+255 773 958595',
  email: 'zanzibarluxuryholiday@gmail.com',
  address: 'Kiembe Samaki Airport Road, Zanzibar',
  mission: 'Our team offers our customers exceptional and socially responsible travel experiences, providing services beyond expectations.',
  vision: 'To be the best tourism company providing excellent, creative, innovative, competitive and socially responsible services in Zanzibar.',
}

const destinations = [
  { name: 'Mikumi National Park', short: 'Mikumi', image: images.mikumi, region: 'Wildlife Day Trip', description: 'A classic full-day game drive from Zanzibar with open plains, elephant herds and a thrilling bush lunch.' },
  { name: 'Selous Game Reserve', short: 'Selous', image: images.nyerere, region: 'Flying Safari', description: 'A flight-based safari where you can explore the river systems, open woodland and unforgettable game-viewing routes.' },
  { name: 'Nyerere National Park', short: 'Nyerere', image: images.nyerere, region: 'River & Bush', description: 'Discover a remote wilderness shaped by river, woodland and abundant wildlife, perfect for a more immersive escape.' },
  { name: 'Lake Manyara National Park', short: 'Manyara', image: images.lodge, region: 'Northern Circuit', description: 'Enjoy a compact game-viewing circuit with excellent birdlife, flamingos and dramatic scenery.' },
  { name: 'Tarangire National Park', short: 'Tarangire', image: images.tarangire, region: 'Northern Circuit', description: 'A rewarding safari known for its iconic baobabs, elephants and dramatic landscapes.' },
  { name: 'Ngorongoro Crater', short: 'Ngorongoro', image: images.ngorongoro, region: 'Northern Circuit', description: 'Descend into the world’s largest volcanic caldera for one of the richest wildlife experiences in Africa.' },
  { name: 'Serengeti National Park', short: 'Serengeti', image: images.serengeti, region: 'Northern Circuit', description: 'Follow the rhythms of the plains and witness Africa’s most famous wildlife spectacle on a classic safari.' },
  { name: 'Zanzibar', short: 'Zanzibar', image: images.zanzibar, region: 'Island Escape', description: 'Let the rhythm slow down with beach days, Stone Town culture and crystal-clear Indian Ocean waters.' },
]

const packages = [
  { slug: 'day-trip-safari-mikumi', title: 'Day Trip Safari - Mikumi National Park', days: '1 day', destination: 'Mikumi', image: images.mikumi, price: 'Adult $400 / Child $350', description: 'A full-day game drive from Zanzibar with bush lunch, open-vehicle viewing and the chance to spot elephants, giraffes and lions.', type: 'Day Trip Safari' },
  { slug: '2-days-safari-mikumi', title: '2 Days Safari - Mikumi National Park', days: '2 days', destination: 'Mikumi', image: images.mikumi, price: 'From $900 adult / $800 child', description: 'Enjoy a full-day game drive, overnight in camp, and a second half-day safari before returning to Zanzibar.', type: 'Wildlife Safari' },
  { slug: 'selous-flying-reserve', title: '2 Days, 1 Night Flying Reserve', days: '2 days', destination: 'Selous', image: images.nyerere, price: 'From $650 adult / $500 child', description: 'Fly to the Selous Game Reserve for a scenic wildlife escape with game drives, a river safari and overnight lodge stay.', type: 'Flying Safari' },
  { slug: 'lake-manyara-tarangire', title: 'Lake Manyara and Tarangire National Park', days: '2 days', destination: 'Manyara · Tarangire', image: images.tarangire, price: 'Adult $850 / Child $650', description: 'Explore the dramatic landscapes of Lake Manyara and Tarangire with a flowing itinerary designed for game viewing.', type: 'Northern Circuit' },
  { slug: 'tarangire-ngorongoro', title: 'Tarangire & Ngorongoro Crater', days: '2 days', destination: 'Tarangire · Ngorongoro', image: images.ngorongoro, price: 'Adult $1100 / Child $850', description: 'Traverse the famous plains of Tarangire before reaching the Ngorongoro Crater, one of Africa’s most remarkable natural wonders.', type: 'Luxury Safari' },
  { slug: 'ngorongoro-tarangire-manyara', title: '3 Days, 2 Nights - Ngorongoro, Tarangire and Manyara', days: '3 days', destination: 'Manyara · Tarangire · Ngorongoro', image: images.ngorongoro, price: 'Adult $1450 / Child $1100', description: 'A compact northern circuit journey with full-day drives, scenic overnight stays and unforgettable wildlife encounters.', type: 'Family Safari' },
  { slug: 'serengeti-3-days', title: '3 Days, 2 Nights - Serengeti National Park', days: '3 days', destination: 'Serengeti', image: images.serengeti, price: 'Adult $2200 / Child $1800', description: 'Fly to Seronera for a classic adventure with full-day game drives, camp time and the thrill of the open plains.', type: 'Premium Safari' },
  { slug: 'selous-day-trip', title: 'Day Trip Safari - Selous Game Reserve', days: '1 day', destination: 'Selous', image: images.nyerere, price: 'Adult $450 / Child $380', description: 'Leave Zanzibar in the morning and enjoy a full-day game drive through the reserve with bush lunch and a return flight in the afternoon.', type: 'Day Trip Safari' },
]

const services = [
  { number: '01', icon: '✦', title: 'Wildlife Safaris', description: 'Comfortable day trips and multi-day adventures to Mikumi, Selous, Serengeti and beyond.' },
  { number: '02', icon: '✧', title: 'Beach Holiday', description: 'Zanzibar coast experiences designed for rest, culture and unforgettable ocean views.' },
  { number: '03', icon: '✤', title: 'Zanzibar Excursions', description: 'Flexible island tours, transfers and local experiences shaped around your travel style.' },
  { number: '04', icon: '✫', title: 'Air Ticketing', description: 'Flight arrangements between Zanzibar and major safari destinations, planned for ease.' },
  { number: '05', icon: '✹', title: 'Tailor-made Travel', description: 'Custom itineraries built around your schedule, interests and budget.' },
]

const destinationsAbroad = ['Dubai', 'Istanbul', 'Nairobi', 'Johannesburg', 'London', 'Doha', 'Mumbai', 'Addis Ababa']
const safariTypes = ['Day Trip Safari', 'Wildlife Safari', 'Flying Safari', 'Northern Circuit', 'Luxury Safari', 'Family Safari', 'Premium Safari']

export { companyDetails, images, destinations, packages, services, destinationsAbroad, safariTypes }
