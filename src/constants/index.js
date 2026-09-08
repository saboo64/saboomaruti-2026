import bannerMonsoonDesktop from '../assets/banners/Website_Maruti_Suzuki_Arena_Festival_Offers_Ganesh_Chaturthi_offers__Popular_RKS_Vehicles_Services.webp';
import bannerVictoris from '../assets/banners/Saboo RKS Maruti Suzuki Victoris Web Banner.webp';
import bannerBrezzaDesktop from '../assets/banners/Saboo-RKS-Maruti-Suzuki-Brezza-Now-6-Airbags.webp';
import bannerSwiftDesktop from '../assets/banners/Arena new Swift banner.webp';
import bannerSUVMaker from '../assets/banners/new/Website_Maruti_Suzuki_No1_SUV_Maker_Saboo_RKS_Motor_October_Offers.webp';
import bannerAltoK10Desktop from '../assets/banners/Saboo-RKS-Maruti-Suzuki-Alto-k10-Now-6-Airbags.webp';
 import bannerMonsoonMobile from '../assets/banners/WM_Maruti_Suzuki_Arena_Festival_Offers_Ganesh_Chaturthi_offers__Popular_RKS_Vehicles_Services.webp';
import bannerDzireMobile from '../assets/banners/vehicles/banners-2024/Website_Mobile_Maruti_Suzuki_Arena_New_Dazzling_Dzire_with_Five_Star_Rating_Car_Offers_Saboo_RKS_Motor.webp';
import bannerBrezzaMobile from '../assets/banners/Website_Mobile_Maruti_Suzuki_Arena_Brezza_Urbano_Edition_Offers_Saboo_RKS_Motor_Hyderabad_Favoruite_Maruti_Suzuki_Dealer.webp';
import bannerSwiftMobile from '../assets/banners/Arena new Swift banner_mobile.webp';
import reward1 from '../assets/banners/RewardSlider/1.png';
import reward2 from '../assets/banners/RewardSlider/2.png';
import reward3 from '../assets/banners/RewardSlider/3.png';
import reward4 from '../assets/banners/RewardSlider/4.png';
import reward8 from '../assets/banners/RewardSlider/8.png';
// import bannerAccessories from '../assets/banners/Maruti_Suzuki_Genuine_Accessories_Summer_cool_offers_Saboo_RKS_Nexa_Banner-01.webp';
import brezza_thumbnail from '../assets/thumbnail/brezza_thumbnail.png'
import {
  swiftSliders,
  swiftColors,
  swiftVariants,
  swiftMileage,
  swiftData,
} from './swiftData';
import {
  celerioSliders,
  celerioColors,
  celerioVariants,
  celerioMileage,
  celerioData,
} from './celerioData';
import {
  dzireSliders,
  dzireColors,
  dzireVariants,
  dzireMileage,
  dzireData,
} from './dzireData';
import {
  altoK10Sliders,
  altoK10Colors,
  altoK10Variants,
  altok10Mileage,
  altok10Data,
} from './altoK10Data';
import {
  eecoSliders,
  eecoColors,
  eecoVariants,
  eecoMileage,
  eecoData,
} from './eecoData';
import {
  ertigaSliders,
  ertigaColors,
  ertigaVariants,
  ertigaMileage,
  ertigaData,
} from './ertigaData';
import {
  spressoSliders,
  spressoColors,
  spressoVariants,
  spressoMileage,
  spressoData,
} from './spressoData';
import {
  wagonrSliders,
  wagonrColors,
  wagonrVariants,
  wagonrMileage,
  wagonrData,
} from './wagonrData';
import {
  brezzaSliders,
  brezzaColors,
  brezzaVariants,
  brezzaMileage,
  brezzaData,
} from './brezzaData';
import {
  victoriesSliders,
  victorisColors,
  victoriesVariants,
  VictoriesMileage,
  victoriesData,
} from './victoris';

/**
 * Single reusable source for every car model's page data (image sliders,
 * color swatches, variant pricing, mileage table, spec summary). Re-exports
 * each car's existing per-file data (unchanged, still the source of truth)
 * under one consistent carsData.<model>.{sliders,colors,variants,mileage,data}
 * shape, so any screen can pull from one place instead of importing a
 * differently-named file per car.
 */
export const carsData = {
  swift: {
    sliders: swiftSliders,
    colors: swiftColors,
    variants: swiftVariants,
    mileage: swiftMileage,
    data: swiftData,
  },
  celerio: {
    sliders: celerioSliders,
    colors: celerioColors,
    variants: celerioVariants,
    mileage: celerioMileage,
    data: celerioData,
  },
  dzire: {
    sliders: dzireSliders,
    colors: dzireColors,
    variants: dzireVariants,
    mileage: dzireMileage,
    data: dzireData,
  },
  altoK10: {
    sliders: altoK10Sliders,
    colors: altoK10Colors,
    variants: altoK10Variants,
    mileage: altok10Mileage,
    data: altok10Data,
  },
  eeco: {
    sliders: eecoSliders,
    colors: eecoColors,
    variants: eecoVariants,
    mileage: eecoMileage,
    data: eecoData,
  },
  ertiga: {
    sliders: ertigaSliders,
    colors: ertigaColors,
    variants: ertigaVariants,
    mileage: ertigaMileage,
    data: ertigaData,
  },
  spresso: {
    sliders: spressoSliders,
    colors: spressoColors,
    variants: spressoVariants,
    mileage: spressoMileage,
    data: spressoData,
  },
  wagonr: {
    sliders: wagonrSliders,
    colors: wagonrColors,
    variants: wagonrVariants,
    mileage: wagonrMileage,
    data: wagonrData,
  },
  brezza: {
    sliders: brezzaSliders,
    colors: brezzaColors,
    variants: brezzaVariants,
    mileage: brezzaMileage,
    data: brezzaData,
  },
  victoris: {
    sliders: victoriesSliders,
    colors: victorisColors,
    variants: victoriesVariants,
    mileage: VictoriesMileage,
    data: victoriesData,
  },
};

