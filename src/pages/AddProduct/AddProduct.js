import React from "react";
import Navbar from "../../parts/Navbar/Navbar";
import Footer from "../../parts/Footer/Footer";
import ProductForm from "../../components/ProductForm/ProductForm";
import {AddProductContainer} from "./AddProduct.styles";
import AddProductInfo from "../../components/AddProductInfo/AddProductInfo";
import {ProductFormWrapper} from "../../components/ProductForm/ProductForm.styles";
import {Quote} from "../../components/Quote/Quote";
import SiteContent from "../../components/SiteContent/SiteContent";
import {Logo} from "../../components/Logo/Logo";

const AddProduct = () => {
    return (
        <SiteContent>
            <Navbar/>
            <AddProductContainer>
                <ProductFormWrapper>
                    <ProductForm/>
                </ProductFormWrapper>
                <AddProductInfo/>
                <Logo/>
                <Quote/>
            </AddProductContainer>
            <Footer/>
        </SiteContent>
    );
};

export default AddProduct;
