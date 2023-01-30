import React from 'react'
import { Link } from 'react-router-dom'
import './Contact.css'
const Contact = () => {
  return (
    <div className='c' style={{textAlign:'center'}}>
      <h1 className='h1-t'>Contact</h1>
      <Link to='https://www.prepbytes.com/'>www.prepbytes.com</Link>
    </div>
  )
}

export default Contact