export const sliders = [
  {
    img: bannerMonsoonDesktop,
    alt: "Website Maruti Suzuki Dzire Festive November Yearend Offers Saboo RKS Motor, Website_Maruti_Suzuki_Arena_New_Dazzling_Dzire_with_Five_Star_Rating_Car_Offers_Saboo_RKS_Motor",
    link: "/maruti-suzuki-car-offers-page",
  },

  {
    img: bannerVictoris,
    alt: 'Website Maruti Suzuki Dzire Festive November Yearend Offers Popular RKS Motor, Website_Maruti_Suzuki_Arena_New_Dazzling_Dzire_with_Five_Star_Rating_Car_Offers_Saboo_RKS_Motor',
    link: '/victoris',
  },

  // {
  //   img: require("../assets/banners/vehicles/banners-2024/New_Dzire_2024_web_banner_november_yearend_offer.webp"),
  //   alt: "Wesbite Maruti Suzuki Dzire Festive November Yearend Offers Saboo RKS Motor",

  // {
  //   img: require('../assets/banners/Website_Maruti_Suzuki_Arena_Raksha_Bandhan_Offers_August_offers_Now_Six_6_Airbags__Independence_Day_Offer_Saboo_RKS_Motor.webp'),
  //   alt: 'Holi web Banner Arena.webp',
  //   link: '/maruti-suzuki-car-offers-page',
  // },
  // {
  //   img: require("../assets/banners/Website_Maruti_Suzuki_Arena_Summer_Offers_April_offers_are_live_at_Saboo_RKS_Motor.webp"),
  //   alt: "Holi web Banner Arena.webp",
  //   link: "/maruti-suzuki-car-offers-page",
  // },
  // {
  //   img: require("../assets/banners/Website_Maruti_Suzuki_Arena_Summer_Offers_May_offers_Now_Six_6_Airbags_Saboo_RKS_Motor.webp"),
  //   alt: "2025 may summer offers",
  //   link: "/maruti-suzuki-car-offers-page",
  // },
  // {
  //   img: require('../assets/banners/diwali_banner.jpg'),
  //   alt: 'Wesbite Maruti Suzuki Arena WagonR Waltz Edition Saboo RKS Motor',
  //   link: '/maruti-wagon-r-on-road-price-in-hyderabad',
  // },

  {
    img: bannerBrezzaDesktop,
    alt: 'Maruti Suzuki Arena Brezza Urbano Edition Offers Popular RKS Motor Hyderabad Favourite Maruti Suzuki Dealer',
    link: '/maruti-new-brezza-on-road-price-in-hyderabad',
  },
  // {
  //   img: require("../assets/banners/Website_Maruti_Suzuki_Arena_July_Monsoon_Offers_Saboo_RKS_Motor.webp"),
  //   alt: "Maruti Suzuki July 2024 Monsoon July Offers",
  //   link: "/maruti-suzuki-car-offers-page",
  // },
  // {
  //   img: require("../assets/banners/Website_Maruti_Suzuki_Dream_Series_Saboo_RKS_Motor_June_Offers.webp"),
  //   alt: "Buy Dream Series Edition @ 4.99 Lakh",
  // },
  {
    img: bannerSwiftDesktop,
    alt: 'Unveleing New Maruti Suzuki Swift 2024, Coming Soon. Popular RKS Motors Hyderabad',
    link: '/maruti-swift-car-on-road-price-in-hyderabad',
  },

  // {
  //   img: 'https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/Arena/banners/Website_Womens_Day_Saboo_RKS_Motor_March_Offers.webp',
  //   alt: 'Best Driving School in Hyderabad',
  // },

  // {
  //   img: 'https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/Arena/banners/saboo-driving-school-december-2023.webp',
  //   alt: 'Best Driving School in Hyderabad',
  // },

  // {
  //   img: 'https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/Arena/banners/Website_Dhanteras_Saboo_RKS_Motor_November_Offers.webp',
  //   alt: 'Website Dhanteras Saboo RKS Motor November Offers',
  // },

  {
    img: bannerSUVMaker,
    alt: 'Maruti Suzuki No1 SUV Maker Popular RKS Motor October Offers',
    link: '/maruti-suzuki-car-offers-page',
  },
  // {
  //   img: 'https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/Arena/banners/Website_Maruti_Suzuki_Service_Ganesh_Chaturthi_September_Offers_Saboo_RKS_Motor.webp',
  //   alt: 'Website Maruti Suzuki Service Ganesh Chaturthi September Offers Saboo RKS Motor',
  // },
  // {
  //   img: 'https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/Arena/banners/Website+Maruti+Suzuki+Arena+Teachers+day+September+Offers+Saboo+RKS+Motor.webp',
  //   alt: 'sep-01 2023 banner',
  // },

  // 9
  // {
  //   img: "https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/Arena/banners/Website+Maruti+Suzuki+Arena+Brezza+Scng+Offers.webp",
  //   alt: "Maruti Suzuki Arena Brezza S-CNG",
  // },

  //10
  //11

  // {
  //   img: "https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/Arena/new-alto-k10/alto-k10-web-banner.webp",
  //   alt: "new alto k10",
  // },
  {
    img: bannerAltoK10Desktop,
    alt: 'Maruti Suzuki No1 SUV Maker Popular RKS Motor October Offers',
    link: '/maruti-suzuki-car-offers-page',
  },
  // {
  //   img: "https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/Arena/cng/Swift+CNG.webp",
  //   alt: "new swift cng",
  //   link: "/maruti-suzuki-cng-cars",
  // },
];

export const mobileSliders = [
  {
    img: bannerMonsoonMobile,
    alt: 'Maruti_Suzuki_Arena_Valentines_Day_2026_Febrauary_offers',
    link: '/maruti-suzuki-car-offers-page',
  },

  // {
  //   img: require("../assets/banners/WM_Maruti_Suzuki_Arena_Summer_Offers_May_offers_Now_Six_6_Airbags_Saboo_RKS_Motor.webp"),
  //   alt: "May_offers_Now_Six_6_Airbags_Saboo_RKS_Motor",
  //   link: "/maruti-suzuki-car-offers-page",
  // },
  //{
  //   img: require("../components/Wesbite_Mobile_Maruti_Suzuki_Arena_Year_End_Offers_2024_biggest_offers_are_live_at_Saboo_RKS_Motor.webp"),
  //   alt: "Mobile Maruti Suzuki Dezire Festive december Yearend Offers Saboo RKS Motor, Mobile_Maruti_Suzuki_Arena_New_Dazzling_Dzire_with_Five_Star_Rating_Car_Offers_Saboo_RKS_Motor.webp",
  //  link: "/maruti-swift-dzire-on-road-price-in-hyderabad",
  // },

  {
    img: bannerDzireMobile,
    alt: 'Mobile Maruti Suzuki Dezire Festive december Yearend Offers Popular RKS Motor, Mobile_Maruti_Suzuki_Arena_New_Dazzling_Dzire_with_Five_Star_Rating_Car_Offers_Saboo_RKS_Motor.webp',
    link: '/maruti-swift-dzire-on-road-price-in-hyderabad',
  },
  // {
  //   img: require("../assets/banners/vehicles/banners-2024/Website_Mobile_Maruti_Suzuki_Arena_Year_End_Offers_Remember_To_Remember_Offers_Saboo_RKS_Motor.webp"),
  //  alt: "Mobile_Maruti_Suzuki_Arena_Year_End_Offers_Remember_To_Remember_Offers_Saboo_RKS_Motor",
  //  link: "/maruti-suzuki-car-offers-page",
  // },
  // {
  //  img: require("../assets/banners/vehicles/banners-2024/Wesbite_Mobile_Maruti_Suzuki_Arena_Festive_Offers_Navratri_dussehra_Offers_Saboo_RKS_Motor.webp"),
  //  alt: "Mobile Maruti Suzuki Arena Festive Offers Navratri dussehra Offers Saboo RKS Motor",
  //  link: "/maruti-swift-car-on-road-price-in-hyderabad",
  // },

  //  {
  //  img: require("../assets/banners/vehicles/banners-2024/Wesbite_Mobile_Maruti_Suzuki_Arena_WagonR_Waltz_Edition_Saboo_RKS_Motor.webp"),
  //   alt: "Mobile Maruti Suzuki Arena WagonR Waltz Edition Saboo RKS Motor",
  //   link: "/maruti-wagon-r-on-road-price-in-hyderabad",
  //  },

  {
    img: bannerBrezzaMobile,
    alt: 'Maruti Suzuki Arena Brezza Urbano Edition Offers Popular RKS Motor Hyderabad Favourite Maruti Suzuki Dealer',
    link: '/maruti-new-brezza-on-road-price-in-hyderabad',
  },
  // {
  //   img: require("../assets/banners/Website_Mobile_Maruti_Suzuki_Arena_July_Monsoon_Offers_Saboo_RKS_Motor.webp"),
  //   alt: "Maruti Suzuki July Monsoon July Offers",
  // },
  // {
  //   img: require("../assets/banners/Website_mobile_Maruti_Suzuki_Dream_Series_Saboo_RKS_Motor_June_Offers.webp"),
  //   alt: "Buy Dream Series Edition @ 4.99 Lakh",
  // },
  {
    img: bannerSwiftMobile,
    alt: 'Unveleing New Maruti Suzuki Swift 2024, Coming Soon. Popular RKS Motors Hyderabad',
    link: '/maruti-swift-car-on-road-price-in-hyderabad',
  },
  // {
  //   img: require('../assets/banners/Website_Mobile_Maruti_Suzuki_Summer_Offers_Saboo_RKS_Motor_April_Offers.webp'),
  //   alt: 'Maruti Suzuki Saboo RKS Hyderabad Somajiguda Summer Car Service Offers April 2024',
  // },
  // {
  //   img: require('../assets/banners/Website_Mobile_Maruti_Suzuki_Summer_Car_Service_Offers_Saboo_RKS_Motor_April.webp'),
  //   alt: 'Maruti Suzuki Saboo RKS Hyderabad Somajiguda Summer Car Service Offer April 2024',
  // },
  // {
  //   img: require('../assets/banners/Website_Mobile_Ugadi_Ramadan_Saboo_RKS_Motor_April_Offers.webp'),
  //   alt: 'Maruti Suzuki Saboo RKS Hyderabad Somajiguda Ugadi Offers April 2024',
  // },
  // {
  //   img: require('../assets/banners/Maruti-Suzuki-Arena-New-Year-Mobile-banner-2024.webp'),
  //   alt: 'Buy New Maruti Suzuki Car in 2024 with great discount offers',
  // },
  // {
  //   img: 'https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/Arena/banners/Website_Mobile_Womens_Day_Saboo_RKS_Motor_March_Offers.webp',
  //   alt: 'Maruti Suzuki somajiguda driving school offers Offers',
  // },
  // {
  //   img: 'https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/Arena/banners/Website_Mobile_Gandhi_Jayanti_Saboo_RKS_Motor_October_Offers.webp',
  //   alt: 'Website Mobile Gandhi Jayanti Saboo RKS Motor October Offers',
  // },
  // {
  //   img: 'https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/banners/Website_Mobile_Maruti_Suzuki_No1_SUV_Maker_Saboo_RKS_Motor_October_Offers.png',
  //   alt: 'Website Mobile Maruti Suzuki No1 SUV Maker Popular RKS Motor December Offers',
  //   link: '/maruti-suzuki-car-offers-page',
  // },
];

