import MovieCard from "./Movie-Card"
import { useState, useEffect } from "react"
import MovieLoading from './Movie-Loading.jsx'
import getData from '../utils/getData'
import MovieNoFound from "./Movie-NoFound"
import InfiniteScroll from "react-infinite-scroll-component"

import styles from "../styles/Movie-Container.module.css"

export default function MovieContainer({search}) {
	const [ movies, setMovies ] = useState([])
	const [ page, setPage ] = useState(1)
	const [ hasMore, setHasMore ] = useState(true)
	const [ loading, setLoading ] = useState(true)

	useEffect(async () => {
			setLoading (true)
			const url = search 
									? 'search/movie?query='+search+'&page='+page
									: '/movie/now_playing?page='+page
		
			await getData(url).then ((data) => {
			setMovies((prevData)=>prevData.concat(data.results));
			setHasMore(data.page < data.total_pages)
			
			setTimeout(() => {
				setLoading(false)
			}, 100);

		})
	}, [ search, page ]);

	if (!loading && movies.length == 0) {
		return <MovieNoFound />
	}


	return (
		<InfiniteScroll
			dataLength={movies.length}
			hasMore={hasMore}
			next={() => setPage((prevPage) => prevPage+1)}
			loader={<MovieLoading />}
		>
			<div className={ styles.movieContainer }>
			{	movies.map((movie) => (
				<MovieCard
					key={ movie.id }
					movie={ movie }
				/>
			))}
			</div>
		</InfiniteScroll>
	)
}
