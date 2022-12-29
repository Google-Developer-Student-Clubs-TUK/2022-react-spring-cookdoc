import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import axios from 'axios';

import { useSetRecoilState } from 'recoil';
import { shopSubscribeModalButtonState } from 'stores';

import { Input } from 'components/atoms/Input';
import { Button } from 'components/atoms/Button';
import { apiUrl } from 'common/apiUrl';

const Container = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;

	position: absolute;
	top: 0;
	left: 0;
	right: 0;
	bottom: 0;

	backdrop-filter: blur(16px);
	z-index: 10000;
`;

const SubContainer = styled.div`
	display: flex;
	flex-direction: column;
	gap: 8px;

	min-width: 20%;
	max-height: 80%;
	overflow: scroll;

	background-color: #ffffff9b;

	padding: 36px;

	border-radius: 16px;
	filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
`;

const InputContainer = styled.div`
	display: flex;
	flex-direction: column;

	padding: 8px;
	gap: 4px;

	border-radius: 12px;
`;

const ButtonContainer = styled.div`
	width: 100%;
	display: flex;
	justify-content: center;
	gap: 32px;
`;

interface Props {
	subscribeCost: string;
}

export function ShopSubscribeModal({ subscribeCost }: Props) {
	const setSubscribeModalButtonClicked = useSetRecoilState(
		shopSubscribeModalButtonState,
	);

	const [totalPayment, setTotalPayment] = useState('');
	const [currentDate, setCurrentDate] = useState('');
	const [subscribeStartDate, setSubscribeStartDate] = useState('');
	const [subscribeEndDate, setSubscribeEndDate] = useState('');
	const [term, setTerm] = useState('');

	useEffect(() => {
		const date = new Date();
		setCurrentDate(
			`${date.getFullYear()}-${date.getMonth() + 1}-${date.getDate()}`,
		);
		if (subscribeStartDate !== '' && subscribeEndDate !== '') {
			const dateGap =
				Date.parse(subscribeEndDate) - Date.parse(subscribeStartDate);
			setTerm(String(dateGap / 1000 / 60 / 60 / 24));
		}
	}, [subscribeStartDate, subscribeEndDate]);

	const registShopHandler = () => {
		const form = new FormData();

		form.append('term', term);
		// form.append('term_start', subscribeStartDate);
		// form.append('term_finish', subscribeEndDate);

		form.append('total_payment', totalPayment);
		form.append('is_extend', '0');

		axios
			.post(`${apiUrl}/users/1/shops/1/subscribes`, {
				term: term,
				total_payment: totalPayment,
				is_extend: '0',
			})
			.then((res) => console.log(res.data))
			.catch((err) => console.log(err));

		setSubscribeModalButtonClicked(false);
	};

	useEffect(() => {
		if (term === '') setTotalPayment('');
		else setTotalPayment(String(+subscribeCost * +term));
	}, [term]);

	return (
		<Container>
			<SubContainer>
				<InputContainer>
					<Input
						id="상점명"
						type="date"
						min={currentDate}
						label="🗓 구독 시작 날짜"
						placeholder="구독 시작 날짜를 입력해주세요"
						value={subscribeStartDate}
						onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
							setSubscribeStartDate(event.target.value)
						}
					/>
					<Input
						id="상점명"
						type="date"
						min={subscribeStartDate}
						label="🗓 구독 종료 날짜"
						placeholder="구독 종료 날짜를 입력해주세요"
						value={subscribeEndDate}
						onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
							setSubscribeEndDate(event.target.value)
						}
					/>
					<Input
						id="총 지불 금액"
						label="💳 총 지불 금액"
						placeholder="총 지불 금액"
						readOnly
						value={totalPayment}
					/>
					<ButtonContainer>
						<Button onClick={() => setSubscribeModalButtonClicked(false)}>
							취소하기
						</Button>
						<Button onClick={registShopHandler}>구독하기</Button>
					</ButtonContainer>
				</InputContainer>
			</SubContainer>
		</Container>
	);
}
