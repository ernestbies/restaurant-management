import React from "react";
import {LogoContainer, StyledLink, StyledLogo} from "./Logo.styles";
import {MAIN_WEBSITE_URL} from "../../helpers/fetchData";

export const Logo = () => {

    return (
        <LogoContainer href={MAIN_WEBSITE_URL} title={'Ernest Bieś - official website'}>
            <StyledLogo src={'eb-logo.svg'} alt={'EB'}/>
            <StyledLink>{'ERNEST BIEŚ'}</StyledLink>
        </LogoContainer>
    );
};
