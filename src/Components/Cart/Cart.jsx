import React from 'react'
import { Typography, Grid, Container, Button } from '@material-ui/core'
import useStyles from './styles'
import { Link } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import CartItem from './CartItem/CartItem'
import { emptyTheCart } from '../../redux/actions/Actions'

const Cart = () => {
    const classes = useStyles();
    const cart = useSelector((state) => state.cart);
    const dispatch = useDispatch()
    if (!cart.line_items) return ("Loading...");
    const isEmpty = !cart.line_items.length;
    const EmptyCart = () => {
        return (<Typography variant="subtitle1" >You have no items in your shopping cart,
            <Link to="/" className={classes.link}>start adding some!</Link>
        </Typography>)
    }
    const FilledCart = () => {
        return (<>
            <Grid container spacing={3} >
                {
                    cart.line_items.map((item) => (
                        <Grid item xs={12} sm={6} lg={4} key={item.id}>
                            <CartItem item={item} />
                        </Grid>
                    ))
                }
            </Grid>
            <div className={classes.cartDetails} >
                <Typography variant="h4" >
                    Subtotal : {cart.subtotal.formatted_with_symbol}
                </Typography>
                <div>
                    <Button className={classes.emptyButton} size="large" type="button" variant="contained" color="secondary" onClick={() => dispatch(emptyTheCart())} >Empty Cart</Button>
                    <Button className={classes.checkoutButton} size="large" type="button" variant="contained" color="primary" component={Link} to="/checkout" >Checkout</Button>
                </div>
            </div>
        </>)
    }
    return (
        <Container>
            <div className={classes.toolbar} />
            <Typography className={classes.title} variant="h3" gutterBottom>Your Shopping Cart</Typography>
            {isEmpty ? <EmptyCart /> : <FilledCart />}
        </Container>
    )
}

export default Cart
