import React from 'react';
import "./navbar.css"

export default function Navbar() {
  return <div className='test'>
      <nav>
          <div className='nav-item'>
              <div className='nav-btn'><a href="#">P</a></div>
              <div className='nav-btn'><a href="#">N</a></div>
              <input type="text"/>
          </div>
          <div className="nav-item">
              <p>login</p> 
          </div>
      </nav>
  </div>;
}
