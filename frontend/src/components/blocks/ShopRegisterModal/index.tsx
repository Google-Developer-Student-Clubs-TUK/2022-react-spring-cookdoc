import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import axios from 'axios';
import { useDaumPostcodePopup } from 'react-daum-postcode';

import { useSetRecoilState } from 'recoil';
import { shopRegisterModalButtonState, shopsState } from 'stores';

import { Input } from 'components/atoms/Input';
import { Select } from 'components/atoms/SelectInput';
import { TextArea } from 'components/atoms/TextAreaInput';
import { Button } from 'components/atoms/Button';
import { apiUrl } from 'common/apiUrl';
import { ImageUpload } from 'components/blocks/ImageUpload';

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
	z-index: 1000;
`;

const SubContainer = styled.div`
	display: flex;
	flex-direction: column;
	gap: 8px;

	height: 80%;
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

export function ShopRegisterModal() {
	const setModalButtonClicked = useSetRecoilState(shopRegisterModalButtonState);
	const setShops = useSetRecoilState(shopsState);

	const [shopName, setShopName] = useState('');
	const [address, setAddress] = useState('');
	const [addressDetail, setAddressDetail] = useState('');
	const [phoneNumber, setPhoneNumber] = useState('');
	const [category, setCategory] = useState('');
	const [info, setInfo] = useState('');
	const [subscribeCost, setSubscribeCost] = useState('');
	const [imageURLList, setImageURLList] = useState<string[]>([]);
	const [imageFileList, setImageFileList] = useState<File[]>([]);

	const addressPopUp = useDaumPostcodePopup();

	const addressCompleteHandler = (data: {
		address: string;
		addressType: string;
		bname: string;
		buildingName: string;
	}) => {
		let fullAddress = data.address;
		let extraAddress = '';

		if (data.addressType === 'R') {
			if (data.bname !== '') {
				extraAddress += data.bname;
			}
			if (data.buildingName !== '') {
				extraAddress +=
					extraAddress !== '' ? `, ${data.buildingName}` : data.buildingName;
			}
			fullAddress += extraAddress !== '' ? ` (${extraAddress})` : '';
		}

		setAddress(fullAddress);
	};

	const imageUploadHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
		if (event.target.files !== null) {
			for (const file of Array.from(event.target?.files)) {
				setImageFileList((prev) => [...prev, file]);

				const reader = new FileReader();

				reader.readAsDataURL(file);

				reader.onload = (event) => {
					const url = event.target?.result as string;
					setImageURLList((prev) => [...prev, url]);
				};
			}
		}
	};

	const registShopHandler = () => {
		const form = new FormData();

		form.append('user_id', '1');
		form.append('name', shopName);
		form.append('address', `${address} ${addressDetail}`);
		form.append('detail', info);
		for (const file of imageFileList) {
			form.append('images', file);
		}
		// for (const file of imageURLList) {
		// 	form.append('images', file);
		// }
		form.append('category', category);
		form.append('phone', phoneNumber);
		form.append('payment', subscribeCost);

		const formValidated = validateForm();

		if (formValidated) {
			axios
				.post(`${apiUrl}/shops`, form)
				// .then((res) =>
				// 	setShops((state) => [
				// 		...state,
				// 		{
				// 			name: res.data.name,
				// 			address: res.data.address,
				// 			explain: res.data.explain,
				// 			images: [res.data.images],
				// 			category: res.data.category,
				// 			phone: res.data.phone,
				// 			subscribeCost: res.data.subscribeCost,
				// 		},
				// 	]),
				// )
				.then((res) => console.log(res))
				.catch((err) => console.log(err));
			setModalButtonClicked(false);
		}
	};

	const validateForm = () => {
		if (shopName === '') {
			alert('????????? ????????? ??????????????????');
			return;
		}

		if (address === '') {
			alert('????????? ????????? ??????????????????');
			return;
		}

		if (addressDetail === '') {
			alert('????????? ?????? ????????? ??????????????????');
			return;
		}

		if (info === '') {
			alert('????????? ????????? ??????????????????');
			return;
		}

		if (imageURLList[0] === undefined) {
			alert('???????????? ????????? ????????????');
			return;
		}

		if (category === '') {
			alert('????????? ????????? ?????? ????????????');
			return;
		}

		if (phoneNumber === '') {
			alert('????????? ?????? ????????? ??????????????????');
			return;
		}

		if (subscribeCost === '') {
			alert('?????? ????????? ??????????????????');
			return;
		}

		return true;
	};

	useEffect(() => {
		if (phoneNumber.length === 11) {
			setPhoneNumber(phoneNumber.replace(/(\d{3})(\d{4})(\d{4})/, '$1-$2-$3'));
		}

		if (phoneNumber.length === 13) {
			setPhoneNumber(
				phoneNumber
					.replace(/-/g, '')
					.replace(/(\d{3})(\d{4})(\d{4})/, '$1-$2-$3'),
			);
		}
	}, [phoneNumber]);

	return (
		<Container>
			<SubContainer>
				<ImageUpload urlList={imageURLList} onChange={imageUploadHandler} />
				<InputContainer>
					<Input
						id="?????????"
						label="???? ?????? ???"
						placeholder="?????? ?????? ??????????????????"
						value={shopName}
						onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
							setShopName(event.target.value)
						}
					/>
					<Input
						id="????????????"
						label="???? ?????? ??????"
						placeholder="?????? ?????? ??????"
						readOnly
						value={address}
						onClick={() => addressPopUp({ onComplete: addressCompleteHandler })}
					/>
					<Input
						id="?????? ?????? ??????"
						label="???? ?????? ?????? ??????"
						placeholder="?????? ????????? ??????????????????"
						value={addressDetail}
						onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
							setAddressDetail(event.target.value)
						}
					/>
					<Input
						id="????????????"
						label="?????? ?????? ??????"
						placeholder="?????? ????????? ??????????????????"
						maxLength={11}
						value={phoneNumber}
						onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
							setPhoneNumber(event.target.value.replace(/[^0-9]/g, ''));
						}}
					/>
					<Input
						id="????????????"
						label="???? ?????? ??????"
						placeholder="?????? ????????? ??????????????????"
						value={subscribeCost}
						onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
							setSubscribeCost(event.target.value.replace(/[^0-9]/g, ''));
						}}
					/>
					<Select
						label="???? ?????? ??????"
						value={category}
						onChange={(event: React.ChangeEvent<HTMLSelectElement>) =>
							setCategory(event.target.value)
						}
					>
						<option value="">?????? ????????? ??????????????????</option>
						<option>1</option>
						<option>2</option>
					</Select>
					<TextArea
						label="???? ?????? ?????? ??????"
						placeholder="?????? ?????? ????????? ??????????????????"
						value={info}
						onChange={(event: React.ChangeEvent<HTMLTextAreaElement>) =>
							setInfo(event.target.value)
						}
					/>
					<ButtonContainer>
						<Button onClick={() => setModalButtonClicked(false)}>
							????????????
						</Button>
						<Button onClick={registShopHandler}>????????????</Button>
					</ButtonContainer>
				</InputContainer>
			</SubContainer>
		</Container>
	);
}
