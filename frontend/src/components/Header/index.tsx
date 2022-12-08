import React from 'react';
import { useRecoilState } from 'recoil';
import { shopRegisterButtonState } from 'atoms';
import { ShopRegisterModal } from 'components';
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
	margin-left: auto;
	font-weight: 800;
	font-size: 20px;
	line-height: 20px;
	letter-spacing: 0.05em;
	color: #000000;
	cursor: pointer;
	&:hover {
		color: #383838;
	}
`;

const ShopRegister = styled.div``;

export function Header() {
	const [registerButtonClicked, setRegisterButtonClicked] = useRecoilState(
		shopRegisterButtonState,
	);

	return (
		<Container>
			<HeaderTitle>CookDoc</HeaderTitle>
			<NavBar>
				<ShopRegister onClick={() => setRegisterButtonClicked(true)}>
					음식점 등록하기
				</ShopRegister>
			</NavBar>
			{registerButtonClicked ? <ShopRegisterModal /> : null}
		</Container>
	);
}
