import React from 'react'

const Card = (props) => {
    console.log(props.name);
    console.log(props.role);
    console.log(props.rate);
    console.log(props.skills);      
    console.log(props.description);
    console.log(props.availability);
    console.log(props.imageUrl);
  return (
    <div className="card">
        <div className="top">
            <h6>{props.availability}</h6>
            <h2>{props.rate}</h2>
        </div>
        <div className="centre">
            <img src={props.imageUrl} alt="" />
             <div>
                <h1>{props.name}</h1>
                </div>
                <div>
                <h4>{props.role}</h4>
                 </div>
                 <div className="skills">
               {props.skills.map((skill, index) => (
                   <h3 key={index}>{skill}</h3>
                       ))}
                      </div>

             <div>
                <p>{props.description}</p>
             </div>
        </div>
        <div className="bottom">
            <button>View Profile</button>
        </div>
    </div>
  )
}

export default Card