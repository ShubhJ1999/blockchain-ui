import React from "react";
import Grid from "@mui/material/Grid";

// utils
import Typography from '../utils/Typography';

const widgetList = [
    {
        title: "10M",
        rate: "10,050,489 TENKA",
        price: "$5,025,247",
        description: "Total Tenka supply"
    },
    {
        title: "10M",
        rate: "10,050,489 TENKA",
        price: "$5,025,247",
        description: "Total Tenka supply"
    },
    {
        title: "10M",
        rate: "10,050,489 TENKA",
        price: "$5,025,247",
        description: "Total Tenka supply"
    },
    {
        title: "10M",
        rate: "10,050,489 TENKA",
        price: "$5,025,247",
        description: "Total Tenka supply"
    },
    {
        title: "10M",
        rate: "10,050,489 TENKA",
        price: "$5,025,247",
        description: "Total Tenka supply"
    },
]

export default function Widget() {
    return (
        <>
            <Grid container item xs={12}>
                {widgetList.map((item) => {
                    return (
                        <>
                            <Grid
                                item 
                                sx={{
                                    color: '#ffffff', 
                                    backgroundColor: '#17181E', 
                                    borderRadius: '8px',
                                    padding: 4,
                                    marginTop: 2,
                                    marginRight: 1
                                }}
                            >
                                <Typography fontSize="25px" align="center">
                                    {item.title}
                                </Typography>
                                <Typography fontSize="15px" align="center" color="#ACB2CF80"> 
                                    {item.rate}
                                </Typography>
                                <Typography fontSize="15px" align="center">
                                    {item.price}
                                </Typography>
                                <Typography fontSize="13px" align="center">
                                    {item.description}
                                </Typography>
                            </Grid>
                        </>
                    )
                })}
            </Grid>
        </>
    )
}