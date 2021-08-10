import styled from 'styled-components';

export const ContactInfoContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    margin-left: 10px;
    margin-right: 10px;
    text-align: center;
    padding-top: 30px;
`;

export const StyledText = styled.p`
    color: black;
    font-family: Roboto Condensed, serif;
    font-weight: 300;
    font-size: 12px;
`;

export const FormattedText = styled.a`
    font-weight: bold;
    color: deepskyblue; 
    text-decoration: none!important;  
`;
