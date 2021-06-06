import React from 'react'
import { Typography, Button, Divider } from '@material-ui/core'
import { Elements, CardElement, ElementsConsumer } from '@stripe/react-stripe-js'
import stripePromise from '../../../lib/stripe'
import Review from '../Review/Review'
import { useSelector, useDispatch } from 'react-redux'
import { setActiveStep, captureCheckout, refreshCart } from '../../../redux/actions/Actions'

const PaymentForm = () => {
    const checkoutToken = useSelector(state => state.checkoutToken)
    const shippingData = useSelector(state => state.shippingData)
    const activeStep = useSelector(state => state.activeStep)
    const dispatch = useDispatch()

    const handleSubmit = async (e, elements, stripe) => {
        e.preventDefault();
        if (!elements || !stripe) return;

        const cardElement = elements.getElement(CardElement);

        const { error, paymentMethod } = await stripe.createPaymentMethod({ type: 'card', card: cardElement });
        if (error) {
            console.log(error);
        }
        else {
            const orderData = {
                line_items: checkoutToken.live.line_items,
                //Do not use camelCase for keys of the objects as these are predefined in commerce.js
                customer: { firstname: shippingData.firstName, lastname: shippingData.lastName, email: shippingData.email },
                shipping: {
                    name: 'Primary',
                    street: shippingData.address,
                    town_city: shippingData.city,
                    country_state: shippingData.shippingSubdivisionCode,
                    postal_zip_code: shippingData.zip,
                    country: shippingData.shippingCountryCode
                },
                fulfillment: { shipping_method: shippingData.shippingOptionId },
                payment: {
                    gateway: 'stripe',
                    stripe: {
                        payment_method_id: paymentMethod.id,
                    }
                }
            }

            dispatch(captureCheckout(checkoutToken.id, orderData))
            dispatch((refreshCart()))
            dispatch(setActiveStep(activeStep + 1))
        }

    }
    return (
        <>
            <Review />
            <Divider />
            <Typography variant="h6" gutterBottom style={{ margin: "20px 0" }}>Payment Method</Typography>
            <Elements stripe={stripePromise}>
                <ElementsConsumer>
                    {({ elements, stripe }) => (
                        <form onSubmit={(e) => handleSubmit(e, elements, stripe)}>
                            <CardElement />
                            <br />
                            <div>
                                <span style={{ color: "red" }}>Only acceptable value for card : </span>
                                <span style={{ color: "indigo", fontWeight:"bolder", fontStyle:"italic" }}>4242 4242 4242 4242</span>
                            </div>
                            <br /><br />
                            <div style={{ display: "flex", justifyContent: "space-between" }}>
                                <Button type="button" variant="outlined" color="secondary" onClick={() => dispatch(setActiveStep(activeStep - 1))}>Back</Button>
                                <Button type="submit" variant="contained" color="primary" disabled={!stripe}>
                                    Pay {checkoutToken.live.subtotal.formatted_with_symbol}
                                </Button>
                            </div>
                        </form>
                    )}
                </ElementsConsumer>
            </Elements>
        </>
    )
}

export default PaymentForm
