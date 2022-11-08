import './homepage.css'
import React from 'react'
import { Carousel, Navbar, MovieTile, Footer, DateSelector } from '../../components/component_index.js';
import  MovieTileContainer from '../../containers/movietilecontainer/MovieTileContainer'
import { carouselImages } from '../../components/carousel/CarouselImagesIndex.js'

const HomePage = () => {
  return (
    <div>
      <Navbar />
      <Carousel carouselImages={ carouselImages } />
      <DateSelector />
      
      {/* <MovieTileContainer title1="Doctor Strange 2" title2='Iron Man' title3="LOTR: The Return of the King" /> */}
      <Footer />
    </div>
  )
}

export default HomePage