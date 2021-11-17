import React from "react";
import {ContactInfoContainer, FormattedText, StyledText} from "./ContactInfo.styles";
import {MAIN_WEBSITE_URL} from "../../helpers/fetchData";

const ContactInfo = () => {
    return (<ContactInfoContainer>
        <StyledText>{'Check also other projects presented on '}<FormattedText href={MAIN_WEBSITE_URL}>{'my website'}</FormattedText>
        {' or contact me via e-mail at '}<FormattedText href={'mailto:ernestbies@gmail.com'}>{'ernestbies@gmail.com'}</FormattedText>{'.'}</StyledText>
    </ContactInfoContainer>);
};

export default ContactInfo;
