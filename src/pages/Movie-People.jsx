import React from 'react'
import PeopleData from '../components/People-Data.jsx'
import MovieLoading from '../components/Movie-Loading.jsx'
import { useParams } from 'react-router-dom'
import { useState, useEffect } from 'react'
import getData from '../utils/getData'

import styles from '../styles/Loading-Detail.module.css'

export default function MoviePeople() {
	const { personid } = useParams();
	const [ people, setPeople ] = useState({})
	const [ loading, setLoading ] = useState(true)
	
	useEffect (async () => {
		setLoading(true)
		await getData(`person/${personid}`).then((data) => setPeople(data))		

		setTimeout(() => {
			setLoading(false)
		}, 100);
	}, [ personid ])	

	return (
		<>
			{ loading
				? <div className={styles.loadingDetail}><MovieLoading /> </div>
				:	<div>
						<PeopleData people={people}/>
					</div>
			}	
		</>
	)
}