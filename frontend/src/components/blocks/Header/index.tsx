import React from 'react';
import styled from 'styled-components';

const Container = styled.header`
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
	letter-spacing: 0.05em;
	color: #000000;
`;

const NavBar = styled.nav`
	display: flex;
	gap: 32px;

	margin-left: auto;
	font-weight: 800;
	font-size: 20px;
	line-height: 20px;
	letter-spacing: 0.05em;
	color: #000000;
	cursor: pointer;
`;

export function Header() {
	return (
		<Container>
			<HeaderTitle>CookDoc</HeaderTitle>
			<NavBar></NavBar>
		</Container>
	);
}
