import React from 'react'
import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import MovieLoading from '../components/Movie-Loading.jsx'
import MovieData from '../components/Movie-Data'
import getData from '../utils/getData'

import styles from '../styles/Loading-Detail.module.css'

export default function MovieDetails() {
	const { movieid } = useParams();
	const [ movie, setMovie ] = useState(null);
	const [ casting, setCasting ] = useState(null);
	const [ videos, setVideos ] = useState(null)
	const [ loading, setLoading ] = useState(true)
	
	useEffect (async () => {
		setLoading(true)
		await getData(`movie/${movieid}`).then ((data) => setMovie(data))
		await getData(`movie/${movieid}/credits`).then ((data) => setCasting(data))
		await getData(`movie/${movieid}/videos`).then ((data) => setVideos(data))

		setTimeout(() => {
			setLoading(false)
		}, 100);
	}, [ movieid ]);

	return ( 
		<>
			{	loading 
				? <div className={styles.loadingDetail}><MovieLoading /> </div>
				: <div><MovieData 
								key={movie.id}
								movie={movie}
								casting={casting}
								videos={videos}
								/>
					</div>
			}
		</>
	)
}
