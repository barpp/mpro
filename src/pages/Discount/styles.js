import styled from "styled-components";

export const Container = styled.div `
    width: 100%;
    height: 100vh;
    
    display: grid;
    grid-template-rows: auto;
    grid-template-areas: "content";

    > main {
        grid-area: content;
        overflow-y: none;
        padding: 20px 0;
    }
    
`;

export const Links = styled.ul`
    list-style: none;

    > li {
        margin-top: 12px;

        a {
            color: ${({theme}) => theme.COLORS.GRAY_100};
        }
    }
`;

export const Content = styled.div`

    max-width: 100%;
    margin: 0 24px;

    display: flex;
    flex-direction: column;

    > button:first-child {
        align-self: end;
    }

    > div {
        display: flex;
    }

    > div div div{
        display: flex;
        align-items: center;
    }
    
    > div h1 {
        font-size: 36px;
        font-weight: 500;
        padding-top: 6px;
        margin-left: 16px;
    }

    > div h2 {
        font-size: 32px;
        font-weight: 500;
        padding-top: 35px;
        margin-left: 34px;
    }

    > div p {
        font-size: 16px;
        margin-top: 16px;
        margin-left: 36px;
        text-align: justify;
    }

    > div img {
        margin-left: 34px;
    }

    > div div p span {
        color: ${({theme}) => theme.COLORS.BLUE};
    }

    li {
        list-style: none;
    }
`;

export const BackStory = styled.button`
    border: none;
    background: none;
    align-items: center;   

    > svg {
        color: ${({theme}) => theme.COLORS.BLUE};
        font-size: 16px;
        margin-left: 16px;
    }
`;

export const Table = styled.table`
    border-collapse: collapse;
    text-align: center;
    
    width: 550px;

    margin: 51px 51px;
    margin-top: 51px;

    td {
        height: 35px;
        text-align: center;
    }

    tbody tr:nth-child(even) {
        background-color: ${({theme}) => theme.COLORS.BACKGROUND_700};
    }
`;


