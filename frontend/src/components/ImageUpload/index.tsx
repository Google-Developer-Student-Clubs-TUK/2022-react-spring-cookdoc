import React, { useState } from 'react';
import styled from 'styled-components';

import { ReactComponent as LeftArrow } from 'assets/images/arrow-left.svg';
import { ReactComponent as RightArrow } from 'assets/images/arrow-right.svg';

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
	text-align: center;
`;

const PreviewImage = styled.img`
	width: 100%;
	object-fit: cover;
	border-radius: 16px;
`;

const PagenationContainer = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	gap: 8px;

	filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));

	max-width: 80%;
	min-width: 80%;
`;

const PagenationImageContainer = styled.div`
	display: flex;
	border-radius: 16px;
	align-items: center;
	background-color: #d9d9d9;
	width: 100px;
	height: 100px;
	transition: transform 0.25s ease-in 0s;
	&:hover {
		transform: translateY(-5px);
	}
`;

const PagenationImage = styled.img`
	border-radius: 16px;
	width: 100px;
	height: 100px;
	object-fit: cover;
	cursor: pointer;
`;

interface PagenationButtonStyleProps {
	left?: boolean;
	right?: boolean;
}

const PagenationButton = styled.div<PagenationButtonStyleProps>`
	display: flex;
	background: #000000;
	border-radius: 50%;
	align-items: center;
	justify-content: center;
	margin-right: ${(props) => props.left && 'auto'};
	margin-left: ${(props) => props.right && 'auto'};
	cursor: pointer;
	&:hover {
		background-color: #242424;
	}
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
	urlList?: string[];
	onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

export function ImageUpload({ urlList = [], onChange }: Props) {
	const [imageURL, setImageURL] = useState('');

	const [pageIndex, setPageIndex] = useState(0);
	const [pageNum, setPageNum] = useState(1);
	const MAX_PAGE = Math.ceil(urlList.length / 3);

	const onClickPrevButton = () => {
		if (pageNum > 1) {
			setPageNum((prev) => {
				prev = prev - 1;
				setPageIndex((prev - 1) * 3);
				return prev;
			});
		}
	};

	const onClickNextButton = () => {
		if (pageNum < MAX_PAGE) {
			setPageNum((prev) => {
				prev = prev + 1;
				setPageIndex((prev - 1) * 3);
				return prev;
			});
		}
	};

	const onClickPagenationImage = (
		event: React.MouseEvent<HTMLImageElement>,
	) => {
		setImageURL((event.target as HTMLImageElement).src);
	};

	return (
		<Container>
			<PreviewImageContainer>
				<PreviewImage src={imageURL} alt="업로드된 이미지가 없습니다." />
			</PreviewImageContainer>
			<PagenationContainer>
				<PagenationButton left onClick={onClickPrevButton}>
					<LeftArrow />
				</PagenationButton>

				{urlList?.slice(pageIndex, pageIndex + 3).map((item) => (
					<PagenationImageContainer key={item}>
						<PagenationImage
							src={item}
							alt={item}
							onClick={onClickPagenationImage}
						/>
					</PagenationImageContainer>
				))}

				<PagenationButton right onClick={onClickNextButton}>
					<RightArrow />
				</PagenationButton>
			</PagenationContainer>
			<ImageUploadButtonContainer>
				<ImageUploadButton htmlFor="imageUploadButton">
					이미지 업로드
				</ImageUploadButton>
				<ImageUploadInput
					id="imageUploadButton"
					type="file"
					accept="image/*"
					multiple
					onChange={onChange}
				/>
			</ImageUploadButtonContainer>
		</Container>
	);
}
