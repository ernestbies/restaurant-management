import styled from 'styled-components';

export const ServerInput = styled.input`
    width: 90%;
    max-width: 300px;
    font-size: 13px;
    font-family: Roboto Condensed, serif;
    margin-top: 50px;
    padding: 5px;
    text-align: center;
    
    &:focus {
        border: 2px deepskyblue solid;
    }
`;
