import React from 'react'
import { Card, CardMedia, CardContent, CardActions, Typography, IconButton } from '@material-ui/core'
import { AddShoppingCart } from '@material-ui/icons'
import useStyles from './styles'
import { useDispatch } from 'react-redux'
import { addToCart } from '../../../redux/actions/Actions'

const Product = ({ product }) => {
    const classes = useStyles();
    const dispatch = useDispatch()

    return (
        <Card className={classes.root} >
            <CardMedia className={classes.media} image={product.media.source} title={product.name} />
            <CardContent>
                <div className={classes.cardContent} >
                    <Typography variant="h5" gutterBottom>
                        {product.name}
                    </Typography>
                    <Typography color="secondary" variant="h5" gutterBottom>
                        {product.price.formatted_with_symbol}
                    </Typography>
                </div>
                <Typography className={classes.description} variant="body2" color="textSecondary" dangerouslySetInnerHTML={{ __html: product.description }}></Typography>
            </CardContent>
            <CardActions className={classes.cardActions}>
                <IconButton aria-label="Add to Cart" onClick={()=>dispatch(addToCart(product.id,1))} >
                    <Typography> Add To Cart </Typography> <AddShoppingCart />
                </IconButton>
            </CardActions>
        </Card>
    )
}

export default Product
