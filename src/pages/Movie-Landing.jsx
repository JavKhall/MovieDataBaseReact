import React from 'react'
import MovieContainer from '../components/Movie-Container'
import { useQuery } from '../hooks/useQuery'
import { useDebounce } from '../hooks/useDebounce'

export default function MovieLanding() {	
	const query = useQuery()
	const search = query.get("search")
	
	const searchDelay = useDebounce(search, 600);

	return (
		<div className='mainContainer'>
			<MovieContainer key={searchDelay} search={searchDelay}/>
    </div>
	)
}
