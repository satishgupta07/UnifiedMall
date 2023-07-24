import React, { useContext } from 'react'
import Dialog from '@mui/material/Dialog';
import { Box, Button, TextField, Typography, styled } from '@mui/material';
import { useState } from 'react';
import { authenticateSignup } from '../../service/api';
import { DataContext } from '../../context/DataProvider';

const Component = styled(Box)`
    height: 70vh;
    width: 90vh;
`

const Image = styled(Box)`
    background: #26a69a url(https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/login_img_c4a81e.png) center 85% no-repeat;
    height: 83%;
    width: 28%;
    padding: 45px 35px;
    & > p, & > h5 {
        color: #FFFFFF;
        font-weight: 600;
    }
`

const Wrapper = styled(Box)`
    display: flex;
    flex-direction: column;
    padding: 25px 35px;
    flex: 1;
    & > div, & > button, & > p {
        margin-top: 20px;
    }
`;

const LoginButton = styled(Button)`
    text-transform: none;
    background: #FB641B;
    color: #fff;
    height: 48px;
    border-radius: 2px;
`

const RequestOTP = styled(Button)`
    text-transform: none;
    background: #fff;
    color: #26a69a;
    height: 48px;
    border-radius: 2px;
    box-shadow: 0 2px 4px 0 rgb(0 0 0/ 20%);
`

const Text = styled(Typography)`
    font-size: 12px;
    color: #878787;
`

const CreateAccount = styled(Typography)`
    font-size: 14px;
    text-align: center;
    color: #26a69a;
    font-weight: 600;
    cursor: pointer;
`

const accountInitialValues = {
    login: {
        view: 'login',
        heading: "Login",
        subheading: "Get access to your Orders, Wishlist and Recommendations"
    },
    signup: {
        view: 'signup',
        heading: "Looks like you're new here!",
        subheading: "Sign up with your mobile number to get started"
    }
}

const signupInitialValues = {
    firstname: '',
    lastname: '',
    username: '',
    email: '',
    password: '',
    phone: ''
}

const LoginDialog = ({ open, setOpen }) => {

    const [account, toggleAccount] = useState(accountInitialValues.login)
    const [signup, setSignup] = useState(signupInitialValues)

    const { setAccount } = useContext(DataContext)

    const handleClose = () => {
        setOpen(false);
        toggleAccount(accountInitialValues.login);
    }

    const toggleSignup = () => {
        toggleAccount(accountInitialValues.signup);
    }

    const onInputChange = (e) => {
        setSignup({ ...signup, [e.target.name]: e.target.value });
    }

    const signupUser = async () => {
        let response = await authenticateSignup(signup);
        if(!response) return;
        handleClose();
        setAccount(signup.firstname);
    }

  return (
    <Dialog open={open} onClose={handleClose} PaperProps={{ sx: { maxWidth: 'unset'}}}>
        <Component>
            <Box style={{ display: 'flex', height: '100%' }}>
                <Image>
                    <Typography variant='h5'>{account.heading}</Typography>
                    <Typography style={{ marginTop: 20 }}>{account.subheading}</Typography>
                </Image>
                {
                    account.view === 'login' ?
                    <Wrapper>
                        <TextField variant='standard' label="Enter Email/Mobile number" />
                        <TextField variant='standard' label="Enter Password" />
                        <Text>By continuing, you agree to Flipkart's Terms of Use and Privacy Policy.</Text>
                        <LoginButton>Login</LoginButton>
                        <Typography>OR</Typography>
                        <RequestOTP>Request OTP</RequestOTP>
                        <CreateAccount onClick={() => toggleSignup()}>New to Flipkart? Create an account</CreateAccount>
                    </Wrapper>
                    :
                    <Wrapper>
                        <TextField variant='standard' onChange={(e) => onInputChange(e)} name='firstname' label="Enter Firstname" />
                        <TextField variant='standard' onChange={(e) => onInputChange(e)} name='lastname' label="Enter Lastname" />
                        <TextField variant='standard' onChange={(e) => onInputChange(e)} name='username' label="Enter Username" />
                        <TextField variant='standard' onChange={(e) => onInputChange(e)} name='email' label="Enter Email" />
                        <TextField variant='standard' onChange={(e) => onInputChange(e)} name='password' label="Enter Password" />
                        <TextField variant='standard' onChange={(e) => onInputChange(e)} name='phone' label="Enter Phone No." />
                        <LoginButton onClick={() => signupUser()}>Continue</LoginButton>
                    </Wrapper>
                }
            </Box>
        </Component>
    </Dialog>
  )
}

export default LoginDialog