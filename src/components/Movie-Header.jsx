import { FiSearch } from 'react-icons/fi'
import { FiDatabase } from 'react-icons/fi'
import { Link, useNavigate } from 'react-router-dom'
import { useState, useEffect } from 'react'
import { useQuery } from '../hooks/useQuery'

import style from '../styles/Movie-Header.module.css'

function MovieHeader() {
	const [ search, setSearch ] = useState('')
  const navigate = useNavigate ()
	
	const handleSubmit = (e) => {
		e.preventDefault ();
		
	}

	// CONSULTA POR EL CAMBIO EN LA URL, PARA BORRAR EL FORM
	const query = useQuery()
	const searchBar = query.get("search")

	useEffect(() => {
		setSearch (searchBar || '')
	}, [ searchBar ])
	
	return (
		<div className={ style.movieHeader }>
			<Link to={'/'} className={ style.header_title }>
				<FiDatabase className={ style.header_icon }/>
				<h3 className={ style.header_text }>MoviesDB</h3>
			</Link>	

			<form className={ style.headerSearch } onSubmit={handleSubmit} >
				<input type='text' value={search} onChange={(e) => {
					const value = e.target.value
					navigate ('/?search='+value)
				}}/>
				<button  type='submit'><FiSearch size={20}/></button>
			</form>
		</div>
	)
} 

export default MovieHeader