import styled from 'styled-components';

export const Quote = styled.p`
    font-family: Indie Flower, serif;
    font-size: 25px;
    color: deepskyblue;
    position: absolute;
    right: 40px;
    bottom: 15px;
    border-bottom: 2px solid deepskyblue;
    
    &:before {
        content: "Bon Appétit !";
    }        
`;
