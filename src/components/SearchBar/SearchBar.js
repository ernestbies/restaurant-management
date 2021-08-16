import React from "react";
import {StyledSearchBar} from "./SearchBar.styles";
import PropTypes from 'prop-types';

const SearchBar = ({text, onChange}) =>
    <StyledSearchBar value={text} onChange={onChange} placeholder={'Type dish name...'}/>;

SearchBar.propTypes = {
    text: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired
};

export default SearchBar;
