import React from 'react';
import Typography from '@mui/material/Typography';

export default function CustomTypography({ children, ...props }) {
    return (
        <Typography {...props}>
            {children}
        </Typography>
    );
};