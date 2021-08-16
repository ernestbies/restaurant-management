import Navbar from "../../parts/Navbar/Navbar";
import Footer from "../../parts/Footer/Footer";
import React from "react";
import Header from "../../components/Header/Header";
import {MenuContainer} from "../../components/Menu/Menu.styles";
import {Quote} from "../../components/Quote/Quote";
import SiteContent from "../../components/SiteContent/SiteContent";
import {Link} from "react-router-dom";
import {StyledButton} from "../../components/StyledButton/StyledButton";
import {Logo} from "../../components/Logo/Logo";
import ProductTable from "../../components/ProductTable/ProductTable";

const ManageProducts = () => {
    return (
        <SiteContent>
            <Navbar/>
            <MenuContainer>
                <Header/>
                <ProductTable/>
                <Link to={'/add-dish'} style={{marginTop: 5}}>
                    <StyledButton fontSize={13}>{'ADD NEW PRODUCT'}</StyledButton>
                </Link>
                <Link to={'/'} style={{marginTop: 25, marginBottom: 140}}>
                    <StyledButton fontSize={13}>{'BACK TO THE MAIN PAGE'}</StyledButton>
                </Link>
                <Logo/>
                <Quote/>
            </MenuContainer>
            <Footer/>
        </SiteContent>
    )
};

export default ManageProducts;
