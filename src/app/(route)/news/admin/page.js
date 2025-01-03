'use client';

import * as React from 'react';
import styled from '@emotion/styled';
import AddIcon from '@mui/icons-material/Add';
import InsertDriveFileIcon from '@mui/icons-material/InsertDriveFile';
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
import Tab from '@mui/material/Tab';
import Tabs from '@mui/material/Tabs';
import PropTypes from 'prop-types';

import NewsBox from '@/app/components/common/NewsBox';
import SubBanner from '@/app/components/common/SubBanner';
import Footer from '@/app/components/footer/Footer';
import ContainerWrap from '@/app/components/layout/ContainerWrap';
import BasicModal from '@/app/components/modal/BasicModal';
import Nav from '@/app/components/nav/Nav';
import theme from '@/app/style/theme';

function CustomTabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && <Box sx={{ p: 3 }}>{children}</Box>}
    </div>
  );
}

CustomTabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

export default function Clibo() {
  const theme = createTheme({
    typography: {
      fontFamily: 'Pretendard',
    },
    palette: {
      primary: {
        main: '#2B2B50',
      },
    },
  });

  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const [open, setOpen] = React.useState(false);
  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const [open2, setOpen2] = React.useState(false);
  const handleClickOpen2 = () => {
    setOpen2(true);
  };

  const handleClose2 = () => {
    setOpen2(false);
  };

  const [open3, setOpen3] = React.useState(false);
  const handleClickOpen3 = () => {
    setOpen3(true);
  };

  const handleClose3 = () => {
    setOpen3(false);
  };

  const [open4, setOpen4] = React.useState(false);
  const handleClickOpen4 = () => {
    setOpen4(true);
  };

  const handleClose4 = () => {
    setOpen4(false);
  };

  const [open5, setOpen5] = React.useState(false);
  const handleClickOpen5 = () => {
    setOpen5(true);
  };

  const handleClose5 = () => {
    setOpen5(false);
  };

  const [open6, setOpen6] = React.useState(false);
  const handleClickOpen6 = () => {
    setOpen6(true);
  };

  const handleClose6 = () => {
    setOpen6(false);
  };

  const [open7, setOpen7] = React.useState(false);
  const handleClickOpen7 = () => {
    setOpen7(true);
  };

  const handleClose7 = () => {
    setOpen7(false);
  };

  const [open8, setOpen8] = React.useState(false);
  const handleClickOpen8 = () => {
    setOpen8(true);
  };

  const handleClose8 = () => {
    setOpen8(false);
  };

  const [open9, setOpen9] = React.useState(false);
  const handleClickOpen9 = () => {
    setOpen9(true);
  };

  const handleClose9 = () => {
    setOpen9(false);
  };

  return (
    <>
      <ThemeProvider theme={theme}>
        <NavWrap>
          <Nav select={'menu2'} page={'news'} />
        </NavWrap>
        <NewsWrap>
          <SubBannerWrap>
            <SubBanner title={'News & Document'}>
              <p>어드밴스솔루션의 소식을 전해드립니다.</p>
            </SubBanner>
          </SubBannerWrap>
          <ContainerWrap>
            <UploadButton
              variant="contained"
              color="primary"
              href="/news/admin/upload"
            >
              <AddIcon />
              게시물 올리기
            </UploadButton>
            <TabBoxWrap sx={{ width: '100%' }}>
              <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                <Tabs
                  value={value}
                  onChange={handleChange}
                  aria-label="basic tabs example"
                >
                  <StyledTab label="News" {...a11yProps(0)} />
                  <StyledTab label="Document" {...a11yProps(1)} />
                  <StyledTab label="Reference" {...a11yProps(2)} />
                </Tabs>
              </Box>
              <StyledCustomTabPanel value={value} index={0}>
                <NewsBox
                  img={'/img/news/news1.png'}
                  title={'청정 서비스의 혁신'}
                  handle={handleClickOpen}
                  edit={true}
                />
                <BasicModal
                  open={open}
                  handleClose={handleClose}
                  text={'청정 서비스의 혁신'}
                  img={'/img/news/news1.png'}
                />

                <NewsBox
                  img={'/img/news/news2.png'}
                  title={'2024 로보월드 참가'}
                  handle={handleClickOpen2}
                  edit={true}
                />
                <BasicModal
                  open={open2}
                  handleClose={handleClose2}
                  text={'2024 로보월드 참가'}
                  img={'/img/news/news2.png'}
                />

                <NewsBox
                  img={'/img/news/news3.png'}
                  title={'한수원 선정'}
                  handle={handleClickOpen3}
                  edit={true}
                />
                <BasicModal
                  open={open3}
                  handleClose={handleClose3}
                  text={'한수원 선정'}
                  img={'/img/news/news3.png'}
                />

                <NewsBox
                  img={'/img/news/news4.png'}
                  title={'창업경진대회 우수상'}
                  handle={handleClickOpen4}
                  edit={true}
                />
                <BasicModal
                  open={open4}
                  handleClose={handleClose4}
                  text={'창업경진대회 우수상'}
                  img={'/img/news/news4.png'}
                />

                <NewsBox
                  img={'/img/news/news5.png'}
                  title={'중소벤처기업부장관 표창장'}
                  handle={handleClickOpen5}
                  edit={true}
                />
                <BasicModal
                  open={open5}
                  handleClose={handleClose5}
                  text={'중소벤처기업부장관 표창장'}
                  img={'/img/news/news5.png'}
                />

                <NewsBox
                  img={'/img/news/news6.png'}
                  title={'2024 CES 참가'}
                  handle={handleClickOpen6}
                  edit={true}
                />
                <BasicModal
                  open={open6}
                  handleClose={handleClose6}
                  text={'2024 CES 참가'}
                  img={'/img/news/news6.png'}
                />
              </StyledCustomTabPanel>
              <StyledCustomTabPanel value={value} index={1}>
                <NewsBox
                  img={'/img/news/document1.png'}
                  title={'2024 CLIBO 카다로그'}
                  handle={handleClickOpen7}
                  edit={true}
                />
                <BasicModal
                  open={open7}
                  handleClose={handleClose7}
                  text={'2024 CLIBO 카다로그'}
                  img={'/img/news/document1.png'}
                />

                <NewsBox
                  img={'/img/news/document2.png'}
                  title={'2022 AVS 카다로그'}
                  handle={handleClickOpen8}
                  edit={true}
                />
                <BasicModal
                  open={open8}
                  handleClose={handleClose8}
                  text={'2022 AVS 카다로그'}
                  img={'/img/news/document2.png'}
                />

                <NewsBox
                  img={'/img/news/document3.png'}
                  title={'2021 AVS 카다로그'}
                  handle={handleClickOpen9}
                  edit={true}
                />
                <BasicModal
                  open={open9}
                  handleClose={handleClose9}
                  text={'2021 AVS 카다로그'}
                  img={'/img/news/document3.png'}
                />
              </StyledCustomTabPanel>
              <StyledCustomTabPanel value={value} index={2}>
                <NoneBox>
                  <InsertDriveFileIcon />
                  <h3>There are no data.</h3>
                </NoneBox>
              </StyledCustomTabPanel>
            </TabBoxWrap>
          </ContainerWrap>
        </NewsWrap>
        <Footer />
      </ThemeProvider>
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

const TabBoxWrap = styled(Box)`
  margin: 5rem 0;
  border-top: 2px solid ${() => theme.colors.primary};
  .MuiTabs-indicator {
    display: none;
  }
`;

const StyledTab = styled(Tab)`
  border-bottom: none;
  width: 33.3%;
  min-width: 33.3%;
  font-size: 1.6rem;
  font-weight: 400;
  color: ${() => theme.colors.textColor2};
  font-family: 'Montserrat', serif;
  background-color: #f8f8f8;
  &.Mui-selected {
    background-color: ${() => theme.colors.primary};
    color: #fff;
    font-weight: bold;
  }
`;

const StyledCustomTabPanel = styled(CustomTabPanel)`
  padding: 3rem 0 0 0;
  & > div {
    padding: 0;
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
    flex-wrap: wrap;
    gap: 1rem;
  }
`;

const NoneBox = styled(Box)`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  height: 300px;
  width: 100%;
  svg {
    width: 4rem;
    height: 4rem;
    color: ${() => theme.colors.textColor2};
    opacity: 0.5;
  }
  h3 {
    font-size: 1.6rem;
    color: ${() => theme.colors.textColor2};
    font-weight: 400;
    margin-top: 1rem;
  }
`;

const UploadButton = styled(Button)`
  font-size: 1.4rem;
  font-weight: 400;
  font-family: 'Pretendard-Bold';
  margin-top: 2rem;
  width: 100%;
  background-color: ${() => theme.colors.primary2};
  svg {
    width: 24px;
    height: 24px;
    margin-right: 1rem;
  }
`;
