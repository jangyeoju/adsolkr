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

import theme from '@/app/style/theme';

import ContainerWrap from '../layout/ContainerWrap';

export default function TechSubNav({ id, text1, text2, text3 }) {
  return (
    <SubNavWrap>
      <ContainerWrap>
        <ul className="sub-nav-wrap">
          <li>
            <a href="#sec1">{text1}</a>
          </li>
          <li>
            <a href="#sec2">{text2}</a>
          </li>
          <li>
            <a href="#sec3">{text3}</a>
          </li>
        </ul>
      </ContainerWrap>
    </SubNavWrap>
  );
}

const SubNavWrap = styled(Box)`
  background-color: ${() => theme.colors.primary};

  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 2rem;
  .sub-nav-wrap {
    display: flex;
    align-items: center;
    justify-content: center;
    li {
      padding: 1.5rem 0;
      width: 30rem;
      display: flex;
      align-items: center;
      justify-content: center;
      background-color: ${() => theme.colors.primary};
      transition: all 0.3s ease-in-out;
      a {
        font-size: 1.8rem;
        font-weight: 500;
        color: #fff;
        width: 100%;
        text-align: center;
      }
    }
    li:hover {
      background-color: #4b4fcd;
    }
  }
  @media ${() => theme.device.tablet} {
    top: 82px;
    .sub-nav-wrap {
      li {
        a {
          font-size: 1.6rem;
        }
      }
    }
  }
  @media ${() => theme.device.mobile3} {
    .sub-nav-wrap {
      li {
        a {
          font-size: 1.4rem;
        }
      }
    }
  }
`;
