import { Link } from "react-router-dom"
import styles from "../styles/Movie-Card.module.css"
import { getImage } from "../utils/getImage"

export default function MovieCard({movie}) {
	return (
		<div className={ styles.movieCard }>
			{ <Link to={ '/detail/'+movie.id }>
					<img src={ getImage(movie.poster_path, 300) } alt={movie.title} />
				</Link>
			}			
		</div> 
	)	
}