export const offersSliders = [

  {
    img: bannerMonsoonDesktop,
    alt: "Website Maruti Suzuki Dzire Festive November Yearend Offers Saboo RKS Motor, Website_Maruti_Suzuki_Arena_New_Dazzling_Dzire_with_Five_Star_Rating_Car_Offers_Saboo_RKS_Motor",
    link: "/maruti-suzuki-car-offers-page",
  },
  //{
  //  img: require("../assets/banners/vehicles/banners-2024/Website_Maruti_Suzuki_Arena_Year_End_Offers_Remember_To_Remember_Offers_Saboo_RKS_Motor.webp"),
  // alt: "Website_Maruti_Suzuki_Arena_Year_End_Offers_Remember_To_Remember_Offers_Saboo_RKS_Motor",
  //},
  // {
  //   img:require("../assets/banners/Website_Maruti_Suzuki_Arena_New_Year_Offers_2025_Sankranti_offers_are_live_at_Saboo_RKS_Motor.webp"),
  //   alt: '2025 new year republic offer'
  // },

  //{
  //  img: require("../components/Wesbite_Maruti_Suzuki_Arena_Year_End_Offers_2024_biggest_offers_are_live_at_Saboo_RKS_Motor.webp"),
  //  alt: "Unveleing New Maruti Suzuki Swift 2024, Coming Soon. Saboo RKS Motors Hyderabad",
  // },

  // {
  //   img: require("../assets/banners/Website_Maruti_Suzuki_Arena_July_Monsoon_Offers_Saboo_RKS_Motor.webp"),
  //   alt: "Maruti Suzuki July Monsoon July Offers",
  // },
  // {
  //  img: require("../assets/banners/Arena new Swift banner.webp"),
  //  alt: "Unveleing New Maruti Suzuki Swift 2024, Coming Soon. Saboo RKS Motors Hyderabad",
  //},

  // {
  //   img: 'https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/Arena/banners/arena-baner-jan-2023.webp',
  //   alt: 'janu-2023-offer-banner',
  // },
  // {
  //   img: 'https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/Arena/banners/Website+Maruti+Suzuki+Arena+Ganesh+Chaturthi+September+Offers+Saboo+RKS+Motor.webp',
  //   alt: 'Website Maruti Suzuki Arena Ganesh Chaturthi September Offers Saboo RKS Motor',
  // },
  // {
  //   img: 'https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/Arena/banners/Website+Maruti+Suzuki+Arena+Teachers+day+September+Offers+Saboo+RKS+Motor.webp',
  //   alt: 'sep-01 2023 bannner',
  // },
  // {
  //   img: 'https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/Arena/banners/Website_Womens_Day_Saboo_RKS_Motor_March_Offers.webp',
  //   alt: 'banner-1',
  // },

  // {
  //   img: 'https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/webp+converted/Saboo-RKS-Maurti-Suzuki-Arena-New-Swift.webp',
  //   alt: 'banner-3',
  // },
];

export const mobileOffersSliders = [
  {
    img: bannerMonsoonMobile,
    alt: 'Maruti_Suzuki_Arena_Valentines_Day_2026_Febrauary_offers',
    link: '/maruti-suzuki-car-offers-page',
  },
  // {
  //    img: require("../assets/banners/diwali_mobile.jpg"),
  //   alt: "Maruti_Suzuki_Arena_Valentines_Day_2025_Febrauary_offers",
  // },
  // {
  //   img: require("../assets/banners/WM__Maruti_Suzuki_Arena_New_Year_Offers_2025_Sankranti_offers_are_live_at_Saboo_RKS_Motor.webp"),
  //   alt: "2025 new year republic offer",
  // },
  // {
  //  img: require("../components/Wesbite_Mobile_Maruti_Suzuki_Arena_Year_End_Offers_2024_biggest_offers_are_live_at_Saboo_RKS_Motor.webp"),
  //   alt: "Maruti Suzuki Arena Brezza Urbano Edition Offers Saboo RKS Motor Hyderabad Favourite Maruti Suzuki Dealer",
  // },
  // {
  //   img: require("../assets/banners/vehicles/banners-2024/Wesbite_Mobile_Maruti_Suzuki_Arena_Festive_Offers_Navratri_dussehra_Offers_Saboo_RKS_Motor.webp"),
  //   alt: "Website Maruti Suzuki Arena Festive Offers Navratri dussehra Offers Saboo RKS Motor",
  // },
  // {
  //   img: require("../assets/banners/Website_Mobile_Maruti_Suzuki_Arena_Brezza_Urbano_Edition_Offers_Saboo_RKS_Motor_Hyderabad_Favoruite_Maruti_Suzuki_Dealer.webp"),
  //   alt: "Maruti Suzuki Arena Brezza Urbano Edition Offers Saboo RKS Motor Hyderabad Favourite Maruti Suzuki Dealer",
  // },
  // {
  //   img: require("../assets/banners/Website_Mobile_Maruti_Suzuki_Arena_July_Monsoon_Offers_Saboo_RKS_Motor.webp"),
  //   alt: "Buy Dream Series Edition @ 4.99 Lakh",
  // },
  // {
  //   img: require("../assets/banners/Website_mobile_Maruti_Suzuki_Dream_Series_Saboo_RKS_Motor_June_Offers.webp"),
  //   alt: "Buy Dream Series Edition @ 4.99 Lakh",
  // },
  // {
  //   img: 'https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/Arena/banners/Website_Mobile_Gandhi_Jayanti_Saboo_RKS_Motor_October_Offers.webp',
  //   alt: 'Website Mobile Gandhi Jayanti Saboo RKS Motor October Offers',
  // },
  // {
  //   img: 'https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/Arena/banners/Website+Mobile+Maruti+Suzuki+Arena+Ganesh+Chaturthi+September+Offers+Saboo+RKS+Motor.webp',
  //   alt: 'Website Mobile Maruti Suzuki Arena Ganesh Chaturthi September Offer Saboo RKS Motor',
  // },
  // {
  //   img: 'https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/Arena/banners/Website+Mobile+Maruti+Suzuki+Arena+Teachers+day+September+Offers+Saboo+RKS+Motor(1).webp',
  //   alt: 'sep 2023 offer teachers day',
  // },
  // {
  //   img: require('../assets/banners/new/Mobile Banner/Website_Mobile_Year_End_Saboo_RKS_Motor_December_Offers.webp'),
  //   alt: 'Maruti Suzuki Year End  2023 Saboo RKS Motor December Offers',
  // },
  // {
  //   img: 'https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/Arena/banners/Website_Mobile_Womens_Day_Saboo_RKS_Motor_March_Offers.webp',
  //   alt: 'banner-1',
  // },
];

export const DrivingSchoolSliders = [
  {
    img: 'https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/Arena/banners/mobile_banner.webp',
    alt: 'banner-1',
  },
];

