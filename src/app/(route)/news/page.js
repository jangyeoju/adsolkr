"use client"
import * as React from "react";
import { Box, Button, Container, IconButton } from "@mui/material";
import {createTheme,Divider,Icon,ThemeProvider} from '@mui/material';
import styled from "@emotion/styled";
import theme from "@/app/style/theme";
import Nav from "@/app/components/nav/Nav";
import ContainerWrap from "@/app/components/layout/ContainerWrap";
import SubBanner from "@/app/components/common/SubBanner";
import Footer from "@/app/components/footer/Footer";

import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import NewsBox from "@/app/components/common/NewsBox";
import InsertDriveFileIcon from '@mui/icons-material/InsertDriveFile';
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
      typography:{
        fontFamily : "Pretendard"
      },
      palette: {
          primary: {
            main: "#2B2B50",
          },
      },
  })

  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };


  return(
    <>
        <ThemeProvider theme={theme}>
            <NavWrap>
                <Nav select={"menu2"} page={"news"}/>
            </NavWrap>
            <NewsWrap>
                <SubBannerWrap>
                    <SubBanner title={"News & Document"}>
                        <p>
                        어드밴스솔루션의 소식을 전해드립니다.
                        </p>
                    </SubBanner>
                </SubBannerWrap>
                <ContainerWrap>
                    <TabBoxWrap sx={{ width: '100%' }}>
                        <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                            <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
                                <StyledTab label="News" {...a11yProps(0)} />
                                <StyledTab label="Document" {...a11yProps(1)} />
                                <StyledTab label="Reference" {...a11yProps(2)} />
                            </Tabs>
                        </Box>
                        <StyledCustomTabPanel value={value} index={0}>
                            <NewsBox img={"/img/news/news1.png"} title={"청정 서비스의 혁신"}/>
                            <NewsBox img={"/img/news/news2.png"} title={"2024 로보월드 참가"}/>
                            <NewsBox img={"/img/news/news3.png"} title={"한수원 선정"}/>
                            <NewsBox img={"/img/news/news4.png"} title={"창업경진대회 우수상"}/>
                            <NewsBox img={"/img/news/news5.png"} title={"중소벤처기업부장관 표창장"}/>
                            <NewsBox img={"/img/news/news6.png"} title={"2023 CES 참가"}/>
                        </StyledCustomTabPanel>
                        <StyledCustomTabPanel value={value} index={1}>
                            <NewsBox img={"/img/news/document1.png"} title={"2024 CLIBO 카다로그"}/>
                            <NewsBox img={"/img/news/document2.png"} title={"2022 AVS 카다로그"}/>
                            <NewsBox img={"/img/news/document3.png"} title={"2021 AVS 카다로그"}/>
                        </StyledCustomTabPanel>
                        <StyledCustomTabPanel value={value} index={2}>
                          <NoneBox>
                            <InsertDriveFileIcon/>
                            <h3>자료가 없습니다.</h3>
                          </NoneBox>
                        </StyledCustomTabPanel>
                    </TabBoxWrap>
                </ContainerWrap>
            </NewsWrap>
            <Footer/>
        </ThemeProvider>
        </>
    )
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

const NewsWrap = styled(Box)`

`;

const TabBoxWrap = styled(Box)`
    margin:5rem 0;
        border-top: 2px solid ${()=> theme.colors.primary};
    .MuiTabs-indicator{
        display: none;
    }
`;

const StyledTab = styled(Tab)`
    border-bottom : none;
    width: 33.3%;
    min-width: 33.3%;
    font-size: 1.6rem;
    font-weight: 400;
    color: ${()=> theme.colors.textColor2};
    font-family: "Montserrat", serif;
    background-color: #F8F8F8;
    &.Mui-selected{
        background-color: ${()=> theme.colors.primary};
        color: #fff;
        font-weight: bold;
    }

`;

const StyledCustomTabPanel = styled(CustomTabPanel)`
    padding: 3rem 0 0 0;
    &>div{
        padding: 0;
        display: flex;
        align-items: center;
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
    svg{
        width: 4rem;
        height: 4rem;
        color : ${()=> theme.colors.textColor2};
        opacity: .5;
    }
    h3{
        font-size: 1.6rem;
        color: ${()=> theme.colors.textColor2};
        font-weight: 400;
        margin-top: 1rem;
    }
    
`;