import Header from './Component/Header';
import styled from 'styled-components';
import { useEffect, useState } from 'react';
import List from './List';
import React from 'react';

declare global {
	interface Window {
		kakao: any;
	}
}

const Container = styled.div`
	position: relative;
	box-sizing: border-box;
	display: flex;
	width: 100vw;
	height: 100vh;
`;

const ShopList = styled.div`
	box-sizing: border-box;
	width: 399px;
	height: 100%;
`;

const ShopListHeader = styled.div`
	box-sizing: border-box;
	padding: 10px 10px 0px 10px;
	position: relative;
	width: 399px;
	height: 135px;
	border: 1px solid #e0e0e0;
	h2 {
		margin-bottom: 0px;
		width: 369px;
		text-align: center;
		font-size: 1.5em;
		margin-block-start: 0.83em;
		margin-block-end: 0.83em;
		margin-inline-start: 0px;
		margin-inline-end: 0px;
		font-weight: bold;
	}
`;

const ShopListBottom = styled.div`
	position: relative;
	height: calc(100% - 176px);
	overflow-y: auto;
	border-top: 1px solid #dee3eb;
	background: #f5f5f5;
	padding-bottom: 40px;
	margin: 0px;
`;

const InputBox = styled.div`
	height: 33px;
	box-sizing: border-box;
	float: left;
`;

const Input = styled.input`
	border-radius: 5px;
	border-right: 0;
	height: 100%;
	width: 250px;
	display: inline-block;
	font-size: 12px;
	padding: 0 15px;
	border: 1px solid #cacaca;
	color: #333;
`;

const ButtonBox = styled.div`
	margin-left: 30px;
	float: left;
	width: 45px;
	height: 37px;
	padding: 0px 10px;
`;

const Button = styled.button`
	border-radius: 5px;
	font-weight: 500;
	height: 37px;
	background: #1e88e5;
	color: #fff;
	border: 1px solid #e0e0e0;
	cursor: pointer;
`;

const ListResult = styled.div`
	margin: 0px;
	padding: 0px;
`;

function Main() {
	useEffect(() => {
		const container = document.getElementById('map');
		const options = {
			center: new window.kakao.maps.LatLng(37.3399, 126.733946),
			level: 3,
		};
		const map = new window.kakao.maps.Map(container, options);
		console.log(map);
	});

	return (
		<>
			<Header />
			<Container>
				<ShopList>
					<ShopListHeader>
						<h2>가게 리스트</h2>
						<InputBox>
							<Input placeholder="검색어를 입력하세요." />
						</InputBox>
						<ButtonBox>
							<Button>검색</Button>
						</ButtonBox>
					</ShopListHeader>

					<ShopListBottom>
						<ListResult>
							<List />
						</ListResult>
					</ShopListBottom>
				</ShopList>
				<div id="map" style={{ width: '100%', height: '100%' }} />
			</Container>
		</>
	);
}

export default Main;
