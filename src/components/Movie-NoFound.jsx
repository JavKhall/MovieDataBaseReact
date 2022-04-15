import React from 'react'
import { MdSearchOff } from 'react-icons/md'

import styles from '../styles/Movie-NoFound.module.css'

export default function MovieNoFound() {
	return (
		<div>
			<h2 className={ styles.nofound_text }>No Results...</h2>
			<MdSearchOff size={100} className={ styles.nofound_icon }/>
		</div>
	)
}
