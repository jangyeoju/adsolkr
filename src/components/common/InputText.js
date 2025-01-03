'use client';

import * as React from 'react';
import styled from '@emotion/styled';
import {
  Box,
  Button,
  createTheme,
  Divider,
  Icon,
  IconButton,
  ThemeProvider,
} from '@mui/material';
import TextField from '@mui/material/TextField';

import theme from '../../style/theme';

export default function InputText({
  value,
  placeholder,
  type,
  readOnly,
  multiline,
  disabled,
}) {
  const theme = createTheme({
    typography: {
      fontFamily: 'Pretendard',
    },
    palette: {
      primary: {
        main: '#2861F5',
      },
    },
  });
  return (
    <ThemeProvider theme={theme}>
      {multiline ? (
        <StyledTextField
          id="outlined-multiline-static"
          multiline
          rows={4}
          value={value}
          placeholder={placeholder}
          readOnly={readOnly}
          disabled={disabled}
        />
      ) : (
        <StyledTextField
          id="outlined-basic"
          variant="outlined"
          type={type}
          value={value}
          placeholder={placeholder}
          readOnly={readOnly}
          disabled={disabled}
        />
      )}
    </ThemeProvider>
  );
}

const StyledTextField = styled(TextField)`
  width: 100%;
  border-radius: 4px;
  background-color: #fff;
  .MuiOutlinedInput-root {
    font-size: 14px !important;
  }
  fieldset {
    border: 1px solid rgba(0, 0, 0, 0.1);
  }
  input {
    border-radius: 4px;
    background-color: #fff;
    font-size: 1.4rem;
    outline: none;
    padding: 1.2rem 1.5rem;
  }
  @media ${() => theme.device.tablet} {
    input {
      padding: 1rem 2rem;
    }
  }
`;
