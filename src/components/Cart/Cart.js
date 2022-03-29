import React, {useContext} from 'react'
import classes from './Cart.module.css'
import Modal from '../UI/Modal'
import CartContext  from '../../store/cart-Context'
import CartItem from './CartItem'


const Cart = (props ) => {
    const cartCtx = useContext(CartContext)

    const totalAmount = `$${cartCtx.totalAmount.toFixed(2)}`
    const hasItems = cartCtx.items.length > 0;

    const cartItemRemoveHandler = id => {}

    const cartItemAddHandler = item => {}

    const cartItems = <ul className= {classes['cart-item']}> {cartCtx.items.map(item => <CartItem key = {item.id} name = {item.name} amount = {item.amount} price = {item.price} onRemove = {cartItemRemoveHandler.bind(null, item.id)} onAdd = {cartItemAddHandler.bind(null, item)}/>)} </ul>
    
  return (
    <Modal onClose = {props.on