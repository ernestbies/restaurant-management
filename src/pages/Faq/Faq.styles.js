import styled from 'styled-components';

export const FaqTitle = styled.p`
    color: deepskyblue;
    font-family: Roboto Condensed, serif;
    font-weight: bold;
    font-size: 15px;
    letter-spacing: 1px;
    width: 100%;
    text-align: center;
`;

export const FaqContainer = styled.div`
    max-width: 950px;
    width: 100%;
`;

export const FaqRow = styled.div``;

export const FaqItem = styled.div`
    display: flex;
    flex-direction: column;
`;

export const StyledRow = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    margin: 15px;
`;

export const QuestionText = styled.p`
    color: deepskyblue;
    font-family: Roboto Condensed, serif;
    font-size: 14px;
    margin: 0;
`;

export const QuestionId = styled.p`
    color: black;
    font-family: Indie Flower, serif;
    font-size: 45px;
    margin: 0;
    width: 35px;
`;

export const QuestionIdWrapper = styled.div`
    width: 50px;
    display: flex;
    margin-right: 10px;
`;

export const AnswerText = styled.p`
    color: black;
    font-family: Roboto Condensed, serif;
    font-weight: 300;
    font-size: 13px;
    margin: 0;
    margin-top: 5px;
`;
