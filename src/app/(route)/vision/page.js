"use client"
import * as React from "react";
import { Box, Button, Container, IconButton } from "@mui/material";
import {createTheme,Divider,Icon,ThemeProvider} from '@mui/material';
import styled from "@emotion/styled";
import theme from "@/app/style/theme";
import Nav from "@/app/components/nav/Nav";
import ContainerWrap from "@/app/components/layout/ContainerWrap";
import Footer from "@/app/components/footer/Footer";
export default function Vision() {

    const theme = createTheme({
        typography:{
          fontFamily : "Pretendard"
        },
        palette: {
            primary: {
              main: "#5D62FF",
            },
        },
    })

    
    return(
        <>
            <ThemeProvider theme={theme}>
                <Nav select={"menu2"} page={"vision"}/>
                <VisionWrap>
                    <VisionBanner>
                        <ContainerWrap>
                            <h1 className="montserrat">Vision</h1>
                            <p>
                                어드밴스솔루션은 다른 시각으로,<br/>
                                지금 실현 가능한 기술로 로봇 생태계에서<br/>
                                가치있는 변화를 만들어갑니다.
                            </p>
                            <img src="/img/logo_w.svg" alt="logo-img" />
                        </ContainerWrap>
                    </VisionBanner>
                    <ContainerWrap>
                        <div className="vision-content">
                            <ul className="vision-list">
                                <li>
                                    <div className="num-box">
                                        <h3>01</h3>
                                    </div>
                                    <h2>AHS</h2>
                                    <p>
                                        Advanced Housing Solution<br/>
                                        금형 없이 만드는 로봇 외함 기술 
                                    </p>
                                </li>
                                <li>
                                    <div className="num-box">
                                        <h3>02</h3>
                                    </div>
                                    <h2>ASS</h2>
                                    <p>
                                    Advanced Safe Sterilizing-light<br/>
                                    사람에게 안전한 살균광원 기술
                                    </p>
                                </li>
                                <li>
                                    <div className="num-box">
                                        <h3>03</h3>
                                    </div>
                                    <h2>ARS</h2>
                                    <p>
                                    Advanced Robot Station<br/>
                                    최적의 로봇 솔루션  
                                    </p>
                                </li>
                            </ul>
                        </div>
                    </ContainerWrap>
                    <Divider />
                    <ContainerWrap>
                        <div className="vision-content">
                           <h1 className="title montserrat">
                               What you Need, What you Want
                           </h1>
                           <p className="sub-title-text">당신이 필요로 하는, 당신이 원하는 로봇 솔루션</p>
                            <div className="vision-img">
                                <img src="/img/vision/content.png" alt="vision-img" />
                            </div>
                        </div>
                    </ContainerWrap>
                </VisionWrap>
                <Footer />
            </ThemeProvider>
        </>
    )   
}

const VisionWrap = styled(Box)`
    margin-top: 100px;
    .vision-content{
        padding: 10rem 0;
        .sub-title-text{
            font-size: 2rem;  
            margin-top: 1rem;
            color: ${()=> theme.colors.textColor2};
            font-weight: 400;
            text-align: center;
        }
        .vision-img{
            display: flex;
            align-items: center;
            justify-content: center;
            margin-top: 8rem;
            img{
                width: 60%;
            }
        }
        .vision-list{
            display: flex;
            align-items: flex-start;
            justify-content: center;

            li{
                width: 33%;
                display: flex;
                flex-direction: column;
                align-items: center;
                .num-box{
                    width: 60px;
                    height: 60px;
                    background-color: ${()=> theme.colors.primary};
                    border-radius: 100px;

                    display: flex;
                    align-items: center;
                    justify-content: center;

                    margin-bottom: 2rem;
                    h3{
                        color: #fff;
                        font-size: 2rem;
                    }
                }
                h2{
                    font-size: 2.5rem;
                    font-weight:bold;
                    line-height: 150%;
                    text-align: center;
                    color: ${()=> theme.colors.textColor};
                }
                p{
                    font-size: 1.6rem;
                    font-weight: 400;
                    line-height: 150%;
                    text-align: center;
                    color: ${()=> theme.colors.textColor2};
                }
            }
        }
    }
    .title{
        font-size: 4rem;
        font-weight: bold;
        color: ${()=> theme.colors.textColor};
        line-height: 150%;
        text-align: center;
        line-break: anywhere;
    }

    @media ${() => theme.device.mobile} {
        margin-top: 80px;
        .vision-content{
            padding: 8rem 0;
            .vision-list{
                li{
                    p{
                        br{
                            display: none;
                        }
                    }
                }
            }
            .vision-img{
                margin-top: 5rem;
                img{
                    width: 100%;
                }
            }
        }
        .title{
            font-size: 3rem;
        }
    }

    @media ${() => theme.device.mobile3} {
        .vision-content{
            padding: 5rem 0;
            .vision-list{
                flex-direction: column;
                li{
                    width: 100%;
                    margin-bottom: 4rem;
                    p{
                        br{
                            display: block;
                        }
                    }
                }
            }
        }
        .title{
            font-size: 2.4rem;
            p{
                font-size: 1.6rem;
            }
        }
    }
`

const VisionBanner = styled(Box)`
    background-image: url("/img/vision/banner.png");
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    padding: 13rem 0;

    h1{
        font-size: 4rem;
        color: #fff;
        font-weight: bold;
        line-height: 150%;
        margin-bottom: 1rem;
    }
    p{
        font-size: 2rem;
        font-weight: 400;
        color: rgba(255,255,255,.6);
        line-height: 150%;
        margin-bottom: 8rem;
    }

    @media ${() => theme.device.mobile} {
        padding: 8rem 0;
        h1{
            font-size: 3rem;
        }
        p{
            font-size: 1.6rem;
            margin-bottom: 4rem;
        }
    }
`;