// Imports the banner images from asset index

import { AlienBanner, DoctorStrange2Banner,HomeAloneBanner,HotRodBanner,IronManBanner } from "../../assets/asset_index";





// This array allows the user to change waht is displayed in the image carousel
export const carouselImages = [
    {
      url: AlienBanner,
      title: 'Alien',
      alt: 'alien movie banner image',
      ref: '/movieinfo/alien'
    },
    {
      url: DoctorStrange2Banner,
      title: 'Doctor Strange 2',
      alt: 'doctor strange 2 movie banner image',
      ref: '/movieinfo/doctor-strange-2'
    },
    {
      url: HomeAloneBanner,
      title: 'Home Alone',
      alt: 'home alone movie banner image',
      ref: "/movieinfo/home-alone"
    },
    {
      url: HotRodBanner,
      title: 'Hot Rod',
      alt: 'hot rod movie banner image',
      ref: "/movieinfo/hot-rod" 
    },
    {
      url: IronManBanner,
      title: 'Iron Man',
      alt: 'iron man movie banner image',
      ref: "/movieinfo/iron-man"
    },
  ];