export const products = [
  {
    id: 1,
    name: 'VICTORIS',
    price: '10.50 L',
    logo: 'https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/Arena/cars/victoris/colors/LOGOV.png',
    img: 'https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/Arena/cars/victoris/colors/red-removebg-preview.png',
    brouchure:
      'https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/Arena/cars/victoris/brochure/Maruti-Suzuki-Arena-Victoris-Brochure.pdf',
    explore: '/victoris',
    bookNow: '/',
    power: '60',
    engine: 'Z12E',
    transmission: '5 MT/AT',
    mileage: '28.65',
    seating: '5',
    fuel: 'Petrol',
  },

  {
    id: 4,
    name: 'SWIFT',
    price: ' 5.78 L',
    logo: 'https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/Arena/thumnails/swiftlogo-new.webp',
    img: 'https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/Arena/thumnails/Swift+Tile+Image.webp',
    brouchure:
      'https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/Arena/brochures/Saboo_RKS_New_Swift_brouchre.pdf',
    explore: '/maruti-swift-car-on-road-price-in-hyderabad',
    bookNow: '/',
    power: '60',
    engine: 'Z12E',
    transmission: '5 MT/AT',
    mileage: '25.75',
    seating: '5',
    fuel: 'Petrol',
  },

  {
    id: 2,
    name: 'Alto K10',
    price: '3.69 L',
    logo: 'https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/Arena/new-alto-k10/alto-k10-logo-bw.webp',
    img: 'https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/Arena/thumnails/arena-k10.webp',
    brouchure:
      'https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/Arena/new-alto-k10/alto-k10-brochure.pdf',
    explore: '/all-new-maruti-alto-k10-on-road-price-in-hyderabad',
    bookNow: '/',
    power: '49 @ 5500',
    engine: 'K10C',
    transmission: 'AGS / 5 MT',
    mileage: '24.90',
    seating: '5',
    fuel: 'Petrol/CNG',
  },
  {
    id: 3,
    name: 'Brezza',
    price: '8.25 L',
    logo: 'https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/Arena/logo/brezza-new-logo.png',
  img: brezza_thumbnail,
    brouchure:
      'https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/Arena/brochures/Brezza2022_Hot_Techy_SUV_Broucher.pdf',
    explore: '/maruti-new-brezza-on-road-price-in-hyderabad',
    bookNow: '/',
    power: '75.8',
    engine: 'K15C Smart Hybrid',
    transmission: '6 AT/5 MT',
    mileage: '19.80',
    seating: '5',
    fuel: 'Petrol/CNG',
  },

  {
    id: 5,
    name: 'Dzire',
    price: '6.25 L',
    logo: 'https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/Arena/index/Dzire.jpg',
    img: 'https://www.marutisuzuki.com/images/dzire_brand/images/threesixty/blue/suzuki_swift_ext_360_oragne_v-1_6.webp',
    // img: "https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/Arena/thumnails/arena-dzire.webp",
    brouchure:
      'https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/Arena/brochures/Saboo_RKS_Dzire_Brochure.pdf',
    explore: '/maruti-swift-dzire-on-road-price-in-hyderabad',
    bookNow: '/',
    power: '66',
    engine: 'K Series VVT',
    transmission: '5 MT/AT',
    mileage: '33.73',
    seating: '5',
    fuel: 'Petrol/CNG',
  },
  {
    id: 6,
    name: 'S-Presso',
    price: '3.49 L',
    logo: 'https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/Arena/index/spresso.png',
    img: 'https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/Arena/thumnails/arena-spresso.webp',
    brouchure:
      'https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/Arena/brochures/Saboo_RKS_S-Presso_brochure.pdf',
    explore: '/maruti-s-presso-on-road-price-in-hyderabad',
    bookNow: '/',
    power: '49',
    engine: 'K10C',
    transmission: '5 MT/AT',
    mileage: '25.30',
    seating: '5',
    fuel: 'Petrol/CNG',
  },
  {
    id: 7,
    name: 'Wagon R',
    price: '4.98 L',
    logo: 'https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/Arena/index/wagonr.png',
    img: 'https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/Arena/thumnails/arena-wagonr.webp',
    brouchure:
      'https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/Arena/brochures/Saboo_RKS_WagonR_Brochure.pdf',
    explore: '/maruti-wagon-r-on-road-price-in-hyderabad',
    bookNow: '/',
    power: '66',
    engine: 'K12N',
    transmission: '5 MT/AT',
    mileage: '25.19',
    seating: '5',
    fuel: 'Petrol/CNG',
  },

  {
    id: 8,
    name: 'Ertiga',
    price: '8.80 L',
    logo: 'https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/Arena/index/Ertiga.jpg',
    img: 'https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/Arena/thumnails/arena-ertiga.webp',
    brouchure:
      'https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/Arena/brochures/Saboo_RKS_Ertiga_Brochure.pdf',
    explore: '/maruti-ertiga-on-road-price-in-hyderabad',
    bookNow: '/',
    power: '75.8',
    engine: 'K15C Smart Hybrid',
    transmission: '6 AT/5 MT',
    mileage: '20.51',
    seating: '7',
    fuel: 'Petrol/CNG',
  },
  {
    id: 9,
    name: 'Celerio',
    price: '4.69 L',
    logo: 'https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/Arena/index/celerio.png',
    img: 'https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/Arena/thumnails/arena-celerio.webp',
    brouchure:
      'https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/Arena/brochures/Saboo_RKS_All_New_Celerio.pdf',
    explore: '/the-all-new-celerio',
    bookNow: '/',
    power: '49',
    engine: 'K10C',
    transmission: ' 5 MT/AT',
    mileage: '26.68',
    seating: '5',
    fuel: 'Petrol/CNG',
  },
  {
    id: 10,
    name: 'Eeco',
    price: '5.20 L',
    logo: 'https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/Arena/index/eeco.png',
    img: 'https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/Arena/thumnails/arena-eeco.webp',
    brouchure:
      'https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/Arena/brochures/Saboo_RKS_Eeco_Passenger_2022_brochure.pdf',
    explore: '/maruti-eeco-on-road-price-in-hyderabad',
    bookNow: '/',
    power: '54',
    engine: 'G12B',
    transmission: '5 MT',
    mileage: '19.71',
    seating: '5,7',
    fuel: 'Petrol/CNG',
  },
];

export const cngProducts = [
  {
    name: 'SWIFT',
    price: ' 8.195 L',
    logo: 'https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/Arena/thumnails/swiftlogo-new.webp',
    img: 'https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/Arena/thumnails/Swift+Tile+Image.webp',
    brouchure:
      'https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/Arena/brochures/Saboo_RKS_New_Swift_brouchre.pdf',
    explore: '/maruti-swift-cng-on-road-price-in-hyderabad',
    bookNow: '/',

    mileage: '25.75',
  },

  {
    name: 'Alto K10 CNG',
    price: '5.96 L',
    logo: 'https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/Arena/new-alto-k10/alto-k10-logo-bw.webp',
    img: 'https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/Arena/thumnails/arena-k10.webp',
    brouchure:
      'https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/Arena/new-alto-k10/alto-k10-brochure.pdf',
    explore: '/alto-k10-cng',
    bookNow: '/',
    mileage: '33.85',
  },
  {
    name: 'Brezza CNG',
    price: '9.29 L',
    logo: 'https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/Arena/logo/brezza-new-logo.png',
    img: brezza_thumbnail,
    brouchure:
      'https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/Arena/brochures/Brezza2022_Hot_Techy_SUV_Broucher.pdf',
    explore: '/maruti-brezza-cng-on-road-price',
    bookNow: '/',
    mileage: '25.51',
  },

  {
    name: 'Dzire',
    price: '8.44 L',
    logo: 'https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/Arena/index/Dzire.jpg',
    img: 'https://www.marutisuzuki.com/images/dzire_brand/images/threesixty/red.webp',

    // img: "https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/Arena/thumnails/arena-dzire.webp",
    brouchure:
      'https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/Arena/brochures/Saboo_RKS_Dzire_Brochure.pdf',
    explore: '/maruti-swift-dzire-cng-on-road-price-in-hyderabad',
    bookNow: '/',
    mileage: '31.12',
  },
  {
    name: 'S-Presso',
    price: '5.91 L',
    logo: 'https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/Arena/index/spresso.png',
    img: 'https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/Arena/thumnails/arena-spresso.webp',
    brouchure:
      'https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/Arena/brochures/Spresso_brochure_2022.pdf',
    explore: '/maruti-s-presso-cng-on-road-price-in-hyderabad',
    bookNow: '/',
    mileage: '32.73',
  },
  {
    name: 'Wagon R',
    price: '6.44 L',
    logo: 'https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/Arena/index/wagonr.png',
    img: 'https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/Arena/thumnails/arena-wagonr.webp',
    brouchure:
      'https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/Arena/brochures/Saboo_RKS_WagonR_Brochure.pdf',
    explore: '/maruti-wagonr-cng-on-road-price-in-hyderabad',
    bookNow: '/',
    mileage: '34.05',
  },
  {
    name: 'Ertiga',
    price: '10.78 L',
    logo: 'https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/Arena/index/Ertiga.jpg',
    img: 'https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/Arena/thumnails/arena-ertiga.webp',
    brouchure:
      'https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/Arena/brochures/Saboo_RKS_Ertiga_Brochure.pdf',
    explore: '/maruti-ertiga-cng-on-road-price-in-hyderabad',
    bookNow: '/',
    mileage: '26.11',
  },
  {
    name: 'Celerio',
    price: '6.73 L',
    logo: 'https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/Arena/index/celerio.png',
    img: 'https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/Arena/thumnails/arena-celerio.webp',
    brouchure:
      'https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/Arena/brochures/Saboo_RKS_All_New_Celerio.pdf',
    explore: '/maruti-celerio-cng-on-road-price-in-hyderabad',
    bookNow: '/',
    mileage: '34.43',
  },
  {
    name: 'Eeco',
    price: '6.58 L',
    logo: 'https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/Arena/index/eeco.png',
    img: 'https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/Arena/thumnails/arena-eeco.webp',
    brouchure:
      'https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/Arena/brochures/Saboo_RKS_Eeco_Passenger_2022_brochure.pdf',
    explore: '/maruti-eeco-cng-on-road-price-in-hyderabad',
    bookNow: '/',
    mileage: '26.78',
  },
];

