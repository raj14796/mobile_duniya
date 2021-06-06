import React, { useEffect, useState } from 'react'
import { InputLabel, Select, MenuItem, Button, Grid, Typography, TextField } from '@material-ui/core'
import { fetchShippingCountries, fetchShippingSubdivisions, fetchshippingOptions,setActiveStep, setShippingData } from '../../../redux/actions/Actions'
import { useDispatch, useSelector } from 'react-redux';

const AddressForm = () => {
    const [formData, setFormData] = useState({ firstName: "", lastName: "", email: "", address: "", city: "", zip: "" });
    const [shippingCountryCode, setShippingCountryCode] = useState("");
    const [shippingSubdivisionCode, setShippingSubdivisionCode] = useState("");
    const [shippingOptionId, setShippingOptionId] = useState("");

    const checkoutToken = useSelector((state) => state.checkoutToken);
    const shippingCountries = useSelector((state) => state.shippingCountries);
    const shippingSubdivisions = useSelector((state) => state.shippingSubdivisions);
    const shippingOptions = useSelector((state) => state.shippingOptions);
    const activeStep = useSelector(state => state.activeStep);
    const dispatch = useDispatch();
    useEffect(() => {
        if (checkoutToken)
            dispatch(fetchShippingCountries(checkoutToken.id));
    }, [dispatch,checkoutToken])
    useEffect(() => {
        if (shippingCountryCode)
            dispatch(fetchShippingSubdivisions(shippingCountryCode))
    }, [dispatch,shippingCountryCode])
    useEffect(() => {
        if (shippingSubdivisionCode)
            dispatch(fetchshippingOptions(checkoutToken.id, shippingCountryCode, shippingSubdivisionCode))
    }, [dispatch,shippingSubdivisionCode,shippingCountryCode,checkoutToken])

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    }
    const handleSubmit = (e) => {
        e.preventDefault()
        dispatch(setShippingData({...formData,shippingCountryCode,shippingSubdivisionCode,shippingOptionId}))
        dispatch(setActiveStep(activeStep+1))
    }

    return (
        <>
            <Typography variant="h6" gutterBottom >Shipping Address</Typography>
            <form onSubmit={(e)=>handleSubmit(e)}>
                <Grid container spacing={3}>
                    <Grid item xs={12} sm={6}>
                        <TextField name="firstName" label="First Name" required value={formData.firstName} onChange={(e) => handleInputChange(e)} fullWidth />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <TextField name="lastName" label="Last Name" required value={formData.lastName} onChange={(e) => handleInputChange(e)} fullWidth />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <TextField type="email" name="email" label="Email" required value={formData.email} onChange={(e) => handleInputChange(e)} fullWidth />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <TextField name="address" label="Address" required value={formData.address} onChange={(e) => handleInputChange(e)} fullWidth />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <TextField name="city" label="City" required value={formData.city} onChange={(e) => handleInputChange(e)} fullWidth />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <TextField name="zip" label="ZIP/Postal Code" required value={formData.zip} onChange={(e) => handleInputChange(e)} fullWidth />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <InputLabel>Shipping Country</InputLabel>
                        <Select required value={shippingCountryCode} fullWidth onChange={(e) => { setShippingCountryCode(e.target.value); setShippingSubdivisionCode(""); setShippingOptionId("") }} >
                            {/* example arrCountry:["IN":"INDIA"] */}
                            {shippingCountries.map((arrCountry) => (
                                <MenuItem key={arrCountry[0]} value={arrCountry[0]} >
                                    {arrCountry[1]}
                                </MenuItem>
                            ))}
                        </Select>
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <InputLabel>Shipping Subdivisions</InputLabel>
                        <Select required value={shippingSubdivisionCode} fullWidth onChange={(e) => setShippingSubdivisionCode(e.target.value)} >
                            {shippingSubdivisions.map((arrSubdivision) => (
                                <MenuItem key={arrSubdivision[0]} value={arrSubdivision[0]} >
                                    {arrSubdivision[1]}
                                </MenuItem>
                            ))}
                        </Select>
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <InputLabel>Shipping Options</InputLabel>
                        <Select required value={shippingOptionId} fullWidth onChange={(e) => setShippingOptionId(e.target.value)} >
                            {shippingOptions.length && shippingOptions.map((optionObject) => (
                                <MenuItem key={optionObject.id} value={optionObject.id} >
                                    {optionObject.description + "---(" + optionObject.price.formatted_with_symbol + ")"}
                                </MenuItem>
                            ))}
                        </Select>
                    </Grid>
                </Grid>
                <br />
                <div style={{ display: "flex", justifyContent: "space-between" }} >
                    <Button type="button" variant="outlined" color="secondary" onClick={()=>dispatch(setActiveStep(activeStep-1))}>Back to Cart</Button>
                    <Button type="submit" variant="contained" color="primary">Next</Button>
                </div>
            </form>
        </>
    )
}

export default AddressForm
