import styled from 'styled-components';

export const Container = styled.button`
    width: 100%;
    height: 50px;

    padding-left: 12px;

    background-color: ${({theme, isactive}) => isactive ? theme.COLORS.BACKGROUND_700 : theme.COLORS.BACKGROUND_900};

    border: 0;
    border-left: 2px solid ${({theme, isactive}) => isactive ? theme.COLORS.BLUE : 0};
    
    font-weight: 500;
    
    display: flex;
    align-items: center;
    
    
    &:disabled {
        opacity: 0.5;
    }

    &:hover {
        background-color: ${({theme}) => theme.COLORS.BACKGROUND_700};
    }

    > div {
        width: 100%;
        display: flex;
        align-items: space-between;
    }

    > div svg {
        color: ${({theme, isactive}) => isactive ? theme.COLORS.BLUE : theme.COLORS.GRAY_300};
        
    }

    a {
        text-decoration: none;
        color: ${({theme}) => theme.COLORS.GRAY_100}
    }
`;