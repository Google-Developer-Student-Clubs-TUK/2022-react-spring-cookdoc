import React from 'react';
import styled from 'styled-components';
import { useSetRecoilState } from 'recoil';
import { shopRegisterButtonState } from 'atoms';
import { Input } from 'components/Input';
import { Select } from 'components/SelectInput';
import { TextArea } from 'components/TextAreaInput';
import { Button } from 'components/Button';

const Container = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;

	position: absolute;
	top: 0;
	bottom: 0;
	left: 0;
	right: 0;

	backdrop-filter: blur(16px);
	z-index: 1000;
`;

const SubContainer = styled.div`
	display: flex;
	flex-direction: column;
	align-items: flex-start;

	padding: 8px;
	gap: 4px;

	backdrop-filter: blur(8px);

	background-color: #b0b0b0;

	border-radius: 12px;
`;

const ButtonContainer = styled.div`
	width: 100%;
	display: flex;
	justify-content: center;
	gap: 32px;
`;

export function ShopRegisterModal() {
	const setCancelButtonClicked = useSetRecoilState(shopRegisterButtonState);

	return (
		<Container>
			<SubContainer>
				<Input
					id="상점명"
					label="🏬 상점 명"
					placeholder="상점 명을 입력해주세요"
				/>
				<Input
					id="상점주소"
					label="📮 상점 주소"
					placeholder="우편 번호 찾기"
				/>
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
				<ButtonContainer>
					<Button onClick={() => setCancelButtonClicked(false)}>
						취소하기
					</Button>
					<Button>등록하기</Button>
				</ButtonContainer>
			</SubContainer>
		</Container>
	);
}
