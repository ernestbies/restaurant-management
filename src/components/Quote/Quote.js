import styled from 'styled-components';

export const Quote = styled.p`
    font-family: Indie Flower, serif;
    font-size: 25px;
    color: deepskyblue;
    position: absolute;
    right: 30px;
    bottom: 40px;
    border-bottom: 2px solid deepskyblue;
    
    &:before {
        content: "Bon Appétit !";
    }
    
    @media (max-width: 1000px) {
        font-size: 17px;
    }
    
    @media (max-width: 600px) {
        font-size: 15px;
    }
    
    @media (max-width: 500px) {
        font-size: 12px;
    }
    
    @media (max-width: 400px) {
        font-size: 8px;
    }
`;
