import styled from 'styled-components';

export const LogoContainer = styled.a`
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    text-decoration: none;
    right: 10px;
`;

export const StyledLogo = styled.img`
    width: ${({width}) => (width + 'px')};    
    width: ${({height}) => (height + 'px')};
    filter: invert(100%) hue-rotate(0deg);
`;

export const StyledLink = styled.span`
    color: deepskyblue;
    font-family: "Roboto Condensed", serif;
    margin-left: 5px;
    font-size: 13px;
`;
