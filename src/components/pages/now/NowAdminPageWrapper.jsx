'use client';

import * as React from 'react';
import styled from '@emotion/styled';
import { Box } from '@mui/material';

import Footer from '@/components/footer/Footer';
import ContainerWrap from '@/components/layout/ContainerWrap';
import Nav from '@/components/nav/Nav';
import theme from '@/style/theme';

export default function NowAdminPageWrapper({ children }) {
  return (
    <>
      <NavWrap>
        <Nav select={'menu2'} page={'news'} />
      </NavWrap>
      <NewsWrap>
        <ContainerWrap>
          <InputWrap>{children}</InputWrap>
        </ContainerWrap>
      </NewsWrap>
      <Footer />
    </>
  );
}

const NavWrap = styled(Box)`
  position: relative;
  height: 100px;
  @media ${() => theme.device.mobile} {
    height: 80px;
  }
`;

const NewsWrap = styled(Box)``;

const InputWrap = styled(Box)`
  padding: 5rem 0;
  height: 50vh;
  h1 {
    font-size: 2.4rem;
    font-weight: bold;
    color: ${() => theme.colors.textColor};
    margin-bottom: 2rem;
  }
  .mt-2 {
    margin-top: 2rem;
  }
  .input-box {
    margin-bottom: 2rem;
    h2 {
      font-size: 1.6rem;
      font-weight: bold;
      color: ${() => theme.colors.textColor};
      margin-bottom: 1rem;
    }
  }
`;
