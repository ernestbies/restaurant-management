import styled, {keyframes} from 'styled-components';

const show = keyframes`
    0% {
        opacity: 0;
        right: 0;
        bottom: 100px;
    }
    
    1% {
        opacity: 1;
    }
    
    40% {
        opacity: 1;
        bottom: 200px;
        right: 15px;
    }
    
    100% {
        opacity: 0;
        bottom: 200px;
        right: 15px;
    }
`;

export const StyledAlert = styled.div`
    display: ${({visible}) => visible ? 'block' : 'none'};
    width: 220px;
    height: 80px;
    background-color: white;
    position: absolute;
    bottom: 200px;
    right: 15px;
    border: 1px solid deepskyblue;
    padding: 5px;
    user-select: none;
    animation: ${show} 5s ease-in-out forwards;
`;

export const StyledTitle = styled.p`
    font-family: Roboto Condensed, serif;
    font-size: 11px;
    font-weight: bold;
    letter-spacing: 1px;
    color: deepskyblue;
    margin-left: 3px;
    margin-right: 5px;
`;

export const StyledSpan = styled.span`
    font-weight: 300;
`;

export const ColoredText = styled.span`
    color: black;
    letter-spacing: 1px;
`;

export const ColoredSpan = styled.span`
    color: deepskyblue;
    font-weight: bold;
`;

export const TitleWrapper = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: flex-end;
    align-items: center;
    margin-top: -6px;
`;

export const AlertTitle = styled.p`
    font-family: Roboto Condensed, serif;
    font-size: 12px;
    font-weight: bold;
    color: black;  
    margin: 0; 
    margin-right: 5px; 
    text-align: right;
`;

export const AlertText = styled.p`
    font-family: Roboto Condensed, serif;
    font-size: 10px;
    font-weight: 300;
    color: black;  
    margin: 0; 
    margin-top: 5px;
    margin-right: 5px; 
    text-align: right;
    white-space: pre-wrap;
`;
