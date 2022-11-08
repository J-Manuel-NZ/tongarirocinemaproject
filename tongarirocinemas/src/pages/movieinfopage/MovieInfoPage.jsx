import './movieinfopage.css'
import React from 'react'
import { Navbar, Footer, MovieInfoTile } from '../../components/component_index'


const MovieInfoPage = ({movieTitle}) => {
  return (
  <div className='tc__movieinfopage'>
    <Navbar />
    <MovieInfoTile title={movieTitle} />
    <Footer />
  </div>
  ) 
}

export default MovieInfoPage