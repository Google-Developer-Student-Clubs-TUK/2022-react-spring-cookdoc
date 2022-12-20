import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import dummy from 'db/data.json';
import { ShopRegisterModal } from 'components/ShopRegisterModal';
import { Detail } from 'components/Detail';
import { useSetRecoilState } from 'recoil';
import { shopDetailClickState } from 'atoms/shopDetailList';

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

const ListContainer = styled.div`
	margin: 0px;
	padding: 0px;
`;

interface ListProps {
	data: string;
	click: boolean;
}

export function List({ data, click }: ListProps) {
	const setListClick = useSetRecoilState(shopDetailClickState);

	const ListItemClick = () => {
		setListClick(true);
	};

	const shop = dummy.shops.find((v) => v.name === data);
	if (!shop) {
		return (
			<>
				<ListContainer>
					{dummy.shops.map((v, i) => (
						<ListItem key={i} onClick={ListItemClick}>
							<ShopName>{v.name}</ShopName>
							<ShopAddress>📮 {v.address}</ShopAddress>
							<ShopDetail>{v.explain}</ShopDetail>
						</ListItem>
					))}
				</ListContainer>
			</>
		);
	}
	return (
		<ListContainer>
			{click && (
				<ListItem key={data} onClick={ListItemClick}>
					<ShopName>{shop.name}</ShopName>
					<ShopAddress>📮 {shop.address}</ShopAddress>
					<ShopDetail>{shop.explain}</ShopDetail>
				</ListItem>
			)}
		</ListContainer>
	);
}
