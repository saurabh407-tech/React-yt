import React from 'react'

const App = () => {

  // localStorage.setItem('name', 'Saurabh Shukla');

  //localStorage.removeItem('name');

  // Set, Get, Remove, Clear are the methods of localStorage
  
  const user ={
      name: 'Saurabh Shukla',
      age: 22,
      city: ' Prayagraj'
  }
   localStorage.setItem('user',JSON.stringify(user));
   const usera= JSON.parse(localStorage.getItem('user'));

   console.log(usera);

  return (
    <div>App</div>
  )
}

export default App