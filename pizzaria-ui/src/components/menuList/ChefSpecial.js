import React from "react";
import Typography from "@mui/material/Typography";
import {MenuList} from "./MenuList";
import Grid from "@mui/material/Grid";


export const ChefSpecial = () => {
    return <Grid container
                 spacing={2}
                 justifyContent="center"
                 alignItems="center"
                 direction="column"
    >
        <Grid item>
            <Typography variant="h4" component="h2">
                Chef's Special Pizzas
            </Typography>
        </Grid>
        <Grid item>
            <MenuList/>
        </Grid>
    </Grid>

};