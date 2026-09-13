/* Editorial routes researched 13 September 2026. Hotel listings are real;
   no live inventory, tariffs, opening-hour promises or booking API are implied. */
const INDIA_CHECKED = '13 Sep 2026';
const INDIA_STATES = [];
function addState(name, region, base, line, source, hotel, days, notes = '') {
  INDIA_STATES.push({id:name.toLowerCase().replaceAll(' ','-'),name,region,base,line,source,hotels:[{name:hotel[0],area:hotel[1],url:hotel[2],type:hotel[3]||'Hotel'}],days:days.map(d=>({title:d[0],travel:d[1],stops:d.slice(2).map(p=>({name:p[0],why:p[1],note:p[2]||'Check visiting hours and admission with the venue.'}))})),notes});
}
addState('Andhra Pradesh','South','Visakhapatnam','Sea air, hilltop views, and a city along the coast.',
'https://www.incredibleindia.gov.in/en/andhra-pradesh/visakhapatnam',
['Novotel Visakhapatnam Varun Beach','Beach Road, Maharani Peta, Visakhapatnam','https://all.accor.com/hotel/7535/index.en.shtml','Seafront hotel'],[
['Meet the waterfront','Start after arrival; keep this day on Beach Road.',['Ramakrishna Beach','Begin with a relaxed walk along the waterfront.','A promenade stop; check local sea conditions before water activities.'],['INS Kursura Submarine Museum','Step into the naval side of the city.']],
['Hills above the sea','Use local road transport between the hill and beach.',['Kailasagiri','Look out over the coastline from the hilltop park.'],['Rushikonda Beach','Leave the afternoon open for the coast.','Swimming and water sports depend on local conditions.']],
['A quieter final day','Arrange a separate road outing and return to your city base.',['Simhachalam Temple','Visit the hill temple before returning to town.','Check entry rules, dress expectations and festival queues.'],['Kambalakonda Wildlife Sanctuary','Consider a guided nature visit.','Confirm entry, trails and guide availability with the sanctuary first.']]
]);
addState('Arunachal Pradesh','Northeast','Itanagar','Brick-fort stories and green foothills.',
'https://www.incredibleindia.gov.in/en/arunachal-pradesh/itanagar',
['Cygnett Inn Trendz','Itanagar, Arunachal Pradesh','https://www.cygnetthotels.com/cygnett-inn-trendz-itanagar/unit-overview','City hotel'],[
['Begin with the city’s stories','Keep arrival day within Itanagar.',['Ita Fort','Start with the brick ruins that give the city its name.'],['Jawaharlal Nehru State Museum','Look into the state’s textile and craft traditions.']],
['Lake and monastery','Hire local transport for the lake outing.',['Ganga Lake (Gyakar Sinyi)','Make room for a slow lakeside visit.','Confirm boating and access locally; do not assume they operate daily.'],['Buddha Vihar, Itanagar','Pause at the city’s Buddhist shrine.','Respect prayer times and photography restrictions.']],
['Leave space for the forest','Arrange this outing in advance; return to Itanagar.',['Itanagar Wildlife Sanctuary','Explore with authorised local guidance.','Check entry permission, trail conditions and a guide before setting out.']]
],'Check current entry permits and road conditions before making reservations. This route stays around Itanagar; Tawang is a separate, longer journey.');
addState('Assam','Northeast','Guwahati','Temple hills and the broad Brahmaputra.',
'https://www.incredibleindia.gov.in/en/assam/guwahati',
['Vivanta Guwahati','Khanapara, Guwahati','https://www.vivantahotels.com/en-in/hotels/vivanta-guwahati','City hotel'],[
['Meet the Brahmaputra','Begin in central Guwahati after arrival.',['Assam State Museum','Start with the region’s cultural collections.'],['Brahmaputra River Heritage Centre','Spend the afternoon with the river’s stories.']],
['A hill and an island','Keep time for temple queues and any ferry wait.',['Kamakhya Temple','Visit the city’s important hilltop shrine.','Dress respectfully; opening hours and queues vary with festivals.'],['Umananda Temple','Take the island visit only if ferries are operating.','Ferry services depend on river and weather conditions.']],
['Culture at a slower pace','Use city transport; allow for cross-city traffic.',['Srimanta Sankaradeva Kalakshetra','Explore Assamese arts and performance traditions.'],['Navagraha Temple','Finish with another of Guwahati’s hilltop landmarks.']]
]);
addState('Bihar','East','Bodh Gaya','A contemplative route through Buddhist heritage.',
'https://www.incredibleindia.gov.in/en/bihar/gaya',
['Hyatt Place Bodh Gaya','Katorwa Road, Bodh Gaya','https://www.hyatt.com/hyatt-place/en-US/gayzb-hyatt-place-bodh-gaya','City hotel'],[
['Arrive in Bodh Gaya','Keep your first day around the temple precinct.',['Mahabodhi Temple','Take an unhurried first look at the temple complex.','Follow security screening and site rules.'],['Bodhi Tree, Mahabodhi complex','Spend a quiet moment within the same precinct.']],
['The archaeological trail','Arrange a return road excursion; do not combine it with arrival.',['Barabar Caves','See early rock-cut chambers outside Gaya.','Uneven approaches and steps; check access before travel.'],['Archaeological Museum, Bodh Gaya','Return for collections connected to the site.','Confirm museum opening days before setting out.']],
['Around Gaya','Use a driver for this outing and leave time for departure.',['Dungeshwari Hills','Visit the cave-shrine area associated with Buddhist tradition.','Allow for an uphill approach; ask locally about the easiest access.'],['Vishnupad Temple precinct, Gaya','Explore the temple neighbourhood and riverfront.','Temple entry is restricted to Hindus; other visitors can visit the surrounding public areas.']]
]);
addState('Chhattisgarh','Central','Raipur','Local heritage, lake walks, and open-air culture.',
'https://www.incredibleindia.gov.in/en/chhattisgarh/raipur',
['Courtyard by Marriott Raipur','Raipur, Chhattisgarh','https://www.marriott.com/en-us/hotels/rprcy-courtyard-raipur/overview/','City hotel'],[
['Museum to lakeside','Keep the first day in Raipur city.',['Mahant Ghasidas Memorial Museum','Start with collections from Chhattisgarh.'],['Swami Vivekananda Sarovar','Wind down beside the city lake.']],
['Culture in the open','Plan a road outing to Nava Raipur.',['Purkhauti Muktangan','Explore the open-air displays of regional culture.'],['Nandanvan Jungle Safari','Consider an organised wildlife visit.','Reserve through the operator; opening and safari availability need checking.']],
['An easy city finish','Return to the city for the final day.',['Urja Park','Explore the energy-themed park.'],['Telibandha Lake','Leave time for a final waterfront walk.']]
]);
addState('Goa','West','Panaji','Old lanes, river views, and a little beach time.',
'https://www.incredibleindia.gov.in/en/goa/goa',
['Vivanta Goa, Panaji','Off D. B. Bandodkar Road, Panaji','https://www.vivantahotels.com/en-in/hotels/vivanta-goa-panaji','City hotel'],[
['Walk the old quarters','Explore Panaji on foot with breaks from the heat.',['Fontainhas','Walk through the old residential lanes.','These are lived-in homes; ask before photographing people or private entrances.'],['São Tomé quarter','Continue through another of Panaji’s historic neighbourhoods.']],
['Old Goa day','Take a return drive to Old Goa.',['Basilica of Bom Jesus','Visit one of Old Goa’s best-known churches.','Check service times and restoration-related access.'],['Sé Cathedral','Continue through the historic church precinct.']],
['Across the Mandovi','Use road transport for the fort and coast.',['Reis Magos Fort','Explore the restored fort above the river.'],['Candolim Beach','End the route with time by the sea.','Check lifeguard flags and local conditions; beach time does not imply swimming.']]
]);
addState('Gujarat','West','Ahmedabad','Stone lace, stepwells, and old-city lanes.',
'https://www.incredibleindia.gov.in/en/trips/trip-listing/ahmedabads-cultural-marvels-await-you',
['The House of MG','Lal Darwaja, Ahmedabad','https://houseofmg.com/stay/house-of-mg/','Heritage hotel'],[
['The city in stone','Group the old-city sights together.',['Sidi Saiyyed Mosque','See the intricate stone screens.'],['Jama Masjid, Ahmedabad','Continue through the historic centre.','Dress respectfully and avoid interrupting prayers.']],
['Gandhi and the river','Use city transport between the ashram and promenade.',['Sabarmati Gandhi Ashram','Make time for the life and work of Gandhi.'],['Sabarmati Riverfront','Finish with an unhurried riverside walk.']],
['Beyond the old city','Start with a return drive to Adalaj.',['Adalaj Stepwell','Look closely at the carved, layered architecture.'],['Hutheesing Jain Temple','Return to Ahmedabad for a final temple visit.']]
]);
addState('Haryana','North','Kurukshetra','Sacred water, layered history, and a quiet detour.',
'https://www.incredibleindia.gov.in/en/haryana/kurukshetra/kurukshetra-exploring-the-religious-and-heritage-sites',
['Parakeet Tourist Complex','Pipli, Kurukshetra','https://haryanatourism.gov.in/where_to_stay/parakeet/','Haryana Tourism stay'],[
['Begin by the sarovar','Travel from the Pipli base into Kurukshetra.',['Brahma Sarovar','Walk the edges of the sacred water tank.'],['Sri Krishna Museum','Add context through the museum collections.']],
['A day of heritage','Group the Thanesar-area sights by road.',['Sheikh Chilli’s Tomb','Explore the tomb complex and its architecture.'],['Bhadrakali Temple','Visit another of the area’s significant shrines.']],
['Stories and the sky','Plan a short outing to Jyotisar, then return.',['Jyotisar','Visit the site associated with the Bhagavad Gita.'],['Kalpana Chawla Memorial Planetarium','End with an astronomy-themed visit.','Check show schedules and language before travelling.']]
]);
addState('Himachal Pradesh','North','Shimla','Cedar air and a town made for wandering.',
'https://www.incredibleindia.gov.in/en/himachal-pradesh/shimla',
['The Oberoi Cecil','Chaura Maidan, Shimla','https://www.oberoihotels.com/hotels-in-shimla-cecil/','Heritage hotel'],[
['The heart of Shimla','Take the first day gently after the hill-road arrival.',['The Ridge','Get your bearings in the open town square.'],['Mall Road, Shimla','Explore the pedestrian centre at your own pace.']],
['Heritage among the hills','Keep these west-Shimla sights together.',['Viceregal Lodge and Botanical Garden','Visit the historic building and grounds.','Tour access can change; confirm which areas are open.'],['Himachal State Museum','Look into the region’s art and history.']],
['Above the town','Arrange transport or a walk suited to your fitness.',['Jakhu Temple','Visit the shrine on Jakhu Hill.','The approach is steep; keep food and loose belongings secured around monkeys.'],['Christ Church, Shimla','Return to the Ridge for the church.','Check access around worship services.']]
]);
addState('Jharkhand','East','Ranchi','Hilltop pauses and waterfall country.',
'https://www.incredibleindia.gov.in/en/jharkhand/ranchi',
['Radisson Blu Hotel, Ranchi','Main Road, Kadru Diversion, Ranchi','https://www.radissonhotels.com/en-us/hotels/radisson-blu-ranchi','City hotel'],[
['A gentle city introduction','Start within Ranchi.',['Rock Garden, Ranchi','Explore the landscaped rocky setting.'],['Tagore Hill','Take in views from the hill.','Steps and inclines; adapt the climb to your comfort.']],
['A waterfall day','Arrange a dedicated return drive; check road conditions.',['Dassam Falls','View the cascade from designated areas.','Stay behind barriers; do not enter the water or approach the edge.'],['Jagannath Temple, Ranchi','Visit the temple on the return to the city.']],
['Green spaces and city views','Allow time for the climb and your onward journey.',['Nakshatra Van','Enjoy the landscaped garden.'],['Pahari Mandir','Finish with a hilltop shrine.','Expect many steps; skip the climb if it does not suit you.']]
]);
addState('Karnataka','South','Mysuru','Royal rooms, flower markets, and hilltop views.',
'https://www.incredibleindia.gov.in/en/trips/trip-listing/mysuru-s-royal-exploration',
['Radisson Blu Plaza Hotel, Mysore','1 M. G. Road, Mysuru','https://www.radissonhotels.com/en-us/hotels/radisson-blu-mysore','City hotel'],[
['A royal introduction','Keep arrival day in central Mysuru.',['Mysore Palace','Explore the palace at an unhurried pace.'],['Devaraja Market','Wander past flowers, produce and everyday city life.']],
['The hill and the lake','Use local transport for the Chamundi Hill circuit.',['Chamundeshwari Temple','Visit the shrine above Mysuru.','Check temple timings and allow for queues.'],['Karanji Lake','Return to the city for a nature-focused pause.']],
['Art, then gardens','Plan the garden outing separately from central sightseeing.',['Sri Jayachamarajendra Art Gallery','Browse the art collection at Jaganmohan Palace.'],['Brindavan Gardens','Take a return outing to the gardens near the dam.','Confirm opening times and any fountain programme before leaving.']]
]);
addState('Kerala','South','Fort Kochi','Harbour light and stories in the old streets.',
'https://www.incredibleindia.gov.in/en/kerala/kochi',
['Brunton Boatyard','Calvetty Road, Fort Kochi','https://www.cghearth.com/brunton-boatyard','Waterfront heritage hotel'],[
['Hello, Fort Kochi','Stay within the Fort Kochi waterfront area.',['Chinese Fishing Nets, Fort Kochi','Watch the harbour from the shore.'],['St. Francis Church','Step into a piece of the old port’s history.']],
['Across to Mattancherry','Use a short local road transfer to Mattancherry.',['Mattancherry Palace','Explore the palace and mural collections.'],['Jew Town and Paradesi Synagogue','Walk through the historic quarter.','Confirm synagogue visiting hours, religious closures and entry rules.']],
['Art and performance','Keep the day in Fort Kochi; reserve any evening performance.',['Santa Cruz Basilica','Visit the church and its interiors.'],['Kerala Kathakali Centre','Consider a performance to finish the trip.','Tickets and show timings must be confirmed with the venue.']]
],'This is a Kochi-based introduction to Kerala. Munnar and Varkala have separate routes below; do not combine them into a three-day Kochi stay.');
addState('Madhya Pradesh','Central','Bhopal','Museum stories and two journeys into deep time.',
'https://www.incredibleindia.gov.in/en/madhya-pradesh/bhopal',
['Jehan Numa Palace','157 Shamla Hills, Bhopal','https://www.jehannuma.com/palace-bhopal/','Heritage hotel'],[
['Meet Bhopal','Keep the first day around the city.',['Madhya Pradesh Tribal Museum','Spend time with the museum’s regional cultural displays.'],['Van Vihar National Park','Add a nature-focused visit within Bhopal.','Confirm the visitor route and opening hours first.']],
['The Sanchi excursion','Reserve a full return road outing northeast of Bhopal.',['Sanchi Stupa complex','Explore the Buddhist monuments.'],['Udayagiri Caves, near Vidisha','Add the nearby rock-cut site if timing permits.','Ask your driver to confirm the route and leave time for the return.']],
['The Bhimbetka excursion','Travel south on a separate day; avoid combining with Sanchi.',['Bhimbetka Rock Shelters','See the rock shelters and painted surfaces.','Keep to marked paths and do not touch the paintings.'],['Taj-ul-Masjid, Bhopal','Return for a city landmark if departure time allows.','Respect worship and visitor access rules.']]
]);
addState('Maharashtra','West','Mumbai','Harbour mornings and a city that keeps moving.',
'https://www.incredibleindia.gov.in/en/trips/trip-listing/mumbais-timeless-charms',
['The Taj Mahal Palace, Mumbai','Apollo Bunder, Colaba, Mumbai','https://www.tajhotels.com/en-in/hotels/taj-mahal-palace-mumbai','Heritage hotel'],[
['A South Mumbai introduction','Keep arrival day around Colaba and the museum district.',['Gateway of India','Begin by the harbour arch.'],['Chhatrapati Shivaji Maharaj Vastu Sangrahalaya','Spend the afternoon with the museum collections.']],
['Across the harbour','Set aside a dedicated day for the ferry excursion.',['Elephanta Caves','Explore the island’s rock-cut caves.','Confirm ferry operations and site opening days; sea conditions can cancel the outing.'],['Marine Drive','Return for a relaxed promenade walk.']],
['Architecture and cinema','Allow for city traffic between stops.',['Chhatrapati Shivaji Maharaj Terminus','Admire the landmark station’s exterior.','This is a working station; use public areas and follow railway rules.'],['National Museum of Indian Cinema','End with the stories behind Indian film.']]
]);
addState('Manipur','Northeast','Imphal','Markets, living heritage, and a lake-filled horizon.',
'https://www.incredibleindia.gov.in/en/manipur/imphal/imphal-travel-and-food-guide',
['Classic Grande Imphal','Chingmeirong Road, Imphal','https://www.classicgrande.com/','City hotel'],[
['History and market life','Only proceed after confirming local travel conditions.',['Kangla Fort','Explore the former royal complex.'],['Ima Keithel','Visit the women-run market.','Ask before photographing traders.']],
['The Loktak outing','Use a trusted local driver; confirm the route before departure.',['Loktak Lake','View the lake landscape from an authorised access point.'],['Sendra viewpoint','Look across the water from the hill.','Boat trips and lake access must be checked locally.']],
['Imphal’s cultural heart','Stay within the city on the final day.',['Shri Govindajee Temple','Visit the temple respectfully.'],['Mapal Kangjeibung','See the historic polo ground from permitted areas.']]
],'Travel advisory: UK FCDO advises against all but essential travel to Manipur. This is a reference itinerary, not a recommendation to travel now. Confirm current local conditions and entry requirements.');
addState('Meghalaya','Northeast','Shillong','Lake walks, local stories, and waterfall mist.',
'https://www.incredibleindia.gov.in/en/meghalaya/shillong/don-bosco-museum',
['Courtyard by Marriott Shillong','Shillong, Meghalaya','https://www.marriott.com/en-us/hotels/shlcy-courtyard-shillong/overview/','City hotel'],[
['An easy Shillong arrival','Keep the first day around central Shillong.',['Ward’s Lake','Walk around the lake and gardens.'],['Cathedral of Mary Help of Christians','Visit the cathedral respectfully.']],
['A museum-led day','Allow a full museum visit, then a relaxed return.',['Don Bosco Museum','Explore the cultures of Northeast India.','Confirm museum opening days before visiting.']],
['Waterfall and a city pause','Arrange a return road outing; keep the afternoon flexible.',['Elephant Falls','Follow the marked paths beside the falls.','Wet steps can be slippery; the lower sections involve stairs.'],['Ward’s Lake gardens','Return for an optional relaxed stop before departure.']]
]);
addState('Mizoram','Northeast','Aizawl','Hillside neighbourhoods and a village beyond.',
'https://www.incredibleindia.gov.in/en/mizoram/aizawl',
['Hotel Regency','B-49, Mac Donald Hill, Zarkawt, Aizawl','https://aizawl.nic.in/accommodation/hotel-regency/','District-listed hotel'],[
['The city’s everyday stories','Keep these central Aizawl stops together.',['Mizoram State Museum','Start with Mizo history and cultural collections.'],['Bara Bazar, Aizawl','Browse the city’s market.','Check market opening days and ask before photographing people.']],
['A village day','Reserve a return road outing to Reiek.',['Reiek Heritage Village','Explore the cultural setting with local guidance.'],['Reiek Peak','Consider the hike if weather and fitness allow.','Use a local guide; skip the climb in poor conditions.']],
['A quiet city finish','Use road transport for the final city circuit.',['Solomon’s Temple','See the distinctive church architecture.'],['Durtlang Hills','Take in the hillside setting.','Choose a viewpoint and access route appropriate for your mobility.']]
],'Check current entry-permit requirements before booking. Confirm opening days, particularly on Sundays.');
addState('Nagaland','Northeast','Kohima','Hill-town history and village hospitality.',
'https://www.incredibleindia.gov.in/en/nagaland/kohima',
['Hotel Japfu','Kohima, Nagaland','https://kohima.nic.in/accommodation/','District-listed hotel'],[
['A thoughtful arrival','Keep the first day within Kohima.',['Kohima War Cemetery','Visit the memorial grounds quietly.'],['Nagaland State Museum','Explore the state’s cultural collections.']],
['Village traditions','Arrange a return drive south of the city.',['Naga Heritage Village, Kisama','Visit the heritage complex.','Festival performances are seasonal; confirm what is open outside festival dates.'],['Cathedral Church, Kohima','Stop on the return to the city.']],
['The Khonoma day','Reserve a separate return drive and a local village guide.',['Khonoma Village','Walk through the village with community guidance.','Ask before entering homes, fields or community spaces.']]
],'Check current entry permits and local road conditions. Khonoma and Kisama are separate outings; Dzukou Valley needs a dedicated trekking plan.');
addState('Odisha','East','Bhubaneswar','Carved temples and the craft of everyday life.',
'https://www.incredibleindia.gov.in/en/odisha/bhubaneswar',
['MAYFAIR Lagoon','Bhubaneswar, Odisha','https://www.mayfairhotels.com/lagoon-bhubaneswar','City resort'],[
['Old-town architecture','Group the old-town temples together.',['Mukteswara Temple','Look closely at the stonework.'],['Rajarani Temple','Continue the architectural trail.']],
['Caves and living craft','Use local road transport between these sights.',['Udayagiri and Khandagiri Caves','Explore the rock-cut cave complexes.','Steps and exposed stone; plan breaks and suitable footwear.'],['Kala Bhoomi Odisha Crafts Museum','See regional crafts in a museum setting.']],
['A day around Dhauli','Arrange a return outing south of the city.',['Dhauligiri Hills','Visit the hill and its peace pagoda.'],['Museum of Tribal Arts and Artifacts','Return to the city for the museum.']]
]);
addState('Punjab','North','Amritsar','Shared meals, sacred spaces, and powerful stories.',
'https://www.incredibleindia.gov.in/en/trips/trip-listing/amritsar-s-golden-getaway',
['Hyatt Regency Amritsar Hotel & Spa','M. B. M. Farms, G. T. Road, Amritsar','https://www.hyatt.com/hyatt-regency/en-US/atqhy-hyatt-regency-amritsar-hotel-and-spa','City hotel'],[
['The heart of Amritsar','Allow time to settle in and visit respectfully.',['Golden Temple','Experience the temple complex at your own pace.','Cover your head and follow the gurdwara’s visitor guidance.'],['Jallianwala Bagh','Visit the memorial near the temple precinct.']],
['Remembering and understanding','Keep the day centred on the city’s history.',['Partition Museum','Spend time with the personal stories of Partition.'],['Gobindgarh Fort','Explore the fort and its exhibitions.','Check separate show tickets and current operating times.']],
['Gardens and a final museum','Leave room for your onward journey.',['Ram Bagh Garden','Take an easy walk through the garden.'],['Maharaja Ranjit Singh Museum','Finish with the history of the Sikh kingdom.']]
]);
addState('Rajasthan','North','Jaipur','Pink-city mornings and palaces in warm stone.',
'https://www.incredibleindia.gov.in/en/rajasthan/jaipur/city-palace',
['Alsisar Haveli','Sansar Chandra Road, Jaipur','https://www.alsisarhaveli.com/','Heritage hotel'],[
['Inside the Pink City','Group the central monuments together.',['City Palace, Jaipur','Explore the palace’s public museum areas.'],['Jantar Mantar, Jaipur','Make time for the astronomical instruments.']],
['The Amer excursion','Plan a dedicated return drive to Amer.',['Amber Fort','Explore the fort with breaks from the heat.','Steps and inclines; check access options and ticket inclusions.'],['Hawa Mahal','Return to the city for its distinctive façade.','Check last entry if you want to go inside.']],
['Take the old city slowly','Stay within central Jaipur.',['Bazaars around City Palace','Browse local craft shops and streets.'],['Hawa Mahal streetscape','Return for an optional exterior photography walk.','Use public space without blocking traffic or shop entrances.']]
]);
addState('Sikkim','Northeast','Gangtok','Monastery courtyards and a gentler mountain rhythm.',
'https://www.incredibleindia.gov.in/en/sikkim/gangtok',
['Denzong Regency','Gangtok, Sikkim','https://www.denzongregency.com/luxury-5-star-hotels-in-gangtok-sikkim.php','Hill hotel'],[
['Arrive and slow down','Leave recovery time after the road journey into Gangtok.',['Enchey Monastery','Begin with a quiet monastery visit.'],['M. G. Marg, Gangtok','Settle into the pedestrian town centre.']],
['The Rumtek day','Make a dedicated return road outing across the valley.',['Rumtek Monastery','Explore the monastery precinct respectfully.','Carry identification and confirm current visitor access.']],
['Tibetan heritage','Keep the final day within Gangtok.',['Namgyal Institute of Tibetology','Learn about Tibetan culture through its collections.'],['Do Drul Chorten','Visit the nearby stupa.','Respect worship and photography guidance.']]
],'This route excludes high-altitude border excursions. Check current permits, visitor eligibility and road conditions before adding Tsomgo Lake or Nathula.');
addState('Tamil Nadu','South','Chennai','Temple colour and long seaside evenings.',
'https://www.incredibleindia.gov.in/en/tamil-nadu/chennai',
['Taj Connemara','Binny Road, Chennai','https://www.tajhotels.com/en-in/hotels/taj-connemara-chennai','Heritage hotel'],[
['Begin in Mylapore','Use local transport; leave breaks from the heat.',['Kapaleeswarar Temple','Explore the temple neighbourhood.','Check temple entry and dress rules.'],['San Thome Basilica','Continue to the coastal church.']],
['The historic city','Plan a museum day with city travel between stops.',['Fort St. George / Fort Museum','Explore the fort’s visitor areas and collections.','Confirm museum access and carry identification.'],['Government Museum, Egmore','Spend the afternoon with its collections.']],
['The coast at your pace','Keep these coastal-city stops on an easy final day.',['Parthasarathy Temple','Visit the temple in Triplicane.'],['Marina Beach','End with a promenade walk.','This is a shore visit, not a swimming recommendation.']]
]);
addState('Telangana','South','Hyderabad','Old-city flavour and fort-top horizons.',
'https://www.incredibleindia.gov.in/en/telangana/hyderabad/salar-jung-museum',
['Taj Deccan','Road No. 1, Banjara Hills, Hyderabad','https://www.tajhotels.com/en-in/hotels/taj-deccan-hyderabad','City hotel'],[
['The old-city introduction','Travel from your hotel to the old city and group nearby sights.',['Charminar','Start at Hyderabad’s landmark monument.'],['Chowmahalla Palace','Explore the palace courtyards and public galleries.']],
['Fort and royal tombs','Keep the western heritage circuit on its own day.',['Golconda Fort','Explore the fort’s paths and viewpoints.','Many steps and exposed areas; adapt the climb to the weather.'],['Qutb Shahi Tombs','Continue to the tomb complex.','Check current restoration-related access.']],
['Collections and water','Allow cross-city traffic time before departure.',['Salar Jung Museum','Spend a slow morning with the collections.'],['Hussain Sagar','Finish with a lakeside stop.','Boat services, if desired, require a separate availability check.']]
]);
addState('Tripura','Northeast','Agartala','Royal rooms and a palace reflected in water.',
'https://www.incredibleindia.gov.in/en/trips/trip-listing/traversing-pristine-agartala',
['Ginger Agartala','Khejur Bagan, Airport Road, Agartala','https://www.gingerhotels.com/hotels/ginger-agartala','City hotel'],[
['Agartala’s royal chapter','Start with sights inside the city.',['Ujjayanta Palace / Tripura State Museum','Explore the former palace and museum.'],['Jagannath Bari Temple','Continue with a nearby religious landmark.']],
['The water-palace excursion','Reserve a full return road outing to Melaghar.',['Neermahal','Visit the palace on Rudrasagar Lake.','Confirm boat operation, weather and palace access first.'],['Rudrasagar Lake','Leave time to enjoy the lakeside setting.']],
['Nature, then an easy return','Arrange a separate return outing from Agartala.',['Sepahijala Wildlife Sanctuary','Explore permitted visitor areas.','Check sanctuary opening and access with the operator.'],['Heritage Park, Agartala','Return for an optional city stop before departure.']]
]);
addState('Uttar Pradesh','North','Varanasi','River rituals and a day with Buddhist heritage.',
'https://www.incredibleindia.gov.in/en/uttar-pradesh/varanasi/sarnath',
['BrijRama Palace','Darbhanga Ghat, Varanasi','https://www.brijhotels.com/hotels/brijrama-palace-varanasi/hotel-overview','Riverside heritage hotel'],[
['Arrive by the ghats','Plan your luggage transfer with the hotel in advance.',['Dashashwamedh Ghat','Watch riverfront life from public areas.','Ask locally about ceremony timing and crowd management.'],['Assi Ghat','Take another unhurried waterfront walk.']],
['A day in Sarnath','Make a separate return road excursion.',['Sarnath archaeological site','Explore the Buddhist remains and stupas.'],['Sarnath Archaeological Museum','Add context through the museum collections.','Check museum closure days separately from the archaeological site.']],
['Across the river','Allow time for bridge traffic and your onward journey.',['Ramnagar Fort','Explore the fort’s public visitor areas.'],['Tulsi Manas Mandir','Return to Varanasi for the temple.']]
],'Confirm the hotel’s arrival arrangements: ghat-side stays can involve walking or boat transfers.');
addState('Uttarakhand','North','Dehradun','Forest stories and the green Doon Valley.',
'https://www.incredibleindia.gov.in/en/uttarakhand/dehradun',
['Lemon Tree Hotel, Dehradun','Pacific Mall, Jakhan, Rajpur Road, Dehradun','https://www.lemontreehotels.com/lemon-tree-hotel/dehradun/hotel-dehradun','City hotel'],[
['A forest-minded arrival','Keep the first day around the city.',['Forest Research Institute','Explore the campus’s permitted visitor areas and museums.'],['Tapkeshwar Mahadev Temple','Visit the cave shrine.','Check access after rain and expect steps.']],
['Water and limestone','Take a local road outing only if conditions are suitable.',['Robber’s Cave (Guchhupani)','See the stream-cut cave setting.','Do not enter during heavy rain, warnings or high water.'],['Sahastradhara','Spend time in the springs area.','Check conditions locally; avoid unsafe or restricted water access.']],
['The quieter valley','Use a short local road circuit before departure.',['Mindrolling Monastery, Clement Town','Visit the monastery’s public areas.'],['Lachhiwala Nature Park','Finish with an outdoor break.','Check opening and any weather-related restrictions.']]
]);
addState('West Bengal','East','Kolkata','Museum afternoons and stories by the Hooghly.',
'https://www.incredibleindia.gov.in/en/west-bengal/kolkata',
['The Elgin Fairlawn','Sudder Street, Kolkata','https://www.elginhotels.com/elgin-fairlawn-kolkata-hotel-overview/','Heritage hotel'],[
['An introduction in marble','Group the Maidan-area landmarks together.',['Victoria Memorial','Begin with the museum and gardens.'],['St. Paul’s Cathedral','Continue to the nearby cathedral.']],
['Museums and the river','Allow an unhurried indoor visit before the waterfront.',['Indian Museum','Choose a few collections and take your time.'],['Prinsep Ghat','Finish the afternoon by the Hooghly.']],
['The creative north','Plan a city drive north and leave time for traffic.',['Jorasanko Thakur Bari','Visit the Tagore family home and museum.'],['Kumartuli','Explore the artisans’ quarter respectfully.','Ask before entering workshops or photographing artists.']]
]);
// Keep the original Kerala discovery cards as their own genuine local routes.
addState('Munnar','South','Munnar','Tea-country mornings and time in the hills.',
'https://www.keralatourism.org/campaigns/kerala365/tea-trail-munnar-hills-kerala',
['Fragrant Nature Munnar','Pothamedu, Munnar','https://www.fragrantnature.com/pothamedu-munnar/','Hill resort'],[
['Settle into tea country','Leave time after the mountain-road arrival.',['Tea Museum, Munnar','Learn about the area’s tea industry.'],['Pothamedu View Point','Enjoy the hill landscape from a public viewpoint.','Weather affects visibility; avoid stopping in unsafe road sections.']],
['A reservoir day','Use local road transport for this circuit.',['Mattupetty Dam','Take in the reservoir and surrounding hills.'],['Top Station','Continue only if the day’s road and weather conditions allow.','Allow enough time for the return to Munnar; do not rush a late arrival.']],
['A morning in nature','Reserve the national-park visit and return for departure.',['Eravikulam National Park','Visit the permitted tourism zone.','Seasonal closures and timed entry apply; check the official operator before booking.']]
]);
addState('Varkala','South','Varkala','Cliffside wandering with a softer pace.',
'https://www.keralatourism.org/kerala-article/2013/varkala-budget-travel-destination/472',
['Gateway Varkala','Janardhanapuram, Varkala','https://www.gateway-hotels.com/en-in/hotels/gateway-varkala','Coastal hotel'],[
['Arrive on the coast','Keep the first day around the cliff and beach.',['Varkala North Cliff','Walk the public clifftop path.','Stay away from unstable cliff edges and respect any barriers.'],['Papanasam Beach','Spend time on the shore.','Check lifeguard flags and sea conditions.']],
['Varkala’s spiritual side','Use local transport between the two sites.',['Janardhana Swamy Temple','Visit the temple neighbourhood.','Check visitor entry rules; the approach includes steps.'],['Sivagiri Mutt','Explore the place associated with Sree Narayana Guru.']],
['A little farther along the coast','Arrange a return drive towards Kappil.',['Kappil Beach and Lake','See the coastal and backwater setting.'],['Edava Beach','Stop on the return to Varkala.','Keep to safe public access; sea conditions can change quickly.']]
]);
const EXTRA_ROUTES = INDIA_STATES.splice(28);
EXTRA_ROUTES.forEach(s=>{s.stateName='Kerala';s.id='kerala-'+s.id});
const ALL_ROUTES = [...INDIA_STATES,...EXTRA_ROUTES];
const stateByName = name => ALL_ROUTES.find(s=>s.name===name);
stateByName('Rajasthan').days[2]={title:'Art and a hilltop fort',travel:'Start in the city, then arrange a return drive to Nahargarh.',stops:[{name:'Albert Hall Museum',why:'Explore the art and decorative collections.',note:'Confirm museum opening hours and ticket inclusions.'},{name:'Nahargarh Fort',why:'End with a fort visit overlooking Jaipur.',note:'Check last entry; arrange return transport rather than walking an unfamiliar hill road after dark.'}]};
stateByName('Rajasthan').source='https://www.incredibleindia.gov.in/en/trips/trip-listing/a-royal-jaipur-escapade';
const additionalSources={
'Andhra Pradesh':['https://www.incredibleindia.gov.in/en/andhra-pradesh/visakhapatnam/kailasagiri'],
'Chhattisgarh':['https://www.incredibleindia.gov.in/en/trips/trip-listing/a-two-day-journey-of-discovery-in-raipur'],
'Karnataka':['https://www.incredibleindia.gov.in/en/karnataka/mysuru/chamundi-hill-temple'],
'Maharashtra':['https://www.incredibleindia.gov.in/en/maharashtra/mumbai/marine-drive'],
'Manipur':['https://www.incredibleindia.gov.in/en/manipur/imphal/mapal-kangjeibung','https://www.incredibleindia.gov.in/en/manipur'],
'Meghalaya':['https://www.incredibleindia.gov.in/en/meghalaya/shillong/cathedral-of-mary-help-of-christians'],
'Telangana':['https://www.prod.incredibleindia.gov.in/content/incredible-india-v2/en/destinations/hyderabad/qutub-shahi-tombs.html','https://www.incredibleindia.gov.in/en/telangana/hyderabad/unraveling-the-secrets-of-golkonda-fort'],
'Tripura':['https://www.incredibleindia.gov.in/en/tripura/agartala/heritage-park'],
'Uttar Pradesh':['https://www.incredibleindia.gov.in/en/uttar-pradesh/varanasi/tulsi-manas-mandir'],
'Munnar':['https://www.keralatourism.org/ktadmin/img/file_upload/munnar_highres.pdf'],
'Varkala':['https://www.keralatourism.org/travelcare/postdetails/view/2601','https://www.keralatourism.org/sreenarayanaguru/sivagiri-pilgrimage/concept']
};
ALL_ROUTES.forEach(s=>{s.sources=[s.source,...(additionalSources[s.name]||[])];s.days.forEach((d,di)=>d.stops.forEach((p,pi)=>{p.id=s.id+'-'+di+'-'+pi;p.source=s.source;p.mapQuery=p.name+', '+s.base+', '+(s.stateName||s.name)+', India'}))});
stateByName('Karnataka').days[1].stops[1].source=additionalSources.Karnataka[0];
stateByName('Maharashtra').days[1].stops[1].source=additionalSources.Maharashtra[0];
stateByName('Telangana').days[1].stops[1].source=additionalSources.Telangana[0];
stateByName('Telangana').days[2].stops[1].source=additionalSources.Telangana[1];
stateByName('Munnar').days[0].stops[1].source=additionalSources.Munnar[0];
stateByName('Varkala').days[2].stops[1].source=additionalSources.Varkala[0];
stateByName('Nagaland').hotels.push({name:'Hotel Vivor',area:'Kohima, Nagaland',url:'https://kohima.nic.in/accommodation/',type:'District-listed hotel'});
stateByName('Gujarat').hotels.push({name:'Mangaldas ni Haveli II',area:'Ahmedabad, Gujarat',url:'https://houseofmg.com/',type:'Heritage stay'});
stateByName('Madhya Pradesh').hotels.push({name:'Jehan Numa Retreat',area:'Bhopal, Madhya Pradesh',url:'https://www.jehannuma.com/',type:'Retreat'});
stateByName('Varkala').hotels.push({name:'Palan Serviced Villa',area:'North Cliff, Varkala',url:'https://www.keralatourism.org/serviced-villas/palan-serviced-villa/588',type:'Tourism-listed villa'});
