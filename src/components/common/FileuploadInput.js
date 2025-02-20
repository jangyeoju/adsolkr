import React, { useState } from 'react';
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

import theme from '@/style/theme';

export default function FileuploadInput({ multiple }) {
  return (
    <>
      <FileuploadInputWrap>
        {multiple ? (
          <input type="file" id="file" multiple />
        ) : (
          <input type="file" id="file" />
        )}
      </FileuploadInputWrap>
    </>
  );
}

const FileuploadInputWrap = styled(Box)`
  display: flex;
  align-items: center;
  width: 100%;

  input[type='file'] {
  }
  /* label:not(.disabled):hover{
        background-color: #E6F2FF;
        font-weight: bold;
    }
    input[type="file"] {
        position: absolute;
        width: 0;
        height: 0;
        padding: 0;
        overflow: hidden;
        border: 0;
    } */
`;
