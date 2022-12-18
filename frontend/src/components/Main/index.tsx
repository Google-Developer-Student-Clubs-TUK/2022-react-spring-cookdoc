import React from 'react';
import styled from 'styled-components';

const Container = styled.main`
	width: 100%;
	height: 92vh;
	display: flex;
	align-items: center;
	justify-content: center;
	border-top: 1px solid #ececec;
`;

interface Props {
	children: JSX.Element;
}

export function Main({ children }: Props) {
	return <Container>{children}</Container>;
}
