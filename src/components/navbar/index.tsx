import React from 'react'
import logo from '../../assets/logo.svg'
import styles from './navbar.module.scss'

export const NavBar = () => {
	return (
		<div className={styles.navbarContainer}>
			<div>
				<img src={logo} alt="Drew Jason" />
			</div>
			<div>
				<ul className={styles.navbarList}>
					<li>
						<a href="#aboutMe">About</a>
					</li>
					<li>
						<a href="#experience">Experience</a>
					</li>
					<li>
						<a href="#work">Work</a>
					</li>
					<li>
						<a href="#contact">Contact</a>
					</li>
				</ul>
			</div>
		</div>
	)
}
