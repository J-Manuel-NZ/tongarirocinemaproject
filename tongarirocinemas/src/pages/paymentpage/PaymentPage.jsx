import React, {useState} from 'react'
import './paymentpage.css'

const PaymentPage = () => {
    
    
  return (
    <div className='tc__paymentpage'>
        <div className='tc__paymentpage-container'>
            <h1>Payment</h1>
            <p>For example only: <br />This will be handled by STRIPE payment API</p>
            <div className='tc__paymentpage-container_details'>
                <form>
                    <input type="text" placeholder='name on card'/>
                    <input type='text' placeholder='card number'/>
                    <input type="text" placeholder='security code'/>
                    <button type='submit' ><a href='/'>Make Payment<br/> (To Home)</a></button>                    
                </form>

            </div>
        </div>
    </div>
  )
}

export default PaymentPage