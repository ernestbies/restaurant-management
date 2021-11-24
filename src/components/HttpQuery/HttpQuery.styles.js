import styled from 'styled-components';

const queryColors = {
    get: '#00BFFF',
    post: '#32CD32',
    put: '#FFA500',
    delete: '#DC143C'
}

export const HttpQueryBox = styled.div`
    height: 30px;
    max-width: 500px;
    width: 95%;
    background-color: ${({type}) => queryColors[type] + '30'};
    align-self: center;
    border-radius: 5px;
    position: relative;
    margin-bottom: 10px;
`;

export const HttpQueryType = styled.div`
    height: 30px;
    width: 40px;
    position: absolute;
    left: 0;
    background-color: ${({type}) => queryColors[type]};
    border-bottom-left-radius: 5px;
    border-top-left-radius: 5px;
    font-size: 10px;
    font-family: Roboto Condensed, serif;
    font-weight: bold;
    color: white;
    text-align: center;
    line-height: 30px;
`;

export const QueryLink = styled.span`
    font-family: Roboto Condensed, serif;
    font-size: 12px;
    margin-left: 50px;
    line-height: 30px;
`;

export const QueryDesc = styled.span`
    font-family: Roboto Condensed, serif;
    color: ${({type}) => queryColors[type]};
    font-weight: bold;
    font-size: 12px;
    line-height: 30px;
    position: absolute;
    right: 5px;
`;