export const tourProducts = [
  // {
  //   name: "Alto",
  //   petrol: "22.05 km/l",
  //   logo: "https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/Arena/tour/logos/Tour_H1.webp",
  //   img: "https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/Arena/thumnails/cng-cars/tour-H1.png",
  //   brouchure:
  //     "https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/Arena/brochures/Saboo_RKS_Alto_Brand_Brochure.pdf",
  //   explore: "/maruti-alto-tour-h1-on-road-price-in-hyderabad",
  //   bookNow: "/",
  // },

  {
    name: 'Dzire',
    petrol: '19.95 km/l',
    logo: 'https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/Arena/tour/logos/Tour_S.webp',

    img: 'https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/TOUR/dzire-tour-s/Dzire-image+(1).webp',
    brouchure:
      'https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/Arena/brochures/Saboo_RKS_Dzire_Brochure.pdf',
    explore: '/maruti-dzire-tour-s-on-road-price-in-hyderabad',
    bookNow: '/',
  },
  {
    name: 'Wagon R',
    petrol: '25.40 km/l',
    logo: 'https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/Arena/tour/logos/Tour_H3.webp',
    img: 'https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/Arena/thumnails/cng-cars/Tour-H3.png',
    brouchure:
      'https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/Arena/brochures/Saboo_RKS_WagonR_Brochure.pdf',
    explore: '/maruti-wagnor-tour-h3-on-road-price-in-hyderabad',
    bookNow: '/',
  },
  {
    name: 'Ertiga',
    petrol: '18.04 km/l',
    logo: 'https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/Arena/tour/logos/Tour_M.webp',
    img: 'https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/Arena/thumnails/cng-cars/Tour-M.png',
    brouchure:
      'https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/Arena/brochures/Saboo_RKS_Ertiga_Brochure.pdf',
    explore: '/maruti-ertiga-tour-m-on-road-price-in-hyderabad',
    bookNow: '/',
  },
  {
    name: 'Eeco',
    petrol: '16.11 km/l',
    logo: 'https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/Arena/tour/logos/Tour_V.webp',
    img: 'https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/Arena/thumnails/cng-cars/Tour-V.png',
    brouchure:
      'https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/Arena/brochures/Saboo_RKS_Eeco_Passenger_2022_brochure.pdf',
    explore: '/maruti-eeco-tour-v-on-road-price-in-hyderabad',
    bookNow: '/',
  },
];

export const offer_products = [
  {
    name: 'ignis',
    price: '27000',
    logo: 'https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/saboonexa/logos/Maruti-Suzuki-Ignis-logo.webp',
    img: 'https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/saboonexa/Banner/Product-thumbnail/Saboo-Nexa-product-Ignis.webp',
    explore: '/nexa-ignis-on-road-price-in-hyderabad',
  },
  {
    name: 'Ciaz',
    price: '35000',
    logo: 'https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/saboonexa/logos/Saboo-Nexa-Ciaz-logo.webp',
    img: 'https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/saboonexa/Banner/Product-thumbnail/Saboo-Nexa-product-ciaz.webp',
    explore: '/nexa-ciaz-on-road-price-in-hyderabad',
  },
  {
    name: 'S-Cross',
    price: '47000',
    logo: 'https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/saboonexa/logos/Maruti-Suzuki-Nexa-Scross-Logo.webp',
    img: 'https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/saboonexa/Banner/Product-thumbnail/Saboo-Nexa-product-scross.webp',
    explore: '/nexa-scross-petrol-on-road-price-in-hyderabad',
  },
];

export const testimonials = [
  {
    text: 'The sales staff were very responsive. Reception is good. Quick response to queries and very courteous towards customers.',
    author: 'S.S.Rao',
  },
  {
    text: 'The sales staff were very responsive. Reception is good. Quick response to queries and very courteous towards customers.',
    author: 'Kiran Vemparala',
  },
  {
    text: 'Excellent service by executive He is very professional and so polite and friendly nature and Good commitment for Executing of work with in time . and based on His way of explaining about product I choose this show room and this showroom is Excellent . Good maintaining covid precautions overall Excellent but iam giving FIVE STARS for the team',
    author: 'Mohan Kumar',
  },
];

export const showrooms = [
  {
    map: 'https://www.google.com/maps/place/Maruti+Suzuki+Arena+-+Saboo+RKS+Motor+Pvt.+Ltd/@17.424164,78.457337,15z/data=!4m6!3m5!1s0x3bcb974b6feb9ea5:0x1e0a3e3dabcb8701!8m2!3d17.4241643!4d78.4573371!16s%2Fg%2F1tc_zym2?hl=en&entry=ttu',
    address: 'Somajiguda',
    image:
      'https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/Arena/showroom+locations/webp-showrooms/webp-showroom/RKS-Motor-Maruti-Suzuki-Arena-Center-Near-Me-Somajiguda.webp',
  },
  {
    map: 'https://www.google.com/maps/place/Saboo+RKS+Motor+-+Maruti+Suzuki+Car+Dealer+(Tadbund,+Secunderabad)/@17.451934,78.486501,15z/data=!4m6!3m5!1s0x3bcb9a72a843d403:0xd11fa91defdbce1b!8m2!3d17.4519336!4d78.486501!16s%2Fg%2F1q62d7c20?hl=en&entry=ttu',
    address: 'Tadbund',
    image:
      'https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/Arena/showroom+locations/webp-showrooms/webp-showroom/RKS-Motor-Maruti-Suzuki-Arena-Center-Near-Me-Tadbund.webp',
  },
  {
    map: 'https://www.google.com/maps/place/Saboo+RKS+Motor+-+Maruti+Suzuki+Car+Dealer+(Malakpet,+Hyderabad)/@17.371254,78.512446,15z/data=!4m6!3m5!1s0x3bcb985a78a7f883:0xad5bb6113d36bffc!8m2!3d17.3712538!4d78.5124463!16s%2Fg%2F1pp2w_16k?hl=en&entry=ttu',
    address: 'Malakpet',
    image:
      'https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/Arena/showroom+locations/webp-showrooms/webp-showroom/RKS-Motor-Maruti-Suzuki-Arena-Center-Near-Me-Malakpet.webp',
  },
  {
    map: 'https://www.google.com/maps/place/Saboo+RKS+Motor+-+Maruti+Suzuki+Car+Dealer+(Kushaiguda,+Secunderabad)/@17.476452,78.573193,15z/data=!4m6!3m5!1s0x3bcb9c7c4829c807:0xe33d0f61aa143664!8m2!3d17.4764521!4d78.5731928!16s%2Fg%2F11gbffbwcn?hl=en&entry=ttu',
    address: 'Kushaiguda',
    image:
      'https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/Arena/showroom+locations/webp-showrooms/webp-showroom/RKS-Motor-Maruti-Suzuki-Arena-Center-Near-Me-Kushaiguda.webp',
  },
  {
    map: 'https://www.google.com/maps/place/Saboo+RKS+Motor+-+Maruti+Suzuki+Sales+%26+Service+(Shamirpet,+Secunderabad)/@17.627171,78.569861,15z/data=!4m6!3m5!1s0x3bcb81bc18d30c3b:0x5f74a496d6d6fd97!8m2!3d17.627171!4d78.5698606!16s%2Fg%2F11nx66bdfc?hl=en&entry=ttu',
    address: 'Shamirpet',
    image:
      'https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/Arena/showroom+locations/webp-showrooms/webp-showroom/RKS-Motor-Maruti-Suzuki-Arena-Center-Near-Me-Shamirpet.webp',
  },
  {
    map: 'https://www.google.com/maps/place/Maruti+Suzuki+̀̀na+(RKS+Motor)/@17.383765,78.363148,15z/data=!4m6!3m5!1s0x3bcb958150dd4c01:0x2d0aecdb5b3523de!8m2!3d17.3837654!4d78.3631478!16s%2Fg%2F11v07h42w1?hl=en&entry=ttu',
    address: 'Narsingi',
    image:
      'https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/Arena/showroom+locations/webp-showrooms/webp-showroom/RKS-Motor-Maruti-Suzuki-Arena-Center-Near-Me-Narsingi.webp',
  },
  {
    map: 'https://www.google.com/maps/place/Maruti+Suzuki+Arena+(RKS+Motor)/@17.110276,77.61457,15z/data=!4m6!3m5!1s0x3bc96d29623dee8d:0x80ac3a193f40c080!8m2!3d17.1102761!4d77.6145696!16s%2Fg%2F11sv_4m63q?hl=en&entry=ttu',
    address: 'Kodangal',
    image:
      'https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/Arena/showroom+locations/webp-showrooms/webp-showroom/RKS-Motor-Maruti-Suzuki-Arena-Center-Near-Me-Kodangal.webp',
  },
  // {
  //   map: 'https://www.google.com/maps/place/Saboo+RKS+Maruti+Suzuki+Arena+Showroom/@17.4203741,78.4406094,14z/data=!4m6!3m5!1s0x3bcb9bdda638d193:0xc9116e0ef0b6a48b!8m2!3d17.4406719!4d78.5051666!16s%2Fg%2F11vhs808gd?entry=ttu',
  //   address: 'Sangeeth Circle',
  //   image:
  //     'https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/Arena/showroom+locations/webp-showrooms/webp-showroom/sangeeth-branch-arena.webp',
  // },
];

