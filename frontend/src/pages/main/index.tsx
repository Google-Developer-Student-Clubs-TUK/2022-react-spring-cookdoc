import React, { Fragment, useEffect, useState, useRef } from 'react';
import styled from 'styled-components';
import { StandardLayout } from 'layout';
import { List } from 'components';
import { useRecoilValue } from 'recoil';
import { shopDetailClickState } from 'atoms/shopDetailList';
import { Detail } from 'components/Detail';

declare global {
	interface Window {
		kakao: any;
	}
}

const ShopList = styled.div`
	box-sizing: border-box;
	width: 399px;
	height: 100%;
	z-index: 30;
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

export function Main() {
	const input = useRef<HTMLInputElement>(null);
	const [value, setValue] = useState('');
	const [click, setClick] = useState(false);
	const listClick = useRecoilValue(shopDetailClickState);

	const handleClick = () => {
		if (input.current) {
			setValue(input.current.value);
		}
		setClick(true);
	};

	useEffect(() => {
		const container = document.getElementById('map');
		const options = {
			center: new window.kakao.maps.LatLng(37.3399, 126.733946),
			level: 3,
		};
		const map = new window.kakao.maps.Map(container, options);
		const positions = [
			{
				title: '노랑통닭',
				latlng: new window.kakao.maps.LatLng(37.3455, 126.735324),
			},
			{
				title: '엽기 떡볶이',
				latlng: new window.kakao.maps.LatLng(37.3629, 126.729764),
			},
			{
				title: 'BHC 치킨',
				latlng: new window.kakao.maps.LatLng(37.3525, 126.729845),
			},
			{
				title: '던킷도넛츠',
				latlng: new window.kakao.maps.LatLng(37.3449, 126.738508),
			},
		];
		const markerPosition = new window.kakao.maps.LatLng(37.3399, 126.733946);
		const mainMarker = new window.kakao.maps.Marker({
			position: markerPosition,
		});
		for (let i = 0; i < positions.length; i++) {
			const marker = new window.kakao.maps.Marker({
				map: map,
				position: positions[i].latlng,
				title: positions[i].title,
			});
		}
		mainMarker.setMap(map);
	}, []);
	return (
		<StandardLayout>
			<Fragment>
				<ShopList>
					<ShopListHeader>
						<h2>가게 리스트</h2>
						<InputBox>
							<Input
								ref={input}
								placeholder="검색어를 입력하세요."
								defaultValue={value}
							/>
						</InputBox>
						<ButtonBox>
							<Button onClick={handleClick}>검색</Button>
						</ButtonBox>
					</ShopListHeader>

					<ShopListBottom>
						<List data={value} click={click} />
					</ShopListBottom>
				</ShopList>
				{listClick && <Detail />}
				<div id="map" style={{ width: '100%', height: '100%' }} />
			</Fragment>
		</StandardLayout>
	);
}
