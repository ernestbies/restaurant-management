import Navbar from "../../parts/Navbar/Navbar";
import Footer from "../../parts/Footer/Footer";
import React, {useState, useEffect} from "react";
import Header from "../../components/Header/Header";
import {MenuContainer} from "../../components/Menu/Menu.styles";
import {Quote} from "../../components/Quote/Quote";
import SiteContent from "../../components/SiteContent/SiteContent";
import Subheader from "../../components/Subheader/Subheader";
import {StyledButton} from "../../components/StyledButton/StyledButton";
import {Link} from "react-router-dom";
import {Logo} from "../../components/Logo/Logo";
import {ServerInput} from "./Settings.styles";
import {DEFAULT_API_URL, getApiUrl} from "../../helpers/fetchData";
import Alert from "../../components/Alert/Alert";

const Settings = () => {

    const [fetchUrl, setFetchUrl] = useState('');
    const [alertId, setAlertId] = useState('');

    useEffect(() => {
        let url = getApiUrl();
        setFetchUrl(url);
    }, []);

    const saveChanges = () => {
        if(fetchUrl && fetchUrl !== DEFAULT_API_URL) {
            setAlertId(fetchUrl);
            localStorage.setItem('server_api', fetchUrl);
        }
    }

    const reset = () => {
        if(fetchUrl !== DEFAULT_API_URL) {
            setFetchUrl(DEFAULT_API_URL);
            setAlertId(DEFAULT_API_URL);
            localStorage.removeItem('server_api');
        }
    }

    return (
        <SiteContent>
            <Navbar/>
            <MenuContainer>
                <Header/>
                <Subheader type={'settings'}/>
                <ServerInput onChange={(e) => setFetchUrl(e.target.value)}
                             placeholder={'API server IP address'}
                             value={fetchUrl}
                />
                <StyledButton onClick={saveChanges} style={{marginTop: 50}} fontSize={13}>{'SAVE CHANGES'}</StyledButton>
                <StyledButton onClick={reset} style={{marginTop: 25}} fontSize={13}>{'RESET TO DEFAULT API SERVER'}</StyledButton>
                <Link to={'/'} style={{marginTop: 25}}>
                    <StyledButton fontSize={13}>{'BACK TO THE MAIN PAGE'}</StyledButton>
                </Link>
                <Logo/>
                <Quote/>
                <Alert alertIdentifier={alertId}/>
            </MenuContainer>
            <Footer/>
        </SiteContent>
    )
};

export default Settings;
