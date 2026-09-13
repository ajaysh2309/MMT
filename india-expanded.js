/* Named properties and dining venues checked against linked sources, September 2026. */
const EXTRA_STAYS = [
['Andhra Pradesh','Welcomhotel Devee Grand Bay','Beach Road, Visakhapatnam','https://www.itchotels.com/in/en/welcomhoteldeveegrandbay-visakhapatnam','Dakshin','South Indian dining'],
['Arunachal Pradesh','Donyi Polo International Hotel','Itanagar','https://donyipolointernational.com/restaurant-dine/','Ambrosia','Arunachali, Indian and Continental dishes'],
['Assam','Radisson Blu Hotel Guwahati','Gotanagar, Guwahati','https://www.radissonhotels.com/en-us/hotels/radisson-blu-guwahati/dining/cafe-b-you','Café B-You','Indian and international dishes'],
['Bihar','Marasa Sarovar Premiere Bodhgaya','Newtapur, Bodh Gaya','https://www.sarovarhotels.com/marasa-sarovar-premiere-bodhgaya/dining.html','Varada Café','Multi-cuisine café'],
['Chhattisgarh','Hyatt Raipur','Magneto The Mall, Labhandi, Raipur','https://www.hyatt.com/hyatt-hotels/en-US/rprhy-hyatt-raipur/dining','Café Oriza','Indian and international dishes'],
['Goa','DoubleTree by Hilton Goa – Panaji','Kadamba Plateau, near Old Goa','https://www.hilton.com/en/hotels/goigddi-doubletree-goa-panaji/','Comida','All-day hotel dining'],
['Gujarat','Hyatt Regency Ahmedabad','Ashram Road, Ahmedabad','https://www.hyatt.com/hyatt-regency/en-US/amdhr-hyatt-regency-ahmedabad','Tinello','Italian and international dishes'],
['Haryana','Divine Clarks Inn Suites','Divine City Centre, Kurukshetra','https://www.theclarkshotels.com/divine-clarks-inn-suites-kurukshetra/dining/delhi-diners.html','Delhi Diners','Hotel restaurant; confirm the current menu'],
['Himachal Pradesh','Radisson Hotel Jass Shimla','Shimla','https://www.radissonhotels.com/en-us/hotels/radisson-shimla/dining','Café Valley Vue','Indian, Asian and Continental dishes'],
['Jharkhand','Chanakya BNR Ranchi','Near Ranchi railway station, Ranchi','https://chanakyahotels.com/restaurant/samrat/','Samrat','Indian, Continental and Oriental dishes'],
['Karnataka','Royal Orchid Metropole','Mysuru','https://www.royalorchidhotels.com/royal-orchid-metropole-mysuru/dine','Tiger Trail','Indian dishes and kebabs'],
['Kerala','Forte Kochi','Fort Kochi','https://fortekochi.in/jetty-restaurants-dining.php','Jetty','Kerala flavours, seafood and international dishes'],
['Madhya Pradesh','Taj Lakefront Bhopal','Bhopal','https://www.tajhotels.com/en-in/hotels/taj-lakefront-bhopal/restaurants/machan-bhopal','Machan','Multi-cuisine dining'],
['Maharashtra','The Oberoi Mumbai','Nariman Point, Mumbai','https://www.oberoihotels.com/hotels-in-mumbai/dining/ziya/','Ziya','Modern Indian fine dining'],
['Manipur','The Sangai Hotel','Imphal','https://thesangaihotel.com/','The Sangai Hotel rooftop restaurant','Fusion cuisine; check local advice before visiting'],
['Meghalaya','Vivanta Shillong','Shillong','https://www.vivantahotels.com/en-in/hotels/vivanta-shillong/restaurants/mynt-shillong','Mynt','All-day multi-cuisine dining'],
['Mizoram','Hotel Floria','Dawrpui, Aizawl','https://aizawl.nic.in/accommodation/',null,null],
['Nagaland','de Oriental Grand','High School Road, Kohima','https://www.deorientalgrand.com/index',null,null],
['Odisha','Trident Bhubaneswar','Bhubaneswar','https://www.tridenthotels.com/hotels-in-bhubaneswar/restaurant-in-bhubaneswar/the-restaurant/','The Restaurant at Trident','Regional vegetarian and seafood options, plus international dishes'],
['Punjab','Taj Swarna','Outer Circular Road, Amritsar','https://www.tajhotels.com/en-in/hotels/taj-amritsar/restaurants/grand-trunk?opi=79508299','Grand Trunk','Amritsar flavours and global dishes'],
['Rajasthan','ITC Rajputana','Palace Road, Jaipur','https://www.itchotels.com/in/en/itcrajputana-jaipur','Peshawri','North-West Frontier dishes'],
['Sikkim','MAYFAIR Spa Resort & Casino Gangtok','Lower Samdur, Ranipool; outside central Gangtok','https://www.mayfairhotels.com/spa-resort-casino-gangtok/dining/jungle-cafe.html','Jungle Cafe','Sikkimese cuisine'],
['Tamil Nadu','Raintree St. Mary’s Road','Alwarpet, Chennai','https://www.raintreehotels.com/dining','Colony','North and South Indian dishes'],
['Telangana','ITC Kakatiya','Hyderabad','https://www.itchotels.com/in/en/itckakatiya-hyderabad','Dakshin','South Indian cuisine'],
['Tripura','Polo Hotel Agartala','Agartala','https://www.polohotelsandresorts.com/agartala/dining','Three 81','Multi-cuisine hotel dining'],
['Uttar Pradesh','Taj Ganges Varanasi','Varanasi','https://www.tajhotels.com/en-in/hotels/taj-ganges-varanasi/restaurants','Varuna','Indian cuisine, including a Satvik thali'],
['Uttarakhand','Ramada Dehradun Chakrata Road','Chakrata Road, Dehradun','https://ramadadehradun.com/experience1.php','Garden Cress','Hotel dining; check the current menu'],
['West Bengal','ITC Royal Bengal','Kolkata','https://www.itchotels.com/in/en/itcroyalbengal-kolkata','Grand Market Pavilion','Multi-cuisine dining']
];
INDIA_STATES.forEach(s=>{s.food=[];s.further=[]});
EXTRA_STAYS.forEach(([state,name,area,url,restaurant,cuisine])=>{
 const s=stateByName(state);s.hotels.push({name,area,url,type:'Additional stay option'});
 if(restaurant)s.food.push({name:restaurant,area:area+' · '+name,url,cuisine,kind:'Hotel restaurant'});
});
stateByName('Mizoram').food.push({name:'Delano Restaurant',area:'Hotel Delano, Aizawl',url:'https://www.delano.in/restaurant',cuisine:'Restaurant with views across Aizawl; check the current menu',kind:'Hotel restaurant'});
const MORE_FOOD = [
['Nagaland','Made in Nagaland Food Hub','Near Nagaland Civil Secretariat, Kohima','https://www.youthnet.org.in/made-in-nagaland/','Local meals, snacks and beverages','Food court'],
['Telangana','Paradise – Secunderabad','Paradise Circle, Secunderabad','https://www.paradisefoodcourt.in/restaurants-in-hyderabad.html','Hyderabadi biryani and desserts','City restaurant'],
['Goa','Viva Panjim','Panaji','https://www.vivapanjim.com/','Goan dishes and seafood','Family restaurant'],
['Gujarat','Agashiye','The House of MG, Lal Darwaja, Ahmedabad','https://houseofmg.com/eat/agashiye/','Gujarati thali with a changing seasonal menu','Heritage restaurant'],
['Punjab','Kesar Da Dhaba','Amritsar','https://kesardadhaba.com/','Punjabi dishes','Dhaba'],
['Karnataka','Vinayaka Mylari','Mysuru','https://karnatakatourism.org/en/destinations/mysuru','Dosa with sagu','Local breakfast spot']
];
MORE_FOOD.forEach(([state,name,area,url,cuisine,kind])=>stateByName(state).food.push({name,area,url,cuisine,kind}));
const FURTHER_PLACES = [
['Andhra Pradesh','Tirupati','Temple town in southern Andhra Pradesh. Plan a separate stay and check temple booking arrangements.','andhra-pradesh/tirupati','Kurnool','A different base for exploring the state’s inland heritage.','andhra-pradesh/kurnool'],
['Arunachal Pradesh','Tawang','A mountain journey known for its monastery. Allow separate travel days and check permits and roads.','arunachal-pradesh/tawang','Ziro','Valley landscapes and village culture; plan additional nights and local guidance.','arunachal-pradesh/ziro'],
['Assam','Majuli','Brahmaputra island culture. Confirm ferry conditions and plan an island stay.','assam/majuli','Sivasagar','Explore Assam’s Ahom-era heritage from a separate base.','assam/sivasagar'],
['Bihar','Nalanda','Visit the ancient university ruins on a separately planned heritage outing.','bihar/nalanda','Patna','Build another chapter around the state capital’s museums and sacred places.','bihar/patna'],
['Chhattisgarh','Jagdalpur','A base for Bastar and Chitrakote Falls. Plan onward transport, a local stay and current access checks.','chhattisgarh/jagdalpur','Bilaspur','Explore another part of Chhattisgarh with its own transport and accommodation plan.','chhattisgarh/bilaspur'],
['Goa','Palolem Beach','A palm-lined bay in South Goa. Consider a South Goa stay rather than daily travel from Panaji.','goa/goa/palolem-beach','Dudhsagar Falls','A separate nature outing. Confirm authorised transport, seasonal access and forest rules.','goa/goa/exploring-the-beauty-of-the-pristine-coastline'],
['Gujarat','Bhuj','A starting point for a Kutch journey, with its own overnight base.','gujarat/bhuj','Dwarka','A coastal pilgrimage chapter; book separate travel and check temple access.','gujarat/dwarka'],
['Haryana','Panipat','A separate heritage stop in Haryana. Plan transport before adding it to your trip.','haryana/panipat','Yamunanagar','Explore this part of the state on its own day or overnight outing.','haryana/yamunanagar'],
['Himachal Pradesh','Manali','Mountain scenery and a different valley base. Allow travel days beyond Shimla.','himachal-pradesh/manali','Dharamshala','A separate Himalayan stay for cultural sights and mountain views.','himachal-pradesh/dharamshala'],
['Jharkhand','Deoghar','A pilgrimage-focused chapter with separate transport and accommodation.','jharkhand/deoghar','Jamshedpur','Explore the steel city and its surroundings from a new base.','jharkhand/jamshedpur'],
['Karnataka','Hampi','Spend a separate stay exploring the historic ruins and boulder landscape.','karnataka/hampi','Gokarna','Coastal walks and temple heritage; plan another base beyond Mysuru.','karnataka/gokarna'],
['Kerala','Alappuzha','Add a backwater chapter. Confirm the operator and current conditions for any boat outing.','kerala/alappuzha','Wayanad','A hill-country stay with its own transfers, accommodation and local access checks.','kerala/wayanad'],
['Madhya Pradesh','Khajuraho','A separate heritage stay for the sculpted temple complexes.','madhya-pradesh/khajuraho','Orchha','Explore the historic town with time for palaces and river views.','madhya-pradesh/orchha'],
['Maharashtra','Chhatrapati Sambhaji Nagar','A base for the region’s cave heritage, including Ellora. Plan separate travel from Mumbai.','maharashtra/chhatrapati-sambhaji-nagar','Mahabaleshwar','A hill-station chapter with an overnight base and weather-dependent outings.','maharashtra/mahabaleshwar'],
['Manipur','Loktak Lake','A lake landscape outside Imphal. Reference idea only: review the current Manipur advisory first.','manipur/imphal/imphal-travel-and-food-guide','Keibul Lamjao National Park','Wetland habitat associated with the sangai deer. Check current advice, park access and authorised guidance.','manipur/imphal/keibul-lamjao-national-park'],
['Meghalaya','Cherrapunji (Sohra)','Waterfalls and a separate base for the surrounding hills. Check trail and weather conditions.','meghalaya/cherrapunjee','Dawki / Umngot River','Arrange a separate road outing. River clarity and boating depend on season and conditions.','meghalaya/shillong/top-natural-wonders-of-shillong-that-will-take-your-breath-away'],
['Mizoram','Lunglei','Another hill-town base with a separate road journey from Aizawl.','mizoram/lunglei','Champhai','Valley scenery and Mizo cultural heritage; check current permits and road conditions.','mizoram/champhai'],
['Nagaland','Dimapur','Add a separate city chapter or use it as part of your arrival plan.','nagaland/dimapur','Mokokchung','A different base for exploring Nagaland’s cultural landscapes. Check permits and local guidance.','nagaland/mokokchung'],
['Odisha','Puri','Add a coastal and pilgrimage chapter. Check temple entry rules and sea conditions.','odisha/puri','Cuttack','Plan a separate heritage outing from your Bhubaneswar base.','odisha/cuttack'],
['Punjab','Patiala','A separate city stay focused on Punjab’s heritage.','punjab/patiala','Kapurthala','Explore another heritage city with its own transport plan.','punjab/kapurthala'],
['Rajasthan','Udaipur','Plan a lake-city stay with time for palaces and waterfront walks.','rajasthan/udaipur','Jaisalmer','A desert-city chapter. Add separate nights and transfers from Jaipur.','rajasthan/jaisalmer'],
['Sikkim','Pelling','A different mountain base with a separate road journey. Check current access before travel.','sikkim/pelling','Mangan','Plan a separate northern Sikkim chapter, subject to current roads and permit rules.','sikkim/mangan'],
['Tamil Nadu','Mamallapuram','A separately planned coastal heritage outing with time for the monuments.','tamil-nadu/mamallapuram','Madurai','Build a new city stay around temple heritage and local culture.','tamil-nadu/madurai'],
['Telangana','Warangal','A separate heritage outing or stay around the Kakatiya city.','telangana/warangal','Bhongir','Plan a fort-focused outing; check climbing conditions and access.','telangana/bhongir'],
['Tripura','Neermahal','A separate outing to the palace on Rudrasagar Lake; confirm boat services.','tripura','Unakoti','Rock-cut sculptures on a longer journey from Agartala; arrange transport and an overnight plan.','tripura/unakoti'],
['Uttar Pradesh','Agra','A separate heritage stay for the Taj Mahal and city sights.','uttar-pradesh/agra','Lucknow','Another city chapter for heritage and Awadhi culture.','uttar-pradesh/lucknow'],
['Uttarakhand','Rishikesh','A separate riverside chapter. Any water activity needs an authorised operator and current conditions.','uttarakhand/rishikesh','Nainital','A different hill base, with separate transfers and accommodation.','uttarakhand/nainital'],
['West Bengal','Darjeeling','A separate mountain stay, far from the Kolkata route.','west-bengal/darjeeling','Kalimpong','Another hill-town chapter requiring its own onward travel and stay.','west-bengal/kalimpong']
];
FURTHER_PLACES.forEach(([state,n1,d1,u1,n2,d2,u2])=>{stateByName(state).further=[{name:n1,why:d1,source:'https://www.incredibleindia.gov.in/en/'+u1},{name:n2,why:d2,source:'https://www.incredibleindia.gov.in/en/'+u2}]});

