'use client';

import * as React from 'react';
import styled from '@emotion/styled';
import Box from '@mui/material/Box';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';

import theme from '../../../app/style/theme';

export default function SelectBasic({ placeholder, option, large }) {
  const [select, setSelect] = React.useState(1);
  const handleChange = (event) => {
    setSelect(event.target.value);
  };

  return (
    <>
      <StyledFormControl>
        <StyledSelect
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          className={large ? 'large' : ''}
          value={select}
          onChange={handleChange}
          placeholder={placeholder}
        >
          {option.map((option, index) => (
            <StyledMenuItem key={option.key} value={option.key}>
              {option.value}
            </StyledMenuItem>
          ))}
        </StyledSelect>
      </StyledFormControl>
    </>
  );
}

const StyledFormControl = styled(FormControl)`
  outline: none;
  .large {
    padding: 0.6rem 0;
  }
`;

const StyledSelect = styled(Select)`
  font-size: 1.4rem;
  outline: none;
  background-color: #fff;
  & > div {
    padding: 0.5rem 1.2rem;
    min-width: 8rem;
  }
  fieldset {
    border: 1px solid rgba(0, 0, 0, 0.1);
  }
  svg {
    width: 2rem;
    height: 2rem;
    top: auto !important;
  }
`;

const StyledMenuItem = styled(MenuItem)`
  font-size: 1.4rem;
`;
