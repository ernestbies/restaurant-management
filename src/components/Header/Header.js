import React from "react";
import {HeaderContainer, StyledLogo, StyledText} from "./Header.styles";

const Header = () => {
    return (<HeaderContainer><StyledLogo src={'/restaurant.png'} height={60} width={60}/>
                          <StyledText>{'Restaurant management system'}</StyledText></HeaderContainer>)
};

export default Header;
