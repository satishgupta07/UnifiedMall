import styled from '@emotion/styled';
import { Box, InputBase, List, ListItem } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { getProducts } from '../../redux/actions/productActions';
import { Link } from 'react-router-dom';

const SearchContainer = styled(Box)`
    background: #fff;
    width: 38%;
    border-radius: 2px;
    margin-left: 10px;
    display: flex;
`

const InputSearchBase = styled(InputBase)`
    padding-left: 20px;
    width: 100%;
`

const SearchIconWrapper = styled(Box)`
    color: #26a69a;
    padding: 5px;
    display: flex;
`

const ListWrapper = styled(List)`
    position: absolute;
    background: #FFFFFF;
    color: #000;
    margin-top: 36px;
`

const Search = () => {

    const [text, setText] = useState('');

    const { products } = useSelector(state => state.getProducts);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getProducts())
    }, [dispatch])

    const getText = (text) => {
        setText(text);
    }

  return (
    <SearchContainer>
        <InputSearchBase 
            placeholder='Search for products, brands and more'
            onChange={(e) => getText(e.target.value)}
            value={text}
        />
        <SearchIconWrapper>
            <SearchIcon />
        </SearchIconWrapper>
        {
            text && 
                <ListWrapper>
                    {
                        products.products.filter(product => product.title.longTitle.toLowerCase().includes(text.toLowerCase())).map(product => (
                            <ListItem>
                                <Link 
                                    to={`/product/${product.id}`}
                                    onClick={() => setText('')}
                                    style={{ textDecoration: 'none', color: 'inherit'}}
                                >  
                                    {product.title.longTitle}
                                </Link>
                            </ListItem>
                        ))
                    }
                </ListWrapper>
        }
    </SearchContainer>
  )
}

export default Search;