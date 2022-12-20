import { shopDetailClickState } from 'atoms';
import { shopListCloseCheck } from 'atoms/shopListCloseCheck';
import React, { useState } from 'react';
import { useRecoilState, useSetRecoilState } from 'recoil';
import styled from 'styled-components';

const Container = styled.div`
	overflow-y: auto;
	position: absolute;
	top: 0;
	left: 399px;
	transition: left 0.5s ease-in;
	width: 399px;
	height: 100%;
	background: #fff;
	border: 1px solid #dee3eb;
	z-index: 10;
`;

const DetailTop = styled.div`
	padding: 20px;
	position: relative;
	background: #fff;
	line-height: 1.5;
	height: calc(100% - 310px);
`;

const CloseContainer = styled.div`
	position: relative;
	text-align: center;
	margin-top: 20px;
	margin-left: auto;
	margin-right: auto;
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

const DetailHeader = styled.div`
	font-size: 2rem;
	font-weight: 500;
	word-break: keep-all;
	margin-bottom: 20px;
	padding: 35px 0 20px;
	border-bottom: 1px solid #dee3eb;
	text-align: center;
`;

export function Detail() {
	const [close, setClose] = useRecoilState(shopListCloseCheck);
	const setListClickClose = useSetRecoilState(shopDetailClickState);
	const closeClick = () => {
		setClose(true);
		setListClickClose(false);
	};
	if (close === false) {
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
