import './movieinfotile.css'
import React from 'react'
import { movies } from '../../components/movietile/MovieTile'

const MovieInfoTile = ({title}) => {
  return (
    <div className='tc__movieinfotile'>
      <div className='tc__movieinfotile-container'>
        {movies.map((movie) => {
          if (title === movie.title){
            return (
            <>
            <div className='tc__movieinfotile-container_content'>
              <div className='tc__movieinfotile-container_content-info'>
                <h1>{movie.title} {'('+ movie.date + ')'}</h1>
                <p>Director: {movie.director}</p>
                <p>Cast: {movie.cast}</p>
                <p>Genre: {movie.genre}</p>
                <p>Rating: {movie.rating}</p>
                <p>Running time: {movie.length + 'min'}</p>
              </div>            
              
              <div className='tc__movieinfotile-container_content-summary'>
                <p>{movie.summary}</p>
              </div>

              <div className='tc__movieinfotile-container_content-button'>
                <button type='button'><a href='/staffpos'>BUY TICKETS</a></button>
                <button type='button'><a href={movie.trailer} target='__blank'>WATCH TRAILER</a></button>
              </div>
            </div>
                
            <div className='tc__movieinfotile-container_image'> 
              <img src={movie.image} alt={movie.alt} />
            </div>
            </>
            )
          }
        })}
      </div>
    </div>
  )
}

export default MovieInfoTile