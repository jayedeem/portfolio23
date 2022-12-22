import React, { useState } from 'react'
import { Container, NavBar } from '@/components/'
import styles from './app.module.scss'

function App() {
	return (
		<>
			<head>
				<title>Drew Jason | Web Dev</title>
			</head>
			<div>
				<NavBar />
				<div>
					<Container>
						<div className={styles.heroContainer}>
							<h4>Hey! I am</h4>
							<h3 style={{ color: '#fff' }}>Andrew Cacayuran</h3>
							<h2 style={{ color: '#E0457B' }}>
                I build cool stuff on the web.
							</h2>
							<p>
                I am a software engineer that specializes in full stack
                development,
								<br />I currently work at{' '}
								<a
									className={styles.mintMobile}
									href="https://mintmobile.com"
									target="_blank"
									rel="noreferrer"
								>
                  Mint Mobile.
								</a>
							</p>
						</div>
					</Container>
					<Container bgColor="#5461C8">
						<div className={styles.aboutMe}>
							<h4>About Me</h4>
							<p style={{ color: '#fff' }}>
                I am Andrew Cacayuran, I have been an avid person in tech. I
                started off by taking apart my first computer by the age of 15.
                I am a self taught developer. During covid-19, I learned how to
                automate my first excel sheet using python, after that it
                sparked my interest in programing. After a year of teaching
                myself, I was able to get into the Software Engineering position
                .
							</p>
							<span>Technology I currently work with: </span>
							<div className={styles.aboutMe__tech}>
								<ul>
									<li>Javascript</li>
									<li>Typescript</li>
									<li>PHP</li>
								</ul>
								<ul>
									<li>React</li>
									<li>Node.js</li>
									<li>NextJS</li>
									<li>Wordpress</li>
									<li>Sass</li>
								</ul>
							</div>
						</div>
					</Container>
				</div>
			</div>
		</>
	)
}

export default App
