import styled from 'styled-components';

export const StyledJson = styled.div`
    background-color: white;
    width: 400px;
    margin-top: 15px;
    margin-bottom: 15px;
    align-self: center;
    border: 1px solid deepskyblue;
    border-radius: 20px;
`;

export const JsonContent = styled.div`
    padding-left: 15px;
    padding-right: 15px;
`;

export const Code = styled.p`
    font-size: 13px;
    font-weight: bold;
    color: ${({color}) => color ?? 'deepskyblue'};
    margin: 0;
    margin-left: ${({jsonVar}) => jsonVar ? '15px' : '0'};
`;

export const CodeValue = styled.span`
    font-weight: 300;
    color: ${({color}) => color ?? 'black'};
`;
