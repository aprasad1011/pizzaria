import React from "react";
import Typography from "@mui/material/Typography";
import CardMedia from "@mui/material/CardMedia";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import CardActions from "@mui/material/CardActions";
import Grid from "@mui/material/Grid";
import useFetch from "react-fetch-hook";
import {useNavigate} from "react-router";

const Menu = ({menuDetails}) => {
    const navigate = useNavigate();
    const {displayName, description, imagePath, itemId} = menuDetails;
    return <Card sx={{ maxWidth: 345 }}>
        <CardMedia
            component="img"
            alt="Pizzaariaaa"
            height="140"
            image={imagePath}
        />
        <CardContent>
            <Typography gutterBottom variant="h5" component="div">
                {displayName}
            </Typography>
            <Typography variant="body2" color="text.secondary">
                {description}
            </Typography>
        </CardContent>
        <CardActions>
            <Button variant="outlined" onClick={() => navigate(`/customize?id=${itemId}`)}>Order Now</Button>
        </CardActions>
    </Card>
}

export const MenuList = () => {
    const { isLoading, data: menuList, error } = useFetch("http://localhost:8080/api/menuList");
    if(error){
        return <div>We are facing some issue.. please try later</div>
    }
    if(isLoading){
        return <div>loading</div>
    }
    return <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
        {menuList.map((menuDetails, index) => (
            <Grid item xs={2} sm={4} md={4} key={index}>
                <Menu menuDetails={menuDetails}/>
            </Grid>
        ))}
    </Grid>
};