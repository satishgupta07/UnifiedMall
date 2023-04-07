import styled from '@emotion/styled';
import { Box, InputBase } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import React from 'react'

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

const Search = () => {
  return (
    <SearchContainer>
        <InputSearchBase placeholder='Search for products, brands and more' />
        <SearchIconWrapper>
            <SearchIcon />
        </SearchIconWrapper>
    </SearchContainer>
  )
}

export default Search;