import React from 'react'
import Card from './components/card';
const App = () => {
  const user='Saurabh Shukla';
  return (
    <div>
      <h1>Hello Guys Myself {user}</h1>   {/*bracket i wajah se variable ka value aa jata hai*/}
      <div className='card'>
        <h1>Saurabh Shukla</h1>
        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit.</p>
      </div>
       <Card />
    </div>
  )
}

export default App