import React, {useEffect, useState} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Slider from '@material-ui/core/Slider';

const useStyles = makeStyles({
    root: {
        width: 100,
    },
});

function valuetext(value) {
    return `${value}`;
}

export default function RangeSlider(props) {
    const classes = useStyles();
    const [value, setValue] = React.useState([20, 70]);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    useEffect(() => {
        props.handleRadioInput("age", value)
    }, [value])


    return (
        <div className={classes.root}>
            <Typography id="range-slider" gutterBottom>
                Age Range
            </Typography>

            <Slider
                value={value}
                onChange={handleChange}
                valueLabelDisplay="auto"
                aria-labelledby="range-slider"
                getAriaValueText={valuetext}
            />
        </div>
    );
}


