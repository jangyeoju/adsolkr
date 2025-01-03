'use client';

import * as React from 'react';
import styled from '@emotion/styled';
import {
  Box,
  Button,
  Container,
  createTheme,
  Divider,
  Icon,
  IconButton,
  ThemeProvider,
} from '@mui/material';

import theme from '@/style/theme';

import ContainerWrap from '../layout/ContainerWrap';

export default function SubBanner({ title, children }) {
  return (
    <>
      <SubBannerWrap>
        <ContainerWrap>
          <h1 className="montserrat">{title}</h1>
          {children}
        </ContainerWrap>
      </SubBannerWrap>
    </>
  );
}

const SubBannerWrap = styled(Box)`
  background-image: url(../img/technology/banner.png);
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  padding: 10rem 0 10rem 0;
  h1 {
    font-size: 5rem;
    margin-bottom: 2rem;
  }
  p {
    font-size: 1.8rem;
    color: ${() => theme.colors.textColor2};
    line-height: 150%;
    font-weight: 400;
  }
  @media ${() => theme.device.mobile2} {
    padding: 5rem 0 5rem 0;
    h1 {
      font-size: 3rem;
    }
    p {
      font-size: 1.6rem;
    }
  }
`;
