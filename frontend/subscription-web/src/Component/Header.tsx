import styled from "styled-components";

const Container = styled.div`
    height: 4rem;
    margin-bottom: 10px;
`

const CookDok = styled.div`
    border-bottom: 1px solid;
    height: 100%;
    padding: 10px;
    padding-bottom: 0px;
    display: flex;
    -webkit-box-align: center;
    align-items: center;
    -webkit-box-pack: justify;
    justify-content: space-between;
    span {
        width: 158px;
        height: 48px;
        font-family: 'Poppins';
        font-style: normal;
        font-weight: 700;
        font-size: 32px;
        line-height: 48px;
        display: flex;
        align-items: center;
        text-align: center;
        letter-spacing: 0.05em;
}
`


function Header() {
    return (
        <Container>
            <CookDok>
                <span>CookDok</span>
            </CookDok>
        </Container>
    )
}

export default Header;