import styled from 'styled-components';
import PropTypes from 'prop-types';

export const AddProductInfoContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    flex: 1;
`;

export const ButtonWrapper = styled.div`
    display: flex;
    flex-direction: row;
    margin-top: 50px;
`;

export const InfoTitle = styled.p`
    color: deepskyblue;
    font-family: Indie Flower, serif;
    font-size: 28px;
`;

export const InfoText = styled.p`
    color: black;
    font-family: Roboto Condensed, serif;
    font-size: 13px;    
    font-weight: 300;
    line-height: 150%;
`;

export const FormattedInfoText = styled.span`
    color: ${({color}) => color ?? 'deepskyblue'};
    font-family: ${({font}) => font ?? 'Roboto Condensed'}, serif;
    font-weight: bold;
`;

FormattedInfoText.propTypes = {
    color: PropTypes.string
};
