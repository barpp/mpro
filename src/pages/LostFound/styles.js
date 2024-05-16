import styled from "styled-components";

export const Container = styled.div `
    width: 100%;
    height: 100vh;
    
    display: grid;
    grid-template-rows: 105px auto;
    grid-template-areas:
    "header" 
    "content";

    > main {
        grid-area: content;
        overflow-y: scroll;
        padding: 64px 0;
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

    > div p {
        font-size: 16px;
        margin-top: 16px;
        margin-left: 51px;
        text-align: justify;
    }

    > div img {
        width: 350px;
        height: 500px;
        margin-left: 24px;
    }

    > div div p span {
        color: ${({theme}) => theme.COLORS.BLUE};
        
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



