import React from "react";
import {LogoContainer, StyledLink, StyledLogo} from "./Logo.styles";

export const Logo = () => {

    const WEBSITE_URL = 'ernestbies.com'

    return (
        <LogoContainer href={'localhost:3000'} title={WEBSITE_URL}>
            <StyledLogo>{'> eb'}</StyledLogo>
            <StyledLink>{WEBSITE_URL}</StyledLink>
        </LogoContainer>
    );
};
