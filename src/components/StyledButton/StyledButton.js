import styled from "styled-components";
import PropTypes from 'prop-types';

export const StyledButton = styled.button`
    cursor: pointer;
    background-color: white;
    outline: none;
    font-family: Roboto Condensed, serif;
    font-weight: bold;
    font-size: ${({fontSize}) => fontSize ?? 11}px;
    padding: 2px 10px 2px 10px;
    color: black;
    border: 0;
    border-right: 1px deepskyblue solid;
    background-size: 200% 100%;
    background-image: linear-gradient(to left, deepskyblue 50%, white 50%);
    background-position: left bottom;
    transition: background-position 1s;
    
    &:before {
        content: "// ";
        color: deepskyblue;
        letter-spacing: 2px;
    }
    
    &:hover {
        color: white;
        border-right: 2px black solid;
        background-position: right bottom;
        
        &:before {
            color: black;
        }
    }
`;

StyledButton.propTypes = {
    fontSize: PropTypes.number
};
