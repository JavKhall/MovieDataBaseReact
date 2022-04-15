import React from 'react'
import { getImage } from '../utils/getImage'

import styles from '../styles/Movie-Data.module.css'

export default function PeopleData({people}) {
	return (
		<div className={ styles.movieData_Container }>
			<div className={ styles.movieData_Detail }>
				<div className={ `${styles.movieData_poster} ${styles.col}` }>
					<img src={ getImage(people.profile_path, 500) } alt={people.name} />
				</div>
				
				<div className={ `${styles.movieData_info} ${styles.col}`}>
					<h2>{ people.name }</h2>
					<hr />
					<p> <strong>Birthday: </strong>{ people.birthday } </p>
					<p><strong>Place Of Birth: </strong>{ people.place_of_birth }</p>
					<p><strong>Biography: </strong> { people.biography }</p>
				</div>
			</div>

		</div>
	)
}
