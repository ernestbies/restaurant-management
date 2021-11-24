import styled, {css} from 'styled-components';

export const StyledTable = styled.table`
    width: 1000px;
    border: 1px solid black;     
    background-color: white;
    margin-bottom: 30px;
    border-collapse: collapse;
    font-family: Roboto Condensed, serif;   
    font-weight: 300;
    font-size: 15px;
    
    @media (max-width: 1000px) {
        transform: scale(0.7);
    }
    
    @media (max-width: 720px) {
        transform: scale(1);
        display: block;
        margin-top: 50px;
    }
`;

export const TableBody = styled.tbody`
    @media (max-width: 720px) {
        display: block;
    }
`;

export const TableFooter = styled.tfoot`
    @media (max-width: 720px) {
        display: block;
    }
`;

export const StyledTr = styled.tr`
    border: 1px solid black;
    
    @media (max-width: 720px) {
    
        &:nth-child(odd) {
            background-color: #e8e8e8;
        }
    
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;
        width: 100%;
    }
`;

export const StyledTh = styled.th`
    border: 1px solid black;
    color: black;
    height: 60px;
    
    @media (max-width: 720px) {
        display: block;
    }
`;

export const StyledTd = styled.td`
    text-align: left;
    border: 1px solid black;
    padding: 5px;
    
    ${({actionContainer}) => actionContainer && css`
        padding: 0;
        justify-content: center;
        vertical-align: middle;
        text-align: center;
    `};
    
    @media (max-width: 720px) {
        user-select: none;
        max-width: 500px;
        width: 100%;
        display: block;
        border: none;
        border-bottom: 1px solid white; 
        position: relative;
        text-align: right;
    }
    
    @media (max-width: 528px) {
        max-width: 300px;
        width: 100%;
    }
`;

export const TableHead = styled.thead`
    background-color: #96d7ff;
    
    @media (max-width: 720px) {
        display: none;
    }
`;

export const StyledCaption = styled.caption`
    color: black;
    padding: 20px;
    font-family: Roboto Condensed, serif;   
    font-size: 15px;
    
    @media (max-width: 720px) {
        display: none;
    }
`;

export const SubHeader = styled.span`
    color: black;
    font-size: 12px;
    font-weight: 300;
    white-space: pre-wrap;
`;

export const StyledFooterDiv = styled.div`   
    font-family: Roboto Condensed, serif;
`;

export const StyledFooterText = styled.span`
    color: deepskyblue;
    font-weight: bold;    
`;
