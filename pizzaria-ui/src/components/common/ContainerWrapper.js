import React from "react";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";

export const ContainerWrapper = ({children}) => {

    return  <Container maxWidth="lg" mt={2}>
        <Box sx={{ flexGrow: 1 }}>
            {children}
        </Box>
    </Container>

}