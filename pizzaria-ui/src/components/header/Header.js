import React from "react";
import AppBar from "@mui/material/AppBar";
import Typography from "@mui/material/Typography";
import Toolbar from "@mui/material/Toolbar";

export const Header =() => {
    return <AppBar position="static">
            <Toolbar>
            <Typography variant="h6" component="div" p={2}>
                Pizzaria
            </Typography>
            </Toolbar>
    </AppBar>
}