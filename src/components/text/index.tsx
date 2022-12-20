import React from 'react'
import styles from './styles.module.scss'

interface TextProps {
  as: string;
  children: React.ReactNode;
}

export const Text = ({ children, ...restProps }: TextProps) => {
	return (
		<>
			<p {...restProps}>{children}</p>
		</>
	)
}
