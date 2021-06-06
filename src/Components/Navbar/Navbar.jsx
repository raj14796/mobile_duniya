import React from 'react'
import { AppBar, Toolbar, IconButton, Badge, Typography } from '@material-ui/core'
import { ShoppingCart } from '@material-ui/icons'
import useStyles from './styles'
import logo from '../../assets/commerce.png'
import { useSelector } from 'react-redux'
import { Link, useLocation } from 'react-router-dom'

const Navbar = () => {
    const classes = useStyles();
    const location = useLocation();
    const cartTotalItemsCount = useSelector(state => state.cart.total_unique_items);
    return (
        <>
            <AppBar position="fixed" className={classes.appBar} color="inherit" >
                <Toolbar>
                    <Typography component={Link} to="/" variant="h6" className={classes.title} color="inherit" >
                        <img src={logo} alt="Commerce.js" height="25px" className={classes.image} />
                        Mobile Duniya
                    </Typography>
                    <div className={classes.grow} />
                    {location.pathname === "/" &&
                        (<div >
                            <IconButton component={Link} to="/cart" aria-label="Show Cart Items" color="inherit" >
                                <Badge badgeContent={cartTotalItemsCount} color="secondary" >
                                    <ShoppingCart />
                                </Badge>
                            </IconButton>
                        </div>)}
                </Toolbar>
            </AppBar>
        </>
    )
}

export default Navbar
