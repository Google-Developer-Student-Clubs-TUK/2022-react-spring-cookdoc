import React, { useState } from 'react';
import styled from 'styled-components';

const Container = styled.div`
	overflow-y: auto;
	position: absolute;
	top: 0;
	left: -400px;
	transition: left 0.5s;
	width: 399px;
	height: 100%;
	background: #fff;
	border: 1px solid #dee3eb;
	z-index: -5;
`;

const DetailTop = styled.div`
	padding: 20px;
	position: relative;
	background: #fff;
	line-height: 1.5;
	height: calc(100% - 310px);
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
	return (
		<>
			<Container>
				<DetailTop>
					<DetailHeader>노랑통닭</DetailHeader>
				</DetailTop>
			</Container>
		</>
	);
}
