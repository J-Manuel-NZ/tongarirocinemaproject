import React from 'react'
import './movietilecontainer.css'
import { MovieTile } from '../../components/component_index'

const MovieTileContainer = ({ title1, title2, title3, title4, title5, title6 }) => {
  return (
    <div className='tc__movietilecontainer'>
        <div className='tc__movietilecontainer-container'>
          <MovieTile title={title1} />
          <MovieTile title={title2} />
          <MovieTile title={title3} />
          <MovieTile title={title4} />
          <MovieTile title={title5} />
          <MovieTile title={title6} />
          
        </div>
    </div>
  )
}

export default MovieTileContainer;