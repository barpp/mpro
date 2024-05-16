import styled from 'styled-components';

export const Container = styled.button`
    width: 50%;
    background-color: ${({theme}) => theme.COLORS.BLUE};
    color: ${({theme}) => theme.COLORS.GRAY_100};

    height: 56px;
    border: 0;
    padding: 0 16px;
    margin-top: 16px;
    margin-left: 35px;
    border-radius: 5px;
    font-weight: 500;

    &:disabled {
        opacity: 0.5;
    }
`;