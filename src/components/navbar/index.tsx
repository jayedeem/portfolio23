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
					<li>About</li>
					<li>Experience</li>
					<li>Work</li>
					<li>Contact</li>
				</ul>
			</div>
		</div>
	)
}
