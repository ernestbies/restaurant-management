import styled, {css} from 'styled-components';

export const StyledTable = styled.table`
    height: 400px;
    width: 1000px;
    border: 1px solid black;     
    background-color: white;
    margin: 0 auto;
    margin-bottom: 30px;
    border-collapse: collapse;
    font-family: Roboto Condensed, serif;   
    font-weight: 300;
    font-size: 15px;
`;

export const TableBody = styled.tbody``;

export const TableFooter = styled.tfoot``;

export const TableHead = styled.thead`
    background-color: #96d7ff;
`;

export const StyledTr = styled.tr`
    border: 1px solid black;
    
    &:nth-child(even) {
        background-color: #dddddd;
    }
`;

export const StyledTh = styled.th`
    border: 1px solid black;
    color: black;
    height: 60px;
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
`;

export const StyledCaption = styled.caption`
    color: black;
    padding: 20px;
    font-family: Roboto Condensed, serif;   
    font-size: 15px;
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
