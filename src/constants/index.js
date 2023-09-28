import facebook from "../assets/icons/facebook.svg";
import twitter from "../assets/icons/twitter.svg";
import instagram from "../assets/icons/instagram.svg";
import wedding from '../assets/images/wedding.jpg';
import seminars from '../assets/images/seminars.jpg';
import Social from '../assets/images/Social.jpg';
import Religous from '../assets/images/Religous.jpg'
import merchant from '../assets/images/merchant.png'
import ansiha from '../assets/images/ansiha.png'
import ganesh from '../assets/images/ganesh.png'
import parbhu from '../assets/images/prabhu.png'
import sadhvi from '../assets/images/sadhvi.png'
import shiamak from '../assets/images/shiamak.png'
export const links = [
    { name: 'Open roles', href: '#' },
    { name: 'Internship program', href: '#' },
    { name: 'Our values', href: '#' },
    { name: 'Meet our leadership', href: '#' },
]
export const stats = [
    { name: 'Offices worldwide', value: '12' },
    { name: 'Full-time colleagues', value: '300+' },
    { name: 'Hours per week', value: '40' },
    { name: 'Paid time off', value: 'Unlimited' },
]
export const navLinks = [
    { href: "/home", label: "Home" },
    { href: "/about", label: "AboutUs" },
    { href: '/event', label: 'Event' },
    { href: '/venue', label: 'Venue' },
    { href: '/contact', label: 'ContactUs' }
]
export const DefnavLinks = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About Us" },
    { href: '/contact', label: 'ContactUS' },
]
export const statistics = [
    { start: '1000', end: '2000', label: 'Reviews' },
    { value: '500+', label: 'Events' },
    { value: '250k+', label: 'Customers' },
];
export const footerLinks = [
    {
        title: "Services",
        links: [
            { name: "Wedding", link: "#" },
            { name: "Parties", link: "#" },
            { name: "Cultaral events", link: "#" },
            { name: "Religious events", link: "#" },
            { name: "Seminars", link: "#" },
            { name: "Buisness Events", link: "#" },
        ],
    },
    {
        title: "Help",
        links: [
            { name: "About us", link: "#About" },
            { name: "FAQs", link: "#FAQ" },
            { name: "Venue", link: "#venue" },
            { name: "Blog", link: "#blog" },
            { name: "Gallery", link: "#gallery" },
        ],
    },
    {
        title: "Get in touch",
        links: [
            { name: "customer@helpCenter.com", link: "mailto:customer@helpCenter.com" },
            { name: "+92554862354", link: "tel:+92554862354" },
        ],
    },
];
export const socialMedia = [
    { src: facebook, alt: "facebook logo" },
    { src: twitter, alt: "twitter logo" },
    { src: instagram, alt: "instagram logo" },
];
export const PopularVenueGallery = [
    {
        id: 1,
        href: '#',
        imageSrc: ' https://images.unsplash.com/photo-1634148551170-d37d021e0cc9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGR1YmFpfGVufDB8MHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60',
        imageAlt: "wedding Image.",
        name: 'Dubai',
        subname: 'Atlantis',
        rating: 4,
        latitude: 25.276987,
        longitude: 55.296249,
        description: "Dubai, Atlantis - A stunning and luxurious wedding destination located in Dubai. The Atlantis is a 5-star resort offering breathtaking views of the Arabian Gulf and world-class amenities. Say 'I do' in the lap of luxury at this dreamy wedding venue.",

    },
    {
        id: 2,
        href: '#',
        imageSrc: ' https://images.unsplash.com/photo-1516815231560-8f41ec531527?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8bWFsZGl2ZXN8ZW58MHwwfDB8fHww&auto=format&fit=crop&w=800&q=60',
        imageAlt: "wedding Image.",
        name: 'Maldives',
        subname: 'Thaa atoll',
        rating: 5,
        latitude: 3.2028,
        longitude: 73.2207, // Latitude and Longitude for the Maldives
        description:
            "Maldives, Thaa atoll - Experience a romantic and tropical wedding in the Maldives. The Thaa atoll is known for its pristine beaches, crystal-clear waters, and overwater bungalows. Your wedding in this paradise will be nothing short of magical.",

    },
    {
        id: 3,
        href: '#',
        imageSrc: 'https://images.unsplash.com/photo-1524492412937-b28074a5d7da?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aW5kaWF8ZW58MHwwfDB8fHww&auto=format&fit=crop&w=800&q=60',
        imageAlt: "wedding Image.",
        name: 'India',
        subname: 'Agra',
        rating: 3,
        latitude: 27.1751,
        longitude: 78.0421, // Latitude and Longitude for India (Agra)
        description:
            "India, Agra - Agra, the city of love, is a perfect wedding destination for history enthusiasts. Tie the knot in the backdrop of the iconic Taj Mahal, a symbol of eternal love. Your wedding in Agra will be a blend of history and romance.",

    },
    {
        id: 4,
        href: '#',
        imageSrc: ' https://images.unsplash.com/photo-1592517207964-dfdf8ad96016?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Njh8fGdlcm1hbnl8ZW58MHwwfDB8fHww&auto=format&fit=crop&w=800&q=60',
        imageAlt: "wedding Image.",
        name: 'Germany',
        subname: 'Munich',
        rating: 4,
        latitude: 48.1351,
        longitude: 11.5820,
        description:
            "Germany, Munich - Munich is a charming and cultural wedding destination in Germany. With its beautiful architecture, lush parks, and vibrant arts scene, Munich offers a unique and picturesque backdrop for your special day. Celebrate love in the heart of Bavaria.",

    },
    {
        id: 5,
        href: '#',
        imageSrc: ' https://images.unsplash.com/photo-1506973035872-a4ec16b8e8d9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8U3lkbmV5fGVufDB8MHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60',
        imageAlt: "wedding Image.",
        name: 'Australia',
        subname: 'Sydney',
        rating: 4,
        latitude: -33.8688,
        longitude: 151.2093,
        description: "Australia, Sydney - Sydney is a vibrant and iconic wedding destination in Australia. With its stunning beaches, iconic landmarks like the Sydney Opera House, and a lively atmosphere, Sydney offers the perfect backdrop for a memorable wedding.",
    },
    {
        id: 6,
        href: '#',
        imageSrc: ' https://images.unsplash.com/photo-1492136344046-866c85e0bf04?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fFBhcmlzfGVufDB8MHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60',
        imageAlt: "wedding Image.",
        name: 'France',
        subname: 'Paris',
        rating: 5,
        latitude: 48.8566,
        longitude: 2.3522,
        description: "France, Paris - Paris, the 'City of Love,' is a dream wedding destination. Eiffel Tower views, charming streets, and world-class cuisine make Paris a romantic place to say 'I do.' Experience the magic of Paris on your wedding day.",
    },
    {
        id: 7,
        href: '#',
        imageSrc: 'https://images.unsplash.com/photo-1498063401574-13cbee350467?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fFZlbmljZXxlbnwwfDB8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60',
        imageAlt: "wedding Image.",
        name: 'Italy',
        subname: 'Venice',
        rating: 5,
        latitude: 45.4408,
        longitude: 12.3155,
        description: "Italy, Venice - Venice is a unique and enchanting wedding destination in Italy. With its picturesque canals, historic architecture, and gondola rides, Venice provides a one-of-a-kind setting for a romantic wedding.",

    },
    {
        id: 8,
        href: '#',
        imageSrc: ' https://images.unsplash.com/photo-1626197121197-449dba06b6b4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fENhYm8lMjBTYW4lMjBMdWNhc3xlbnwwfDB8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60',
        imageAlt: "wedding Image.",
        name: 'Mexico',
        rating: 4,
        subname: 'Cabo San Lucas',
        latitude: 22.8905,
        longitude: -109.9167,
        description: "Mexico, Cabo San Lucas - Cabo San Lucas is a beautiful wedding destination in Mexico. Bask in the sun on pristine beaches, enjoy water sports, and celebrate your love in the lively atmosphere of Cabo. It's a perfect destination for a beachfront wedding.",

    },
    {
        id: 9,
        href: '#',
        imageSrc: ' https://images.unsplash.com/photo-1523531294919-4bcd7c65e216?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8QmFyY2Vsb25hfGVufDB8MHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60',
        imageAlt: "wedding Image.",
        name: 'Spain',
        subname: 'Barcelona',
        rating: 4,
        description: "Spain, Barcelona - Barcelona is a vibrant and cultural wedding destination in Spain. With its unique architecture, stunning beaches, and rich history, Barcelona offers an unforgettable backdrop for your wedding. Say 'Si' to love in the heart of Catalonia.",
        latitude: 41.3851,
        longitude: 2.1734
    },
    {
        id: 10,
        href: '#',
        imageSrc: ' https://images.unsplash.com/photo-1572529593091-6c05c37cacc7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjF8fHRoYWlsYW5kfGVufDB8MHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60',
        imageAlt: "wedding Image.",
        name: 'Thailand',
        subname: 'Phuket',
        latitude: 7.8804,
        rating: 3,
        longitude: 98.3923,
        description: "Thailand, Phuket - Phuket is a tropical paradise known for its beautiful beaches and vibrant nightlife. It's a dream wedding destination where you can exchange vows on the beach and enjoy the warm hospitality of Thailand. Your wedding in Phuket will be a true escape.",



    },
    {
        id: 11,
        href: '#',
        imageSrc: 'https://plus.unsplash.com/premium_photo-1680284197360-f1c214c96b29?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjV8fE5ldyUyMFlvcmslMjBDaXR5JTJDJTIwTmV3JTIwWW9ya3xlbnwwfDB8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60',
        imageAlt: "wedding Image.",
        name: 'USA',
        subname: 'New York City, New York',
        latitude: 40.7128,
        rating: 3,
        longitude: -74.0060,
        description: "USA, New York City, New York - New York City is an iconic wedding destination known for its skyscrapers, Central Park, and cultural diversity. Experience the hustle and bustle of the city that never sleeps as you celebrate your love in the Big Apple.",

    },
    {
        id: 12,
        href: '#',
        imageSrc: ' https://images.unsplash.com/photo-1536708952035-0a982a1a1984?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8TWFudWVsJTIwQW50b25pb3xlbnwwfDB8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60',
        imageAlt: "wedding Image.",
        name: 'Costa Rica',
        subname: 'Manuel Antonio',
        latitude: 9.3923,
        rating: 3,
        longitude: -84.1367,
        description: "Costa Rica, Manuel Antonio - Manuel Antonio in Costa Rica offers a picturesque setting for a destination wedding. With its lush rainforests and pristine beaches, this tropical paradise is perfect for nature-loving couples seeking a romantic escape.",

    },
    {
        id: 13,
        href: '#',
        imageSrc: ' https://images.unsplash.com/photo-1581892197913-fd2e407e698a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8R29hfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60',
        imageAlt: "wedding Image.",
        name: 'Goa',
        rating: 4,
        latitude: 15.208336351421847,
        longitude: 73.70150836878345,
        description: "Goa is a beautiful coastal state in India known for its stunning beaches, vibrant nightlife, and rich cultural heritage.It's a popular destination for weddings, offering a perfect blend of natural beauty and a laid-back atmosphere. Exchange your vows with the sound of waves as your backdrop and create unforgettable memories in this tropical paradise."
    },
    {
        id: 14,
        href: '#',
        imageSrc: ' https://images.unsplash.com/photo-1615836245337-f5b9b2303f10?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8VWRhaXB1cnxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60',
        imageAlt: "wedding Image.",
        name: 'Udaipur',
        rating: 2,
        latitude: 24.625118243758607,
        longitude: 73.64375612117749,
        description: "Udaipur, often referred to as the 'City of Lakes, ' is a romantic and enchanting destination for weddings in Rajasthan, India. It's famous for its majestic palaces, serene lakes, and a royal ambiance that adds grandeur to any wedding celebration. Get married like royalty in the heart of Udaipur and experience the magic of this historical city."

    },
    {
        id: 15,
        href: '#',
        imageSrc: 'https://images.unsplash.com/photo-1593693411515-c20261bcad6e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fEtlcmFsYXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60',
        imageAlt: "wedding Image.",
        name: 'Kerala',
        rating: 5,
        latitude: 11.10524747390913,
        longitude: 74.41870520312081,
        description: "Kerala, also known as 'God's Own Country,' is a tropical paradise in South India. It's a dream wedding destination with lush green landscapes, backwaters, and tranquil beaches.Celebrate your love in the lap of nature, surrounded by coconut groves and serene waters, making your wedding a serene and picturesque affair."

    },
    {
        id: 16,
        href: '#',
        imageSrc: ' https://images.unsplash.com/photo-1564507592333-c60657eea523?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8QWdyYXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60',
        imageAlt: "wedding Image.",
        name: 'Agra',
        rating: 3,
        latitude: 27.217374805945468,
        longitude: 77.8986410171005,
        description: "Agra, home to the iconic Taj Mahal, is a historical city in India that offers a timeless backdrop for weddings. The Taj Mahal, with its white marble elegance, symbolizes eternal love and provides a magnificent setting for a romantic ceremony. Say 'I do' in the shadow of this architectural wonder."
    },
    {
        id: 17,
        href: '#',
        imageSrc: 'https://images.unsplash.com/photo-1586183189334-1ad3cd238e21?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fERlbGhpfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60',
        imageAlt: "wedding Image.",
        name: 'Delhi',
        rating: 2,
        latitude: 28.768953139154483,
        longitude: 76.90639305056014,
        description: "Delhi, the capital of India, is a bustling metropolis with a rich history and diverse culture. It offers a mix of contemporary and traditional wedding venues, from grand ballrooms to heritage sites. Celebrate your special day in the heart of India's vibrant capital and immerse yourself in its cultural richness."
    },
    {
        id: 18,
        href: '#',
        imageSrc: ' https://images.unsplash.com/photo-1562979314-bee7453e911c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8TXVtYmFpfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60',
        imageAlt: "wedding Image.",
        name: 'Mumbai',
        rating: 3,
        latitude: 19.145110309262602,
        longitude: 72.78641024567521,
        description: " Mumbai, also known as Bombay, is India's financial capital and a city of dreams. It offers a range of wedding venues, from beachfront locations to luxurious banquet halls. Have a glamorous and star-studded wedding in the entertainment hub of India."
    },
    {
        id: 19,
        href: '#',
        imageSrc: 'https://images.unsplash.com/photo-1614252087112-24d64a89d6e4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mzd8fGFtcml0c2FyfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60',
        imageAlt: "wedding Image.",
        name: 'Amritsar',
        rating: 4,
        latitude: 31.665374240415144,
        longitude: 74.79115180058753,
        description: "Amritsar, in the northern state of Punjab, is a spiritual and cultural center known for the Golden Temple. It's a sacred and serene place to tie the knot, surrounded by spirituality and Sikh traditions. Experience a soulful wedding in the heart of Amritsar."
    },
    {
        id: 20,
        href: '#',
        imageSrc: ' https://images.unsplash.com/photo-1607406374368-809f8ec7f118?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8UmlzaGlrZXNofGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60',
        imageAlt: "wedding Image.",
        name: 'Rishikesh ',
        rating: 5,
        latitude: 30.090345859149423,
        longitude: 78.25361319179544,
        description: " Rishikesh, nestled in the foothills of the Himalayas, is a yoga and spiritual haven. It's a unique wedding destination for couples seeking tranquility and adventure. Exchange vows by the holy Ganges River and embark on a journey of love and spirituality."
    },
    {
        id: 21,
        href: '#',
        imageSrc: ' https://images.unsplash.com/photo-1552832230-c0197dd311b5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Um9tZXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60',
        imageAlt: "wedding Image.",
        name: 'Rome',
        rating: 4,
        latitude: 41.94367028501902,
        longitude: 12.454272054389246,
        description: " Rome, the capital of Italy, is a city steeped in history and romance. It's an enchanting destination for a destination wedding, with its ancient architecture, charming streets, and iconic landmarks. Say 'Ti amo' in the eternal city of Rome."
    },
    {
        id: 22,
        href: '#',
        imageSrc: ' https://images.unsplash.com/photo-1523531294919-4bcd7c65e216?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8QmFyY2Vsb25hfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60',
        imageAlt: "wedding Image.",
        name: 'Barcelona',
        rating: 5,
        latitude: 41.42010104459836,
        longitude: 2.156584037128533,
        description: " Barcelona, a vibrant city in Spain, offers a blend of culture, art, and seaside beauty. It's an ideal location for a destination wedding, with its stunning architecture and Mediterranean charm. Celebrate your love in the lively streets of Barcelona."
    },
    {
        id: 23,
        href: '#',
        imageSrc: 'https://images.unsplash.com/photo-1516550893923-42d28e5677af?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Vmllbm5hfGVufDB8MHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60',
        imageAlt: "wedding Image.",
        name: 'Vienna',
        rating: 3,
        latitude: 48.18120808481672,
        longitude: 16.36768681050391,
        description: " Vienna, the capital of Austria, is known for its imperial history, classical music, and architectural elegance. It provides a sophisticated and cultural backdrop for a romantic wedding. Experience the elegance of Vienna on your special day."
    },
    {
        id: 24,
        href: '#',
        imageSrc: ' https://images.unsplash.com/photo-1627156863760-f49b81d8ab77?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fFZlbmljZXxlbnwwfDB8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60',
        imageAlt: "wedding Image.",
        name: 'Venice',
        rating: 2,
        latitude: 45.38478211727535,
        longitude: 12.47516707804961,
        description: "Venice, Italy, is a city of romance, famous for its canals, gondolas, and historic architecture. It's a unique and dreamy destination for a wedding, where you can exchange vows on a picturesque Venetian canal"
    },
    {
        id: 25,
        href: '#',
        imageSrc: ' https://images.unsplash.com/photo-1603565816030-6b389eeb23cb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8QXRoZW5zfGVufDB8MHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60',
        imageAlt: "wedding Image.",
        name: 'Athens',
        rating: 5,
        latitude: 37.97296983670866,
        longitude: 23.719283943212858,
        description: "Athens, the capital of Greece, is a city with a rich ancient history and Mediterranean charm. It's an extraordinary location for a wedding, with the Acropolis as a backdrop. Have a wedding steeped in history and mythology in Athens."
    },
    {
        id: 26,
        href: '#',
        imageSrc: 'https://images.unsplash.com/photo-1588963940468-9e6e4d202209?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fGlyZWxhbmR8ZW58MHwwfDB8fHww&auto=format&fit=crop&w=800&q=60',
        imageAlt: "wedding Image.",
        name: 'Dublin',
        rating: 4,
        latitude: 53.33732851828883,
        longitude: - 6.269062224462136,
        description: " Dublin, the capital of Ireland, is known for its lively pubs, literary heritage, and friendly atmosphere. It offers a warm and welcoming setting for a wedding, where you can celebrate with traditional Irish hospitality."
    },
    {
        id: 27,
        href: '#',
        imageSrc: 'https://images.unsplash.com/photo-1616432902940-b7a1acbc60b3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8QnVkYXBlc3R8ZW58MHwwfDB8fHww&auto=format&fit=crop&w=800&q=60',
        imageAlt: "wedding Image.",
        name: 'Budapest',
        rating: 2,
        latitude: 47.51356941342337,
        longitude: 19.089777209250105,
        description: " Budapest, the capital of Hungary, is a city of thermal baths, historic architecture, and scenic views along the Danube River. It provides a picturesque backdrop for a wedding, whether it's in a historic castle or a riverside venue."
    },
    {
        id: 28,
        href: '#',
        imageSrc: ' https://images.unsplash.com/photo-1581460436937-81f19e138de2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fEFtc3RlcmRhbXxlbnwwfDB8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60',
        imageAlt: "wedding Image.",
        name: 'Amsterdam',
        rating: 3,
        latitude: 52.3734193236018,
        longitude: 4.888155113134041,
        description: " Amsterdam, the capital of the Netherlands, is a city of canals, art, and vibrant culture. It offers a unique and eclectic atmosphere for a wedding, with charming canal-side venues and artistic flair."
    }
]
export const gallery = [
    {
        id: 1,
        name: 'Weddings and Engagements:',
        href: '#',
        imageSrc: wedding,
        imageAlt: "wedding Image.",
        list1: 'Traditional weddings',
        list2: 'Destination weddings',
        list3: 'Engagement parties',
        list4: 're-wedding photoshoots'
    },
    {
        id: 2,
        name: 'Corporate and Business Events:',
        href: '#',
        imageSrc: seminars,
        imageAlt: "Seminars",
        list1: 'Networking events',
        list2: 'Awards ceremonies',
        list3: 'Corporate retreats',
        list4: 'Conferences and seminars'

    },
    {
        id: 3,
        name: 'Social and Celebratory Events',
        href: '#',
        imageSrc: Social,
        imageAlt: "Social events",
        list1: 'Birthday parties',
        list2: 'Anniversary celebrations',
        list3: 'Baby showers',
        list4: 'Retirement parties'

    },
    {
        id: 4,
        name: 'Cultural and Religious Events:',
        href: '#',
        imageSrc: Religous,
        imageAlt: "Cultural Events",
        list1: 'Religious ceremonies',
        list2: 'Festivals and fairs',
        list3: 'Cultural performances',
        list4: 'Religious retreats'
    }

]
export const faqData = [
    { question: "How does your website work?", answer: "Our website connects event organizers with budget-friendly vendors and services. You can browse through our curated selections of venues, decorators, musicians, and more to find the perfect fit for your event." },
    { question: "Are your vendors reliable?", answer: "Yes, we carefully vet all vendors before listing them on our platform. We prioritize quality and professionalism to ensure your event is in capable hands." },
    { question: "Can I use your website for any type of event?", answer: "Absolutely! Our platform caters to a wide range of events, from weddings and corporate gatherings to community festivals and more." },
    { question: "Do you offer event planning services?", answer: "While we don't provide planning services directly, our platform offers resources, recommendations, and connections to assist you in planning your event effectively." },
    { question: " How do I contact vendors?", answer: "Each vendor profile includes their contact information. You can reach out to them directly using the provided details to discuss your event requirements." }

];

