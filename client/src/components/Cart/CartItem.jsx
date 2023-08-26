import { Box, Button, Typography, styled } from '@mui/material'
import React from 'react'
import { addEllipsis } from '../../utils/common-utils'
import { removeFromCart } from '../../redux/actions/cartActions'
import GroupedButton from './GroupedButton'
import { useDispatch } from 'react-redux'

const Component = styled(Box)`
  border-top: 1px solid #f0f0f0;
  display: flex;
  background: #fff;
`

const LeftComponent = styled(Box)`
  margin: 20px;
  display: flex;
  flex-direction: column;
`

const SmallText = styled(Typography)`
  color: #878787;
  font-size: 14px;
  margin-top: 10px;
`

const RemoveButton = styled(Button)`
  margin-top: 20px;
  font-size: 16px;
  color: #000;
  font-weight: 600;
`

const CartItem = ({ item }) => {
  const fassured = 'https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/fa_62673a.png';

  const dispatch = useDispatch();

  const removeItemFromCart = (id) => {
    dispatch(removeFromCart(id));
  }

  return (
    <Component>
      <LeftComponent>
        <img src={item.data.url} alt='product' style={{height: 110 , width: 110}} />
        <GroupedButton />
      </LeftComponent>
      <Box style={{ margin: 20 }}>
        <Typography>{addEllipsis(item.data.title.longTitle)}</Typography>
        <SmallText>Seller:RetailNet 
          <Box component="span"><img src={fassured} alt='flipkart' style={{ width: 50, marginLeft: 10 }}/></Box>
        </SmallText>
        <Typography style={{ margin: '20px 0'}}>
            <Box component="span" style={{ fontWeight: 600, fontSize: 18 }}>₹{item.data.price.cost}</Box>&nbsp;&nbsp;&nbsp;
            <Box component="span" style={{ color: '#878787' }}><strike>₹{item.data.price.mrp}</strike></Box>&nbsp;&nbsp;&nbsp;
            <Box component="span" style={{ color: '#388E3C' }}>{item.data.price.discount}</Box>
        </Typography>
        <RemoveButton onClick={() => removeItemFromCart(item.data.id)}>Remove</RemoveButton>
      </Box>
    </Component>
  )
}

export default CartItem