export const RewardSliderImages = [
  {
    img: reward1,
    alt: 'Reward Points slider 1',
  },
  {
    img: reward2,
    alt: 'Reward Points slider 2',
  },
  {
    img: reward3,
    alt: 'Reward Points slider 3',
  },
  {
    img: reward4,
    alt: 'Reward Points slider 4',
  },
  {
    img: reward8,
    alt: 'Reward Points slider 5',
  },
];

export const RewardMobileSliderImages = [
  {
    img: 'https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/Arena/reeward-points/mobile/mobile-images/for-slider/1-cropped.webp',
    alt: 'reward mobile slide 1',
  },

  {
    img: 'https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/Arena/reeward-points/mobile/mobile-images/for-slider/5-cropped.webp',
    alt: 'reward mobile slide 2',
  },
];

{/* <iframe
  title='Embedded Video'
  src=''
  width='600'
  height='450'
  style={{ border: '0' }}
  allowfullscreen=''
  loading='lazy'
  referrerpolicy='no-referrer-when-downgrade'
></iframe>; */}

// export const truevalue = [
//   {
//     map: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3806.743472381001!2d78.45519981487682!3d17.42409428805667!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xc0c00b1605899f18!2sMaruti%20Suzuki%20True%20Value%20(RKS%20Motor%2C%20Somajiguda%2C%20Hyderabad)!5e0!3m2!1sen!2sin!4v1604387383241!5m2!1sen!2sin',
//     address: 'Maruti Suzuki True Value (RKS Motor, Somajiguda, Hyderabad)',
//   },
//   {
//     map: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3807.8199868878046!2d78.50790321487611!3d17.372392988087633!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x1ce78cbd36879558!2sMaruti%20Suzuki%20True%20Value%20(RKS%20Motor%2C%20Malakpet%2C%20Hyderabad)!5e0!3m2!1sen!2sin!4v1604387407116!5m2!1sen!2sin',
//     address: 'Maruti Suzuki True Value (RKS Motor, Malakpet, Hyderabad)',
//   },
//   {
//     map: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3804.9129374615923!2d78.4778035148781!3d17.511668988004185!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x757d88157ab9a254!2sMaruti%20Suzuki%20True%20Value%20(RKS%20Motor%2C%20Kompally%2C%20Secunderabad)!5e0!3m2!1sen!2sin!4v1604387421033!5m2!1sen!2sin',
//     address: 'Maruti Suzuki True Value (RKS Motor, Kompally, Secunderabad)',
//   },
//   {
//     map: 'https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d30445.73569341907!2d78.570397!3d17.473256!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x821143e99dbc4c67!2sMaruti%20Suzuki%20True%20Value%20(Kushaiguda)!5e0!3m2!1sen!2sin!4v1618911646493!5m2!1sen!2sin',
//     address: 'Maruti Suzuki True Value (RKS Motor, Kushaiguda, Secunderabad)',
//   },
// ];

// export const workshop = [
//   {
//     map: 'https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15230.247208443354!2d78.5071734!3d17.3848063!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x6eec84cd9e149fab!2sSaboo%20RKS%20-%20Maruti%20Suzuki%20Car%20Dealer%20(%20Service%20Center%2C%20Moosarambagh)!5e0!3m2!1sen!2sin!4v1674123920531!5m2!1sen!2sin',
//     address:
//       'Maruti Suzuki Service Center (RKS Motor, Moosarambagh, Hyderabad)',
//   },
//   {
//     map: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3806.743472381001!2d78.45519981487682!3d17.42409428805667!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xad74c2cc38240458!2sMaruti%20Suzuki%20Service%20Center%20(RKS%20Motor%2C%20Somajiguda%2C%20Hyderabad)!5e0!3m2!1sen!2sin!4v1604387026319!5m2!1sen!2sin',
//     address: 'Maruti Suzuki Workshop (RKS Motor, Somajiguda, Hyderabad)',
//   },
//   {
//     map: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3807.278105801397!2d78.55207721487648!3d17.39843628807201!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x533d4356086d5aba!2sMaruti%20Suzuki%20Service%20Center%20(RKS%20Motor%2C%20Uppal%2C%20Secunderabad)!5e0!3m2!1sen!2sin!4v1604386877556!5m2!1sen!2sin',
//     address: 'Maruti Suzuki Workshop (RKS Motor, Uppal, Secunderabad)',
//   },
//   {
//     map: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3806.161882759987!2d78.48441831487719!3d17.451964288039893!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x94b782fa83589a15!2sMaruti%20Suzuki%20Service%20Center%20(RKS%20Motor%2C%20Tadbund%2C%20Secunderabad)!5e0!3m2!1sen!2sin!4v1604386981332!5m2!1sen!2sin',
//     address:
//       'Maruti Suzuki Workshop (RKS Motor, Tadbund/Tar Bund, Secunderabad)',
//   },
//   {
//     map: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3807.3755089827937!2d78.46776271487646!3d17.393757788074744!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x7cb0979b572d6610!2sMaruti%20Suzuki%20Service%20Center%20(RKS%20Motor%2C%20Nampally%2C%20Hyderabad)!5e0!3m2!1sen!2sin!4v1604387085079!5m2!1sen!2sin',
//     address: 'Maruti Suzuki Workshop (RKS Motor, Nampally, Hyderabad)',
//   },
//   {
//     map: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3807.7601224158398!2d78.50844131487617!3d17.37527198808587!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xd662e229fb9d2b63!2sMaruti%20Suzuki%20Service%20Center%20(RKS%20Motor%2C%20Malakpet%2C%20Hyderabad)!5e0!3m2!1sen!2sin!4v1604387143500!5m2!1sen!2sin',
//     address: 'Maruti Suzuki Workshop (RKS Motor, Malakpet, Hyderabad)',
//   },
//   {
//     map: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3805.716827758189!2d78.56817041435436!3d17.473262404923048!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb9c7c4829c807%3A0xe33d0f61aa143664!2sMaruti%20Suzuki%20ARENA%20(RKS%20Motor%2C%20Kushaiguda%2C%20Hyderabad)!5e0!3m2!1sen!2sin!4v1604387198424!5m2!1sen!2sin',
//     address: 'Maruti Suzuki Workshop (RKS Motor, Kushaiguda, Hyderabad)',
//   },
//   {
//     map: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3805.5589629588712!2d78.41955181487766!3d17.480810988022668!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xbbc59173810f4bd8!2sMaruti%20Suzuki%20Service%20Center%20(RKS%20Motor%2C%20Kukatpally%2C%20Hyderabad)!5e0!3m2!1sen!2sin!4v1604387228568!5m2!1sen!2sin',
//     address: 'Maruti Suzuki Workshop (RKS Motor, Kukatpally, Hyderabad)',
//   },
//   {
//     map: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3802.4992833446645!2d78.56797331487971!3d17.626496387935717!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb81bc18d30c3b%3A0x5f74a496d6d6fd97!2sMaruti%20Suzuki%20Car%20Dealer%20-%20Shamirpet!5e0!3m2!1sen!2sin!4v1629796936830!5m2!1sen!2sin',
//     address: 'Maruti Suzuki Workshop (RKS Motor, Shamirpet, Hyderabad)',
//   },
// ];

