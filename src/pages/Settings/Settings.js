import Navbar from "../../parts/Navbar/Navbar";
import Footer from "../../parts/Footer/Footer";
import React from "react";
import Header from "../../components/Header/Header";
import {MenuContainer} from "../../components/Menu/Menu.styles";
import {Quote} from "../../components/Quote/Quote";
import SiteContent from "../../components/SiteContent/SiteContent";
import Subheader from "../../components/Subheader/Subheader";
import {StyledButton} from "../../components/StyledButton/StyledButton";
import {Link} from "react-router-dom";
import {Logo} from "../../components/Logo/Logo";
import {ServerInput} from "./Settings.styles";

const Settings = () => {
    return (
        <SiteContent>
            <Navbar/>
            <MenuContainer>
                <Header/>
                <Subheader type={'settings'}/>
                <ServerInput placeholder={'API server IP address'}/>
                <Link to={'/'} style={{marginTop: 50}}>
                    <StyledButton fontSize={13}>{'BACK TO THE MAIN PAGE'}</StyledButton>
                </Link>
                <Logo/>
                <Quote/>
            </MenuContainer>
            <Footer/>
        </SiteContent>
    )
};

export default Settings;
