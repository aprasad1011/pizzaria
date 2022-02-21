import React, {useEffect, useState} from "react";
import {useNavigate, useSearchParams} from "react-router-dom";
import useFetch from "react-fetch-hook";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Paper from "@mui/material/Paper";
import {ContentSelector} from "./ContentSelector";
import {PrizeCalculator} from "./PrizeCalculator";
import Divider from "@mui/material/Divider";
import Button from "@mui/material/Button";
import SendIcon from "@mui/material/SvgIcon/SvgIcon";

export const PizzaBuilder = () => {
    const [searchParams] = useSearchParams();
    const navigate = useNavigate();
    const pizzaId = searchParams.get('id') || '0';
    const { isLoading, data: ingredients, error } = useFetch("http://localhost:8080/api/ingredients");

    const {
        isLoading: selectedItemLoader,
        data: selectedItemContent,
        error:selectedItemError
    } = useFetch("http://localhost:8080/api/menuDetails?itemId="+ pizzaId);

    const [contents, setContents] = useState();

    useEffect(() => {
        setContents(selectedItemContent)
    }, [selectedItemContent]
    );

    const placeOrder= () => {
        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(contents)
        };
        fetch('http://localhost:8080/api/order/create', requestOptions)
            .then(response => response.json())
            .then(data => {
                navigate(`/submit?id=${data?.orderId}`);
            });
    };

    if(isLoading || selectedItemLoader || !contents){
        return <div>loading</div>
    }
    if(error || selectedItemError){
        return <div>We are facing some issue.. please try later</div>
    }
    return  <Grid container spacing={2} py={2}>
        <Grid item xs={12}>
            <Typography variant="h4" component="h2">
                Customize pizza as per your choice
            </Typography>
        </Grid>
        <Grid item xs={8}>
            <Paper elevation={1}>
                <ContentSelector contents={contents} setContents={setContents} ingredients={ingredients}/>
            </Paper>
        </Grid>
        <Grid item xs={4}>
            <PrizeCalculator contents={contents} ingredients={ingredients}/>
            <Grid container direction="column" ml={3} spacing={2}>
                <Divider/>
                <Button variant="contained" mt={2} endIcon={<SendIcon />} onClick={placeOrder}> Place Order</Button>
                <Grid item>
                </Grid>
                <Button variant="outlined" color="error" onClick={() => navigate("/")}>
                    Cancel
                </Button>
            </Grid>
        </Grid>
    </Grid>

};