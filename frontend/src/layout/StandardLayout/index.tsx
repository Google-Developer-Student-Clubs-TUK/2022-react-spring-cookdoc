import React from 'react';
import { Header, Main } from 'components';

interface Props {
	children: JSX.Element;
}

export function StandardLayout({ children }: Props) {
	return (
		<>
			<Header />
			<Main>{children}</Main>
		</>
	);
}
