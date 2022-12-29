import React, { useState } from 'react';
import styled, { keyframes } from 'styled-components';
import { useRecoilState, useSetRecoilState } from 'recoil';

import {
	shopDetailClickState,
	shopDetail,
	shopListCloseCheck,
	shopSubscribeModalButtonState,
} from 'stores';

import { ReactComponent as LeftArrow } from 'assets/images/arrow-left.svg';
import { ReactComponent as RightArrow } from 'assets/images/arrow-right.svg';

const ContainerFadeIn = keyframes`
  0% {
    left: -100px;
		opacity: 0;
  }
  100% {
		opacity: 1;
		left: 0;
  }
`;

const ContainerFadeOut = keyframes`
  0% {
		opacity: 1;
		left: 0;
  }
  100% {
    left: -100px;
		opacity: 0;
  }

`;

const Container = styled.div`
	display: flex;
	flex-direction: column;

	position: absolute;
	overflow-y: auto;
	/* transition: ease-in 0.5s; */
	width: 400px;
	height: 90%;
	background: #fff;
	border: 1px solid #dee3eb;
	border-top: 0;
	border-bottom: 0;

	border-bottom-right-radius: 8px;

	z-index: 1000;

	padding: 16px;

	animation: ${ContainerFadeIn} 0.5s ease-in;

	filter: drop-shadow(6px 6px 4px rgba(0, 0, 0, 0.25));
`;

const ButtonContainer = styled.div`
	display: flex;
	gap: 8px;
`;

const Button = styled.button`
	width: 100%;
	font-size: 1rem;
	font-weight: 600;
	background: #0475f4;
	color: #fff;
	border: 0;
	padding: 12px;
	border-radius: 5px;
	margin-top: 20px;
	cursor: pointer;
	&:hover {
		background: #0359bc;
	}
	transition: ease-in-out 0.2s;
`;

const DetailContainer = styled.div`
	display: flex;
	flex-direction: column;
`;

const DetailSubContainer = styled.div`
	display: flex;
`;

const SubContainerTitle = styled.div`
	padding: 8px;
	white-space: nowrap;
`;

const Title = styled.div`
	font-weight: 800;
	font-size: 1.2rem;
	padding: 8px;
`;

const ShopName = styled.div`
	padding: 8px;
`;

const ShopPhoneNumber = styled.div`
	padding: 8px;
`;

const ShopAddress = styled.div`
	padding: 8px;
	white-space: pre-wrap;
`;

const ShopExplain = styled.div`
	padding: 8px;
`;

const ShopSubscribeCost = styled.div`
	padding: 8px;
`;

const Horizon = styled.hr`
	width: 90%;
	border: 0.5px solid #d8d8d8;
`;

const ImageContainer = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	gap: 8px;
`;

const PagenationContainer = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	gap: 8px;
	padding: 8px;

	filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
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

const PreviewImageContainer = styled.div`
	width: 350px;
	border-radius: 16px;
	background-color: #d9d9d9;
`;

const PreviewImage = styled.img`
	width: 100%;
	object-fit: cover;
	border-radius: 16px;
`;

export function Detail() {
	const [, setClose] = useRecoilState(shopListCloseCheck);
	const setListClickClose = useSetRecoilState(shopDetailClickState);
	const [, setSubscribeModalButtonClicked] = useRecoilState(
		shopSubscribeModalButtonState,
	);

	const closeClick = () => {
		setClose(true);
		setListClickClose(false);
	};
	const [detail] = useRecoilState(shopDetail);

	const [pageIndex, setPageIndex] = useState(0);
	const [pageNum, setPageNum] = useState(1);

	const [imageURL, setImageURL] = useState('');

	const MAX_PAGE = Math.ceil(detail.images.length / 3);

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
			<DetailContainer>
				<Title>음식점 이름</Title>
				<ShopName>{detail.name}</ShopName>
			</DetailContainer>

			<Horizon />

			<DetailContainer>
				<Title>음식점 정보</Title>
				<DetailSubContainer>
					<SubContainerTitle>음식점 번호</SubContainerTitle>
					<ShopPhoneNumber>{` ${detail.phone}`}</ShopPhoneNumber>
				</DetailSubContainer>
				<DetailSubContainer>
					<SubContainerTitle>음식점 주소</SubContainerTitle>
					<ShopAddress>{detail.address}</ShopAddress>
				</DetailSubContainer>
			</DetailContainer>

			<Horizon />

			<DetailContainer>
				<Title>💵 하루 구독 비용</Title>
				<ShopSubscribeCost>{`${detail.subscribeCost} 원`}</ShopSubscribeCost>
			</DetailContainer>

			<Horizon />

			<DetailContainer>
				<Title>💬 음식점 소개</Title>
				<ShopExplain>{detail.detail}</ShopExplain>
			</DetailContainer>

			<Horizon />

			<ImageContainer>
				<PagenationContainer>
					<PagenationButton left onClick={onClickPrevButton}>
						<LeftArrow />
					</PagenationButton>

					{detail.images?.slice(pageIndex, pageIndex + 3).map((item) => {
						return (
							<PagenationImageContainer key={item}>
								<PagenationImage
									src={item}
									alt={item}
									onClick={onClickPagenationImage}
								/>
							</PagenationImageContainer>
						);
					})}

					<PagenationButton right onClick={onClickNextButton}>
						<RightArrow />
					</PagenationButton>
				</PagenationContainer>

				<PreviewImageContainer>
					<PreviewImage src={imageURL} alt={imageURL} />
				</PreviewImageContainer>
			</ImageContainer>

			<ButtonContainer>
				<Button onClick={closeClick}>닫기</Button>
				<Button onClick={() => setSubscribeModalButtonClicked(true)}>
					구독하기
				</Button>
			</ButtonContainer>
		</Container>
	);
}
