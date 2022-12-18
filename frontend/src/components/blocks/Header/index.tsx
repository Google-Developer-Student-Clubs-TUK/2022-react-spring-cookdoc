import React from 'react';
import { useRecoilState } from 'recoil';
import { shopRegisterButtonState, shopSubscribeButtonState } from 'stores';
import { ShopRegisterModal, ShopSubscribeModal } from 'components';
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

const ShopRegister = styled.div`
	&:hover {
		color: #383838;
	}
`;

const ShopSubscribe = styled.div`
	&:hover {
		color: #383838;
	}
`;

export function Header() {
	const [registerButtonClicked, setRegisterButtonClicked] = useRecoilState(
		shopRegisterButtonState,
	);

	const [subscribeButtonClicked, setSubscribeButtonClicked] = useRecoilState(
		shopSubscribeButtonState,
	);

	return (
		<Container>
			<HeaderTitle>CookDoc</HeaderTitle>
			<NavBar>
				<ShopRegister onClick={() => setRegisterButtonClicked(true)}>
					음식점 등록하기
				</ShopRegister>
				<ShopSubscribe onClick={() => setSubscribeButtonClicked(true)}>
					구독하기
				</ShopSubscribe>
			</NavBar>
			{registerButtonClicked ? <ShopRegisterModal /> : null}
			{subscribeButtonClicked ? <ShopSubscribeModal /> : null}
		</Container>
	);
}
