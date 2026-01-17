import React from 'react'
import { Bookmark } from 'lucide-react'

const Card = (props) => {
    console.log(props.company);
    console.log(props.logo);
    console.log(props.date);
    console.log(props.posts);
    console.log(props.tags1);
    console.log(props.tags2);
    console.log(props.sallary);
    console.log(props.place);
  return (
      <div className="card">
        <div className="top">
          <img src={props.logo} alt="Company logo" />
          <button>Save <Bookmark size={18} /></button>
        </div>
        <div className="centre">
          <h3>{props.company} <span>{props.date}</span></h3>
          <h2>{props.posts}</h2>
          <div>
            <h4>{props.tags1}</h4>
            <h4>{props.tags2}</h4>
          </div>
        </div>
        <div className="bottom">
        <div>
            <h3>${props.sallary}/hour</h3>
            <p>{props.place}</p>
          </div>
          <button>Apply Now</button>
        </div>
       </div>
  )
}

export default Card