// export const school = [
//   {
//     map: 'https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15229.437285566019!2d78.4705114!3d17.3945354!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x8b74d02486adeb57!2sSaboo%20RKS%20Motor%20-%20Maruti%20Suzuki%20Car%20Dealer(Driving%20School%2C%20Nampally%2C%20Hyderabad)!5e0!3m2!1sen!2sin!4v1662098458836!5m2!1sen!2sin',
//     address: 'Maruti Suzuki Driving School (RKS Motor, Nampally, Hyderabad)',
//   },
//   {
//     map: 'https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15231.280819816904!2d78.5101313!3d17.3723825!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xafee645695b27b85!2sSaboo%20RKS%20Motor%20-%20Maruti%20Suzuki%20Car%20Dealer(Driving%20School%2C%20Malakpet%2C%20Hyderabad)!5e0!3m2!1sen!2sin!4v1662098587896!5m2!1sen!2sin',
//     address: 'Maruti Suzuki Driving School (RKS Motor, Malakpet, Hyderabad)',
//   },
//   {
//     map: 'https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15222.855376657519!2d78.5706205!3d17.4734051!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x1c675a1b86451b98!2sSaboo%20RKS%20Motor%20-%20Maruti%20Suzuki%20Car%20Dealer%20(Driving%20School%2C%20Kushaiguda%2C%20Secunderabad)!5e0!3m2!1sen!2sin!4v1662098683076!5m2!1sen!2sin',
//     address: 'Maruti Suzuki Driving School (RKS Motor, Kushaiguda, Hyderabad)',
//   },
// ];
export const truevalue = [
  {
    map: 'https://www.google.com/maps/place/Maruti+Suzuki+True+Value(Saboo+RKS,+Hyderabad,+Somajiguda)/@17.424094,78.457389,15z/data=!4m6!3m5!1s0x3bcb97f91520505b:0xc0c00b1605899f18!8m2!3d17.4240943!4d78.4573885!16s%2Fg%2F11mvfz_ctt?hl=en&entry=ttu',
    address: 'True Value - Somajiguda',
    image:
      'https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/Arena/showroom+locations/webp-showrooms/webp-truevalue/RKS-Motor-Maruti-Suzuki-True-Value-Used-Cars-Center-Near-Me-Somajiguda.webp',
  },
  {
    map: 'https://www.google.com/maps/place/Saboo+RKS+Motor+-+Maruti+Suzuki+Car+Dealer+(Malakpet,+Hyderabad)/@17.371254,78.512446,15z/data=!4m6!3m5!1s0x3bcb985a78a7f883:0xad5bb6113d36bffc!8m2!3d17.3712538!4d78.5124463!16s%2Fg%2F1pp2w_16k?hl=en&entry=ttu',
    address: ' True Value - Malakpet',
    image:
      'https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/Arena/showroom+locations/webp-showrooms/webp-truevalue/RKS-Motor-Maruti-Suzuki-True-Value-Used-Cars-Center-Near-Me-Malakpet.webp',
  },
  {
    map: 'https://www.google.com/maps/place/Maruti+Suzuki+True+Value(Saboo+RKS+Motor,+Kompally,+Medchal)/@17.511668,78.479993,15z/data=!4m6!3m5!1s0x3bcb9aa8da34c7f1:0x85c400effae92ff6!8m2!3d17.5116684!4d78.4799925!16s%2Fg%2F11r87bcwv0?hl=en&entry=ttu',
    address: 'True Value - Kompally',
    image:
      'https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/Arena/showroom+locations/webp-showrooms/webp-truevalue/RKS-Motor-Maruti-Suzuki-True-Value-Used-Cars-Center-Near-Me-Kompally.webp',
  },
  {
    map: 'https://www.google.com/maps/place/Saboo+RKS+Motor+-+Maruti+Suzuki+Car+Dealer+(True+Value,+Kushaiguda,+Secunderabad)/@17.473256,78.570397,12z/data=!4m6!3m5!1s0x3bcb9dc93cf03ab1:0x821143e99dbc4c67!8m2!3d17.4732557!4d78.5703966!16s%2Fg%2F11llcn0l_w?hl=en&entry=ttu',
    address: 'True Value - Kushaiguda',
    image:
      'https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/Arena/showroom+locations/webp-showrooms/webp-truevalue/RKS-Motor-Maruti-Suzuki-True-Value-Used-Cars-Center-Near-Me-Kushaiguda.webp',
  },
];
export const workshop = [
  {
    map: 'https://www.google.com/maps/place/Maruti+Suzuki+Arena+-+Saboo+RKS+Motor+Pvt.+Ltd/@17.424164,78.457337,15z/data=!4m6!3m5!1s0x3bcb974b6feb9ea5:0x1e0a3e3dabcb8701!8m2!3d17.4241643!4d78.4573371!16s%2Fg%2F1tc_zym2?hl=en&entry=ttu',
    address: 'Somajiguda',
    image:
      'https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/Arena/showroom+locations/webp-showrooms/webp-service/RKS-Motor-Maruti-Suzuki-Service-Center-Near-Me-Somajiguda.webp',
  },

  {
    map: 'https://www.google.com/maps/place/Saboo+RKS+-+Maruti+Suzuki+Car+Dealer+(+Service+Center,+Moosarambagh)/@17.384806,78.507173,13z/data=!4m6!3m5!1s0x3bcb992fc2460627:0x6eec84cd9e149fab!8m2!3d17.3848063!4d78.5071734!16s%2Fg%2F11jzcb46x8?hl=en&entry=ttu',
    address: 'Malakpet - Moosarambagh',
    image:
      'https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/Arena/showroom+locations/webp-showrooms/webp-service/RKS-Motor-Maruti-Suzuki-Nexa-Service-Center-Near-Me-Malakpet-Moosarambagh.webp',
  },
  {
    map: 'https://www.google.com/maps/place/Saboo+RKS+Motor+Nampally+-+Maruti+Suzuki+Car+Dealer(NEXA,+ARENA,+Service+Center,+TrueValue+%26+Driving+School+)/@17.393985,78.46998,15z/data=!4m6!3m5!1s0x3bcb976366ed87d9:0x7cb0979b572d6610!8m2!3d17.3939849!4d78.4699801!16s%2Fg%2F11c1qryf39?hl=en&entry=ttu',
    address: 'Nampally',
    image:
      'https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/Arena/showroom+locations/webp-showrooms/webp-service/RKS-Motor-Maruti-Suzuki-Service-Center-Near-Me-Nampally.webp',
  },
  {
    map: 'https://www.google.com/maps/place/Saboo+RKS+Motor+-+Maruti+Suzuki+Car+Dealer+(Service+Center,+Tadbund,+Secunderabad)/@17.451964,78.486607,15z/data=!4m6!3m5!1s0x3bcb9b59fcccc4c3:0x94b782fa83589a15!8m2!3d17.4519643!4d78.486607!16s%2Fg%2F11h_sz_f3h?hl=en&entry=ttu',
    address: 'Secunderabad - Tadbund',
    image:
      'https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/Arena/showroom+locations/webp-showrooms/webp-service/RKS-Motor-Maruti-Suzuki-Service-Center-Near-Me-Tadbund.webp',
  },
  {
    map: 'https://www.google.com/maps/place/Nexa+Service+(Saboo+RKS+Motor,Kompally)/@17.4150348,78.3917255,12z/data=!4m6!3m5!1s0x3bcb9b0050416a8d:0xe39be48925b874ef!8m2!3d17.5143238!4d78.4809953!16s%2Fg%2F11wv6xqs76?entry=ttu&g_ep=EgoyMDI1MDEyMC4wIKXMDSoASAFQAw%3D%3D',
    address: 'Suchitra',
    image:
      'https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/nexa/Saboo+RKS+Motor+Nexa+Service+Kompally.webp',
  },

  {
    map: 'https://www.google.com/maps/place/Saboo+RKS+Motor+-+NEXA+(Kompally,+Medchal)/@17.5116444,78.4801322,15z/data=!4m6!3m5!1s0x3bcb913447d392c9:0xb4d82d61c40f4a40!8m2!3d17.5116444!4d78.4801322!16s%2Fg%2F11n379xm0y?hl=en&entry=ttu',
    address: 'Kompally',
    image:
      'https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/Arena/showroom+locations/webp-showrooms/webp-showroom/Nexa+Service.webp',
  },
  {
    map: 'https://www.google.com/maps/place/Saboo+RKS+Motor/@17.480811,78.421741,15z/data=!4m6!3m5!1s0x3bcb91ae48fe6963:0xbbc59173810f4bd8!8m2!3d17.480811!4d78.4217405!16s%2Fg%2F124yq1dsg?hl=en&entry=ttu',
    address: 'Kukatpally',
    image:
      'https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/Arena/showroom+locations/webp-showrooms/webp-service/Kukatpally.webp',
  },
  {
    map: 'https://www.google.com/search?q=Nexa+Service+Center+(RKS+Motor,+Hafeezpet,+Hyderabad)&stick=H4sIAAAAAAAA_-NgU1I1qDBOSk6yNDYzMbFIMjVKSkyxMqgwTEozNTFIMzU0sDQwSk1MW8Rq6pdakagQnFpUlpmcquCcmleSWqSgEeQdrOCbX5JfpKPgkZiWmlpVkFoCZFampBYlAk3SBADTMy0tYQAAAA&hl=en&mat=CdzcGniRrdrvElcBezTaAbOvoGfxyRmgSikLqJzGJxxp6W8CJDvItU-FnTJBi0XC6TWNvUlxjpLpPyotpKszTQRtXddWutjlrp3zteNJLkKr0RSm1m7nXBzE0L9_tHESGG4&authuser=0',
    address: 'Hafeezpet',
    image:
      'https://lh3.googleusercontent.com/p/AF1QipOcu7GCpu2tIt7zlZ_gl_xyDqT4uN7E_F7ym0RA=s680-w680-h510',
  },

  {
    map: 'https://www.google.com/maps/place/Saboo+RKS+Motor+-+Maruti+Suzuki+Sales+%26+Service+(Shamirpet,+Secunderabad)/@17.627171,78.569861,15z/data=!4m6!3m5!1s0x3bcb81bc18d30c3b:0x5f74a496d6d6fd97!8m2!3d17.627171!4d78.5698606!16s%2Fg%2F11nx66bdfc?hl=en&entry=ttu',
    address: 'Shamirpet',
    image:
      'https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/Arena/showroom+locations/webp-showrooms/webp-service/RKS-Motor-Maruti-Suzuki-Service-Center-Near-Me-Shamirpet.webp',
  },
  {
    map: 'https://www.google.com/maps/place/Saboo+RKS+Motor+-+Maruti+Suzuki+Car+Dealer+(Kushaiguda,+Secunderabad)/@17.476452,78.573193,15z/data=!4m6!3m5!1s0x3bcb9c7c4829c807:0xe33d0f61aa143664!8m2!3d17.4764521!4d78.5731928!16s%2Fg%2F11gbffbwcn?hl=en&entry=ttu',
    address: 'Kushaiguda',
    image:
      'https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/Arena/showroom+locations/webp-showrooms/webp-service/RKS-Motor-Maruti-Suzuki-Nexa-Service-Center-Near-Me-Kushaiguda.webp',
  },

  {
    map: 'https://www.google.com/maps/place/Rks+Motors+Pvt.+Ltd.+-+Maruti+Service/@17.39843,78.554267,15z/data=!4m6!3m5!1s0x3bcb993aa273c193:0x31688c76343b7377!8m2!3d17.3984304!4d78.5542668!16s%2Fg%2F11pqcp886k?hl=en&entry=ttu',
    address: 'Uppal',
    image:
      'https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/Arena/showroom+locations/webp-showrooms/webp-service/RKS-Motor-Maruti-Suzuki-Nexa-Service-Center-Near-Me-Uppal.webp',
  },
  {
    map: 'https://www.google.com/maps/place/Maruti+Suzuki+Service+(Saboo+RKS+Motor,+Kodangal)/@17.1103785,77.6146916,15z/data=!4m14!1m7!3m6!1s0x3bc96d55b6000b0d:0xc4f577e7882e0954!2sMaruti+Suzuki+Service+(Saboo+RKS+Motor,+Kodangal)!8m2!3d17.1103785!4d77.6146916!16s%2Fg%2F11vjcm4s1h!3m5!1s0x3bc96d55b6000b0d:0xc4f577e7882e0954!8m2!3d17.1103785!4d77.6146916!16s%2Fg%2F11vjcm4s1h?entry=ttu',
    address: 'Kodangal',
    image:
      'https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/Arena/showroom+locations/webp-showrooms/webp-showroom/RKS-Motor-Maruti-Suzuki-Arena-Center-Near-Me-Kodangal.webp',
  },
  {
    map: 'https://maps.app.goo.gl/YAzDSVkfoiFr8wKB7',
    address: 'Kowkoor',
    image:
      'https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/Arena/showroom+locations/webp-showrooms/webp-showroom/kowkoor+outlet.jpg',
  },
];

