import React from "react";
import './Navbar.styles.css';
import {Logo} from "../../components/Logo/Logo";

const Navbar = () => {

    return (<div className={'navbar'}>
        <img alt={'logo'} src={'/restaurant.png'} style={{filter: 'invert(100%) hue-rotate(0deg)', marginLeft: 5}}
             width={28} height={28}/>
        <span className={'header-text'}>{'Restaurant management system'}</span><Logo/>
    </div>);
};

export default Navbar;
