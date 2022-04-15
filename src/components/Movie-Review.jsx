import React from 'react'
import MovieLoading from './Movie-Loading'

export default function MovieReview({critic}) {
	return (
		<p>
			{ critic.content }
		</p>
	)
}
