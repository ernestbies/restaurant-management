import React from "react";
import {AddProductInfoContainer, ButtonWrapper, FormattedInfoText, InfoText, InfoTitle} from "./AddProductInfo.styles";
import {formStatusList} from "../ProductForm/ProductForm";
import {StyledButton} from "../StyledButton/StyledButton";
import {Link} from "react-router-dom";

const AddProductInfo = () => {

    const renderStatusList = () => {
        return Object.keys(formStatusList).map(e =>
            <InfoText key={e} style={{margin: 0}}>
                <FormattedInfoText color={formStatusList[e].color} font={'Indie Flower'}>
                    {'> ' + formStatusList[e].text}
                </FormattedInfoText>
            </InfoText>
        );
    };

    return (<AddProductInfoContainer>
        <InfoTitle>{'Adding new product'}</InfoTitle>
        <InfoText>{'In order to add a new dish to the database, select the appropriate product category - '}
        <FormattedInfoText>{'Pizza'}</FormattedInfoText>{', '}<FormattedInfoText>{'Soup'}</FormattedInfoText>
            {' or '}<FormattedInfoText>{'Sandwich'}</FormattedInfoText>{'. After selecting the appropriate category, complete all the data.' +
            'The appropriate format is given next to each item. After completing all the required data, ' +
            'it is possible to enter the dish into the database by pressing the '}<FormattedInfoText>{'Add dish'}</FormattedInfoText>
            {' button or reset it by pressing the '}<FormattedInfoText color={'red'}>{'Clear data'}</FormattedInfoText>{' button. ' +
            'After confirming the change, the status will be displayed on the form informing you whether the operation was successful.'}</InfoText>
        <InfoText>{'List of available form statuses:'}</InfoText>
        {renderStatusList()}
        <ButtonWrapper>
            <Link to={'/'}>
                <StyledButton fontSize={13}>{'BACK TO THE MAIN PAGE'}</StyledButton>
            </Link>
            <Link to={'/products'}>
                <StyledButton fontSize={13} style={{marginLeft: 50}}>{'MANAGE PRODUCTS'}</StyledButton>
            </Link>
        </ButtonWrapper>
    </AddProductInfoContainer>);
};

export default AddProductInfo;
