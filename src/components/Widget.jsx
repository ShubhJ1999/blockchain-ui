import React from "react";
import Grid from "@mui/material/Grid";

// utils
import Typography from '../utils/Typography';

export default function Widget({ dataList }) {
    return (
        <>
            <Grid container item xs={12}>
                {dataList.map((item) => {
                    return (
                        <>
                            <Grid
                                item 
                                sx={{
                                    width: '13em',
                                    color: '#ffffff', 
                                    backgroundColor: '#17181E', 
                                    borderRadius: '8px',
                                    padding: 4,
                                    marginTop: 1,
                                    marginRight: 2
                                }}
                            >
                                <Typography fontSize="25px" align="center" sx={{lineHeight: 2}}>
                                    {item.title}
                                </Typography>
                                <Typography fontSize="15px" align="center" color="#ACB2CF80" sx={{lineHeight: 1}}> 
                                    {item.rate}
                                </Typography>
                                <Typography fontSize="15px" align="center" sx={{lineHeight: 2}}>
                                    {item.price}
                                </Typography>
                                <Typography fontSize="13px" align="center" sx={{marginTop: 1}}>
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