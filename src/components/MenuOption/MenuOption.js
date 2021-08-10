import React from "react";
import {
    SectionLogo,
    SectionLogoContainer,
    StyledHeader,
    StyledOption,
    StyledSubheader
} from "./MenuOption.styles";
import {StyledButton} from "../StyledButton/StyledButton";
import {Link} from "react-router-dom";

const MenuOption = ({type}) => {

    const types = {
        manage: {
            img: '/food.png',
            header: '· Browse products ·',
            subheader: 'Manage the stock of products in your restaurant. Add, modify and delete products.',
            style: {width: 120, height: 120},
            link: 'products'
        },
        add: {
            img: '/fast-food.png',
            header: '· Add products ·',
            subheader: 'Select the appropriate product type, fill in all the data and add the product.',
            style: {width: 75, height: 75},
            link: 'add-dish'
        },
        faq: {
            img: '/faq.png',
            header: '· FAQ ·',
            subheader: 'How it\'s working? Check the list of questions and answers about the operation of the system.',
            style: {width: 75, height: 75, filter: 'hue-rotate(200deg)'},
            link: 'faq'
        },
        settings: {
            img: '/settings.png',
            header: '· Settings ·',
            subheader: 'Change the server settings that provide information about the restaurant\'s products.',
            style: {width: 60, height: 60, filter: 'invert(30%)'},
            link: 'settings'
        }
    };

    return (<StyledOption>
        <SectionLogoContainer>
            <SectionLogo src={types[type].img} style={types[type].style}/>
        </SectionLogoContainer>
        <StyledHeader>{types[type].header}</StyledHeader>
        <StyledSubheader>{types[type].subheader}</StyledSubheader>
        <Link to={types[type].link}>
            <StyledButton>{'GO TO THE PAGE'}</StyledButton>
        </Link>
    </StyledOption>)
};

export default MenuOption;
