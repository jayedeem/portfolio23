import React, { useState } from 'react'
import { Container, NavBar, Text, Heading } from '@/components/'
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
							<Heading as="h1">Hey! I am</Heading>
							<Heading as="h3" style={{ color: '#fff' }}>
                Andrew Cacayuran
							</Heading>
							<Heading as="h3" style={{ color: '#E0457B' }}>
                I build cool stuff on the web.
							</Heading>
							<Text as="p">
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
							</Text>
						</div>
					</Container>
					<Container bgColor="#5461C8">
						<div className={styles.aboutMe}>
							<Heading as="h4">About Me</Heading>
							<Text as="p" style={{ color: '#fff' }}>
                I am Andrew Cacayuran, I have been an avid person in tech. I
                started off by taking apart my first computer by the age of 15.
                I am a self taught developer. During covid-19, I learned how to
                automate my first excel sheet using python, after that it
                sparked my interest in programing. After a year of teaching
                myself, I was able to get into the Software Engineering position
                .
							</Text>
							<Text as="p">Technology I currently work with: </Text>
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
								</ul>
								<ul>
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
