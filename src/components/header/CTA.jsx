import React from 'react'
import CV from '../../assets/cv.pdf'

function CTA() {
  return (
    <div className='cta'>
      <a href={CV} download className='btn'>Dowload</a>
      <a href='#contact' className='btn btn-primary'>Vamos nos falar</a>
    </div>
  )
}

export default CTA
