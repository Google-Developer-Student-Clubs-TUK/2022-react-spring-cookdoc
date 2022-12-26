import React from 'react';
import styled from 'styled-components';
import { useRecoilState } from 'recoil';
import { shopsState, shopDetail, shopDetailClickState } from 'stores';
import { useSetRecoilState } from 'recoil';

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
	data: string;
}

export function List({ data }: ListProps) {
	const [shops] = useRecoilState(shopsState);

	const setListClick = useSetRecoilState(shopDetailClickState);
	const setShopDetail = useSetRecoilState(shopDetail);

	const ListItemClick = (item: {
		name: string;
		address: string;
		explain: string;
		images: string[];
		category: string;
		phone: string;
		subscribeCost: string;
	}) => {
		setListClick(true);
		setShopDetail({
			name: item.name,
			address: item.address,
			explain: item.explain,
			images: item.images,
			category: item.category,
			phone: item.phone,
			subscribeCost: item.subscribeCost,
		});
	};

	return (
		<>
			{data !== ''
				? shops
						.filter((item) => item.name.includes(data))
						.map((item) => (
							<ListItem key={data} onClick={() => ListItemClick(item)}>
								<ShopName>{item.name}</ShopName>
								<ShopAddress>📮 {item.address}</ShopAddress>
								<ShopDetail>{item.explain}</ShopDetail>
							</ListItem>
						))
				: shops.map((item, i) => {
						return (
							<ListItem key={i} onClick={() => ListItemClick(item)}>
								<ShopName>{item.name}</ShopName>
								<ShopAddress>📮 {item.address}</ShopAddress>
								<ShopDetail>{item.explain}</ShopDetail>
							</ListItem>
						);
				  })}
		</>
	);
}
