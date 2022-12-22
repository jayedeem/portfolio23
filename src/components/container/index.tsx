import React from 'react'
import style from './container.module.scss'

interface ContainerProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  bgColor?: string;
  minWidth?: string;
}

export const Container = ({
	children,
	bgColor,
	minWidth,
	...restProps
}: ContainerProps) => {
	return (
		<section
			className={style.container}
			style={{ backgroundColor: bgColor, minWidth: minWidth }}
			{...restProps}
		>
			{children}
		</section>
	)
}
