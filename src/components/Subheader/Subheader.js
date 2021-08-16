import {StyledSubheader, StyledSubheaderWrapper} from "./Subheader.styles";
import React from "react";
import PropTypes from 'prop-types';
import {FormattedInfoText} from "../AddProductInfo/AddProductInfo.styles";
import {Link} from "react-router-dom";
import {FormattedText} from "../ContactInfo/ContactInfo.styles";

const Subheader = ({type}) => {

    const subheaders = {
        info: 'Restaurant Management System (RMS) allows you to add and modify products as well as manage the database from the level of a web browser.',
        settings: 'Restaurant Management System (RMS) allows you to change the API server. Enter the IP address of the API server providing information about the products.',
        not_found: 'Requested page does not exists.'
    }

    return (
        <StyledSubheaderWrapper>
            <StyledSubheader>{type === 'not_found' && <FormattedText>{'404 Page Not Found: '}</FormattedText>}{subheaders[type]}</StyledSubheader>
            {type === 'settings' && <StyledSubheader style={{marginTop: 0, marginBottom: 0}}>
                {'The server providing information about the dishes should accept the data in JSON format as specified in the '}
                <Link to={'/faq'} style={{textDecoration: 'none'}}><FormattedInfoText>{'FAQ'}</FormattedInfoText></Link>{'.'}
            </StyledSubheader>}
            {type === 'not_found' && <StyledSubheader style={{marginTop: 0, marginBottom: 0}}>
                {'In order to learn about the application\'s operation, please visit the '}
                <Link to={'/faq'} style={{textDecoration: 'none'}}><FormattedInfoText>{'FAQ'}</FormattedInfoText></Link>{'.'}
            </StyledSubheader>}
        </StyledSubheaderWrapper>
    );
};

Subheader.propTypes = {
    type: PropTypes.oneOf(['info', 'settings', 'not_found']).isRequired
}

export default Subheader;
