import './staffpos.css'
import React, { useState } from 'react'
import {ticketPrice} from './StaffPOS_Index'
import { schedule } from '../../components/dateselector/scheduleData';
import { Navbar, Footer } from '../../components/component_index';
import { rgbToHex } from '@mui/system';






const StaffPOS = () => {
  let button1 = document.querySelector('.session1');
  let button2 = document.querySelector('.session2');


  // These variables are used to update the ticket count and the total cost of tickets
  const [count, setCount] = useState(0);
  const [total, setTotal] = useState(0);

  // this function updates ticket count and total based on how many seat divs are selected (line 19)
  function updateSeats() {    
    const selectedSeats = document.querySelectorAll('.row .seat.selected');    
    setCount(selectedSeats.length);

    let ticketTotal = selectedSeats.length * ticketPrice;
    setTotal(ticketTotal);
  }
  
  
  // Setting up a useState variable
  const [dateRef, setDateRef] = useState(schedule[0].date)
  

  // This Function sets the value of the state to the date of the schedule
  const handleChange = (e) => {    
    setDateRef(e.target.value);
    console.log("Date changed to " + dateRef);
  }

  // This Function checks if the selected class has been applied and sets the selected 
  // class on those seats that aren't occupied
  const handleSelected = (e) => {
      if (e.target.className == 'seat' && e.target.className !== 'seat occupied') {
        e.target.className = 'seat selected';
      } else {
        e.target.className = 'seat'
      } 
      updateSeats();   
    }
// These functions change the colour on the
  const updateButton1 = (e) => {
    console.log(button1)
    if (e.target.className == 'session1') {
      button1.className = 'session1 selected'
      button2.className = 'session2'
    }
  }
  const updateButton2 = (e) => {
    console.log(button2)
    if (e.target.className == 'session2') {
      button2.className = 'session2 selected'
      button1.className = 'session1'
    }
  }



 

  return (
    
    <div className='tc__staffpos'>
      <div className='tc__staffpos-container'>

        <div className='tc__staffpos-container_selector-date'>
          <label>Select Date</label>
          <select value={dateRef} onChange={handleChange} className='tc__staffpos-container_selector-date_list' id='tc__staffpos-container_selector-date_list'>
            {// Displays the available dates and assigns the date to the state variable
              schedule.map((sched, index) => {
                return (
                  <option value={sched.date} key={index}>{sched.date}</option>
                )
              })}
          </select>
        </div>

        <div className='tc__staffpos-container_selector-movie'>
          <label>Select Film</label>
          <select className='tc__staffpos-container_selector-movie_list' id='tc__staffpos-container_selector-movie_list'>
            {// This maps through the schedule array to display the movies on the specific day
              schedule.map((sched) => {
                if (dateRef === sched.date) {
                  return (
                    <>
                      <option value={ticketPrice} key="1">{sched.movie1}</option>
                      <option value={ticketPrice} key="2">{sched.movie2}</option>
                      <option value={ticketPrice} key="3">{sched.movie3}</option>
                      <option value={ticketPrice} key="4">{sched.movie4}</option>
                      <option value={ticketPrice} key="5">{sched.movie5}</option>
                      <option value={ticketPrice} key="6">{sched.movie6}</option>
                    </>
                  )
                }
              })}
            {/*  */}
          </select>
        </div>

        <div className='tc__staffpos-container_selector-session'>
          <button type='button' className='session1' id='session1' onClick={updateButton1}>Session 1</button>
          <button type='button' className='session2' id='session2' onClick={updateButton2}>Session 2</button>
        </div>

        <div className='tc__staffpos-container_selector-cinema'>

          <div className="screen"></div>

          <div className="row" >
            <div className="seat" onClick={handleSelected}></div>
            <div className="seat" onClick={handleSelected}></div>
            <div className="seat occupied" onClick={handleSelected}></div>
            <div className="seat occupied" onClick={handleSelected}></div>
            <div className="seat" onClick={handleSelected}></div>
            <div className="seat" onClick={handleSelected}></div>
            <div className="seat" onClick={handleSelected}></div>
            <div className="seat" onClick={handleSelected}></div>
          </div>

          <div className="row">
            <div className="seat" onClick={handleSelected}></div>
            <div className="seat" onClick={handleSelected}></div>
            <div className="seat" onClick={handleSelected}></div>
            <div className="seat" onClick={handleSelected}></div>
            <div className="seat" onClick={handleSelected}></div>
            <div className="seat" onClick={handleSelected}></div>
            <div className="seat" onClick={handleSelected}></div>
            <div className="seat" onClick={handleSelected}></div>
          </div>

          <div className="row">
            <div className="seat" onClick={handleSelected}></div>
            <div className="seat occupied" onClick={handleSelected}></div>
            <div className="seat" onClick={handleSelected}></div>
            <div className="seat" onClick={handleSelected}></div>
            <div className="seat" onClick={handleSelected}></div>
            <div className="seat occupied" onClick={handleSelected}></div>
            <div className="seat" onClick={handleSelected}></div>
            <div className="seat" onClick={handleSelected}></div>
          </div>

          <div className="row">
            <div className="seat" onClick={handleSelected}></div>
            <div className="seat" onClick={handleSelected}></div>
            <div className="seat" onClick={handleSelected}></div>
            <div className="seat" onClick={handleSelected}></div>
            <div className="seat occupied" onClick={handleSelected}></div>
            <div className="seat occupied" onClick={handleSelected}></div>
            <div className="seat" onClick={handleSelected}></div>
            <div className="seat" onClick={handleSelected}></div>
          </div>

          <div className="row">
            <div className="seat" onClick={handleSelected}></div>
            <div className="seat" onClick={handleSelected}></div>
            <div className="seat" onClick={handleSelected}></div>
            <div className="seat occupied" onClick={handleSelected}></div>
            <div className="seat occupied" onClick={handleSelected}></div>
            <div className="seat occupied" onClick={handleSelected}></div>
            <div className="seat" onClick={handleSelected}></div>
            <div className="seat" onClick={handleSelected}></div>
          </div>

        </div>
        <div className='tc__staffpos-container_selector-legend'>
          <ul>
            <li>
              <div className='seat'></div>
              N/A
            </li>
            <li>
              <div className='seat occupied'></div>
              Occupied
            </li>
            <li>
              <div className='seat selected'></div>
              Selected
            </li>
          </ul>
        </div>

        <div className='tc__staffpos-container_selector-action'>
          <p>You have selected <span id='count'>{count}</span> seats for a price of $<span id="total">{total}</span></p>
          <button type='button'><a href='/staffpos/payment'>TO PAYMENT</a></button>
        </div>

      </div>
    </div>
  )
  
}

export default StaffPOS