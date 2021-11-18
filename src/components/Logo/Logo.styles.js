import styled from 'styled-components';

export const LogoContainer = styled.a`
    display: flex;
    align-items: center;
    justify-content: center;
    text-decoration: none;
    position: absolute;
    bottom: 50px;
    
    @media screen and (orientation:portrait) {
        scale: 0.9;
    }
`;

export const StyledLogo = styled.img`
    width: 30px;
    height: 30px;
`;

export const StyledLink = styled.span`
    color: deepskyblue;
    font-family: Roboto Condensed, serif;
    margin-left: 7px;
    font-size: 11px;
    letter-spacing: 1px;
    font-weight: bold;
`;
