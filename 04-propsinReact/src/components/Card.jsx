import React from 'react'

const card = (props) => {
    console.log(props);
  return (
    <div className='parent1'>
    <div className='card'>
        <img src={props.img} alt="" />
        <h1>{props.user} is {props.age} year old</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
        <button>View Profile</button>
    </div>
    </div>
  )
}

export default card