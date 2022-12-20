import React from 'react'
import style from './container.module.scss'

interface ContainerProps {
  children: React.ReactNode;
  bgColor: string;
}

export const Container = ({
	children,
	bgColor,
	...restProps
}: ContainerProps) => {
	return (
		<section
			className={style.container}
			style={{ backgroundColor: bgColor }}
			{...restProps}
		>
			{children}
		</section>
	)
}
