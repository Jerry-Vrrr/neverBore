import React from 'react'
import raven from '../raven.png'

export default function Modal({open, children, onClose, props,}) {
    if (!open) return null

  return (
    <>
        <div className='overlay'>
        <div className='modal'>
             {children}
             <div className='modal-head'>
                <img src={raven}></img>
                <button onClick={onClose}>&times;</button>
             </div>
             <div>
                 <h1>
                    {props.education}
                    
                 </h1>
                 
             </div>
             <div className='modal-foot'>
             <a target='blank' href={`https://www.youtube.com/results?search_query=${props.education}`}
             >Check Out Some Tutorials</a>
             <button>Add To List</button>
             <button>View List</button>
             </div>
        </div>
        </div>
    </>  
    
  )
}
