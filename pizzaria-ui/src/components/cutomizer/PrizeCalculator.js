import Grid from "@mui/material/Grid";
import React from "react";
import Typography from "@mui/material/Typography";
import CardActionArea from "@mui/material/CardActionArea";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Card from "@mui/material/Card";
import Stack from "@mui/material/Stack";
import Divider from "@mui/material/Divider";


const calculatePricingDetails = (contents, ingredients) => {
    const priceDetails = {};
    const {CRUST, SAUCE, TOPPING, CHEESE, EXTRA_CHEESE}= ingredients;
    const{crust, sauce, toppings, cheese, extraCheese} = contents;
    priceDetails.crust = CRUST.find(c => c?.id === crust)?.price || 0;
    priceDetails.sauce= SAUCE.find(s => s?.id === sauce)?.price || 0;
    priceDetails.toppings= TOPPING.filter(t => toppings.includes(t?.id))
        .reduce((previousValue, currentValue) => previousValue + currentValue?.price, 0);
    if(cheese) {
        priceDetails.cheese = CHEESE[0]?.price || 0;
    }
    if(extraCheese){
        priceDetails.extraCheese = EXTRA_CHEESE[0]?.price || 0;
    }
    return priceDetails;
};

export const PrizeCalculator = ({contents, ingredients}) => {
    const pricingDetails = calculatePricingDetails(contents, ingredients);
    const totalPrice = Object.values(pricingDetails).reduce((pv, cv) => pv+cv, 0);

    return <Grid container
                 direction="column"
                 spacing={2}
                 m={3}
    >
        <Card xs={4} sx={{marginBottom: 2}}>
            <CardActionArea>
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                        Pricing Details
                    </Typography>
                    <Divider/>
                    <Stack spacing={2} pt={2}>
                        {
                            Object.keys(pricingDetails).map(key => {
                                const val = pricingDetails[key];
                                return <Grid container justifyContent="space-between" key={key}>
                                <Grid item>
                                    <Typography variant="body" pl={1}>
                                        {key.toUpperCase()}
                                    </Typography>
                                </Grid>
                                <Grid item>
                                    <Typography variant="body" pl={1}>
                                        {`Rs. ${val}`}
                                    </Typography>
                                </Grid>
                            </Grid>})
                        }
                    </Stack>
                </CardContent>
            </CardActionArea>
            <Divider/>
            <CardActions>
                <Grid container justifyContent="space-between">
                    <Grid item>
                <Typography variant="body" color="blue" pl={1}>
                    Total
                </Typography>
                    </Grid>
                    <Grid item>
                        <Typography variant="body" pl={1}>
                            {`Rs. ${totalPrice}`}
                        </Typography>
                    </Grid>
                </Grid>
            </CardActions>
        </Card>
    </Grid>
}