export const EventGallery = [
    {
        id: 1,
        imageSrc: 'https://images.unsplash.com/photo-1612599542558-f3022089fb38?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8d2VkZGluZyUyMHBhcnR5fGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60',
        imageAlt: "wedding Image.",
        name: 'Wedding Organizers',
        click: 'wedding'
    },

    {
        id: 2,
        imageSrc: 'https://images.unsplash.com/photo-1517457373958-b7bdd4587205?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8cGFydGllc3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60',
        imageAlt: "wedding Image.",
        name: 'Private Parties',
        click: 'party'
    },
    {
        id: 3,
        imageSrc: 'https://images.unsplash.com/photo-1556761175-5973dc0f32e7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzB8fHNlbWluYXJzfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60',
        imageAlt: "wedding Image.",
        name: 'Seminars',
        click: 'seminars'
    },
    {
        id: 4,
        imageSrc: ' https://plus.unsplash.com/premium_photo-1681841228192-0ec1412c232c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8Y29ycG9yYXRlJTIwcGFydHl8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60',
        imageAlt: "wedding Image.",
        name: 'Corporate Parties',
        click: 'corporate'
    }
]
export const EventGallery1 = [
    {
        id: 1,
        href: '#',
        imageSrc: ' https://images.unsplash.com/photo-1502147676094-45a8696bcbe8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDh8fHBob3RvZ3JhcGhlciUyMGFuZCUyMHZpZGVvZ3JhcGhlcnxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60',
        imageAlt: "wedding Image.",
        name: 'Chennai',
        subname: 'SHADOWS'
    },
    {
        id: 2,
        href: '#',
        imageSrc: 'https://images.unsplash.com/photo-1599601074719-06d93ba4c694?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTl8fHBob3RvZ3JhcGhlciUyMGFuZCUyMHZpZGVvZ3JhcGhlcnxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60',
        imageAlt: "wedding Image.",
        name: 'Moradabad',
        subname: 'DURGA MOVIES PRODUCTION'
    },
    {
        id: 3,
        href: '#',
        imageSrc: 'https://images.unsplash.com/photo-1600888267846-d2e7f695d0ed?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NjN8fHBob3RvZ3JhcGhlciUyMGFuZCUyMHZpZGVvZ3JhcGhlcnxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60',
        imageAlt: "wedding Image.",
        name: 'Kolkata',
        subname: 'M & T STUDIO'
    },
    {
        id: 4,
        href: '#',
        imageSrc: ' https://images.unsplash.com/photo-1604016562465-166991c8ff44?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NzR8fHBob3RvZ3JhcGhlciUyMGFuZCUyMHZpZGVvZ3JhcGhlcnxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60',
        imageAlt: "wedding Image.",
        name: 'Patna',
        subname: 'MEOW STUDIO'
    }
]

