import React from 'react'
import { Typography, List, ListItem, ListItemText } from '@material-ui/core'
import { useSelector } from 'react-redux'

const Review = () => {
    const checkoutToken = useSelector(state => state.checkoutToken)
    return (
        <>
            <Typography variant="h6" gutterBottom >Order Summary</Typography>
            <List disablePadding>
                {checkoutToken.live.line_items.map((aProduct)=>(
                    <ListItem style={{padding:"10px 0"}} key={aProduct.id} >
                        <ListItemText primary={aProduct.name} secondary={`Quantity : ${aProduct.quantity}`} />
                        <Typography variant="body2">{aProduct.line_total.formatted_with_symbol}</Typography>
                    </ListItem>
                ))}
                <ListItem style={{padding:"10px 0"}}>
                        <ListItemText primary="Total : " />
                        <Typography variant="subtitle1" style={{fontWeight: 700}}>
                            {checkoutToken.live.subtotal.formatted_with_symbol}
                        </Typography>
                    </ListItem>
            </List>
        </>
    )
}

export default Review
