import React, { Fragment } from 'react';
import styled from 'styled-components';
import { StandardLayout } from 'layout';
import { Input, Select, TextArea } from 'components';

const InputForm = styled.div`
	display: flex;
	flex-direction: column;
	align-items: flex-start;
	padding: 8px;
	gap: 4px;
`;

function App() {
	return (
		<StandardLayout>
			<Fragment>
				<InputForm>
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
				</InputForm>
			</Fragment>
		</StandardLayout>
	);
}

export default App;
