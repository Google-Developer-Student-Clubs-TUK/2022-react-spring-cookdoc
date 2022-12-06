import styled from "styled-components";
import React, { ChangeEvent, useRef , useState} from 'react';


const RegisterShop = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 682px;
    height: 550px;
    margin: 0 auto;
`;

const Title = styled.h3`
    text-align: center;
    font-family: 'Poppins';
    font-style: normal;
    font-weight: 700;
    font-size: 48px;
    line-height: 72px;
`;

const Container = styled.div`
    position: relative;
    width:100%;
    height:408px;
`;

const ImageBox = styled.div`
    position: relative;
    width: 100%;
    height: 335px;
`;


const ButtonContainer = styled.div`
    width: 100%;
    height: 47px;
    margin-top: 15px;
`;

const ImageInputButton = styled.button`
    position: absolute;
    bottom: 0;
    right: 0;
    cursor: pointer;
    width: 170px;
    height: 47px;
    background-color: #000000;
    border-radius: 16px;
    span {
        text-align: center;
        color: white;
        font-family: 'Poppins';
        font-style: normal;
        font-weight: 700;
        font-size: 20px;
        line-height: 33px;
    }
`


function ShopAdd() {
    const photoInput = useRef<HTMLInputElement>(null);
    
    const [imageSrc, setImageSrc] = useState("https://storage.googleapis.com/cr-resource/image/575e8b020a57dc5a34e6d66b3a159072/1116424/fb5c3b78a62f080133de37616e9dad30.jpg");

    const onClickImageUpload = () => {//button이랑 input 연결
        if(photoInput.current) {
            photoInput.current.click();
        } 
    }

    const ImageUpload = (e:React.ChangeEvent<HTMLInputElement>) => {
        console.log(e.target.files);
        if (e.target.files && e.target.files.length > 0) {
            setImageSrc(URL.createObjectURL(e.target.files[0]));
        }
    }

    
    return (
        <RegisterShop>
            <Title>음식점 등록</Title>
            <Container>
                <ImageBox>
                    <img
                        alt="sample"
                        src={imageSrc}
                        style={{
                            position:'absolute',
                            width: '100%',
                            height: '100%',
                            borderRadius: '16px',
                        }}>
                    </img>
                </ImageBox>
                <ButtonContainer>
                    <input
                    ref={photoInput}
                    type="file" 
                    accept="image/*"
                    style={{display:'none'}}
                    onChange={ImageUpload}>
                    </input>
                    <ImageInputButton onClick={onClickImageUpload}>
                        <span>이미지 업로드</span>
                    </ImageInputButton>
                </ButtonContainer>
            </Container>
        </RegisterShop>
    )
}

export default ShopAdd;