import './movietile.css'
import React, {useState} from 'react'
import ReactDOM from 'react-dom/client';
import {hotrod_summary, alien_summary, doctorstrange_summary, homealone_summary, ironman_summary, rotk_summary, rotj_summary } from '../../assets/asset_index';
import { AlienPoster, DoctorStrange2Poster, HomeAlonePoster, HotRodPoster, IronManPoster, LOTRTheReturnOfTheKingPoster, SWReturnOfTheJediPoster } from '../../assets/asset_index';
import { ContactPage, HomePage, StaffPOS } from '../../pages/page_index';
import { render } from '@testing-library/react';
import { rootShouldForwardProp } from '@mui/material/styles/styled';

//array containing all of the movies and info
export const movies = [
  {path: '/movieinfo/hot-rod', title: 'Hot Rod', image: HotRodPoster, alt: 'Hot Rod Poster', director: "Akiva Schaffer", cast: "Andy Samberg", genre: "Comedy", length: 87, date: 2007, rating: "PG13", summary: hotrod_summary, trailer: 'https://www.youtube.com/watch?v=yByhd7FAOug' },
  {path: '/movieinfo/alien', title: 'Alien', image: AlienPoster, alt: 'Alien Poster', director: "Ridley Scott", cast: "Sigourney Weaver", genre: "Horror/Sci-Fi", length: 124, date: 1980, rating: "R16", summary: alien_summary, trailer: 'https://www.youtube.com/watch?v=jQ5lPt9edzQ' },
  {path: '/movieinfo/doctor-strange-2', title: 'Doctor Strange 2', image: DoctorStrange2Poster, alt: 'Doctor Strange 2 Poster', director: "Marvel", cast: "Benedict Cumberbatch", genre: "Action", length: 123, date: 2022, rating: "PG13", summary: doctorstrange_summary, trailer: 'https://www.youtube.com/watch?v=aWzlQ2N6qqg&t=3s' },
  {path: '/movieinfo/home-alone', title: 'Home Alone', image: HomeAlonePoster, alt: 'Home Alone Poster', director: "Chris Columbus", cast: "McCaulay Culkin", genre: "Comedy", length: 87, date: 1990, rating: "PG13", summary: homealone_summary, trailer: 'https://www.youtube.com/watch?v=jEDaVHmw7r4' },
  {path: '/movieinfo/iron-man', title: 'Iron Man', image: IronManPoster, alt: 'Iron Man Poster', director: "Jon Favreau", cast: "Robert Downey Jr.", genre: "Action", length: 87, date: 2008, rating: "PG13", summary: ironman_summary, trailer: 'https://www.youtube.com/watch?v=KAE5ymVLmZg' },
  {path: '/movieinfo/lotr-the-return-of-the-king', title: 'LOTR: The Return of the King', image: LOTRTheReturnOfTheKingPoster, alt: 'LOTR Return of the King Poster', director: "Peter Jackson", cast: "Viggo Mortensen", genre: "Fantasy", length: 87, date: 2005, rating: "PG13", summary: rotk_summary, trailer: 'https://www.youtube.com/watch?v=r5X-hFf6Bwo&t=11s' },
  {path: '/movieinfo/sw-the-return-of-the-jedi', title: 'Star Wars: Return of the Jedi', image: SWReturnOfTheJediPoster, alt: 'Star Wars: Return of the Jedi Poster', director: "George Lucas", cast: "Harrison Ford", genre: "Sci-Fi", length: 87, date: 1981, rating: "PG13", summary: rotj_summary, trailer: 'https://www.youtube.com/watch?v=7L8p7_SLzvU&t=1s' }
]



const CheckTitle = (title) => {

  let checked = {};
  let trueTitle = title.title;

  
    movies.map((movie) => {
      if (trueTitle == movie.title) {
          console.log(movie.title); 
          checked = movie;            
      }
    })
  
  return (checked);
}




const MovieTile = (title) => {

    const movie = CheckTitle(title);
        return ( <div className='tc__movietile'>

        <div className='tc__movietile-container'>
          <div className='tc__movietile-container_title'>
            <h3>{movie.title}</h3>
          </div>
    
          <div className='tc__movietile-container_info'>
            <div className='tc__movietile-container_info-image'>
              <a href={movie.path}><img src={movie.image} alt={movie.alt} /></a>
            </div>
    
            <div className='tc__movietile-container_info-details'>
              <p>
                Director: {movie.director}<br />
                Main Cast: {movie.cast}<br />
                Genre: {movie.genre}<br />
                Running Time: {movie.length}min<br />
                Release Date: {movie.date}<br />
                Rating: {movie.rating}<br />
                Language: English
              </p>
            </div>
          </div>
    
          <div className='tc__movietile-container_summary'>
            <p>{movie.summary}</p>
          </div>
    
          <div className='tc__movietile-container_buttons'>
            <button type='button'><a href='/staffpos'>Session 1</a></button>
            <button type='button'><a href='/staffpos'>Session 2</a></button>
          </div>
    
        </div>
      </div>  ); 
        
}


export default MovieTile