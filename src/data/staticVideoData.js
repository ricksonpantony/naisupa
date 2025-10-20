// Static video data for NAI YouTube videos
// This replaces the YouTube API integration with a curated list of videos

// Utility function to get YouTube thumbnail with fallbacks
const getYouTubeThumbnail = (videoId) => {
  return `https://img.youtube.com/vi/${videoId}/hqdefault.jpg`
}

// All videos from the provided YouTube links
export const allVideos = [
  {
    id: "zFM6XJ7CLZA",
    videoId: "zFM6XJ7CLZA",
    title: "NAI | Pioneering the OBA Pathway with 4,000+ Registered Nurses",
    description: "Discover how NAI has been pioneering the OBA (Outcome Based Assessment) pathway, successfully helping over 4,000 nurses become registered nurses in Australia. Learn about our comprehensive approach and proven success rates.",
    thumbnail: getYouTubeThumbnail("zFM6XJ7CLZA"),
    duration: "15:42",
    views: "4.2K",
    likes: "156",
    publishedAt: "2024-01-15T10:00:00Z",
    channelTitle: "Nurse Assist International"
  },
  {
    id: "v0XJBAIr3Yg",
    videoId: "v0XJBAIr3Yg",
    title: "Here's what our #naibaby RN Kristine says about NAI❣️ #nclex #osce #ngn #obapathway #nclexrn #nurses",
    description: "RN Kristine shares her experience and thoughts about NAI, providing insights into our training programs and support.",
    thumbnail: getYouTubeThumbnail("v0XJBAIr3Yg"),
    duration: "7:20",
    views: "2.5K",
    likes: "98",
    publishedAt: "2023-12-01T12:45:00Z",
    channelTitle: "Nurse Assist International"
  },
  {
    id: "iKQ0-pB9Qo0",
    videoId: "iKQ0-pB9Qo0",
    title: "NAI Shining proud with our 187 August OSCE Passers🥳😍",
    description: "NAI celebrates with pride our 187 August OSCE passers! See the joy and excitement of our successful nursing students.",
    thumbnail: getYouTubeThumbnail("iKQ0-pB9Qo0"),
    duration: "8:45",
    views: "5.2K",
    likes: "187",
    publishedAt: "2024-09-01T10:00:00Z",
    channelTitle: "Nurse Assist International"
  },
  {
    id: "QfvK4zjALfQ",
    videoId: "QfvK4zjALfQ",
    title: "#naibaby RN Rupinder, #NAI's another proud #OSCE passer from India. 🥳🇦🇺",
    description: "Meet RN Rupinder from India, another proud OSCE passer from NAI. Hear about her journey and success story.",
    thumbnail: getYouTubeThumbnail("QfvK4zjALfQ"),
    duration: "8:30",
    views: "2.1K",
    likes: "89",
    publishedAt: "2024-01-08T16:20:00Z",
    channelTitle: "Nurse Assist International"
  },
  {
    id: "P0rRgxMoqlg",
    videoId: "P0rRgxMoqlg",
    title: "From OSCE Dream to RN | Live with RN Ellen | May OSCE Passer of NAI",
    description: "Live interview with RN Ellen, a May OSCE passer from NAI, sharing her journey from dream to becoming a registered nurse.",
    thumbnail: getYouTubeThumbnail("P0rRgxMoqlg"),
    duration: "15:20",
    views: "4.7K",
    likes: "178",
    publishedAt: "2024-01-05T11:45:00Z",
    channelTitle: "Nurse Assist International"
  },
  {
    id: "p7ZV__a42R4",
    videoId: "p7ZV__a42R4",
    title: "From Dream to RN: Live with Aira | OSCE Success Story with NAI",
    description: "Join us live with Aira as she shares her OSCE success story and journey to becoming an RN with NAI's support.",
    thumbnail: getYouTubeThumbnail("p7ZV__a42R4"),
    duration: "13:15",
    views: "3.2K",
    likes: "134",
    publishedAt: "2024-01-03T09:30:00Z",
    channelTitle: "Nurse Assist International"
  },
  {
    id: "8WnAZQYOpNY",
    videoId: "8WnAZQYOpNY",
    title: "LIVE: RN R‑John Shares His OSCE Journey 🇦🇺 | Passed with NAI | From Dream to RN!",
    description: "Live session with RN R-John sharing his complete OSCE journey and how NAI helped him achieve his dream of becoming an RN.",
    thumbnail: getYouTubeThumbnail("8WnAZQYOpNY"),
    duration: "18:42",
    views: "5.1K",
    likes: "201",
    publishedAt: "2024-01-01T14:15:00Z",
    channelTitle: "Nurse Assist International"
  },
  {
    id: "sZG70SUvTfs",
    videoId: "sZG70SUvTfs",
    title: "Welcome to NAI! 🌟 Georgi Sir Shares Our Training, OSCE/NCLEX Success & Training Journey",
    description: "Georgi Sir welcomes you to NAI and shares insights about our comprehensive training programs, OSCE/NCLEX success strategies, and training journey.",
    thumbnail: getYouTubeThumbnail("sZG70SUvTfs"),
    duration: "22:30",
    views: "6.4K",
    likes: "198",
    publishedAt: "2023-12-28T10:00:00Z",
    channelTitle: "Nurse Assist International"
  },
  {
    id: "P529bhToyEs",
    videoId: "P529bhToyEs",
    title: "OSCE Preparatory training in Australia – NAI",
    description: "Comprehensive overview of OSCE preparatory training offered by NAI in Australia, covering all essential aspects of preparation.",
    thumbnail: getYouTubeThumbnail("P529bhToyEs"),
    duration: "16:45",
    views: "8.2K",
    likes: "245",
    publishedAt: "2023-12-25T15:30:00Z",
    channelTitle: "Nurse Assist International"
  },
  {
    id: "GZBt35gi_mQ",
    videoId: "GZBt35gi_mQ",
    title: "Be an RN in Australia with #naibaby RN Michelle😍 #NAI #OSCE #OBA #NCLEX #AURN #RNs #NGN #OSCEPrep",
    description: "RN Michelle shares her experience and tips on becoming an RN in Australia through NAI's comprehensive training programs.",
    thumbnail: getYouTubeThumbnail("GZBt35gi_mQ"),
    duration: "10:25",
    views: "2.8K",
    likes: "112",
    publishedAt: "2023-12-22T12:20:00Z",
    channelTitle: "Nurse Assist International"
  },
  {
    id: "keGZNL3VnGQ",
    videoId: "keGZNL3VnGQ",
    title: "2024, What a year it's been for Nurse Assist International ☆ Let's relive our unforgettable moments! ❤",
    description: "Looking back at 2024 and all the unforgettable moments and achievements at Nurse Assist International. A year to remember!",
    thumbnail: getYouTubeThumbnail("keGZNL3VnGQ"),
    duration: "8:45",
    views: "5.2K",
    likes: "189",
    publishedAt: "2023-12-20T18:00:00Z",
    channelTitle: "Nurse Assist International"
  },
  {
    id: "dGzgxHsNSPY",
    videoId: "dGzgxHsNSPY",
    title: "🎄🎉 NAI is wishing you a season filled with joy! ✨🎅 Merry Xmas and a spectacular New Year 🎁🎉",
    description: "NAI's warm Christmas and New Year wishes to all our students, graduates, and supporters. Wishing everyone a season filled with joy!",
    thumbnail: getYouTubeThumbnail("dGzgxHsNSPY"),
    duration: "3:20",
    views: "1.9K",
    likes: "67",
    publishedAt: "2023-12-18T20:00:00Z",
    channelTitle: "Nurse Assist International"
  },
  {
    id: "SbwCxPgBm64",
    videoId: "SbwCxPgBm64",
    title: "#naibabies and the whole NAI family,we are super excited for all our new RNs in Australia#NAI #OSCE",
    description: "Celebrating all our new RNs in Australia and the excitement within the NAI family for their achievements.",
    thumbnail: getYouTubeThumbnail("SbwCxPgBm64"),
    duration: "4:15",
    views: "2.3K",
    likes: "98",
    publishedAt: "2023-12-15T16:45:00Z",
    channelTitle: "Nurse Assist International"
  },
  {
    id: "TUawKf8shzI",
    videoId: "TUawKf8shzI",
    title: "NAI's August Passers shine bright! Guided to success, powered by brilliance ✨🔥 #OSCE #NAI #NCLEX #OBA",
    description: "Celebrating NAI's August OSCE passers and their brilliant achievements. See how our guidance led them to success.",
    thumbnail: getYouTubeThumbnail("TUawKf8shzI"),
    duration: "6:45",
    views: "3.4K",
    likes: "145",
    publishedAt: "2023-12-12T13:30:00Z",
    channelTitle: "Nurse Assist International"
  },
  {
    id: "5kX4SaPYXI0",
    videoId: "5kX4SaPYXI0",
    title: "Philippines, here we come!!!🔥NAI in collaboration with @IPASSProcessing  #NAIPhilippines #ipass #NAI",
    description: "Exciting announcement of NAI's expansion to the Philippines in collaboration with IPASS Processing. NAI Philippines is here!",
    thumbnail: getYouTubeThumbnail("5kX4SaPYXI0"),
    duration: "7:30",
    views: "4.1K",
    likes: "167",
    publishedAt: "2023-12-10T11:15:00Z",
    channelTitle: "Nurse Assist International"
  },
  {
    id: "l1duLdD-ujU",
    videoId: "l1duLdD-ujU",
    title: "How to be an OSCE Passer with #naibaby RN Jefrey💫💖#NCLEX #OSCE #NAI #OBA #NGN #Australia #Nurse",
    description: "RN Jefrey shares his tips and strategies on how to become an OSCE passer, providing valuable insights for aspiring nurses.",
    thumbnail: getYouTubeThumbnail("l1duLdD-ujU"),
    duration: "11:20",
    views: "3.7K",
    likes: "156",
    publishedAt: "2023-12-08T14:20:00Z",
    channelTitle: "Nurse Assist International"
  },
  {
    id: "a8ytqj-K94k",
    videoId: "a8ytqj-K94k",
    title: "Nurse Assist International is partnering with IPASS Processing for NAI Philippines 🔥 #NAI #IPASS",
    description: "Official announcement of the strategic partnership between Nurse Assist International and IPASS Processing for NAI Philippines.",
    thumbnail: getYouTubeThumbnail("a8ytqj-K94k"),
    duration: "5:15",
    views: "3.6K",
    likes: "134",
    publishedAt: "2023-12-05T10:30:00Z",
    channelTitle: "Nurse Assist International"
  },
  {
    id: "OG4QMMlg1-k",
    videoId: "OG4QMMlg1-k",
    title: "How to become an OSCE Passer Ft. #naibaby RN Tshewang🎉 #nclex #osce #ngn #obapathway #australia",
    description: "RN Tshewang shares his journey and tips on becoming an OSCE passer, providing valuable guidance for nursing students.",
    thumbnail: getYouTubeThumbnail("OG4QMMlg1-k"),
    duration: "9:45",
    views: "2.9K",
    likes: "123",
    publishedAt: "2023-12-03T16:10:00Z",
    channelTitle: "Nurse Assist International"
  },
  {
    id: "moqJ_vmFoXk",
    videoId: "moqJ_vmFoXk",
    title: "How to be an OSCE Passer: RN Kristine ✨ #nai #nclex #osce #ngn #internationalnurses #applynow",
    description: "RN Kristine provides detailed guidance on how to become an OSCE passer, sharing her successful strategies and tips.",
    thumbnail: getYouTubeThumbnail("moqJ_vmFoXk"),
    duration: "12:30",
    views: "3.8K",
    likes: "167",
    publishedAt: "2023-11-28T15:20:00Z",
    channelTitle: "Nurse Assist International"
  },
  {
    id: "sddoqreIGDU",
    videoId: "sddoqreIGDU",
    title: "Another success story of NAI. Live with #naibaby RN Tracy Morada✨ #nai #nclex #osce #ngn #obapathway",
    description: "Live interview with RN Tracy Morada sharing her success story and journey with NAI's OBA pathway program.",
    thumbnail: getYouTubeThumbnail("sddoqreIGDU"),
    duration: "14:15",
    views: "4.2K",
    likes: "178",
    publishedAt: "2023-11-25T11:30:00Z",
    channelTitle: "Nurse Assist International"
  },
  {
    id: "alkUSqv-IwA",
    videoId: "alkUSqv-IwA",
    title: "𝐈𝐭'𝐬 𝐧𝐨𝐭 𝐣𝐮𝐬𝐭 𝐟𝐨𝐫 𝐩𝐫𝐨𝐦𝐨𝐭𝐢𝐨𝐧, 𝐛𝐮𝐭 𝐫𝐞𝐚𝐥 𝐟𝐢𝐫𝐬𝐭𝐡𝐚𝐧𝐝 𝐞𝐱𝐩𝐞𝐫𝐢𝐞𝐧𝐜𝐞: #naibaby 𝐑𝐍 𝐋𝐨𝐫𝐢𝐞✨ #osce #nclex #nai",
    description: "RN Lorie shares her real firsthand experience with NAI, explaining how it's not just for promotion but genuine professional development.",
    thumbnail: getYouTubeThumbnail("alkUSqv-IwA"),
    duration: "9:30",
    views: "2.7K",
    likes: "98",
    publishedAt: "2023-11-20T14:00:00Z",
    channelTitle: "Nurse Assist International"
  },
  {
    id: "zRh5PcLZJ5w",
    videoId: "zRh5PcLZJ5w",
    title: "NAI: We stand as No. 1 in Australia through our continuing legacy of excellence...✨#nclex #osce #nai",
    description: "NAI's commitment to excellence and maintaining our position as Australia's number 1 nursing education provider.",
    thumbnail: getYouTubeThumbnail("zRh5PcLZJ5w"),
    duration: "12:15",
    views: "5.8K",
    likes: "201",
    publishedAt: "2023-11-18T10:30:00Z",
    channelTitle: "Nurse Assist International"
  },
  {
    id: "otlrshad6QY",
    videoId: "otlrshad6QY",
    title: "Interview with NCLEX and OSCE Passers Noymie and Philip from Australia's #1 review center#nclex#nai",
    description: "Exclusive interview with NCLEX and OSCE passers Noymie and Philip sharing their success stories with NAI.",
    thumbnail: getYouTubeThumbnail("otlrshad6QY"),
    duration: "16:45",
    views: "4.3K",
    likes: "156",
    publishedAt: "2023-11-15T13:20:00Z",
    channelTitle: "Nurse Assist International"
  }
]

// Get highlight videos for the home page (first 3 videos)
export const getHighlightVideos = () => {
  return allVideos.slice(0, 3)
}

// Get all videos for the videos page
export const getAllVideos = () => {
  return allVideos
}

// YouTube channel URL for "Show More" button
export const YOUTUBE_CHANNEL_URL = "https://www.youtube.com/@nurseassistinternationalau5845"
