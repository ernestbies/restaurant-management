import React from "react";
import Navbar from "../../parts/Navbar/Navbar";
import Footer from "../../parts/Footer/Footer";
import Menu from "../../components/Menu/Menu";
import SiteContent from "../../components/SiteContent/SiteContent";

const Main = () => {
    return (
        <SiteContent>
            <Navbar/>
            <Menu/>
            <Footer/>
        </SiteContent>
    );
}

export default Main;
