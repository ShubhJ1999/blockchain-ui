import * as React from 'react';
import Button from '@mui/material/Button';

export default function CustomButton(props) {
  const {text, style} = props;

  return (
    <Button 
      sx={{
        height: '25px',
        width: '80px',
        borderRadius: '34px',
        background: 'linear-gradient(270.83deg, #FFBC26 -113.16%, #FF0404 132.22%), #FF3564',
        boxShadow: '0px 0px 29px rgba(255, 61, 72, 0.36), 0px 4px 8px rgba(23, 24, 30, 0.38)',
        fontFamily: 'Roboto, Sans-serif',
        fontSize: '12px',
        fontStyle: 'bold',
        fontWeight: 'bold',
        lineHeight: '15px',
        letterSpacing: '0.14em',
        textAlign: 'center',
        color: '#1B1534',
        ...style
      }}
    >
      {text}
    </Button>
  )
}