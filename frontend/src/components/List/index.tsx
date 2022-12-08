import React from 'react';
import styled from 'styled-components';

const ListItem = styled.div`
	padding: 15px;
	position: relative;
	background: #fff;
	border: 1px solid #dee3eb;
	margin: 15px;
	cursor: pointer;
	border-radius: 5px;
`;

export function List() {
	return (
		<>
			<ListItem />
		</>
	);
}
