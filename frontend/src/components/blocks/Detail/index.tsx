import React from 'react';
import { shopDetailClickState } from 'stores';
import { shopListCloseCheck } from 'stores/shopListCloseCheck';
import { useRecoilState, useSetRecoilState } from 'recoil';
import styled from 'styled-components';

const Container = styled.div`
	display: flex;
	flex-direction: column;
	position: absolute;
	overflow-y: auto;
	transition: left 0.5s ease-in;
	width: 350px;
	height: 100%;
	background: #fff;
	border: 1px solid #dee3eb;
	border-top: 0;
	border-bottom: 0;
	z-index: 1000;
`;

const DetailTop = styled.div``;

const CloseContainer = styled.div`
	button {
		border-radius: 5px;
		height: 35px;
		padding: 0 20px;
		line-height: 35px;
		color: white;
		cursor: pointer;
		background-color: #1e88e5;
		border: 1px solid #e0e0e0;
	}
`;

const DetailHeader = styled.div``;

export function Detail() {
	const [, setClose] = useRecoilState(shopListCloseCheck);
	const setListClickClose = useSetRecoilState(shopDetailClickState);
	const closeClick = () => {
		setClose(true);
		setListClickClose(false);
	};
	return (
		<Container>
			<DetailTop>
				<DetailHeader>노랑통닭</DetailHeader>
			</DetailTop>
			<CloseContainer>
				<button onClick={closeClick}>닫기</button>
			</CloseContainer>
		</Container>
	);
}
