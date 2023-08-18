import { AppBar, Box, Drawer, IconButton, List, ListItemButton, Toolbar, Typography, styled } from '@mui/material'
import React, { useState } from 'react'
import Search from './Search'
import CustomButtons from './CustomButtons'
import { Link } from 'react-router-dom'
import { Menu } from '@mui/icons-material'

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

const CustomButtonWrapper = styled(Box)(({ theme }) => ({
    margin: '0 5% 0 auto',
    [theme.breakpoints.down('md')]: {
        display: 'none'
    }
}))

const MenuButton = styled(IconButton)(({ theme }) => ({
    display: 'none',
    [theme.breakpoints.down('md')]: {
        display: 'block'
    }
}))

const Header = () => {

  const logoURL = 'https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/flipkart-plus_8d85f4.png';
  const subURL = 'https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/plus_aef861.png';

  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(true);
  }

  const handleClose = () => {
    setOpen(false);
  }

  return (
    <StyledHeader>
        <Toolbar style={{ minHeight: 55 }}>
            <MenuButton color='inherit' onClick={handleOpen}>
                <Menu />
            </MenuButton>
            <Drawer open={open} onClose={handleClose}>
                <Box>
                    <List style={{ width: 200 }}>
                        <ListItemButton>
                            <CustomButtons />
                        </ListItemButton>
                    </List>
                </Box>
            </Drawer>
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
