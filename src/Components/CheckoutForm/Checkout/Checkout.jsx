import React, { useEffect } from 'react'
import { Paper, Stepper, Step, StepLabel, Typography, CircularProgress, Divider, Button, CssBaseline } from '@material-ui/core'
import useStyles from './styles'
import AddressForm from '../AddressForm/AddressForm';
import PaymentForm from '../PaymentForm/PaymentForm';
import { useSelector, useDispatch } from 'react-redux'
import { generateToken, setActiveStep } from '../../../redux/actions/Actions'
import { Redirect, Link } from 'react-router-dom'
const steps = ['Shipping Address', 'Payment Details']
const Checkout = () => {
    const classes = useStyles();
    const cart = useSelector(state => state.cart);
    const activeStep = useSelector(state => state.activeStep)
    const orderData = useSelector(state => state.orderData)
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(setActiveStep(0));
    }, [dispatch])
    useEffect(() => {
        if(Object.keys(cart).length)
            dispatch(generateToken(cart.id));
    }, [dispatch, cart])

    const Next = () => {
            switch (activeStep) {
                case 0: return <AddressForm />
                case 1: return <PaymentForm />
                case 2: return <Confirmation />
                default: return <Redirect to="/cart" />
            }
    }

    const Confirmation = () => orderData ? (
        <>
            <div>
                <Typography variant="h5" >Thank You for your purchase, {orderData.customer.firstname} {orderData.customer.lastname}</Typography>
                <Divider className={classes.divider} ></Divider>
                <Typography variant="subtitle2" >Order ref: {orderData.customer_reference}</Typography>
            </div>
            <br />
            <Button component={Link} to="/" variant="outlined" color="secondary" >Back to Home</Button>
        </>
    ) : (
        (<div className={classes.spinner} >
            <CircularProgress />
        </div>)
    )

    return (
        <div>
            <CssBaseline />
            <div className={classes.toolbar} />
            <main className={classes.layout} >
                <Paper className={classes.paper}>
                    <Typography variant="h4" align="center" >Checkout</Typography>
                    <Stepper activeStep={activeStep} className={classes.stepper} >
                        {steps.map((step) => (
                            <Step key={step} >
                                <StepLabel>{step}</StepLabel>
                            </Step>
                        ))}
                    </Stepper>
                    <Next />
                </Paper>
            </main>
        </div>
    )
}

export default Checkout
