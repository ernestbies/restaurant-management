import React, {useState, useEffect} from "react";
import {
    AddProductInfoContainer,
    ButtonWrapper,
    FormattedInfoText,
    InfoSubtitle,
    InfoText,
    InfoTitle
} from "./AddProductInfo.styles";
import {formStatusList} from "../ProductForm/ProductForm";
import {StyledButton} from "../StyledButton/StyledButton";
import {Link, useLocation} from "react-router-dom";

const AddProductInfo = () => {

    const [type, setType] = useState('add');
    const location = useLocation();

    useEffect(() => {
        location.pathname.includes('edit') ? setType('edit') : setType('add');
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    const renderStatusList = () => {
        return Object.keys(formStatusList).filter(e => e.includes(type) || e === 'clear').map(e =>
            <InfoText key={e} style={{margin: 0}}>
                <FormattedInfoText color={formStatusList[e].color} font={'Indie Flower'}>
                    {'> ' + formStatusList[e].text}
                </FormattedInfoText>
            </InfoText>
        );
    };

    return (<AddProductInfoContainer>
        <InfoTitle>{type === 'add' ? 'Adding new product' : 'Editing existing product'}</InfoTitle>
        <InfoSubtitle>{type === 'add' ? '' : 'Product identifier: ' + location.pathname.replace('/edit-dish/', '')}</InfoSubtitle>
        <InfoText>{`In order to ${type} a dish to the database, select the appropriate product category - `}
        <FormattedInfoText>{'Pizza'}</FormattedInfoText>{', '}<FormattedInfoText>{'Soup'}</FormattedInfoText>
            {' or '}<FormattedInfoText>{'Sandwich'}</FormattedInfoText>{'. After selecting the appropriate category, complete all the data.' +
            'The appropriate format is given next to each item. After completing all the required data, ' +
            'it is possible to enter the dish into the database by pressing the '}<FormattedInfoText>{`${type} dish`}</FormattedInfoText>
            {' button or reset it by pressing the '}<FormattedInfoText color={'red'}>{'clear data'}</FormattedInfoText>{' button. ' +
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
