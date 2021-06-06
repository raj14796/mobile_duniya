import React from 'react'
import { Grid } from '@material-ui/core'
import Product from './Product/Product'
import useStyles from './styles'
import { useSelector } from 'react-redux'

const Products = () => {
    const classes = useStyles();
    const products = useSelector((state)=>state.products);
    return (
        <main className={classes.content} >
            <div className={classes.toolbar} />
            <Grid container spacing={4} >
                {products.map((aProduct) => (
                    <Grid item key={aProduct.id} xs={12} sm={6} md={4} lg={3}>
                        <Product product={aProduct} />
                    </Grid>
                ))}
            </Grid>
        </main>
    )
}

export default Products
