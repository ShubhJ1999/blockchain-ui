import * as React from 'react';
import InputUnstyled from '@mui/core/InputUnstyled';
import { styled } from '@mui/system';

const StyledInputElement = styled('input')`
    width: 240px;
    display: inline;
    font-size: 1rem;
    font-family: IBM Plex Sans, sans-serif;
    font-weight: 400;
    line-height: 1.4375em;
    background: #404040;
    border: 1px solid transparent;
    border-radius: 5px;
    padding: 6px 10px;
    color: #ffffff;
    opacity: 0.3;

    &:focus {
        outline: none;
    }
`;

const CustomTextField = React.forwardRef(function CustomTextField(props, ref) {
  return (
    <InputUnstyled 
        components={{ Input: StyledInputElement }} 
        {...props} 
        ref={ref}
    />
  );
});

export default CustomTextField;
