import { Box, Button, Typography } from '@mui/material'
import React, { useState } from 'react'
import {ShoppingCart} from '@mui/icons-material';
import styled from '@emotion/styled';
import LoginDialog from '../Login/LoginDialog';

const Wrapper = styled(Box)`
    display: flex;
    align-items: center;
    margin: 0 3% 0 auto;
    & > button, & > p, & > div {
        margin-right: 40px;
        font-size: 14px;
    }
`

const Container = styled(Box)`
    display: flex;
`

const LoginButton = styled(Button)`
    color: #26a69a;
    background: #fff;
    text-transform: none;
    padding: 5px 40px;
    border-radius: 2px;
    box-shadow: none;
    font-weight: 600;
    height: 32px;
    &:hover {
        color: #fff;
        background-color: #26a69a;
    }
`

const CustomButtons = () => {
    const [open, setOpen] = useState(false);

    const openDialog = () => {
        setOpen(true);
    }
  return (
    <Wrapper>
        <LoginButton variant='contained' onClick={() => openDialog()}>Login</LoginButton>

        <Typography>Become a Seller</Typography>
        <Typography>More</Typography>

        <Container>
            <ShoppingCart />
            <Typography>Cart</Typography>
        </Container>
        <LoginDialog open={open} setOpen={setOpen}/>
    </Wrapper>
  )
}

export default CustomButtons