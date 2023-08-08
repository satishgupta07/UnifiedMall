import styled from '@emotion/styled'
import { AppBar, Box, Toolbar, Typography } from '@mui/material'
import React from 'react'
import Search from './Search'
import CustomButtons from './CustomButtons'
import { Link } from 'react-router-dom'

const StyledHeader = styled(AppBar)`
    background: #26a69a;
    height: 55px;
`

const BoxComponent = styled(Link)`
    margin-left: 12%;
    line-height: 0;
    text-decoration: none;
    color: inherit;
`

const SubHeading = styled(Typography)`
    font-size: 10px;
    font-style: italic;
`

const PlusImage = styled('img')({
    width: 10,
    height: 10,
    marginLeft: 4,
    marginTop: 2
})

const CustomButtonWrapper = styled(Box)`
    margin: 0 5% 0 auto;
`

const Header = () => {

  const logoURL = 'https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/flipkart-plus_8d85f4.png';
  const subURL = 'https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/plus_aef861.png';

  return (
    <StyledHeader>
        <Toolbar style={{ minHeight: 55 }}>
            <BoxComponent to='/'>
                <img src={logoURL} alt='logo' style={{width: 75}} />
                <Box style={{display: 'flex'}}>
                    <SubHeading>Explore&nbsp; 
                        <Box component="span" style={{ color: '#FFE500'}} >plus</Box>
                    </SubHeading>
                    <PlusImage src={subURL} alt='sub-logo' />
                </Box>
            </BoxComponent>
            <Search />
            <CustomButtonWrapper>
                <CustomButtons />
            </CustomButtonWrapper>
        </Toolbar>
    </StyledHeader>
  )
}

export default Header
