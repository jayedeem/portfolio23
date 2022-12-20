import React from 'react'

interface HeadingProps extends React.HTMLAttributes<HTMLHeadingElement> {
  as: 'h1' | 'h2' | 'h3' | 'h4';
  children: React.ReactNode;
}

export const Heading = ({ as, children, ...restProps }: HeadingProps) => {
	const HeadingComponent = as
	return <HeadingComponent {...restProps}>{children}</HeadingComponent>
}
