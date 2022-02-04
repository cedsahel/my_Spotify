import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import "./search.css"


export default function Search() {
	const [categories, setCategories] = useState([])

	useEffect(() => {
		fetch("http://localhost:7777/genres")
			.then(res => {
				return res.json()
			})
			.then( async (resultat) => {
				setCategories(resultat)
			})
	}, [])

return <div className='search'>
		<h1>Categories</h1>
		<div className='categoriesCards'>
			{categories.map((item,i) => <div key={i} className='categoryCard'><Link to={"/genres/"+item.name}>{item.name}</Link></div>)}
		</div>
	</div>;
}
