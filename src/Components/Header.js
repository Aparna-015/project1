import React from 'react'
import '../App.css'

function Header(props) {
  return (
    <div className='flex shop-card'>
    <div onClick={()=>props.handleshow(false)}> shop cart app</div>
    <div  onClick={()=>props.handleshow(true)}>cart
        <sup> {props.count}</sup>
    </div>
    </div>
  )
}

export default Header