import styled from "styled-components";
import dummy from "./db/data.json";



const ListItem = styled.div`
    padding: 15px;
    position: relative;
    background: #fff;
    border: 1px solid #dee3eb;
    margin: 15px;
    cursor: pointer;
    border-radius: 5px;
`;

function List() {
    return (
        <>
            <ListItem />
        </>
    )
}

export default List;