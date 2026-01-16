import React from 'react'
import Card from './components/card.jsx'
const App = () => {
  return (
    <div id='parent'>
      <Card user='Sachin' age='25' img="https://plus.unsplash.com/premium_photo-1757782323237-cc11aab3ccc0?q=80&w=764&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"/>
         <Card user='Saurabh' age='19' img="https://images.unsplash.com/photo-1740853330236-3438c0ce0121?q=80&w=880&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" />
      
      </div>
  
  )
}

export default App