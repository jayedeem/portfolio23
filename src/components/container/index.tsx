import React from 'react'
import style from './container.module.scss'

interface ContainerProps extends React.HTMLAttributes<HTMLDivElement> {
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
			style={{ backgroundColor: 'nuclearYellow' }}
			{...restProps}
		>
			{children}
		</section>
	)
}
