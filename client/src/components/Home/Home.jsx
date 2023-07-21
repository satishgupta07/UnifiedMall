import React from 'react'
import NavBar from './NavBar'
import Banner from './Banner'
import { Box } from '@mui/material'
import styled from '@emotion/styled'

const Component = styled(Box)`
    padding: 10px 10px;
    background: #F2F2F2;
`

const Home = () => {
  return (
    <>
        <NavBar />
        <Component>
            <Banner />
        </Component>
    </>
  )
}

export default Home