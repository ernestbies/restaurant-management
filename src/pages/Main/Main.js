import React from "react";
import Navbar from "../../parts/Navbar/Navbar";
import Footer from "../../parts/Footer/Footer";
import {MainPage} from "./Main.styles";
import Menu from "../../components/Menu/Menu";

const Main = () => {
    return (
        <MainPage>
            <Navbar/>
            <Menu/>
            <Footer/>
        </MainPage>
    );
}

export default Main;
