import React from 'react'
import raven from '../raven.png'

export default function Modal({open, children, onClose, props}) {
    if (!open) return null

  return (
    <>
        <div className='overlay'>
        <div className='modal'>
             {children}
             <img src={raven}></img>
            <button onClick={onClose}></button>
        </div>
        </div>
    </>  
    
  )
}
