import React from 'react'
import { Typography, Card, CardContent, CardActions, CardMedia, Button } from '@material-ui/core'
import useStyles from './sytles'
import { useDispatch } from 'react-redux'
import { updateCartQuantity, removeItemFromCart } from '../../../redux/actions/Actions'

const CartItem = ({ item }) => {
    const classes = useStyles();
    const dispatch = useDispatch();
    const handleUpdate = (quantity) => {
        if (quantity === 0) {
            dispatch(removeItemFromCart(item.id))
        }
        else {
            dispatch(updateCartQuantity(item.id, quantity));
        }
    }
    return (
        <Card className={classes.card}>
            <CardMedia image={item.media.source} alt="item.name" className={classes.media} />
            <CardContent className={classes.cardContent}>
                <Typography variant="h5">{item.name}</Typography>
                <Typography variant="h5">{item.line_total.formatted_with_symbol}</Typography>
            </CardContent>
            <CardActions className={classes.cardActions} >
                <div className={classes.buttons}>
                    <Button type="button" size="small" onClick={() => handleUpdate(item.quantity - 1)} >-</Button>
                    <Typography>{item.quantity}</Typography>
                    <Button type="button" size="small" onClick={() => handleUpdate(item.quantity + 1)}>+</Button>
                </div>
                <Button type="button" variant="contained" color="secondary" onClick={() => handleUpdate(0)} >Remove</Button>
            </CardActions>
        </Card>
    )
}

export default CartItem
