import React, {useState, useEffect} from "react";
import {
    StyledCaption,
    StyledFooterDiv,
    StyledFooterText,
    StyledTable,
    StyledTd,
    StyledTh,
    StyledTr,
    SubHeader,
    TableBody,
    TableFooter,
    TableHead
} from "./ProductTable.styles";
import {FormSelect, StyledOption} from "../ProductForm/ProductForm.styles";
import {faPencilAlt, faTrashAlt} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {deleteProduct, fetchProducts} from "../../helpers/fetchData";
import {Link} from "react-router-dom";

const ProductTable = () => {

    const [products, setProducts] = useState([]);
    const [type, setType] = useState('all');
    const [deletedIds, setDeletedIds] = useState([]);

    useEffect(() => {
        fetchProducts().then((res) => setProducts(res));
    }, []);

    const filterProducts = () => products
        .filter(e => deletedIds.indexOf(e.id) === -1)
        .filter(e => type === 'all' ? e : (e.type === type));

    const renderCells = () => {
        return filterProducts().map(e =>
            <StyledTr key={e.id}>
                <StyledTd>{e.id}</StyledTd>
                <StyledTd>{e.name}</StyledTd>
                <StyledTd>{e.preparation_time}</StyledTd>
                <StyledTd>{e.number_of_slices ?? '--'}</StyledTd>
                <StyledTd>{e.diameter ?? '--'}</StyledTd>
                <StyledTd>{e.spiciness_scale ?? '--'}</StyledTd>
                <StyledTd>{e.slices_of_bread ?? '--'}</StyledTd>
                <StyledTd actionContainer>
                    <Link to={{
                        pathname: '/edit-dish/' + e.id,
                        state: {
                            productInfo: {
                                id: e.id,
                                name: e.name,
                                type: e.type,
                                preparation_time: e.preparation_time,
                                number_of_slices: e.number_of_slices,
                                diameter: e.diameter,
                                spiciness_scale: e.spiciness_scale,
                                slices_of_bread: e.slices_of_bread,
                            }
                        }
                    }}
                          style={{color: 'black'}}>
                        <FontAwesomeIcon style={{marginLeft: 10, marginRight: 10, cursor: 'pointer'}}
                                         icon={faPencilAlt}/>
                    </Link>
                    <FontAwesomeIcon onClick={() => deleteItem(e.id)}
                        style={{marginLeft: 10, marginRight: 10, cursor: 'pointer'}} icon={faTrashAlt}/>
                </StyledTd>
            </StyledTr>)
    };

    const deleteItem = (id) => {
        deleteProduct(id).then((res) => {
            if(res.status === 204) {
                setDeletedIds(prevState => [...prevState, id]);
            }
        });
    };

    return (<StyledTable>
        <StyledCaption>{'List of dishes in database'}</StyledCaption>
        <TableHead>
            <StyledTr>
                <StyledTh>{'Dish identifier (ID)'}<SubHeader>{'\n{mongo_id}'}</SubHeader></StyledTh>
                <StyledTh style={{width: '20%'}}>{'Dish name'}<SubHeader>{'\n{string}'}</SubHeader></StyledTh>
                <StyledTh>{'Preparation time'}<SubHeader>{'\n{format: HH:mm:ss}'}</SubHeader></StyledTh>
                <StyledTh>{'Number of slices'}<SubHeader>{'\n{integer}'}</SubHeader></StyledTh>
                <StyledTh>{'Diameter'}<SubHeader>{'\n{float}'}</SubHeader></StyledTh>
                <StyledTh>{'Spiciness scale'}<SubHeader>{'\n{range: 1 - 10}'}</SubHeader></StyledTh>
                <StyledTh>{'Slices of bread'}<SubHeader>{'\n{integer}'}</SubHeader></StyledTh>
                <StyledTh style={{width: '10%'}}>{'Type'}
                    <FormSelect onChange={(event) => setType(event.target.value)}
                                style={{margin: 0}} fontFamily={'Roboto Condensed'}
                    >
                        <StyledOption value={'all'}>{'All'}</StyledOption>
                        <StyledOption value={'pizza'}>{'Pizza'}</StyledOption>
                        <StyledOption value={'soup'}>{'Soup'}</StyledOption>
                        <StyledOption value={'sandwich'}>{'Sandwich'}</StyledOption>
                    </FormSelect>
                </StyledTh>
            </StyledTr>
        </TableHead>
        <TableBody>
            {
                renderCells()
            }
        </TableBody>
        <TableFooter>
            <StyledTr>
                <StyledTd>
                    <StyledFooterDiv>{'Number of items: '}<StyledFooterText>{filterProducts().length}</StyledFooterText></StyledFooterDiv>
                </StyledTd>
                <StyledTd>
                    <StyledFooterDiv>{'Selected dish type: '}<StyledFooterText>{type}</StyledFooterText></StyledFooterDiv>
                </StyledTd>
            </StyledTr>
        </TableFooter>
    </StyledTable>);
};

export default ProductTable;
