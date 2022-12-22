import React, { useState } from 'react'
import { Container, NavBar } from '@/components/'
import styles from './app.module.scss'

function App() {
	return (
		<div>
			<NavBar />
			<div>
				<Container>
					<h4 style={{ fontSize: '20px' }}>Hey! I am</h4>
					<h3 style={{ color: '#fff', fontSize: '48px' }}>Andrew Cacayuran</h3>
					<h2 style={{ color: '#E0457B', fontSize: '48px' }}>
            I build cool stuff on the web.
					</h2>
					<p style={{ fontSize: '24px' }}>
            I am a software engineer that specializes in full stack development,
						<br />I currently work at{' '}
						<a
							className={styles.mintMobile}
							href="https://mintmobile.com"
							target="_blank" rel="noreferrer"
						>
              Mint Mobile.
						</a>
					</p>
				</Container>
			</div>
		</div>
	)
}

export default App
