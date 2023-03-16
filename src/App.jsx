import React from "react";
import Header from './Header';
import Journal from "./Journal";
import travelData from './data';
function App() {

  return (
    <div className="App">
      <Header/>
      {
        travelData.map((data,index)=>{
          return (
            <Journal data={data} key={index}/>
          )
        })
      }
    </div>
  )
}

export default App
