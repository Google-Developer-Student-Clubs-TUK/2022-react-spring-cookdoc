import React from 'react';
import styled from 'styled-components';

const Container = styled.header`
	width: 100%;
	height: 3vh;
	display: flex;
	flex-direction: row;
	align-items: center;
	padding: 18px 47px;
`;

const HeaderTitle = styled.div`
	font-weight: 800;
	font-size: 20px;
	line-height: 20px;
	/* identical to box height */

	letter-spacing: 0.05em;

	color: #000000;
`;

export function Header() {
	return (
		<Container>
			<HeaderTitle>CookDoc</HeaderTitle>
		</Container>
	);
}
