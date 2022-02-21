import React from "react";
import Grid from "@mui/material/Grid";
import Chip from "@mui/material/Chip";
import Divider from "@mui/material/Divider";
import {ChefSpecial} from "../menuList/ChefSpecial";
import { useNavigate } from 'react-router-dom'

export const HomePage = () => {

    const navigate = useNavigate();

    return  <Grid container
                  spacing={2}
                  alignItems="center"
                  justifyContent="center"
                  direction="column"
                  my={2}
    >
        <Grid item py={1}>
            <ChefSpecial/>
        </Grid>
        <Divider style={{width:'100%'}}> Or </Divider>
        <Grid item  py={1}>
            <Chip label="Build your own Pizza"
                  color="primary"
                  variant="filled"
                  style={{fontSize: 18, fontWeight: 'bold', padding: 5}}
                  onClick={() => navigate("/customize")}
            />
        </Grid>

    </Grid>
};