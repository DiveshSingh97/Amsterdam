export const DAYS = [
  {
    id: 'day1',
    date: '3',
    month: 'Apr',
    dow: 'Thursday · Day 1',
    title: 'Arrival & First Canal Walk',
    tags: ['Arrival', 'Dutch Food'],
    weather: { icon: '🌤️', high: 11, low: 4, desc: 'For Durban people this will feel properly cold from the moment you step outside. Light jacket alone won\'t cut it — you need a mid-layer underneath. Dry though, which helps.', badge: 'fine', wear: '🥶 Mid-layer + jacket + scarf. Durban people: do not underestimate this.' },
    activities: [
      { icon: '🏨', time: 'Arrival', title: 'Check in — Ruby Emma Hotel', detail: 'Central location, walking distance to canals.', booking: 'easy', bookingText: 'Already booked' },
      { icon: '🚶', time: 'Afternoon', title: 'First stroll — Dam Square → Jordaan', detail: "Get your bearings, grab a coffee, wander the canals. Don't overdo it on arrival day.", booking: 'easy', bookingText: 'No booking — just walk' },
      { icon: '🚢', time: 'Evening opt.', title: 'Optional: Evening Canal Cruise (~€18–25 pp / ≈R342–475)', detail: 'Great city intro. Departs from Central Station or Rembrandtplein.', booking: 'soon', bookingText: 'Book online same day', bookingUrl: 'https://www.stromma.com/en-nl/amsterdam/sightseeing/sightseeing-by-boat/', bookingNote: 'Book online — evening slots fill up in April.' },
      { icon: '🃏', time: 'Pro tip', title: 'Amsterdam City Card — worth it?', detail: 'Covers Rijksmuseum + Van Gogh + unlimited GVB trams/metro/buses. 3-day card from €85 (≈R1,615). If you\'re doing both museums + multiple tram days, it pays for itself.', booking: 'soon', bookingText: 'Buy online before you arrive', bookingUrl: 'https://www.iamsterdam.com/en/i-am/iamsterdam-city-card', bookingNote: 'Covers Rijksmuseum + Van Gogh + unlimited GVB transport. 3-day card from €85 (≈R1,615).' },
    ],
    extras: [
      { icon: '🆓', title: "Sandeman's Free Walking Tour", detail: 'Tip-based, departs Dam Square 10:00 & 14:00. Perfect Day 1 orientation. Book at neweuropetours.eu' },
      { icon: '🆓', title: 'Wander the Jordaan', detail: 'Amsterdam\'s most beautiful neighbourhood costs nothing. Browse Noordermarkt area.' },
      { icon: '🌧️', title: 'If it rains', detail: 'Duck into the Amsterdam Museum (free with City Card) or hop café to café — very Amsterdam.' },
      { icon: '🍺', title: 'Proeflokaal Wynand Fockink', detail: 'Tiny historic Dutch gin tasting house in an alley near Dam Square. €3–4 per jenever. Walk-in.' },
    ],
    meals: {
      dinner: [
        { id: 'broodje-bert', name: 'Broodje Bert', type: 'Dutch sandwiches · Jordaan', tier: 'budget', desc: 'Legendary Amsterdam broodje spot. Order a kroket or bitterballen on the side.', eurMin: 8, eurMax: 14, dist: '5 min from Dam Square', booking: 'easy', bookingText: 'Walk-in', menuUrl: 'https://maps.google.com/?q=Broodje+Bert+Amsterdam', bookUrl: null },
        { id: 'moeders', name: 'Moeders', type: 'Traditional Dutch · Jordaan', tier: 'mid', desc: 'Walls covered in photos of mums, classic Dutch stews and stamppot. Only 38 seats — max 6–7 per group, email to book.', eurMin: 22, eurMax: 35, dist: '12 min from hotel', booking: 'now', bookingText: 'Book TODAY — 38 seats', menuUrl: 'https://moeders.com/en/menu', bookUrl: 'https://moeders.com/en/reservations' },
        { id: 'the-pantry', name: 'The Pantry', type: 'Dutch classics elevated · Leidseplein', tier: 'fancy', desc: 'Dutch recipes done with care — erwtensoep, hutspot, herring. Good wine list.', eurMin: 35, eurMax: 50, dist: '15 min walk', booking: 'soon', bookingText: 'Book a few days ahead', menuUrl: 'https://www.thepantry.nl/en/menu', bookUrl: 'https://www.thepantry.nl/en' },
      ]
    }
  },
  {
    id: 'day2',
    date: '4',
    month: 'Apr',
    dow: 'Friday · Day 2',
    title: 'Rijksmuseum & Vondelpark',
    tags: ['Art & Culture', 'Park'],
    weather: { icon: '🌥️', high: 11, low: 4, desc: 'Same cold as Day 1 but with higher humidity and possible afternoon drizzle. The damp makes it feel colder than the number suggests — Durban people will really feel this.', badge: 'mixed', wear: '☔ Mid-layer + rain jacket + scarf. Bring the jacket, use it.' },
    activities: [
      { icon: '🎨', time: '9:00', title: 'Rijksmuseum — book 9:00 timed entry', detail: "Night Watch, Dutch Golden Age galleries — allow 2.5–3 hrs. Entry ~€22.50 pp (≈R427). April sells out weeks ahead.", booking: 'now', bookingText: 'Book TODAY — rijksmuseum.nl', bookingUrl: 'https://www.rijksmuseum.nl/en/tickets', bookingNote: 'Online only — no door sales. Book by date + time. April slots sell out 2–3 weeks ahead.' },
      { icon: '🌳', time: 'Afternoon', title: 'Vondelpark', detail: "Amsterdam's main park — post-museum decompress. Free, no booking needed.", booking: 'easy', bookingText: 'Just show up' },
    ],
    extras: [
      { icon: '🆓', title: 'EYE Film Museum', detail: 'Free ground floor. Beautiful building. Free ferry from Central Station.' },
      { icon: '🎵', title: 'Concertgebouw', detail: 'World-famous concert hall nearby. Check for free Wednesday lunchtime concerts.' },
      { icon: '🌧️', title: 'If it rains heavily', detail: 'The Rijksmuseum alone keeps you busy 3+ hrs. Stedelijk Museum (modern art) is 5 min walk away.' },
      { icon: '🆓', title: 'Vondelpark Open Air Theatre', detail: 'The park itself is free — grab stroopwafels from a nearby stall and eat in the park.' },
    ],
    meals: {
      lunch: [
        { id: 'wok-to-walk', name: 'Wok to Walk', type: 'Asian street noodles · Leidseplein', tier: 'budget', desc: 'Cheap, fast, good noodles in a box. Quick stop between museum and park.', eurMin: 8, eurMax: 12, dist: '6 min from museum', booking: 'easy', bookingText: 'Walk-in', menuUrl: 'https://www.woktowalk.com/en/menu/', bookUrl: null },
        { id: 'seafood-bar', name: 'The Seafood Bar', type: 'Fresh Dutch seafood · Museum Quarter', tier: 'mid', desc: 'Oysters, North Sea prawns, lobster rolls. Popular post-museum lunch. Great sharing plates.', eurMin: 25, eurMax: 40, dist: '4 min from Rijksmuseum', booking: 'soon', bookingText: 'Reserve or arrive early', menuUrl: 'https://www.theseafoodbar.com/menus/', bookUrl: 'https://www.theseafoodbar.com/restaurants/van-baerlestraat/' },
        { id: 'rijks-restaurant', name: 'Rijks Restaurant', type: 'Dutch modern cuisine · Inside Rijksmuseum', tier: 'splurge', desc: "Inside the museum itself — one of Amsterdam's most beautiful dining rooms. The fancy pick for Day 2.", eurMin: 55, eurMax: 70, dist: 'Inside the Rijksmuseum', booking: 'now', bookingText: 'Book TODAY', menuUrl: 'https://www.rijks.nl/en/restaurant/menu', bookUrl: 'https://www.rijks.nl/en/restaurant' },
      ],
      dinner: [
        { id: 'foodhallen', name: 'Foodhallen', type: 'Covered food market · Oud-West', tier: 'budget', desc: 'Converted tram depot with 20+ food stalls. Everyone picks something different. Great in any weather.', eurMin: 10, eurMax: 20, dist: '12 min from Vondelpark', booking: 'easy', bookingText: 'Walk-in, no reservations', menuUrl: 'https://foodhallen.nl/en/food-and-drinks/', bookUrl: null },
        { id: 'blushing', name: 'Blushing Amsterdam', type: 'Modern Mediterranean · De Pijp', tier: 'mid', desc: 'Buzzy neighbourhood bistro, sharing plates and natural wines. Very popular with locals.', eurMin: 28, eurMax: 42, dist: '15 min from Vondelpark', booking: 'soon', bookingText: 'Book a couple days ahead', menuUrl: 'https://www.blushing.nl/en/menu', bookUrl: 'https://www.blushing.nl/en' },
        { id: 'ciel-bleu', name: 'Ciel Bleu', type: 'French-Dutch · Hotel Okura 23rd floor', tier: 'fancy', desc: 'Two Michelin stars, panoramic city views from the 23rd floor. The ultimate splurge.', eurMin: 120, eurMax: 150, dist: '18 min from Vondelpark', booking: 'now', bookingText: 'Book NOW — weeks out', menuUrl: 'https://www.cielbleu.nl/en/menu/', bookUrl: 'https://www.cielbleu.nl/en/reservations/' },
      ]
    }
  },
  {
    id: 'day3',
    date: '5',
    month: 'Apr',
    dow: 'Saturday · Day 3',
    title: 'Van Gogh Museum & Canal District',
    tags: ['Art', 'Shopping'],
    weather: { icon: '🌦️', high: 11, low: 4, desc: 'Showers possible mid-morning — plan the Van Gogh Museum early so you\'re indoors if it rains. Afternoons can clear up. Still very cold by SA standards.', badge: 'mixed', wear: '☔ Rain jacket essential. Mid-layer underneath. Scarf.' },
    activities: [
      { icon: '🌻', time: '9:00–9:30', title: 'Van Gogh Museum', detail: '200 paintings, 500 drawings. Entry ~€22 pp (≈R418). Saturday in April = busiest day.', booking: 'now', bookingText: 'Book TODAY — vangoghmuseum.nl', bookingUrl: 'https://www.vangoghmuseum.nl/en/visit/tickets', bookingNote: 'Timed entry required. Saturday in April is the busiest day — book the earliest slot available.' },
      { icon: '🛍️', time: 'Afternoon', title: 'De 9 Straatjes + Bloemenmarkt', detail: 'Nine boutique streets + the famous floating flower market on the Singel canal.', booking: 'easy', bookingText: 'No booking — just explore' },
    ],
    extras: [
      { icon: '🆓', title: 'Bloemenmarkt', detail: 'Free to browse. Best tulip bulbs to take home as gifts (pre-packaged to clear customs).' },
      { icon: '🆓', title: 'Leidseplein square', detail: 'Street performers, cafés, free entertainment. Good spot after De 9 Straatjes.' },
      { icon: '🌧️', title: 'If it rains', detail: 'FOAM Photography Museum (near Keizersgracht) is excellent and rarely crowded. €16 entry.' },
      { icon: '🍪', title: 'Lanskroon bakery', detail: 'Best stroopwafels in Amsterdam, fresh and warm. Near Singel canal. Not a tourist trap.' },
    ],
    meals: {
      lunch: [
        { id: 'mirabelle', name: 'Mirabelle', type: 'Sandwiches & soups · Museum Quarter', tier: 'budget', desc: 'Cosy lunch spot near the museum. Fresh soups, filled rolls, great coffee.', eurMin: 9, eurMax: 14, dist: '5 min from Van Gogh Museum', booking: 'easy', bookingText: 'Walk-in', menuUrl: 'https://maps.google.com/?q=Mirabelle+Amsterdam', bookUrl: null },
        { id: 'staring-at-jacob', name: 'Staring at Jacob', type: 'All-day brunch · De Pijp', tier: 'mid', desc: "One of Amsterdam's best brunch spots. Very popular on Saturdays — arrive early.", eurMin: 18, eurMax: 28, dist: '10 min from Van Gogh Museum', booking: 'soon', bookingText: 'Arrive early or book ahead', menuUrl: 'https://www.staring-at-jacob.nl/en/menu', bookUrl: 'https://www.staring-at-jacob.nl' },
        { id: 'ron-gastrobar', name: 'Ron Gastrobar', type: 'Dutch gastronomy · Museum Quarter', tier: 'fancy', desc: "From Michelin-starred chef Ron Blaauw — casual concept, exceptional quality.", eurMin: 35, eurMax: 55, dist: '8 min from Van Gogh Museum', booking: 'soon', bookingText: 'Book ahead for Saturday', menuUrl: 'https://www.rongastrobar.nl/en/menu/', bookUrl: 'https://www.rongastrobar.nl/en/' },
      ],
      dinner: [
        { id: 'febo', name: 'FEBO Automat', type: 'Dutch fast food · City centre', tier: 'budget', desc: "Amsterdam's coin-operated snack wall — kroket, frikandel, kaassoufflé. Have one as a pre-dinner snack.", eurMin: 2, eurMax: 5, dist: 'Multiple locations', booking: 'easy', bookingText: 'Just pull the lever', menuUrl: 'https://www.febo.nl/en/menu/', bookUrl: null },
        { id: 'cafe-de-reiger', name: 'Café de Reiger', type: 'Dutch brasserie · Jordaan', tier: 'mid', desc: 'Quintessential Amsterdam brown café. Beautiful vintage interior, Dutch-French menu.', eurMin: 28, eurMax: 40, dist: '15 min from De 9 Straatjes', booking: 'soon', bookingText: 'Book a few days ahead', menuUrl: 'https://www.cafedereiger.nl/menu', bookUrl: 'https://www.cafedereiger.nl' },
        { id: 'de-kas', name: 'De Kas ⭐', type: 'Farm-to-table greenhouse · Frankendael Park', tier: 'splurge', desc: '1926 glasshouse, everything grown on-site. Set menu changes daily. The top fancy dinner pick.', eurMin: 65, eurMax: 85, dist: '~25 min tram/taxi from centre', booking: 'now', bookingText: 'Book TODAY', menuUrl: 'https://www.restaurantdekas.nl/en/menu/', bookUrl: 'https://www.restaurantdekas.nl/en/' },
      ]
    }
  },
  {
    id: 'day4',
    date: '6',
    month: 'Apr',
    dow: 'Sunday · Day 4',
    title: 'Keukenhof Tulip Gardens 🌷',
    tags: ['Nature', 'Day Trip'],
    weather: { icon: '🌬️', high: 11, low: 4, desc: 'Cold and windy at Keukenhof — the tulip fields are completely open with no shelter. SW wind will go right through you. This is the day Durban people suffer most outdoors.', badge: 'mixed', wear: '🌬️ Windproof jacket + mid-layer + scarf + gloves if you have them. Not optional.' },
    activities: [
      { icon: '🌷', time: '8:00–13:00', title: 'Keukenhof Gardens — leave Amsterdam by 7:30', detail: '7 million flowers in peak bloom, windmill viewpoint, indoor pavilions, bike rental (~€12). Entry ~€22 pp (≈R418). NO door sales.', booking: 'now', bookingText: 'Buy tickets NOW — keukenhof.nl', bookingUrl: 'https://keukenhof.nl/en/tickets/', bookingNote: 'No door sales whatsoever — online only. Buy before you leave SA. Sells out on peak weekends.' },
    ],
    extras: [
      { icon: '🆓', title: 'Surrounding tulip fields', detail: 'Cycling through Lisse and Hillegom is free. Rent bikes at entrance (~€12/day).' },
      { icon: '🌷', title: 'Amsterdam Tulip Festival', detail: 'Runs all April in the city itself — free flower installations everywhere you walk.' },
      { icon: '🌧️', title: 'If it rains', detail: "Keukenhof's indoor pavilions are excellent — Willem-Alexander and Oranje Nassau. Don't cancel for rain." },
      { icon: '📸', title: 'Photography tip', detail: 'Best shots in the first 90 min. The windmill + field behind it is the iconic shot.' },
    ],
    meals: {
      lunch: [
        { id: 'keukenhof-cafes', name: 'Keukenhof Cafés', type: 'Onsite cafés · Inside gardens', tier: 'budget', desc: 'Multiple cafés inside. Sandwiches, soup, stroopwafels. Convenient, no need to leave.', eurMin: 8, eurMax: 15, dist: 'Inside the gardens', booking: 'easy', bookingText: 'Walk-in', menuUrl: 'https://keukenhof.nl/en/plan-your-visit/food-and-drink/', bookUrl: null },
        { id: 'oude-dykhuys', name: "Restaurant 't Oude Dykhuys", type: 'Dutch regional · Lisse village', tier: 'mid', desc: '10 min walk from the gardens. Traditional Dutch farm food, local crowd, good portions.', eurMin: 18, eurMax: 28, dist: '10 min walk from Keukenhof', booking: 'easy', bookingText: 'Walk-in or call ahead', menuUrl: 'https://maps.google.com/?q=t+Oude+Dykhuys+Lisse', bookUrl: null },
        { id: 'skip-fancy-day4', name: 'Save it for Amsterdam dinner', type: 'Skip fancy near Keukenhof', tier: 'fancy', desc: 'Food near Keukenhof is practical, not exceptional. Save your energy for a proper Amsterdam dinner.', eurMin: 0, eurMax: 0, dist: '—', booking: 'easy', bookingText: '—', menuUrl: null, bookUrl: null },
      ],
      dinner: [
        { id: 'dampkring', name: 'Dampkring Café', type: 'Casual bar & bites · Jordaan', tier: 'budget', desc: 'Famous interior (in Ocean\'s Twelve). Great for drinks and bitterballen after a big day.', eurMin: 10, eurMax: 18, dist: 'Central Amsterdam', booking: 'easy', bookingText: 'Walk-in', menuUrl: 'https://maps.google.com/?q=Dampkring+Jordaan+Amsterdam', bookUrl: null },
        { id: 'guts-and-glory', name: 'Guts & Glory', type: 'Seasonal nose-to-tail · Utrechtsestraat', tier: 'mid', desc: 'One rotating ingredient explored across an entire menu. Creative, bold, seasonal. For adventurous groups.', eurMin: 35, eurMax: 50, dist: '20 min walk from Central', booking: 'soon', bookingText: 'Book a few days ahead', menuUrl: 'https://www.gutsandglory.nl/en/menu/', bookUrl: 'https://www.gutsandglory.nl/en/' },
        { id: 'canal-cruise-dinner', name: 'Evening Canal Dinner Cruise', type: 'Dining boat · city canals', tier: 'fancy', desc: 'Dinner cruise at dusk — romantic and memorable. Go with Stromma or Lovers.', eurMin: 60, eurMax: 85, dist: 'Central Station area', booking: 'now', bookingText: 'Book in advance', menuUrl: 'https://www.stromma.com/en-nl/amsterdam/sightseeing/sightseeing-by-boat/dinner-cruise/', bookUrl: 'https://www.stromma.com/en-nl/amsterdam/sightseeing/sightseeing-by-boat/dinner-cruise/' },
      ]
    }
  },
  {
    id: 'day5',
    date: '7',
    month: 'Apr',
    dow: 'Monday · Day 5',
    title: 'Haarlem Day Trip (or Free Day)',
    tags: ['Day Trip', 'Optional'],
    weather: { icon: '🌥️', high: 11, low: 5, desc: 'Overcast and cool. If doing Haarlem, it\'s a short trip so easy to manage. If staying in Amsterdam, a good day to be flexible and duck inside if it gets uncomfortable.', badge: 'mixed', wear: '🧥 Mid-layer + jacket. Scarf as always.' },
    activities: [
      { icon: '🚆', time: 'Morning', title: 'Train to Haarlem — 20 min, ~€5 each way', detail: 'Grote Markt (medieval square), St. Bavo\'s Church (Handel and Mozart both played the organ), De Adriaan Windmill.', booking: 'easy', bookingText: 'Hop on the train' },
    ],
    extras: [
      { icon: '🆓', title: 'Frans Hals Museum (Haarlem)', detail: 'Dutch Golden Age portraits in a beautiful almshouse. €16 entry. Outstanding.' },
      { icon: '🚲', title: 'Free day alternative', detail: 'Hire bikes (~€12–18/day) and cycle through Vondelpark, along the Amstel, or to countryside villages south of the city.' },
      { icon: '🌧️', title: 'If wet free day', detail: 'FOAM Photography Museum, Stedelijk Museum, or Amsterdam Public Library (OBA) — beautiful building, canal views, free entry.' },
      { icon: '🎨', title: 'NDSM Wharf', detail: 'Free ferry from Central Station, huge street art murals. Great on any day.' },
    ],
    meals: {
      lunch: [
        { id: 'friture-haarlem', name: 'Friture Haarlemmermeer', type: 'Dutch frites · Haarlem centre', tier: 'budget', desc: 'Best frites in Haarlem. Eat standing up with massive sauce selection. Very Dutch, very cheap.', eurMin: 5, eurMax: 9, dist: '3 min from Grote Markt', booking: 'easy', bookingText: 'Walk-in', menuUrl: 'https://maps.google.com/?q=Friture+Haarlemmermeer', bookUrl: null },
        { id: 'jopenkerk', name: 'Jopenkerk Brewery', type: 'Craft beer & food · Converted church', tier: 'mid', desc: 'Full working brewery inside a stunning 1910 church. One of the most unique lunch experiences of the whole trip.', eurMin: 20, eurMax: 32, dist: '5 min from Grote Markt', booking: 'easy', bookingText: 'Walk-in on Monday', menuUrl: 'https://www.jopenkerk.nl/en/menu', bookUrl: 'https://www.jopenkerk.nl/en' },
        { id: 'ml-haarlem', name: 'ML Restaurant Haarlem', type: 'Michelin Bib Gourmand · Haarlem', tier: 'fancy', desc: 'High quality at reasonable fine dining prices. Hidden gem most Amsterdam tourists never find.', eurMin: 45, eurMax: 65, dist: '8 min from Grote Markt', booking: 'soon', bookingText: 'Book ahead for group', menuUrl: 'https://www.restaurantml.nl/en/menu/', bookUrl: 'https://www.restaurantml.nl/en/' },
      ],
      dinner: [
        { id: 'surinamese-depijp', name: 'Surinamese in De Pijp', type: 'Surinamese street food · De Pijp', tier: 'budget', desc: 'Amsterdam\'s Surinamese food is phenomenal — roti, moksi alesi, bara. Cheap, filling, totally different.', eurMin: 8, eurMax: 14, dist: 'De Pijp neighbourhood', booking: 'easy', bookingText: 'Walk-in', menuUrl: 'https://maps.google.com/?q=Surinamese+restaurant+De+Pijp+Amsterdam', bookUrl: null },
        { id: 'scheepskameel', name: 'Scheepskameel', type: 'Dutch waterfront brasserie · Eastern Docks', tier: 'mid', desc: 'Atmospheric restaurant in the old Eastern Harbour — water views, seasonal menu. Off the tourist radar.', eurMin: 25, eurMax: 38, dist: '15 min from Central by tram', booking: 'easy', bookingText: 'Walk-in or quick booking', menuUrl: 'https://www.scheepskameel.nl/en/menu/', bookUrl: 'https://www.scheepskameel.nl/en/' },
        { id: 'wilde-zwijnen', name: 'Wilde Zwijnen', type: 'Seasonal farm-to-table · Oost', tier: 'fancy', desc: 'Neighbourhood gem, devoted local following, seasonal tasting menu. Not hyped so you can actually get a table.', eurMin: 40, eurMax: 55, dist: '20 min from Central', booking: 'soon', bookingText: 'Book a few days ahead', menuUrl: 'https://www.wildezwijnen.com/en/menu/', bookUrl: 'https://www.wildezwijnen.com/en/' },
      ]
    }
  },
  {
    id: 'day6',
    date: '8',
    month: 'Apr',
    dow: 'Tuesday · Day 6',
    title: 'Utrecht + Red Light District Evening',
    tags: ['Day Trip', 'Night Tour'],
    weather: { icon: '🌦️', high: 11, low: 4, desc: 'Historically the most humid day of the trip. Likely drizzle most of the day. For Durban people this is the hardest weather day — wet AND cold. The good news: the evening Red Light District walk is after dark when it\'s drier.', badge: 'wet', wear: '☔ Full rain jacket + mid-layer + waterproof shoes if you have them. Coldest feeling day.' },
    activities: [
      { icon: '🚆', time: 'Morning', title: 'Train to Utrecht — 30 min, ~€8 each way', detail: "Dom Tower (tallest church tower in Netherlands, guided climb ~€15 pp), Oudegracht Canal (unique wharf-level cafés).", booking: 'soon', bookingText: 'Book Dom Tower at domtoren.nl', bookingUrl: 'https://domtoren.nl/en/tickets', bookingNote: 'Guided climb only ~€15 pp. Tours fill up — book a slot before you arrive in Utrecht.' },
      { icon: '🌙', time: '20:30–22:00', title: 'De Wallen — Guided Red Light District Tour', detail: 'Historical context — Oude Kerk, canal alleys, Dutch law on sex work. No photos of windows.', booking: 'soon', bookingText: 'Book at amsterdamredlighttours.com', bookingUrl: 'https://www.getyourguide.com/amsterdam-l36/amsterdam-red-light-district-guided-walking-tour-t66461/', bookingNote: 'Use GetYourGuide for vetted operators with free cancellation.' },
    ],
    extras: [
      { icon: '🆓', title: 'Utrecht Oudegracht wharf walk', detail: 'Completely free. Walk the lower canal level. Stunning in the rain — reflections are incredible.' },
      { icon: '🌧️', title: 'If very bad weather in Utrecht', detail: 'Centraal Museum Utrecht (€16) has Dutch art + the world\'s only surviving Viking ship.' },
      { icon: '🏛️', title: 'Museum Speelklok (Utrecht)', detail: 'Bizarre and brilliant — self-playing instruments, street organs, carillons, music boxes. €16 entry.' },
      { icon: '⛪', title: 'Oude Kerk (Amsterdam)', detail: 'Oldest building in Amsterdam, inside De Wallen. Entry ~€10. Your guided tour will pass it.' },
    ],
    meals: {
      lunch: [
        { id: 'broodje-mario', name: 'Broodje Mario', type: 'Broodjes · Utrecht centre', tier: 'budget', desc: 'Utrecht institution. Standing-room, cash only, incredibly cheap. Order broodje filet americain.', eurMin: 5, eurMax: 10, dist: '5 min from Dom Tower', booking: 'easy', bookingText: 'Walk-in only', menuUrl: 'https://maps.google.com/?q=Broodje+Mario+Utrecht', bookUrl: null },
        { id: 'oudaen', name: 'Oudaen Brewery', type: 'Craft beer & brasserie · Oudegracht', tier: 'mid', desc: 'A brewery in a medieval castle on the famous Oudegracht wharf level. 700-year-old building.', eurMin: 18, eurMax: 28, dist: 'On the Oudegracht canal', booking: 'easy', bookingText: 'Walk-in or quick call', menuUrl: 'https://www.oudaen.nl/en/menu/', bookUrl: 'https://www.oudaen.nl/en/' },
        { id: 'lokaal-noord', name: 'Lokaal Noord', type: 'Modern Dutch · Utrecht Oost', tier: 'fancy', desc: 'Seasonal Dutch, lovely wine list. Good for a long leisurely lunch before heading back for the evening.', eurMin: 35, eurMax: 50, dist: '15 min from Dom Tower', booking: 'soon', bookingText: 'Book ahead for group of 6', menuUrl: 'https://maps.google.com/?q=Lokaal+Noord+Utrecht', bookUrl: null },
      ],
      dinner: [
        { id: 'vlaamsch', name: 'Vlaamsch Broodhuys', type: 'Belgian artisan bread · City centre', tier: 'budget', desc: 'Brilliant artisan bakery, incredible sandwiches. Fast and filling — ideal before a long evening tour.', eurMin: 8, eurMax: 14, dist: '8 min to De Wallen', booking: 'easy', bookingText: 'Walk-in', menuUrl: 'https://maps.google.com/?q=Vlaamsch+Broodhuys+Amsterdam', bookUrl: null },
        { id: 'breda', name: 'Restaurant Breda', type: 'Contemporary Dutch · Jordaan', tier: 'mid', desc: "Creative Dutch cuisine, beautiful Jordaan setting. One of the city's top mid-range experiences.", eurMin: 40, eurMax: 55, dist: '20 min walk to De Wallen', booking: 'now', bookingText: 'Book NOW', menuUrl: 'https://www.restaurantbreda.nl/menu', bookUrl: 'https://www.restaurantbreda.nl' },
        { id: 'envy', name: 'Envy', type: 'Small plates & natural wine · Prinsengracht', tier: 'fancy', desc: 'Consistently praised — sharing plates, natural wine list, gorgeous canalside location.', eurMin: 50, eurMax: 70, dist: '15 min walk to De Wallen', booking: 'now', bookingText: 'Book NOW', menuUrl: 'https://www.restaurant-envy.nl/en/menu/', bookUrl: 'https://www.restaurant-envy.nl/en/' },
      ]
    }
  },
  {
    id: 'day7',
    date: '9',
    month: 'Apr',
    dow: 'Wednesday · Day 7',
    title: 'Markets & Creative Amsterdam',
    tags: ['Markets', 'Farewell 🥂'],
    weather: { icon: '🌤️', high: 11, low: 5, desc: 'Better than Day 6 — some sun breaks expected. Still cold by SA standards but the best weather day of the second half. Good day for the outdoor market.', badge: 'fine', wear: '🌤️ Jacket + light mid-layer. Might actually feel okay by now — you\'ll have acclimatised.' },
    activities: [
      { icon: '🛒', time: 'Morning', title: 'Albert Cuyp Market', detail: "Amsterdam's biggest outdoor market. Eat as you walk: stroopwafels, poffertjes, kibbeling, raw herring.", booking: 'easy', bookingText: 'Open all day — just show up' },
      { icon: '🎨', time: 'Afternoon', title: 'Free Ferry → NDSM Wharf', detail: 'Post-industrial creative district. Huge street art, independent cafés, waterfront views. Free ferry from Central Station every 15 min.', booking: 'easy', bookingText: 'Ferry is free — just go' },
    ],
    extras: [
      { icon: '🆓', title: 'EYE Film Museum (Noord)', detail: 'Same ferry as NDSM. Beautiful building, free ground floor, best terrace view of Amsterdam skyline.' },
      { icon: '🎡', title: "A'DAM Lookout", detail: 'Rooftop swing over Amsterdam. €17.50 entry. Genuinely fun for a group. On the Noord waterfront.' },
      { icon: '🌧️', title: 'If it rains', detail: 'Morning in covered Foodhallen, then Stedelijk Museum (modern art, always good). Save NDSM for another gap.' },
      { icon: '🛒', title: 'Last-minute gifts at Albert Cuyp', detail: 'Dutch cheese, stroopwafels in tins, tulip bulbs (pre-packaged for customs), Delft blue ceramics.' },
    ],
    meals: {
      lunch: [
        { id: 'albert-cuyp-stalls', name: 'Albert Cuyp Market Stalls', type: 'Street food · Albert Cuyp Market', tier: 'budget', desc: 'Graze the stalls — stroopwafels, herring, kibbeling, poffertjes. Full lunch under €15.', eurMin: 8, eurMax: 14, dist: 'At the market', booking: 'easy', bookingText: 'Walk and eat', menuUrl: 'https://www.albertcuypmarkt.amsterdam/en/', bookUrl: null },
        { id: 'ct-coffee', name: 'CT Coffee & Coconuts', type: 'All-day brunch · De Pijp', tier: 'mid', desc: "Converted 1920s cinema. Stunning space, great all-day menu. One of Amsterdam's most photographed interiors.", eurMin: 18, eurMax: 28, dist: '5 min from Albert Cuyp', booking: 'soon', bookingText: 'Busy Wednesdays — arrive early', menuUrl: 'https://www.ctamsterdam.nl/en/menu', bookUrl: 'https://www.ctamsterdam.nl/en' },
        { id: 'izakaya', name: 'Izakaya', type: 'Japanese sharing menu · Hotel W Amsterdam', tier: 'fancy', desc: 'Sushi, robata, wagyu, sake. Great change of pace from Dutch food on the last full day.', eurMin: 45, eurMax: 65, dist: 'Near Dam Square', booking: 'soon', bookingText: 'Book ahead', menuUrl: 'https://www.izakaya-amsterdam.com/en/menu/', bookUrl: 'https://www.izakaya-amsterdam.com/en/' },
      ],
      dinner: [
        { id: 'foodhallen-farewell', name: 'Foodhallen (revisit)', type: 'Covered food market · Oud-West', tier: 'budget', desc: 'Good low-key farewell. Round of Dutch beers, everyone picks their last Amsterdam meal.', eurMin: 12, eurMax: 22, dist: '12 min from Albert Cuyp', booking: 'easy', bookingText: 'Walk-in', menuUrl: 'https://foodhallen.nl/en/food-and-drinks/', bookUrl: null },
        { id: 'cafe-de-reiger-farewell', name: 'Café de Reiger', type: 'Dutch brasserie · Jordaan', tier: 'mid', desc: 'Warm, candlelit, vintage Jordaan brasserie. The kind of place you want to end a trip in.', eurMin: 28, eurMax: 42, dist: 'Jordaan', booking: 'soon', bookingText: 'Book this week', menuUrl: 'https://www.cafedereiger.nl/menu', bookUrl: 'https://www.cafedereiger.nl' },
        { id: 'breda-farewell', name: 'Restaurant Breda ⭐ Farewell Splurge', type: 'Contemporary Dutch · Jordaan', tier: 'splurge', desc: 'If De Kas was Day 3, Breda is the farewell. Intimate, creative, genuinely exciting. End the trip on a high.', eurMin: 55, eurMax: 75, dist: 'Jordaan', booking: 'now', bookingText: 'Book TODAY', menuUrl: 'https://www.restaurantbreda.nl/menu', bookUrl: 'https://www.restaurantbreda.nl' },
      ]
    }
  },
  {
    id: 'day8',
    date: '10',
    month: 'Apr',
    dow: 'Thursday · Day 8',
    title: 'Departure Morning',
    tags: ['Slow start'],
    weather: { icon: '🌤️', high: 12, low: 6, desc: 'Marginally warmer — the warmest morning of the trip at 12°C. Still jacket weather for Durban people but a decent send-off day.', badge: 'fine', wear: '👕 Jacket still needed but you can probably skip the heavy mid-layer.' },
    activities: [
      { icon: '☕', time: 'Morning', title: 'Coffee by the canals + Oosterpark walk', detail: "Ruby Emma is close to Oosterpark. Allow 50–60 min to Schiphol by train — don't cut it close.", booking: 'easy', bookingText: 'No booking needed' },
    ],
    extras: [
      { icon: '🆓', title: 'Oosterpark', detail: 'Free, leafy, local. Magere Brug (Skinny Bridge) is 10 min walk — most photographed bridge in Amsterdam.' },
      { icon: '✈️', title: 'Schiphol tip', detail: "Schiphol has the Rijksmuseum's Honour Gallery inside the terminal — free, airside. Real Dutch masterpieces between security and your gate." },
      { icon: '🛍️', title: 'Last gifts', detail: 'Buy in the city, not Schiphol — same products, lower prices around Centraal Station.' },
    ],
    meals: {
      breakfast: [
        { id: 'bagels-beans', name: 'Bagels & Beans', type: 'Bagels & coffee · Multiple locations', tier: 'budget', desc: "Amsterdam's beloved bagel chain. Freshly baked, creative toppings, great coffee.", eurMin: 7, eurMax: 12, dist: 'Multiple locations near hotel', booking: 'easy', bookingText: 'Walk-in', menuUrl: 'https://www.bagelsbeans.nl/en/menukaart/', bookUrl: null },
        { id: 'cafe-brecht', name: 'Café Brecht', type: 'German-Dutch literary café · Weteringschans', tier: 'mid', desc: 'Relaxed café with excellent coffee, newspapers, good eggs and pastries. Wonderfully unhurried.', eurMin: 12, eurMax: 18, dist: '12 min walk from Ruby Emma', booking: 'easy', bookingText: 'Walk-in', menuUrl: 'https://maps.google.com/?q=Cafe+Brecht+Amsterdam', bookUrl: null },
        { id: 'cafe-americain', name: 'Café Americain', type: 'Grand Art Nouveau café · Leidseplein', tier: 'fancy', desc: 'Iconic 1902 Art Nouveau interior. Grand breakfast in a grand space. The perfect last memory.', eurMin: 20, eurMax: 30, dist: '15 min from Ruby Emma', booking: 'easy', bookingText: 'Walk-in in the morning', menuUrl: 'https://www.cafeamericain.nl/en/menu/', bookUrl: 'https://www.cafeamericain.nl/en/' },
      ]
    }
  },
]

export const POLLS = [
  {
    id: 'haarlem-vs-free',
    question: 'Day 5 (7 Apr) — Haarlem day trip or free day in Amsterdam?',
    options: [
      { id: 'haarlem', label: '🚆 Haarlem day trip', desc: 'Grote Markt, Jopenkerk brewery, St. Bavo Church' },
      { id: 'free-day', label: '🌷 Free day in Amsterdam', desc: 'Bikes, Jordaan wander, sleep in, explore at leisure' },
    ]
  },
  {
    id: 'canal-cruise',
    question: 'Day 1 (3 Apr) — Should we do the optional evening canal cruise?',
    options: [
      { id: 'yes-cruise', label: '🚢 Yes — great intro to the city' },
      { id: 'no-cruise', label: '😴 No — just settle in on arrival night' },
    ]
  },
  {
    id: 'rld-tour',
    question: 'Day 6 (8 Apr) — Red Light District guided tour?',
    options: [
      { id: 'yes-rld', label: '🌙 Yes — guided tour is the way to go' },
      { id: 'no-rld', label: '🍷 No — just dinner and an early night' },
    ]
  },
]

export const ZAR_RATE = 19
