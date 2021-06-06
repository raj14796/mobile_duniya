import React, { useEffect } from 'react'
import { Navbar, Products, Cart, Checkout } from './Components';
import { useDispatch } from 'react-redux'
import { fetchCart, fetchProducts } from './redux/actions/Actions'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
const App = () => {
    const dispatch = useDispatch()

    useEffect(()=>{
        dispatch(fetchProducts());
        dispatch(fetchCart());
    },[dispatch])

    return (
        <BrowserRouter>
        <div>
            <Navbar />
            <Switch>
                <Route exact path="/">
                    <Products />
                </Route>
                <Route exact path="/cart">
                    <Cart />
                </Route>
                <Route exact path="/checkout">
                    <Checkout />
                </Route>
            </Switch>
        </div>
        </BrowserRouter>
    )
}

export default App
