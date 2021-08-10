import React from "react";
import './Navbar.styles.css';
import {WEBSITE_URL} from "../../helpers/fetchData";

const Navbar = () => {

    return (<div className={'navbar'}>
        <a className={'nav-link'} title={'Restaurant management system'} href={WEBSITE_URL}>
            <img alt={'logo'} src={'/restaurant.png'} style={{filter: 'invert(100%) hue-rotate(0deg)', marginLeft: 10}}
                 width={28} height={28}/>
            <span className={'header-text'}>{'Restaurant management system'}</span>
        </a>
    </div>);
};

export default Navbar;
