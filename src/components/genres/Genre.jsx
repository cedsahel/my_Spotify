import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import "./genres.css"

export default function Genre() {
    const [albums,setAlbums] = useState([]);
    const [artist,setArtist] = useState([]);
    const {genre} = useParams()

	useEffect(() => {
        let albumsTemp = [];
        let artistsTemp = [];

		fetch("http://localhost:7777/genres/" + genre)
			.then(res => {
				return res.json()
			})
			.then( resultat => {

                // while(albumsTemp < 10 || artistTemp < 5){

                // }
				// console.log(Object.values(resultat[0]).includes("Barry James"));
                setAlbums(resultat)
			})
            
        }, [])
        
        console.log(albums)

  return <div className='genres'>
      <h1>{genre}</h1>
      <div className='albums'>
			{
                albums.map((item,i) =>
                <a href={"/albums/"+item.id} className='albumCard' key={i}>
                        <img src={item.photo} />
                        <p className='title'>{item.album}</p>
                        <p className='artistName'>{item.artist}</p>
                    </a>
                    )
                }
      </div>
  </div>;
}
