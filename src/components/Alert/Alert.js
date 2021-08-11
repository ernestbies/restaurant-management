import React, {useState, useEffect} from "react";
import {
    AlertText,
    AlertTitle,
    ColoredText,
    ColoredSpan,
    StyledAlert,
    StyledSpan,
    StyledTitle,
    TitleWrapper
} from "./Alert.styles";
import {StyledLogo} from "../Header/Header.styles";
import PropTypes from 'prop-types';

const Alert = ({alertIdentifier}) => {

    const [visible, setVisible] = useState(false);

    useEffect(() => {
        alertIdentifier && setVisible(true);
    }, [alertIdentifier]);

    return (
        <StyledAlert key={alertIdentifier} visible={visible}>
            <TitleWrapper>
                <StyledLogo src={'/restaurant.png'} style={{margin: 0}} height={16} width={16}/>
                <StyledTitle>{'RMS'}<StyledSpan>{' alert'}</StyledSpan></StyledTitle>
            </TitleWrapper>
            <AlertTitle><ColoredText>{'//'}</ColoredText>{' Successfully changed'}</AlertTitle>
            <AlertText>{'The IP address has been successfully changed.\nNew IP address: '}
                <ColoredSpan>{alertIdentifier}</ColoredSpan></AlertText>
        </StyledAlert>
    );
};

Alert.propTypes = {
    alertIdentifier: PropTypes.string.isRequired
};

Alert.defaultProps = {
    alertIdentifier: ''
};

export default Alert;
