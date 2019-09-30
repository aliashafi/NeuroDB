import React, {useEffect, useState} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Slider from '@material-ui/core/Slider';


export default function RangeSlider(props) {
    const useStyles = makeStyles({
        root: {
            width: 100,
        },
    });
    const classes = useStyles();
    const [value, setValue] = React.useState([20, 70]);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    useEffect(() => {
        props.handleRadioInput(props.title, value)
    }, [value])

    const valuetext = (value) => {
        return `${value}`;
    }


    return (
        <div className={classes.root}>
            <Typography id="range-slider" gutterBottom>
                {`${props.title} range`}
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


