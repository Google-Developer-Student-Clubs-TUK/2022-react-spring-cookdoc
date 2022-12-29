import React, { useEffect } from 'react';
import styled from 'styled-components';
import { useRecoilState } from 'recoil';
import {
	shopsState,
	shopDetail,
	shopDetailClickState,
	shopMarkerState,
} from 'stores';
import { useSetRecoilState } from 'recoil';
import axios from 'axios';
import { apiUrl } from 'common/apiUrl';

const ListItem = styled.div`
	padding: 15px;
	position: relative;
	background: #fff;
	border: 1px solid #dee3eb;
	margin: 15px;
	cursor: pointer;
	border-radius: 10px;
`;

const ShopName = styled.h3`
	text-align: center;
	font-size: 1rem;
	font-weight: bold;
	padding-bottom: 10px;
	margin-bottom: 10px;
	border-bottom: 1px solid #dee3eb;
	text-overflow: ellipsis;
	overflow: hidden;
	white-space: nowrap;
`;

const ShopAddress = styled.p`
	display: inline;
	float: right;
	font-size: 0.8em;
	font-weight: bold;
	color: black;
`;

const ShopDetail = styled.div`
	text-align: right;
	font-weight: bold;
	font-size: 15px;
	color: #888;
	line-height: 1.5;
	overflow: hidden;
	white-space: normal;
	display: -webkit-box;
	-webkit-line-clamp: 2;
	-webkit-box-orient: vertical;
	height: -webkit-calc(1em * 2 * 1.5);
	height: calc(1em * 2 * 1.5);
	height: 42px;
	-webkit-box-orient: vertical;
	width: 100%;
	padding: 5px;
`;

interface ListProps {
	searchName: string;
}

export function List({ searchName }: ListProps) {
	const [shops, setShops] = useRecoilState(shopsState);

	useEffect(() => {
		axios
			.get(`${apiUrl}/shops`)
			.then((res) => setShops([...res.data.data]))
			.catch((err) => console.log(err));
	}, []);

	const setListClick = useSetRecoilState(shopDetailClickState);
	const setShopDetail = useSetRecoilState(shopDetail);
	const setShopMarker = useSetRecoilState(shopMarkerState);

	const ListItemClick = (item: {
		name: string;
		address: string;
		detail: string;
		shop_images: any[];
		category: string;
		phone: string;
		payment: string;
	}) => {
		setListClick(true);
		setShopDetail({
			name: item.name,
			address: item.address,
			detail: item.detail,
			images: item.shop_images.map((item) => item.image_url),
			category: item.category,
			phone: item.phone,
			subscribeCost: item.payment,
		});
		setShopMarker({
			address: item.address,
		});
	};

	return (
		<>
			{searchName !== ''
				? shops
						.filter((item) => item.name.includes(searchName))
						.map((item) => (
							<ListItem key={item.name} onClick={() => ListItemClick(item)}>
								<ShopName>{item.name}</ShopName>
								<ShopAddress>📮 {item.address}</ShopAddress>
								<ShopDetail>{item.detail}</ShopDetail>
							</ListItem>
						))
				: shops.map((item, i) => {
						return (
							<ListItem key={i} onClick={() => ListItemClick(item)}>
								<ShopName>{item.name}</ShopName>
								<ShopAddress>📮 {item.address}</ShopAddress>
								<ShopDetail>{item.detail}</ShopDetail>
							</ListItem>
						);
				  })}
		</>
	);
}
