import React from "react";
import {HttpQueryBox, HttpQueryType, QueryDesc, QueryLink} from "./HttpQuery.styles";
import PropTypes from 'prop-types';

const HttpQuery = ({type, query, desc}) => {
    return (<HttpQueryBox type={type}>
        <HttpQueryType type={type}>{type.toUpperCase()}</HttpQueryType>
        <QueryLink>{query}</QueryLink>
        <QueryDesc type={type}>{desc}</QueryDesc>
    </HttpQueryBox>);
};

HttpQuery.propTypes = {
    type: PropTypes.oneOf(['get', 'post', 'put', 'delete']).isRequired,
    query: PropTypes.string.isRequired,
    desc: PropTypes.string.isRequired
};

HttpQuery.defaultProps = {
    type: 'get'
};

export default HttpQuery;