export const EventGallery2 = [
    {
        id: 1,
        href: '#',
        imageSrc: ' https://images.unsplash.com/photo-1514588720291-13c765d33608?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDB8fHBob3RvZ3JhcGhlciUyMGFuZCUyMHZpZGVvZ3JhcGhlcnxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60',
        imageAlt: "wedding Image.",
        name: 'Kolkata',
        subname: 'MOTION PICTUREZ',
    },
    {
        id: 2,
        href: '#',
        imageSrc: 'https://images.unsplash.com/photo-1494327814900-f60295bbe866?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzV8fHBob3RvZ3JhcGhlciUyMGFuZCUyMHZpZGVvZ3JhcGhlcnxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60',
        imageAlt: "wedding Image.",
        name: 'Kota',
        subname: 'PRATAP STUDIO',

    },
    {
        id: 3,
        href: '#',
        imageSrc: 'https://images.unsplash.com/photo-1532249452239-8139fdc9786e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mzl8fHBob3RvZ3JhcGhlciUyMGFuZCUyMHZpZGVvZ3JhcGhlcnxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60',
        imageAlt: "wedding Image.",
        name: 'Lucknow',
        subname: 'DHEERAJ PHOTO POINT',
    },
    {
        id: 4,
        href: '#',
        imageSrc: ' https://images.unsplash.com/photo-1519460171124-ab93a449143e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDZ8fHBob3RvZ3JhcGhlciUyMGFuZCUyMHZpZGVvZ3JhcGhlcnxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60',
        imageAlt: "wedding Image.",
        name: 'Kolkata',
        subname: 'SANJOY MAHAJAN PHOTOGRAPHY',
    }
]
export const EventGallery3 = [
    {
        id: 1,
        href: '#',
        imageSrc: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQhUCeTXbwAq16eVo2w8n-p7Asepk2fKXZVDQ&usqp=CAU',
        imageAlt: "wedding Image.",
        name: "Remo D'souza",
    },
    {
        id: 2,
        href: '#',
        imageSrc: ' https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQO8sRJ6_DnVru5w6vtscsiLSuBQzdEVDPDGw&usqp=CAU',
        imageAlt: "wedding Image.",
        name: 'Farah Khan',
    },
    {
        id: 3,
        href: '#',
        imageSrc: shiamak,
        imageAlt: "wedding Image.",
        name: 'Shiamak Davar',
    },
    {
        id: 4,
        href: '#',
        imageSrc: ganesh,
        imageAlt: "wedding Image.",
        name: 'Ganesh Acharya',
    }
]
export const EventGallery4 = [
    {
        id: 1,
        href: '#',
        imageSrc: parbhu,
        imageAlt: "wedding Image.",
        name: 'Prabhudheva',
    },
    {
        id: 2,
        href: '#',
        imageSrc: merchant,
        imageAlt: "wedding Image.",
        name: 'Vaibhavi Merchant',

    },
    {
        id: 3,
        href: '#',
        imageSrc: sadhvi,
        imageAlt: "wedding Image.",
        name: 'Sadhwi Majumder',

    },
    {
        id: 4,
        href: '#',
        imageSrc: ansiha,
        imageAlt: "wedding Image.",
        name: 'Anisha Babbar',
    }
]
export const EventInfo = [
    {
        id: 1,
        href: '#',
        imageSrc: 'https://images.unsplash.com/photo-1527529482837-4698179dc6ce?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fHdlZGRpbmclMjBvcmdhbml6ZXJzfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60',
        imageAlt: "wedding Image.",
        name: 'Shree Sainath Decorators',
        location: 'mumbai',
        rating: 4
    },

    {
        id: 2,
        href: '#',
        imageSrc: 'https://images.unsplash.com/photo-1519741497674-611481863552?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjF8fHdlZGRpbmclMjBvcmdhbml6ZXJzfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60',
        imageAlt: "wedding Image.",
        name: 'Sweet Memories Events Planner',
        location: 'mumbai',
        rating: 3
    },
    {
        id: 3,
        href: '#',
        imageSrc: 'https://images.unsplash.com/photo-1529636798458-92182e662485?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjN8fHdlZGRpbmclMjBvcmdhbml6ZXJzfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60',
        imageAlt: "wedding Image.",
        name: 'Encore Events',
        location: 'delhi',
        rating: 3
    },
    {
        id: 4,
        href: '#',
        imageSrc: ' https://images.unsplash.com/photo-1532712938310-34cb3982ef74?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mjh8fHdlZGRpbmclMjBvcmdhbml6ZXJzfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60',
        imageAlt: "wedding Image.",
        name: 'Shubham Decorators',
        location: 'delhi',
        rating: 4
    },
    {
        id: 5,
        href: '#',
        imageSrc: 'https://images.unsplash.com/photo-1517722014278-c256a91a6fba?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzB8fHdlZGRpbmclMjBvcmdhbml6ZXJzfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60',
        imageAlt: "wedding Image.",
        name: 'Shree Ganesh Decorators',
        location: 'mumbai',
        rating: 3
    },

    {
        id: 6,
        href: '#',
        imageSrc: 'https://images.unsplash.com/photo-1504993945773-3f38e1b6a626?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDB8fHdlZGRpbmclMjBvcmdhbml6ZXJzfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60',
        imageAlt: "wedding Image.",
        name: 'Celebrino Events',
        location: 'delhi',
        rating: 3
    },
    {
        id: 7,
        href: '#',
        imageSrc: 'https://images.unsplash.com/photo-1469371670807-013ccf25f16a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fHdlZGRpbmclMjBvcmdhbml6ZXJzfGVufDB8MHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60',
        imageAlt: "wedding Image.",
        name: 'EVENTS4U',
        location: 'delhi',
        rating: 5
    },
    {
        id: 8,
        href: '#',
        imageSrc: ' https://images.unsplash.com/photo-1520854221256-17451cc331bf?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDJ8fHxlbnwwfHx8fHw%3D&auto=format&fit=crop&w=800&q=60',
        imageAlt: "wedding Image.",
        name: 'Riya Decorator',
        location: 'ahemdabad',
        rating: 4
    },
    {
        id: 9,
        href: '#',
        imageSrc: ' https://images.unsplash.com/photo-1465495976277-4387d4b0b4c6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDF8fHxlbnwwfHx8fHw%3D&auto=format&fit=crop&w=800&q=60',
        imageAlt: "wedding Image.",
        name: 'Pakhi Events',
        location: 'ahemdabad',
        rating: 5
    },
    {
        id: 10,
        href: '#',
        imageSrc: ' https://images.unsplash.com/photo-1460364157752-926555421a7e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDV8fHxlbnwwfHx8fHw%3D&auto=format&fit=crop&w=800&q=60',
        imageAlt: "wedding Image.",
        name: 'Eventbox.co.in',
        location: 'delhi',
        rating: 4
    },
    {
        id: 11,
        href: '#',
        imageSrc: ' https://images.unsplash.com/photo-1514120649397-daec977c71b5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDE1fHx8ZW58MHx8fHx8&auto=format&fit=crop&w=800&q=60',
        imageAlt: "wedding Image.",
        name: 'Perfect Entertainments',
        location: 'mumbai',
        rating: 4
    },
    {
        id: 12,
        href: '#',
        imageSrc: ' https://images.unsplash.com/photo-1445117627052-274425469152?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzB8fHdlZGRpbmclMjBvcmdhbml6ZXJzfGVufDB8MHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60',
        imageAlt: "wedding Image.",
        name: 'Shakti Events',
        location: 'ahemdabad',
        rating: 2
    }
]
export const EventInfo2 = [
    {
        id: 1,
        href: '#',
        imageSrc: 'https://images.unsplash.com/photo-1527359443443-84a48aec73d2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8cHJpdmF0ZSUyMHBhcnR5fGVufDB8MHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60',
        imageAlt: "wedding Image.",
        name: 'Brotherzzz Decorators',
        location: 'mumbai',
        rating: 4
    },

    {
        id: 2,
        href: '#',
        imageSrc: 'https://images.unsplash.com/photo-1528605248644-14dd04022da1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8cHJpdmF0ZSUyMHBhcnR5fGVufDB8MHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60',
        imageAlt: "wedding Image.",
        name: 'Magikkairos',
        location: 'mumbai',
        rating: 3
    },
    {
        id: 3,
        href: '#',
        imageSrc: 'https://images.unsplash.com/photo-1530103862676-de8c9debad1d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8cHJpdmF0ZSUyMHBhcnR5fGVufDB8MHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60',
        imageAlt: "wedding Image.",
        name: 'Eventwale Bhau ',
        location: 'delhi',
        rating: 3
    },
    {
        id: 4,
        href: '#',
        imageSrc: ' https://images.unsplash.com/photo-1519671482749-fd09be7ccebf?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8cHJpdmF0ZSUyMHBhcnR5fGVufDB8MHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60',
        imageAlt: "wedding Image.",
        name: 'Iconic Events',
        location: 'ahemdabad',
        rating: 4
    },
    {
        id: 5,
        href: '#',
        imageSrc: 'https://images.unsplash.com/photo-1482575832494-771f74bf6857?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fHByaXZhdGUlMjBwYXJ0eXxlbnwwfDB8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60',
        imageAlt: "wedding Image.",
        name: 'Ankit Events & Caterers',
        location: 'mumbai',
        rating: 3
    },

    {
        id: 6,
        href: '#',
        imageSrc: 'https://images.unsplash.com/photo-1516600164266-f3b8166ae679?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fHByaXZhdGUlMjBwYXJ0eXxlbnwwfDB8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60',
        imageAlt: "wedding Image.",
        name: 'Arnav Creations',
        location: 'delhi',
        rating: 3
    },
    {
        id: 7,
        href: '#',
        imageSrc: 'https://images.unsplash.com/photo-1562866470-3774249bef10?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fHByaXZhdGUlMjBwYXJ0eXxlbnwwfDB8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60',
        imageAlt: "wedding Image.",
        name: 'Shah Decorator',
        location: 'delhi',
        rating: 5
    },
    {
        id: 8,
        href: '#',
        imageSrc: ' https://images.unsplash.com/photo-1496337589254-7e19d01cec44?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fHByaXZhdGUlMjBwYXJ0eXxlbnwwfDB8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60',
        imageAlt: "wedding Image.",
        name: 'Party Purple',
        location: 'ahemdabad',
        rating: 4
    },
    {
        id: 9,
        href: '#',
        imageSrc: 'https://images.unsplash.com/photo-1519671282429-b44660ead0a7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fHByaXZhdGUlMjBwYXJ0eXxlbnwwfDB8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60',
        imageAlt: "wedding Image.",
        name: '9ex Events',
        location: 'ahemdabad',
        rating: 5
    },
    {
        id: 10,
        href: '#',
        imageSrc: ' https://images.unsplash.com/photo-1525351159099-81893194469e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mjd8fHByaXZhdGUlMjBwYXJ0eXxlbnwwfDB8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60',
        imageAlt: "wedding Image.",
        name: 'MISTY EVENTS',
        location: 'delhi',
        rating: 4
    },
    {
        id: 11,
        href: '#',
        imageSrc: ' https://images.unsplash.com/photo-1509666537727-9154b6962292?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzN8fHByaXZhdGUlMjBwYXJ0eXxlbnwwfDB8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60',
        imageAlt: "wedding Image.",
        name: 'The Bombay Events',
        location: 'mumbai',
        rating: 4
    },
    {
        id: 12,
        href: '#',
        imageSrc: ' https://images.unsplash.com/photo-1504196606672-aef5c9cefc92?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzZ8fHByaXZhdGUlMjBwYXJ0eXxlbnwwfDB8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60',
        imageAlt: "wedding Image.",
        name: 'Paries Event',
        location: 'ahemdabad',
        rating: 2
    }
]
export const EventInfo3 = [
    {
        id: 1,
        href: '#',
        imageSrc: 'https://images.unsplash.com/photo-1524178232363-1fb2b075b655?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8c2VtaW5hcnN8ZW58MHwwfDB8fHww&auto=format&fit=crop&w=800&q=60',
        imageAlt: "wedding Image.",
        name: 'Rising Star Event Planners',
        location: 'mumbai',
        rating: 4
    },

    {
        id: 2,
        href: '#',
        imageSrc: 'https://images.unsplash.com/photo-1612359383347-245649cbb9d2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fHNlbWluYXJzfGVufDB8MHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60',
        imageAlt: "wedding Image.",
        name: 'Hire4event.com',
        location: 'mumbai',
        rating: 3
    },
    {
        id: 3,
        href: '#',
        imageSrc: 'https://images.unsplash.com/photo-1557804506-669a67965ba0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjR8fHNlbWluYXJzfGVufDB8MHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60',
        imageAlt: "wedding Image.",
        name: 'Infinity Solution',
        location: 'ahemdabad',
        rating: 3
    },
    {
        id: 4,
        href: '#',
        imageSrc: ' https://images.unsplash.com/photo-1511578314322-379afb476865?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjF8fHNlbWluYXJzfGVufDB8MHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60',
        imageAlt: "wedding Image.",
        name: 'EventMasters',
        location: 'delhi',
        rating: 4
    },
    {
        id: 5,
        href: '#',
        imageSrc: 'https://images.unsplash.com/photo-1607037183811-2a54d746cd35?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mjd8fHNlbWluYXJzfGVufDB8MHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60',
        imageAlt: "wedding Image.",
        name: 'Seminario Solutions',
        location: 'mumbai',
        rating: 3
    },

    {
        id: 6,
        href: '#',
        imageSrc: 'https://images.unsplash.com/photo-1556761175-5973dc0f32e7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mjl8fHNlbWluYXJzfGVufDB8MHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60',
        imageAlt: "wedding Image.",
        name: 'Seminar Catalyst',
        location: 'delhi',
        rating: 3
    },
    {
        id: 7,
        href: '#',
        imageSrc: 'https://images.unsplash.com/photo-1576085898323-218337e3e43c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzB8fHNlbWluYXJzfGVufDB8MHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60',
        imageAlt: "wedding Image.",
        name: 'Interstellar Events',
        location: 'delhi',
        rating: 5
    },
    {
        id: 8,
        href: '#',
        imageSrc: ' https://images.unsplash.com/photo-1560439513-74b037a25d84?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTd8fHNlbWluYXJzfGVufDB8MHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60',
        imageAlt: "wedding Image.",
        name: 'Eventcop',
        location: 'ahemdabad',
        rating: 4
    },
    {
        id: 9,
        href: '#',
        imageSrc: ' https://images.unsplash.com/photo-1609234680415-f10a17c1fa72?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NjZ8fHNlbWluYXJzfGVufDB8MHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60',
        imageAlt: "wedding Image.",
        name: 'Dreamz Designerz',
        location: 'ahemdabad',
        rating: 5
    },
    {
        id: 10,
        href: '#',
        imageSrc: ' https://images.unsplash.com/photo-1616992510024-f1293eb00e41?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Njl8fHNlbWluYXJzfGVufDB8MHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60',
        imageAlt: "wedding Image.",
        name: 'Pansy Events',
        location: 'delhi',
        rating: 4
    },
    {
        id: 11,
        href: '#',
        imageSrc: ' https://images.unsplash.com/photo-1653004043840-b0d1542c7249?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTM0fHxzZW1pbmFyc3xlbnwwfDB8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60',
        imageAlt: "wedding Image.",
        name: 'Nuevo Events',
        location: 'mumbai',
        rating: 4
    },
    {
        id: 12,
        href: '#',
        imageSrc: ' https://images.unsplash.com/photo-1645566243614-dacab54055a2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTM1fHxzZW1pbmFyc3xlbnwwfDB8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60',
        imageAlt: "wedding Image.",
        name: 'Star Events',
        location: 'ahemdabad',
        rating: 2
    }
]
export const EventInfo4 = [
    {
        id: 1,
        href: '#',
        imageSrc: 'https://images.unsplash.com/photo-1561489396-888724a1543d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8Y29ycG9yYXRlJTIwZXZlbnR8ZW58MHwwfDB8fHww&auto=format&fit=crop&w=800&q=60',
        imageAlt: "wedding Image.",
        name: ' The Show Runners',
        location: 'mumbai',
        rating: 4
    },

    {
        id: 2,
        href: '#',
        imageSrc: 'https://images.unsplash.com/photo-1505373877841-8d25f7d46678?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fGNvcnBvcmF0ZSUyMGV2ZW50fGVufDB8MHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60',
        imageAlt: "wedding Image.",
        name: 'Vedish Events',
        location: 'mumbai',
        rating: 3
    },
    {
        id: 3,
        href: '#',
        imageSrc: 'https://images.unsplash.com/photo-1475721027785-f74eccf877e2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fGNvcnBvcmF0ZSUyMGV2ZW50fGVufDB8MHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60',
        imageAlt: "wedding Image.",
        name: 'The Sky Events',
        location: 'delhi',
        rating: 3
    },
    {
        id: 4,
        href: '#',
        imageSrc: ' https://images.unsplash.com/photo-1503428593586-e225b39bddfe?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fGNvcnBvcmF0ZSUyMGV2ZW50fGVufDB8MHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60',
        imageAlt: "wedding Image.",
        name: 'Razmataz Events',
        location: 'delhi',
        rating: 4
    },
    {
        id: 5,
        href: '#',
        imageSrc: 'https://images.unsplash.com/photo-1542744173-8e7e53415bb0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzJ8fGNvcnBvcmF0ZSUyMGV2ZW50fGVufDB8MHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60',
        imageAlt: "wedding Image.",
        name: 'Celebrations World',
        location: 'mumbai',
        rating: 3
    },

    {
        id: 6,
        href: '#',
        imageSrc: 'https://images.unsplash.com/photo-1559223607-b4d0555ae227?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDB8fGNvcnBvcmF0ZSUyMGV2ZW50fGVufDB8MHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60',
        imageAlt: "wedding Image.",
        name: 'Sakura Events',
        location: 'delhi',
        rating: 3
    },
    {
        id: 7,
        href: '#',
        imageSrc: 'https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NjN8fGNvcnBvcmF0ZSUyMGV2ZW50fGVufDB8MHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60',
        imageAlt: "wedding Image.",
        name: 'Platoenix Events & Production',
        location: 'delhi',
        rating: 5
    },
    {
        id: 8,
        href: '#',
        imageSrc: ' https://images.unsplash.com/photo-1515187029135-18ee286d815b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NjJ8fGNvcnBvcmF0ZSUyMGV2ZW50fGVufDB8MHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60',
        imageAlt: "wedding Image.",
        name: 'Rohnos Events',
        location: 'ahemdabad',
        rating: 4
    },
    {
        id: 9,
        href: '#',
        imageSrc: 'https://images.unsplash.com/photo-1431540015161-0bf868a2d407?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Njh8fGNvcnBvcmF0ZSUyMGV2ZW50fGVufDB8MHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60',
        imageAlt: "wedding Image.",
        name: 'Octane Events',
        location: 'ahemdabad',
        rating: 5
    },
    {
        id: 10,
        href: '#',
        imageSrc: 'https://images.unsplash.com/photo-1573164574572-cb89e39749b4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8ODF8fGNvcnBvcmF0ZSUyMGV2ZW50fGVufDB8MHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60',
        imageAlt: "wedding Image.",
        name: 'Magnet Events',
        location: 'delhi',
        rating: 4
    },
    {
        id: 11,
        href: '#',
        imageSrc: ' https://images.unsplash.com/photo-1577962917302-cd874c4e31d2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8ODl8fGNvcnBvcmF0ZSUyMGV2ZW50fGVufDB8MHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60',
        imageAlt: "wedding Image.",
        name: 'Happy Daysss',
        location: 'mumbai',
        rating: 4
    },
    {
        id: 12,
        href: '#',
        imageSrc: ' https://images.unsplash.com/photo-1573166675921-076ea6b621ce?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTE4fHxjb3Jwb3JhdGUlMjBldmVudHxlbnwwfDB8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60',
        imageAlt: "wedding Image.",
        name: 'BROTHERS EVENTS',
        location: 'ahemdabad',
        rating: 2
    }
]
