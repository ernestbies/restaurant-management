import React from "react";
import {MenuContainer, StyledMenu} from "./Menu.styles";
import MenuOption from "../MenuOption/MenuOption";
import Header from "../Header/Header";
import Subheader from "../Subheader/Subheader";
import ContactInfo from "../ContactInfo/ContactInfo";
import {Quote} from "../Quote/Quote";

const Menu = () => {
    return (
        <MenuContainer>
            <Header/>
            <Subheader/>
            <StyledMenu>
                <MenuOption type={'manage'}/>
                <MenuOption type={'add'}/>
                <MenuOption type={'faq'}/>
                <MenuOption type={'settings'}/>
            </StyledMenu>
            <ContactInfo/>
            <Quote/>
        </MenuContainer>);
};

export default Menu;
