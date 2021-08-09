import React from "react";
import {LogoContainer, StyledLink, StyledLogo} from "./Logo.styles";
import PropTypes from 'prop-types';

export const Logo = ({width, height}) => {

    const LOGO_URL = '/logo.png';
    const WEBSITE_URL = 'ernestbies.com'

    return (
        <LogoContainer href={'localhost:3000'}>
            <StyledLogo alt={'logo'} src={LOGO_URL} width={width} height={height}/>
            <StyledLink>{WEBSITE_URL}</StyledLink>
        </LogoContainer>);
}

Logo.propTypes = {
    width: PropTypes.number,
    height: PropTypes.number,
}

Logo.defaultProps = {
    width: 28,
    height: 28,
}

