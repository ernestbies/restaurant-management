import styled from 'styled-components';

export const StyledOption = styled.div`
    width: 250px;
    height: 250px;
    background-color: white;
    border: 2px deepskyblue solid;
    margin: 25px;
    text-align: center;
    user-select: none;
    position: relative;
    
    &:hover {
        scale: 1.1;
    }
`;

export const SectionLogoContainer = styled.div`
    height: 120px;
    display: flex;
    align-items: center;
    justify-content: center;
`;

export const SectionLogo = styled.img``;

export const StyledHeader = styled.p`
    color: white;
    font-size: 13px;
    font-family: Roboto Condensed, serif;
    font-weight: bold;
    letter-spacing: 1px;
    margin-top: 0;
    background-color: deepskyblue;
    padding: 5px;
`;

export const StyledSubheader = styled.p`
    color: deepskyblue;
    font-size: 12px;
    font-family: Roboto Condensed, serif;
    color: black;
    margin-left: 10px;
    margin-right: 10px;
`;
