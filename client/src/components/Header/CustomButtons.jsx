import { Box, Button, Typography, styled } from '@mui/material'
import React, { useContext, useState } from 'react'
import {ShoppingCart} from '@mui/icons-material';
import LoginDialog from '../Login/LoginDialog';
import { DataContext } from '../../context/DataProvider';
import Profile from './Profile';

const Wrapper = styled(Box)(({ theme }) => ({
    display: 'flex',
    alignItems: 'center',
    margin: '0 3% 0 auto',
    '& > button, & > p, & > div' : {
        marginRight: 40,
        fontSize: 14,
        alignItems: 'center'
    },
    [theme.breakpoints.down('md')]: {
        display: 'block'
    }
}))

const Container = styled(Box)(({ theme }) => ({
    display: 'flex',
    [theme.breakpoints.down('md')]: {
        display: 'block'
    }
}))

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

    const { account, setAccount } = useContext(DataContext);

    const openDialog = () => {
        setOpen(true);
    }

  return (
    <Wrapper>
        {
            account ? <Profile account={account} setAccount={setAccount} /> :
            <LoginButton variant='contained' onClick={() => openDialog()}>Login</LoginButton>
        }
        
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