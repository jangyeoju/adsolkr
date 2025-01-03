'use client';

import * as React from 'react';
import styled from '@emotion/styled';
import { Box, Button, IconButton } from '@mui/material';

import theme from '../../style/theme';

export default function ContainerWrap({ children }) {
  return (
    <>
      <Wrap>{children}</Wrap>
    </>
  );
}

const Wrap = styled(Box)`
  width: 110rem;
  margin: 0 auto;
  @media ${() => theme.device.tablet} {
    width: 90%;
  }
`;
