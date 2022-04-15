import React from 'react'
import YouTube from 'react-youtube'
import { Link } from 'react-router-dom'
import { getImage } from '../utils/getImage'

import styles from '../styles/Movie-Data.module.css'

const opts = {
	height: '197',
	width: '350'
}

export default function MovieData({movie, casting, videos	}) {
	return (
		<div className={ styles.movieData_Container }>
			<div className= { styles.movieData_Detail }> {/* CONTENEDOR DE LA INFO */}
				{/* ESPACIO DEL POSTER */}
				<div className={ `${styles.movieData_poster} ${styles.col}` }> 
					<img src={ getImage(movie.poster_path, 500) } alt={movie.title} />				
				</div>
				
				{/* ESPACION DE LA DATA */}
				<div className={ `${styles.movieData_info} ${styles.col}`}>
					<h2>{ movie.title }</h2>  
					<hr/>
					<p> <strong>Genre: </strong> {
						movie.genres.map((genre) => genre.name).join(', ')
					}</p>
					<p><strong>Release Date: </strong> { movie.release_date }</p>
					<p><strong>Overage: </strong> { movie.vote_average }</p>
					<p><strong>Overview: </strong> { movie.overview }</p>
					{ movie.homepage
						? <a href={ movie.homepage }><strong>Go to Homepage</strong> </a>
						: null
					}
					<p><strong>Cast:</strong> { 
							casting.cast.map((cast)=>{
								return (
									cast.order<5 
									?	<ul key={ cast.id }>
											<Link className={styles.movieData_infoPeople } to={ `/people/${cast.id}` }>
												{ cast.name } 
											</Link>
											{" "} as { cast.character }
										</ul>
									: ""	
								)})
							}
					</p>
					<p><strong>Director:</strong> { 
							casting.crew.map((cast)=>{
								return (
									cast.job=="Director"
									? <Link  className={styles.movieData_infoPeople} to={ `/people/${cast.id}` }>
											{ cast.name }
										</Link>
									: ""
							)}) 
						}
					</p>
				</div>
			</div>

			<div className={ styles.movieData_trailers }>
				<h3>Trailers</h3>
				<hr />
				<div className={ styles.movieData_videos} >
					{	videos.results.map((video)=>{
						return (
							video.site=="YouTube"
							? <div>
									<YouTube videoId={video.key} opts={ opts }/>
								</div> 
							: null
							)
						})
					}
				</div>
			</div>
		</div>
	)
}
