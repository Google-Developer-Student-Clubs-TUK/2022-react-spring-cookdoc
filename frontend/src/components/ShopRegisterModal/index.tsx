import React, { useState } from 'react';
import styled from 'styled-components';
import axios from 'axios';
import { useDaumPostcodePopup } from 'react-daum-postcode';

import { useSetRecoilState } from 'recoil';
import { shopRegisterButtonState } from 'atoms';

import { Input } from 'components/Input';
import { Select } from 'components/SelectInput';
import { TextArea } from 'components/TextAreaInput';
import { Button } from 'components/Button';
import { apiUrl } from 'common/apiUrl';
import { ImageUpload } from 'components/ImageUpload';

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
	const setCancelButtonClicked = useSetRecoilState(shopRegisterButtonState);

	const [shopName, setShopName] = useState('');
	const [address, setAddress] = useState('');
	const [addressDetail, setAddressDetail] = useState('');
	const [phoneNumber, setPhoneNumber] = useState('');
	const [category, setCategory] = useState('');
	const [info, setInfo] = useState('');
	const [imageURL, setImageURL] = useState('');
	const [imageFile, setImageFile] = useState<File>();

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
			const reader = new FileReader();

			reader.readAsDataURL(event.target.files[0]);
			setImageFile(event.target.files[0]);

			reader.onload = (event) => {
				const url = event.target?.result as string;
				setImageURL(url);
			};
		}
	};

	const registShopHandler = () => {
		const form = new FormData();

		form.append('name', shopName);
		form.append('address', `${address} ${addressDetail}`);
		form.append('detail', info);
		form.append('image', imageFile || '');
		form.append('category', category);
		form.append('phone', phoneNumber);

		axios
			.post(`${apiUrl}/shops`, form)
			.then((res) => console.log(res.data))
			.catch((err) => console.log(err));
	};

	return (
		<Container>
			<SubContainer>
				<ImageUpload url={imageURL} onChange={imageUploadHandler} />
				<InputContainer>
					<Input
						id="상점명"
						label="🏬 상점 명"
						placeholder="상점 명을 입력해주세요"
						value={shopName}
						onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
							setShopName(event.target.value)
						}
					/>
					<Input
						id="상점주소"
						label="📮 상점 주소"
						placeholder="우편 번호 찾기"
						readonly
						value={address}
						onClick={() => addressPopUp({ onComplete: addressCompleteHandler })}
					/>
					<Input
						id="상점 상세 주소"
						label="📮 상점 상세 주소"
						placeholder="상세 주소를 입력해주세요"
						value={addressDetail}
						onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
							setAddressDetail(event.target.value)
						}
					/>
					<Input
						id="상점번호"
						label="☎️ 상점 번호"
						placeholder="상점 번호를 입력해주세요"
						value={phoneNumber}
						onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
							setPhoneNumber(event.target.value)
						}
					/>
					<Select
						label="🗂 상점 분류"
						value={category}
						onChange={(event: React.ChangeEvent<HTMLSelectElement>) =>
							setCategory(event.target.value)
						}
					>
						<option value="">상점 분류를 입력해주세요</option>
						<option>1</option>
						<option>2</option>
					</Select>
					<TextArea
						label="📌 상점 상세 정보"
						placeholder="상점 상세 정보를 입력해주세요"
						value={info}
						onChange={(event: React.ChangeEvent<HTMLTextAreaElement>) =>
							setInfo(event.target.value)
						}
					/>
					<ButtonContainer>
						<Button onClick={() => setCancelButtonClicked(false)}>
							취소하기
						</Button>
						<Button onClick={registShopHandler}>등록하기</Button>
					</ButtonContainer>
				</InputContainer>
			</SubContainer>
		</Container>
	);
}
