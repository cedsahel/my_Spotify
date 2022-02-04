import React from 'react';
import './style.css';
import { Link } from 'react-router-dom';

export default function SideBar() {
  return <div className='sidebar'>
      <div className='aze'>
      <div>
        <h1 className='logo'>Songify</h1>
      </div>
        <ul className='nav'>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/search">Search</Link></li>
          <li><Link to="/collection/playlists">Your Library</Link></li>
        </ul>
        <ul className='nav'>
          <li><Link to="/search"> + Create Playlist</Link></li>
          <li><Link to="/collection/tracks">Liked Songs</Link></li>
        </ul>
        <ul className='nav'>
          <li><hr/></li>
        </ul>

      </div>

      
  </div>;
}
