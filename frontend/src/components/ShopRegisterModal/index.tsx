import React from 'react';
import styled from 'styled-components';
import { Input } from 'components/Input';
import { Select } from 'components/SelectInput';
import { TextArea } from 'components/TextAreaInput';

const Container = styled.div`
	display: flex;
	flex-direction: column;
	align-items: flex-start;
	padding: 8px;
	gap: 4px;
`;

export function ShopRegisterModal() {
	return (
		<Container>
			<Input
				id="상점명"
				label="🏬 상점 명"
				placeholder="상점 명을 입력해주세요"
			/>
			<Input id="상점주소" label="📮 상점 주소" placeholder="우편 번호 찾기" />
			<Input
				id="상점번호"
				label="☎️ 상점 번호"
				placeholder="상점 번호를 입력해주세요"
			/>
			<Select label="🗂 상점 분류">
				<option value="">상점 분류를 입력해주세요</option>
				<option>1</option>
				<option>2</option>
			</Select>
			<TextArea
				label="📌 상점 상세 정보"
				placeholder="상점 상세 정보를 입력해주세요"
			/>
		</Container>
	);
}
