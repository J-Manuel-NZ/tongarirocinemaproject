import './possystem.css'
import React from 'react'
import { Navbar, Footer } from '../component_index';
import { StaffPOS } from '../../pages/page_index';

const POSSystem = () => {
  return (
    <div className='tc__possystempage'>
      <Navbar />
      <StaffPOS />
      <Footer />
    </div>
  )
}

export default POSSystem