import Typography from "@mui/material/Typography";
import React from "react";
import Grid from "@mui/material/Grid";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import ListItemButton from "@mui/material/ListItemButton";
import Checkbox from "@mui/material/Checkbox";
import {Stack} from "@mui/material";
import FormControlLabel from "@mui/material/FormControlLabel";

const SingleValueSelector = ({selectedValue, onChange, options}) => {
    return <List dense sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }} component={Stack} direction={"row"}>
        {options.map((value) => {
            const labelId = `checkbox-list-secondary-label-${value?.id}`;
            return (
                <ListItem
                    key={value?.id}
                    secondaryAction={
                        <Checkbox
                            edge="end"
                            onChange={() => onChange(value)}
                            checked={value?.id === selectedValue}
                        />
                    }
                    disablePadding
                >
                    <ListItemButton>
                        <ListItemText id={labelId} primary={`${value?.description}`} />
                    </ListItemButton>
                </ListItem>
            );
        })}
    </List>
};

const MultiValueSelector = ({selectedValues, onChange, options}) => {

    const onValueChange = (value) => {
        const updatedValues = [...selectedValues];
        const index = updatedValues.indexOf(value?.id);
        if(index === -1){
            updatedValues.push(value?.id);
        }else{
            updatedValues.splice(index, 1)
        }
        onChange(updatedValues);
    };
    return <List dense sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }} component={Stack} direction={"row"}>
        {options.map((value) => {
            const labelId = `checkbox-list-secondary-label-${value?.id}`;
            return (
                <ListItem
                    key={value?.id}
                    secondaryAction={
                        <Checkbox
                            edge="end"
                            onChange={() => onValueChange(value)}
                            checked={selectedValues.indexOf(value?.id) !== -1}
                        />
                    }
                    disablePadding
                >
                    <ListItemButton>
                        <ListItemText id={labelId} primary={`${value?.description}`} />
                    </ListItemButton>
                </ListItem>
            );
        })}
    </List>
};

const LabelWithCheckBox = ({label, value, onChange}) => {

    return <FormControlLabel
        value="start"
        control={<Checkbox
            edge="end"
            onChange={() => onChange(!value)}
            checked={value}
        />}
        label={label}
        labelPlacement="start"
    />
};

export const ContentSelector = ({contents, setContents, ingredients})=> {
    const {name, crust, sauce, cheese, extraCheese, toppings}= contents;
    const onSizeChange = (newSize) => {
        setContents({
            ...contents,
            crust: newSize?.id
        })
    };

    const onSauceChange = (newSauce) => {
        setContents({
            ...contents,
            sauce: newSauce?.id
        })
    };
    const onToppingChange= (newValues) => {
        setContents({
            ...contents,
            toppings: newValues
        })
    };
    const onCheeseChange = (newValue) => {
        setContents({
            ...contents,
            cheese: newValue,
            extraCheese: newValue? extraCheese : false
        })
    };
    const onExtraCheeseChange = (newValue) => {
        setContents({
            ...contents,
            extraCheese: newValue
        })
    };

    return <Grid container
                 direction="column"
                 spacing={2}
                 m={3}
                 pb={3}
    >
        <Grid item>
            <Typography variant="subtitle" component="h2">
                {
                    name
                }
            </Typography>
        </Grid>
        <Grid item>
                <Typography variant="subtitle2" component="h2">Select Size</Typography>
                <SingleValueSelector selectedValue={crust} options={ingredients?.CRUST} onChange={onSizeChange}/>
        </Grid>
        <Grid item>
            <Typography variant="subtitle2" component="h2">Select Sauce</Typography>
            <SingleValueSelector selectedValue={sauce} options={ingredients?.SAUCE} onChange={onSauceChange}/>
        </Grid>
        <Grid item>
            <Typography variant="subtitle2" component="h2">Select Toppings</Typography>
            <MultiValueSelector selectedValues={toppings} options={ingredients?.TOPPING} onChange={onToppingChange}/>
        </Grid>
        <Grid item>
            <LabelWithCheckBox label={'Add cheese'} value={cheese} onChange={onCheeseChange}/>
        </Grid>
        {
            cheese && <Grid item>
                <LabelWithCheckBox label={'Add extra cheese'} value={extraCheese} onChange={onExtraCheeseChange}/>
            </Grid>
        }

    </Grid>

};