stateByName('Munnar').food=[{name:'Black Truffle',area:'Fragrant Nature, Pothamedu, Munnar',url:'https://www.fragrantnature.com/pothamedu-munnar/dining.html',cuisine:'All-day hotel dining',kind:'Hotel restaurant'}];
stateByName('Varkala').food=[{name:'Coastal Kitchen',area:'Gateway Varkala',url:'https://assets.gateway-hotels.com/en-in/hotels/gateway-varkala/restaurants/coastal-kitchen-varkala/coastal-kitchen-varkala-menu.pdf',cuisine:'Coastal dishes; confirm today’s menu with the hotel',kind:'Hotel restaurant'}];
const PHOTO_STOP_NAMES={'Chhattisgarh':'Purkhauti Muktangan','Gujarat':'Sabarmati Gandhi Ashram','Himachal Pradesh':'The Ridge','Kerala':'Chinese Fishing Nets, Fort Kochi','Madhya Pradesh':'Taj-ul-Masjid, Bhopal','Meghalaya':'Ward’s Lake','Mizoram':'Solomon’s Temple','Tamil Nadu':'Kapaleeswarar Temple','Tripura':'Ujjayanta Palace / Tripura State Museum','Uttarakhand':'Forest Research Institute','West Bengal':'Victoria Memorial'};
const LOCAL_EXTRAS=[['Goa','Our Lady of the Immaculate Conception Church, Goa','The white church and stairways above Panaji’s Church Square.','Respect services and check visiting access.','https://www.incredibleindia.gov.in/en/goa'],['Odisha','Lingaraja Temple','A landmark of Bhubaneswar’s temple architecture.','Entry is restricted to Hindus. Check permitted viewpoints and photography rules.','https://www.incredibleindia.gov.in/en/odisha/bhubaneswar/asokastami']];
LOCAL_EXTRAS.forEach(([state,name,why,note,source])=>{const s=stateByName(state);s.extras=[{id:s.id+'-extra-0',name,why,note,source,mapQuery:name+', '+s.base+', India'}]});
INDIA_STATES.forEach(s=>{
 s.photo=STATE_PHOTOS[s.name];s.further[0].photo=MORE_PHOTOS[s.name];
 const p=[...s.days.flatMap(d=>d.stops),...(s.extras||[])].find(p=>p.name===(PHOTO_STOP_NAMES[s.name]||s.photo.place));if(p)p.photo=s.photo;
 // Give existing out-of-town itinerary stops their exact matching photo as well.
 for(const p of s.days.flatMap(d=>d.stops))if(p.name===MORE_PHOTOS[s.name].place)p.photo=MORE_PHOTOS[s.name];
});
