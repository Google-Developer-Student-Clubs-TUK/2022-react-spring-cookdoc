import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
	border-radius: 16px;

	display: flex;
	flex-direction: column;
	align-items: center;
	gap: 8px;
`;

const PreviewImageContainer = styled.div`
	width: 400px;
	border-radius: 16px;
`;

const PreviewImage = styled.img`
	width: 100%;
	object-fit: cover;
	border-radius: 16px;
`;

const ImageUploadButtonContainer = styled.div`
	display: flex;
	flex-direction: column;
	margin-top: auto;
`;

const ImageUploadButton = styled.label`
	width: fit-content;
	height: fit-content;
	border: 0;
	border-radius: 12px;
	color: #ffffff;
	background-color: #000000;
	font-size: 1.2rem;
	line-height: 1.2rem;
	font-weight: 700;
	padding: 8px;
	cursor: pointer;
	&:hover {
		background-color: #232323;
	}
`;

const ImageUploadInput = styled.input`
	display: none;
`;

interface Props {
	url?: string;
	onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

export function ImageUpload({ url, onChange }: Props) {
	return (
		<Container>
			<PreviewImageContainer>
				<PreviewImage src={url} alt="업로드된 이미지가 없습니다." />
			</PreviewImageContainer>
			<ImageUploadButtonContainer>
				<ImageUploadButton htmlFor="imageUploadButton">
					이미지 업로드
				</ImageUploadButton>
				<ImageUploadInput
					id="imageUploadButton"
					type="file"
					accept="image/*"
					onChange={onChange}
				/>
			</ImageUploadButtonContainer>
		</Container>
	);
}
