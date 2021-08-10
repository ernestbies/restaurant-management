import React from "react";
import {MenuContainer, StyledMenu} from "./Menu.styles";
import MenuOption from "../MenuOption/MenuOption";
import Header from "../Header/Header";
import Subheader from "../Subheader/Subheader";
import ContactInfo from "../ContactInfo/ContactInfo";
import {Quote} from "../Quote/Quote";
import {Logo} from "../Logo/Logo";

const Menu = () => {
    return (
        <MenuContainer>
            <Header/>
            <Subheader type={'info'}/>
            <StyledMenu>
                <MenuOption type={'manage'}/>
                <MenuOption type={'add'}/>
                <MenuOption type={'faq'}/>
                <MenuOption type={'settings'}/>
            </StyledMenu>
            <ContactInfo/>
            <Logo/>
            <Quote/>
        </MenuContainer>);
};

export default Menu;
