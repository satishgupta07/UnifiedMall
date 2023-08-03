import React, { useEffect } from 'react'
import NavBar from './NavBar'
import Banner from './Banner'
import { Box } from '@mui/material'
import styled from '@emotion/styled'
import { getProducts } from '../../redux/actions/productActions'
import { useDispatch, useSelector } from 'react-redux'

const Component = styled(Box)`
    padding: 10px 10px;
    background: #F2F2F2;
`

const Home = () => {

  const { products } = useSelector(state => state.getProducts);

  console.log(products)

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getProducts())
  }, [dispatch])

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