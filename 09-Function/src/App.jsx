import React from 'react'

const App = () => {
   
  return (
    <div onWheel={()=>{
      console.log('scrolling');
    }}>
    <div className="page1"></div>
    <div className="page2"></div>
    <div className="page3"></div>
    </div>
  )
}

export default App