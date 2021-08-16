import styled from 'styled-components';

export const StyledSearchBar = styled.input`
    margin-top: 20px;
    font-family: Roboto Condensed, serif;
    width: 90%;
    max-width: 400px;
    padding: 5px;
    border: 1px solid black;
    border-radius: 3px;
    
    &:focus {
        outline: deepskyblue solid 2px;
    }
`;
