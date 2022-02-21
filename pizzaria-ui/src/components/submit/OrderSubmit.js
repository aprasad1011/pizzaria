import React from "react";
import {useNavigate, useSearchParams} from "react-router-dom";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Paper from "@mui/material/Paper";
import Button from "@mui/material/Button";

export const OrderSubmit = () => {
    const [searchParams] = useSearchParams();
    const navigate = useNavigate();
    const orderId = searchParams.get('id');

    return  <Grid container
                  spacing={2}
                  alignItems="center"
                  justifyContent="center"
                  py={2}
                  direction="column"
    >
        <Grid item xs={12}>
            <Typography variant="subtitle" component="h2">
                {` Your order number is # ${orderId}`}
            </Typography>
        </Grid>
        <Grid item xs={12}>
            <Paper elevation={0} sx={{padding: 10, marginTop: 2}}>
                <Typography variant="h4" component="h2">
                    Thank you for ordering from Pizzaria..!
                </Typography>
            </Paper>
        </Grid>

        <Grid item xs={12}>
            <Button variant="outlined" mt={2} onClick={() => navigate('/')}> Order More</Button>
        </Grid>
    </Grid>

}