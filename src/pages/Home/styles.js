import styled from "styled-components";

export const Container = styled.div`
    width: 100%;
    height: 100vh;

    display: grid;
    grid-template-columns: 300px auto;
    grid-template-rows: 110px auto;
    grid-template-areas:
    "header header"
    "menu content";

    background-color: ${({theme}) => theme.COLORS.BACKGROUND_900};
`;

export const Menu = styled.ul`
    grid-area: menu;
    background-color: ${({theme}) => theme.COLORS.BACKGROUND_900};
    border: 1px solid ${({theme}) => theme.COLORS.BACKGROUND_600};
    border-radius: 5px;
    padding-top: 5px;
    

    > ul {
        text-align: center;
    }

    > li {
        padding-top: 5px;
    }

    > li div {
        display: flex;
        justify-content: space-between;
        padding-right: 20px;
        align-items: center;
    }
`;

export const Content = styled.div`
    grid-area: content;
`;
