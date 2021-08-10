import React from "react";
import {LogoContainer, StyledLink, StyledLogo} from "./Logo.styles";
import {MAIN_WEBSITE_URL} from "../../helpers/fetchData";

export const Logo = () => {

    return (
        <LogoContainer href={MAIN_WEBSITE_URL} title={'ernestbies.com'}>
            <StyledLogo>{'> eb'}</StyledLogo>
            <StyledLink>{'ernestbies.com'}</StyledLink>
        </LogoContainer>
    );
};
