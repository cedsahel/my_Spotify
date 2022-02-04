import logo from './logo.svg';
import './App.css';
import SideBar from "./components/sidebar/SideBar"
import { Routes, Route } from "react-router-dom"
import Home from "./components/Home/Home"
import Navbar from "./components/navbar/Navbar"
import Search from "./components/search/Search"
import Library from "./components/Library/Library"
import LikedSong from './components/liked/LikedSong';
import Genre from './components/genres/Genre';
import Albums from './components/albums/Albums';
import Audio from './components/player/Audio';
import React, { useState, useEffect } from 'react';


function App() {
	const [currentTrack, zer] = useState()	
	return (
		<div className="App">
			<div id="test">
				<SideBar />
				<div className='body'>
					<Navbar />
					<Routes>
						<Route path="/" element={<Home />} />
						<Route path="/search" element={<Search />} />
						<Route path="/collection/playlists" element={<Library />} />
						<Route path="/collection/playlists" element={<Library />} />
						<Route path="/collection/tracks" element={<LikedSong />} />
						<Route path="/genres/:genre" element={<Genre />} />
						<Route path="/albums/:id" element={<Albums changeTrack={url => zer(url)} />} />
					</Routes>
				</div>
			</div>
			<Audio url={currentTrack} />
		</div>
	);
}

export default App;
