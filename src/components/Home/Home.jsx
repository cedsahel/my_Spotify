import React from 'react';
import "./home.css"

export default function Home() {
  return <div className='home'>
      <h1>Home component</h1>
      <div style={{width:"100px",height:"100px",backgroundColor:"red"}} onClick={() => {console.log('cedric')}}></div>
  </div>;
}