export const school = [
  {
    map: 'https://www.google.com/maps/place/Saboo+RKS+Motor+-+Maruti+Suzuki+Car+Dealer(Driving+School,+Nampally,+Hyderabad)/@17.394535,78.470511,13z/data=!4m6!3m5!1s0x3bcb97df65dd2b71:0x8b74d02486adeb57!8m2!3d17.3945354!4d78.4705114!16s%2Fg%2F11gyymdf67?hl=en&entry=ttu',
    address: 'Driving School - Nampally',
    image:
      'https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/Arena/showroom+locations/webp-showrooms/webp-driving/RKS-Motor-Maruti-Suzuki-Driving-School-Center-Near-Me-Nampally.webp',
  },
  {
    map: 'https://www.google.com/maps/place/Saboo+RKS+Motor+-+Maruti+Suzuki+Car+Dealer(Driving+School,+Malakpet,+Hyderabad)/@17.372383,78.510131,13z/data=!4m6!3m5!1s0x3bcb990a2c2d8daf:0xafee645695b27b85!8m2!3d17.3723825!4d78.5101313!16s%2Fg%2F11fdyvrl5f?hl=en&entry=ttu',
    address: 'Driving School - Malakpet',
    image:
      'https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/Arena/showroom+locations/webp-showrooms/webp-driving/RKS-Motor-Maruti-Suzuki-Driving-School-Center-Near-Me-Malakpet.webp',
  },
  {
    map: 'https://www.google.com/maps/place/Saboo+RKS+Motor+-+Maruti+Suzuki+Car+Dealer+(Driving+School,+Kushaiguda,+Secunderabad)/@17.473405,78.57062,13z/data=!4m6!3m5!1s0x3bcb9dce98c4abdf:0x1c675a1b86451b98!8m2!3d17.4734051!4d78.5706205!16s%2Fg%2F11m_wfxcj9?hl=en&entry=ttu',
    address: 'Driving School - Kushaiguda',
    image:
      'https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/Arena/showroom+locations/webp-showrooms/webp-driving/RKS-Motor-Maruti-Suzuki-Driving-School-Center-Near-Me-Kushaiguda.webp',
  },
];
export const accesoriessliders = [
  {
    img: 'https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/saboonexa/nexa-accessories/Saboo-Maruti-Suzuk-Nexa-Accessories.webp',
    alt: 'banner-1',
  },
  {
    img: 'https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/accessories/Saboo-RKS-Nexa-Maruti-Suzuki-genuine-accessories-seat-covers.jpg',
    alt: 'banner-2',
  },
  {
    img: 'https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/accessories/Saboo-RKS-Maruti-Suzuki-Nexa-Car-Cabin-Protective-Partition.jpg',
    alt: 'banner-3',
  },
  {
    img: 'https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/accessories/Saboo-RKS-Maruti-Suzuki-Nexa-Disposable-Spectacles.jpg',
    alt: 'banner-4',
  },
  {
    img: 'https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/accessories/Saboo-RKS-Maruti-Suzuki-Nexa-Face-Visor.jpg',
    alt: 'banner-5',
  },
];

export const Newaccesoriessliders = [
  // {
  //   img: "https://marutisuzukiarenaprodcdn.azureedge.net/-/media/marutigeniuneaccessories_27112019/msgabanner/webp-banner/swift_desktop_1500x470.webp",
  //   alt: "banner-1",
  // },
  // {
  //   img: bannerAccessories,
  //   alt: 'Maruti Suzuki Genuine Accessories Summer cool offers Popular RKS Hyderabad April 2024',
  // },
  {
    img: 'https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/Arena/accessory-page/new+banners/AltoK10_desktop_1500X470.webp',
    alt: 'banner-1',
  },
  {
    img: 'https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/Arena/accessory-page/new+banners/Brezza_Desktop_1500X470.webp',
    alt: 'banner-2',
  },
  {
    img: 'https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/Arena/accessory-page/new+banners/Order_desktop_1500X470.webp',
    alt: 'banner-3',
  },
  // {
  //   img: 'https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/Arena/accessory-page/new+banners/Order_desktop_1500X470.webp',
  //   alt: 'banner-4',
  // },
];
