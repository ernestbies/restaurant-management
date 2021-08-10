import React from "react";
import {MainPage} from "../Main/Main.styles";
import Navbar from "../../parts/Navbar/Navbar";
import Footer from "../../parts/Footer/Footer";
import ProductForm from "../../components/ProductForm/ProductForm";
import {AddProductContainer} from "./AddProduct.styles";
import AddProductInfo from "../../components/AddProductInfo/AddProductInfo";
import {ProductFormWrapper} from "../../components/ProductForm/ProductForm.styles";
import {Quote} from "../../components/Quote/Quote";

const AddProduct = () => {
    return (
        <MainPage>
            <Navbar/>
            <AddProductContainer>
                <ProductFormWrapper>
                    <ProductForm/>
                </ProductFormWrapper>
                <AddProductInfo/>
            </AddProductContainer>
            <Quote/>
            <Footer/>
        </MainPage>)
};

export default AddProduct;
