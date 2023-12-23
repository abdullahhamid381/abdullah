import React from 'react'
import './Scss/Footer.scss'
import { Footerdata } from '../Data'
const Footer = () => {
  return (
  <div className='footer-back'>
 <div className="width">
<div className="grid">
{
    Footerdata.map((item)=>{
   return(
    <div className='item-flex'>
   <div className='img-div'>
   <img src={item.img} alt="" />
   </div>
   <div>
   <h1>{item.add}</h1>
    <p>{item.para}</p>
   </div>
</div>
   )
    })
   }
</div>
 </div>
  
  </div>
  )
}

export default Footer