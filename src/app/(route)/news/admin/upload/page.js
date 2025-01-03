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

import FileuploadInput from '@/app/components/common/FileuploadInput';
import InputText from '@/app/components/common/InputText';
import SelectBasic from '@/app/components/common/SelectBasic';
import SubBanner from '@/app/components/common/SubBanner';
import Footer from '@/app/components/footer/Footer';
import ContainerWrap from '@/app/components/layout/ContainerWrap';
import Nav from '@/app/components/nav/Nav';
import theme from '@/app/style/theme';

export default function Admin() {
  const Options1 = [
    { key: 1, value: 'News' },
    { key: 2, value: 'Document' },
    { key: 3, value: 'Reference' },
  ];

  return (
    <>
      <NavWrap>
        <Nav select={'menu2'} page={'news'} />
      </NavWrap>
      <NewsWrap>
        <ContainerWrap>
          <InputWrap>
            <h1>게시물 업로드</h1>
            <Divider />
            <div className="input-box mt-2">
              <h2>제목</h2>
              <InputText type={'text'} />
            </div>
            <div className="input-box">
              <h2>카테고리</h2>
              <SelectBasic option={Options1} large={true} />
            </div>
            <div className="input-box">
              <h2>썸네일 이미지</h2>
              <FileuploadInput />
            </div>
            <div className="input-box">
              <h2>상세이미지 (여러개 선택 가능)</h2>
              <FileuploadInput multiple={true} />
            </div>
            <div className="input-box">
              <h2>설명</h2>
              <InputText type={'text'} multiline={true} />
            </div>
            <Divider />
            <div className="input-box mt-2">
              <h2>순서</h2>
              <InputText type={'number'} />
            </div>
          </InputWrap>
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

const SubBannerWrap = styled(Box)`
  position: relative;
`;

const NewsWrap = styled(Box)``;

const InputWrap = styled(Box)`
  padding: 5rem 0;
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
