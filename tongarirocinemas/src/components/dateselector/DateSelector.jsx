import './dateselector.css'
import React, { useState } from 'react'
import { schedule } from './scheduleData'
import MovieTileContainer from '../../containers/movietilecontainer/MovieTileContainer'
//Sets the intial movies you see on the homepage
let movie1 = 'Alien';
let movie2 = 'Hot Rod';
let movie3 = 'Home Alone';
let movie4 = 'Iron Man';
let movie5 = 'Doctor Strange 2';
let movie6 = 'LOTR: The Return of the King';

const DateSelector = () => {
  // this gets set to the date when a date button has been clicked
  const [indexCheck, setIndexCheck] = useState(0);
  // Sets the movie tiles depending on which date has been clicked.
  const isActive = ({index, day}) => {
    setIndexCheck(index)
    movie1 = day.movie1;
    movie2 = day.movie2;
    movie3 = day.movie3;
    movie4 = day.movie4;
    movie5 = day.movie5;
    movie6 = day.movie6;
  }
  


  return (
    <section className='tc__dateselector' id='tc__dateselector'>
      <div className='tc__dateselector-container'>
        {/* Maps through the schedules and displays all the relevant movie info in the tile */}
        {schedule.map((day, index) => {
          console.log(index)
          return (  
            <div className='tc__dateselector-container_date' key={index}>
              <button type='button' onClick={() => isActive({index, day})} className={indexCheck === day.id ? 'tc__dateselector-container_date-button active' : 'tc__dateselector-container_date-button'}
               >{day.date}</button>               
            </div>
            )
            
        })}        
      </div>
      {/* From the schedule the movies get assigned into the movietile. */}
      <MovieTileContainer title1={movie1} title2={movie2} title3={movie3} 
      title4={movie4} title5={movie5} title6={movie6} /> 


    </section>
  )
}

export default DateSelector