import React from 'react'
import styles from './fakeloading.module.scss'

export const FakeLoading = () => {
	return (
		<div className={styles.loading}>
			<pre>
				<output>drewjason: compiled successfully </output>
			</pre>
			<span className={styles.dotPulse}></span>
		</div>
	)
}
