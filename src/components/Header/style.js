import styled from "styled-components";

export const Container = styled.header`
    grid-area: header;

    height: 105px;
    width: 100%;
    border-bottom-width: 1px;
    border-bottom-style: solid;
    border-bottom-color: ${({theme}) => theme.COLORS.BACKGROUND_600};

    display: flex;
    justify-content: space-between;

    padding: 0 80px;

`;

export const Profile = styled.div`
    display: flex;
    align-items: center;
    width: 100%;
    

    > img {
        width: 56px;
        height: 56px;
        border-radius: 50%;
    }

    > div {
        width: 100%;
        display: flex;
        flex-direction: row;
        justify-content: space-between; 
        margin-left: 16px;
        line-height: 24px;
    
        span {
           font-size: 24px;
           color: ${({theme}) => theme.COLORS.GRAY_100};
        }

        strong {
            font-size: 18px;
            color: ${({theme}) => theme.COLORS.BACKGROUND_600};
        }
    }

`;

export const Logout = styled.button`
    border: none;
    background: none;    

    > svg {
        color: ${({theme}) => theme.COLORS.BLUE};
        font-size: 24px;
        margin-left: 16px;
    }
`;