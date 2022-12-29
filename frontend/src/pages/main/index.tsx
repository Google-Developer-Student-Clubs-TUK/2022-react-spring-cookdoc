import React, { Fragment, useEffect, useState } from 'react';
import {
	constSelector,
	useRecoilState,
	useRecoilValue,
	useSetRecoilState,
} from 'recoil';
import styled from 'styled-components';

import { StandardLayout } from 'layout';
import {
	shopRegisterModalButtonState,
	shopDetailClickState,
	shopSubscribeModalButtonState,
	shopDetail,
	shopsState,
	shopMarkerState,
} from 'stores';
import {
	List,
	ShopRegisterModal,
	Detail,
	ShopSubscribeModal,
} from 'components';

declare global {
	interface Window {
		kakao: any;
	}
}

const Container = styled.div`
	display: flex;
	width: 100%;
	height: 100%;
	z-index: 30;
`;

const ShopListContainer = styled.div`
	min-width: 30%;
	width: 30%;
	height: 100%;
	display: flex;
	flex-direction: column;
`;

const ShopListHeaderContainer = styled.div`
	padding: 10px;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	gap: 8px;
`;

const ShopListTitleContainer = styled.h2`
	display: block;
	text-align: center;
`;

const ShopListTitle = styled.span`
	position: relative;
	display: inline-block;
	font-size: 1.8rem;
	::after {
		content: '';
		display: inline-block;
		position: absolute;
		bottom: 2px;
		left: 0;
		width: 100%;
		height: 10px;
		border-radius: 10px;
		background: rgba(0, 107, 214, 0.2);
	}
`;

const ShopButtonContainer = styled.div`
	width: 100%;
`;

const ShopRegisterButton = styled.button`
	width: 100%;
	font-size: 1rem;
	font-weight: 600;
	background: #0475f4;
	color: #fff;
	border: 0;
	padding: 12px;
	border-radius: 5px;
	cursor: pointer;
	&:hover {
		background: #0359bc;
	}
	transition: ease-in-out 0.2s;
`;

const SearchContainer = styled.div`
	width: 100%;
	display: flex;
`;

const SearchInput = styled.input`
	width: 100%;
	padding: 8px;
	border: 1px solid #cacaca;
	border-radius: 8px;
	color: #333;
	outline: none;
`;

const ShopListBodyContainer = styled.div`
	height: 100%;
	overflow-y: auto;
	border-top: 1px solid #dee3eb;
	background: #f5f5f5;
	padding-bottom: 40px;
`;

const DetailContainer = styled.div`
	position: relative;
`;

const MapContainer = styled.div`
	width: 70%;
	height: 100%;
`;
const Map = styled.div`
	width: 100%;
	height: 100%;
`;

export function Main() {
	const [value, setValue] = useState('');
	const listClick = useRecoilValue(shopDetailClickState);

	const [detail] = useRecoilState(shopDetail);
	const [shopMarker] = useRecoilState(shopMarkerState);

	const [registerModalButtonClicked, setRegisterModalButtonClicked] =
		useRecoilState(shopRegisterModalButtonState);
	const [subscribeModalButtonClicked] = useRecoilState(
		shopSubscribeModalButtonState,
	);

	useEffect(() => {
		const container = document.getElementById('map');
		const options = {
			center: new window.kakao.maps.LatLng(37.3399, 126.733946),
			level: 3,
		};
		const map = new window.kakao.maps.Map(container, options);

		const markerPosition = new window.kakao.maps.LatLng(37.3399, 126.733946);
		const mainMarker = new window.kakao.maps.Marker({
			position: markerPosition,
		});

		mainMarker.setMap(map);

		if (shopMarker.address) {
			const geocoder = new window.kakao.maps.services.Geocoder();
			geocoder.addressSearch(
				shopMarker.address,
				function (result: any, status: string) {
					if (status === window.kakao.maps.services.Status.OK) {
						console.log(status);
						const coords = new window.kakao.maps.LatLng(
							result[0].y,
							result[0].x,
						);

						const marker = new window.kakao.maps.Marker({
							map: map,
							position: coords,
						});

						const infowindow = new window.kakao.maps.InfoWindow({
							content: `<div style="width:150px;text-align:center;padding:6px 0;">${shopMarker.address}</>`,
						});
						infowindow.open(map, marker);

						map.setCenter(coords);
					}
				},
			);
		}
	}, [shopMarker.address]);

	return (
		<StandardLayout>
			<Fragment>
				<Container>
					<ShopListContainer>
						<ShopListHeaderContainer>
							<ShopListTitleContainer>
								<ShopListTitle>가게 리스트</ShopListTitle>
							</ShopListTitleContainer>
							<ShopButtonContainer>
								<ShopRegisterButton
									onClick={() => setRegisterModalButtonClicked(true)}
								>
									음식점 등록하기
								</ShopRegisterButton>
							</ShopButtonContainer>
							<SearchContainer>
								<SearchInput
									placeholder="검색어를 입력하세요."
									value={value}
									onChange={(event) => setValue(event.target.value)}
								/>
							</SearchContainer>
						</ShopListHeaderContainer>

						<ShopListBodyContainer>
							<List searchName={value} />
						</ShopListBodyContainer>
					</ShopListContainer>

					<DetailContainer>{listClick && <Detail />}</DetailContainer>

					<MapContainer>
						<Map id="map" />
					</MapContainer>

					{registerModalButtonClicked ? <ShopRegisterModal /> : null}
					{subscribeModalButtonClicked && (
						<ShopSubscribeModal subscribeCost={detail.subscribeCost} />
					)}
				</Container>
			</Fragment>
		</StandardLayout>
	);
}
