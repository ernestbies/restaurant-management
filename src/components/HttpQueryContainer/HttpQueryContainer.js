import React from "react";
import {StyledContainer} from "./HttpQueryContainer.styles";
import HttpQuery from "../HttpQuery/HttpQuery";
import {DEFAULT_API_URL} from "../../helpers/fetchData";

const HttpQueryContainer = () => {
    return (<StyledContainer>
        <HttpQuery type={'get'} query={DEFAULT_API_URL} desc={'Get all dishes'}/>
        <HttpQuery type={'get'} query={DEFAULT_API_URL + '/{id}'} desc={'Get dish with ID'}/>
        <HttpQuery type={'post'} query={DEFAULT_API_URL} desc={'Create new dish'}/>
        <HttpQuery type={'put'} query={DEFAULT_API_URL + '/{id}'} desc={'Update dish with ID'}/>
        <HttpQuery type={'delete'} query={DEFAULT_API_URL + '/{id}'} desc={'Delete dish with ID'}/>
    </StyledContainer>);
};

export default HttpQueryContainer;
