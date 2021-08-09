import React from "react";
import {ContactInfoContainer, FormattedText, StyledText} from "./ContactInfo.styles";
import {Logo} from "../Logo/Logo";

const ContactInfo = () => {
    return (<ContactInfoContainer>
        <StyledText>{'Check also other projects presented on '}<FormattedText href={'localhost:3000'}>{'my website'}</FormattedText>
        {' or contact me via e-mail at '}<FormattedText href={'mailto:contact@ernestbies.com'}>{'contact@ernestbies.com'}</FormattedText>{'.'}</StyledText>
        <Logo/>
    </ContactInfoContainer>);
};

export default ContactInfo;
