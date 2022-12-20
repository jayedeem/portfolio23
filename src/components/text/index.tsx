import React from 'react'
import styles from './styles.module.scss'

interface TextProps extends React.HTMLAttributes<HTMLParagraphElement> {
  as: 'p' | 'span';
  children: React.ReactNode;
}

export const Text = ({ children, as, ...restProps }: TextProps) => {
	const TextComponent = as
	return (
		<>
			<TextComponent {...restProps}>{children}</TextComponent>
		</>
	)
}
