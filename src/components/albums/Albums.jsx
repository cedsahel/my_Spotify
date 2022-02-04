import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Tr from './Tr';
import "./albums.css"

export default function Albums(props) {
	const [album, setAlbum] = useState([])
	const [currentTracks, setCurrentTracks] = useState()
	const { id } = useParams()
	useEffect(() => {
		fetch(`http://localhost:7777/albums/${id}`)
			.then(res => {
				return res.json()
			})
			.then(result => {
				// console.log(result)
				setAlbum(result)
			})

		if (currentTracks != undefined) {
			// currentTracks.style.color = "#1ed760"
		}
	}, [])

	useEffect(() => {
		props.changeTrack(currentTracks)
	}, [currentTracks])

	console.log(currentTracks)
	let duration = 0

	album.map(track => {
		duration += track.duration
	})

	duration = duration / 60
	duration = duration.toFixed(2)

	let duree = `${duration.toString().split(".")[0]} min ${duration.toString().split(".")[1]} sec `
	  
	return <div className='album'>
		<div className='cover'>
			<img src={album[0]?.cover} style={{ width: "250px" }} alt="" />
			<div className='desc'>
				<h1>{album[0]?.alName}</h1>
				<h2>{album[0]?.arName} - {album.length} tracks - {duree} </h2>
			</div>
		</div>
		<div className='tracks'>
			<div className="options">
				<a href="#"><h2 className='option'>play</h2></a>
				<a href="#"><h2 className='option'>like</h2></a>
				<a href="#"><h2 className='option'>option</h2></a>
			</div>
			<div className='trackList'>
				<table>
					<thead>
						<tr>
							<th style={{ width: "5%" }}>#</th>
							<th>TITLE</th>
							<th style={{ width: "7%" }}>duration</th>
						</tr>
					</thead>
					<tbody>
						{album.map((item, i) =>
							<Tr  changeTrack={url => setCurrentTracks(url)} url={item.url} track={item} key={i}/>
						)}
					</tbody>
				</table>
			</div>
		</div>
	</div>
}
