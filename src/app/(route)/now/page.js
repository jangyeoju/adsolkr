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
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';

// Import Swiper React components
import {Navigation,Pagination,Scrollbar,A11y} from 'swiper/modules';

import {Swiper,SwiperSlide} from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

export default function Now() {

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
            <Nav select={"menu4"} page={"now"}/>
                <NowWrap>
                    <div className="now-banner">
                        <ContainerWrap>
                            <h1 className="montserrat">Now</h1>
                            <p>현재 개요 및 이력</p>
                            <div className="now-content">
                            <div className="now-content-left table">
                                <ul className="table-wrap">
                                    <li>
                                        <div className="table-header h-1">  
                                            <h3>기업명</h3>
                                        </div>
                                        <div className="table-body h-1">  
                                            <h4>주식회사 어드밴스솔루션</h4>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="table-header h-1">  
                                            <h3>대표이사</h3>
                                        </div>
                                        <div className="table-body h-1">  
                                            <h4>채두현</h4>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="table-header h-1">  
                                            <h3>설립일</h3>
                                        </div>
                                        <div className="table-body h-1">  
                                            <h4>2021년 06월 25일</h4>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="table-header h-1">  
                                            <h3>자본금</h3>
                                        </div>
                                        <div className="table-body h-1">  
                                            <h4>1억 (2024년 6월 기준)</h4>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="table-header h-1">  
                                            <h3>임직원수</h3>
                                        </div>
                                        <div className="table-body h-1">  
                                            <h4>8명 (2024년 6월 기준)</h4>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="table-header h-1">  
                                            <h3>주 사업분야</h3>
                                        </div>
                                        <div className="table-body h-1">  
                                            <h4>Robot</h4>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="table-header h-3">  
                                            <h3>소재지</h3>
                                        </div>
                                        <div className="table-body h-3">  
                                            <h4>
                                                <strong>(본사)</strong> <br/>
                                                - 안산시 상록구 한양대학로 55, 창업보육센터 527호<br/>
                                                <strong>(지사)</strong> <br/>
                                                - 군포시 엘에스로 13, 신일IT유토지식산업센터 1303호<br/>
                                                <strong>(기업부설연구소)</strong> <br/>
                                                - 성남시 수정구 대왕판교로 815, 기업지원허브 780호<br/>
                                            </h4>
                                        </div>
                                    </li>
                                </ul>   
                            </div>
                            <div className="now-content-right">
                                <div className="now-content-right-header">
                                    <h2 className="montserrat">Company History</h2>
                                   <KeyboardArrowDownIcon/>
                                </div>
                                <p>회사 연혁</p>
                            </div>
                        </div>
                        </ContainerWrap>
                    </div>
                </NowWrap>
                <CompanyHistoryWrap>
                    <div className="conpany-history-wrap">
                        <ContainerWrap>
                            <h2 className="montserrat title">Company History</h2>
                            <p className="sub-title-text">설립 후 현재까지 빠르게 성장 중이며 새로운 도전을 항상 결과로 증명합니다.</p>
                        </ContainerWrap>
                        <div className="conpany-history-content">
                            <img src="/img/now/history.png" alt="company history"/>
                        </div>
                    </div>
                </CompanyHistoryWrap>
                <InvestmentWrap>
                    <div className="investment-wrap">
                        <ContainerWrap>
                            <h2 className="montserrat title">Invest History</h2>
                            <p className="sub-title-text">다양한 사업화 과제 및 정부 R&D 과제 선정, 우수한 기술로 과제 수행능력 증명</p>
                            <div className="line-img">
                                <img src="/img/now/Line.png" alt="line"/>
                            </div>
                            <div className="investment-content">
                                <div className="investment-content-wrap">
                                    <div className="investment-box" id="investment-box1">
                                        <h3>투자유치 0.3억</h3>
                                        <p>2023.03</p>
                                    </div>
                                </div>
                                <div className="investment-content-wrap">
                                    <div className="investment-box" id="investment-box2">
                                        <h3>청년창업학교<span>센서 및 모니터링 시스템</span></h3>
                                        <div className="p-wrap">
                                            <p>2022.03</p>
                                            <p>2022.11</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="investment-content-wrap">
                                    <div className="investment-box" id="investment-box3">
                                        <div className="dp-wrap">
                                            <h3>초격차 스타트업<span>살균 + 공기정화 청정로봇</span>
                                            <img src="/img/now/line2.png" alt="line2"/>
                                            <span>배터리 스테이션</span>
                                            </h3>
                                        </div>
                                        <div className="p-wrap">
                                            <p>2023.04</p>
                                            <p>2025.11</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="investment-content-wrap">
                                    <div className="investment-box" id="investment-box4">
                                        <h3>디딤돌 R&D<span>인체무해 살균 로봇</span></h3>
                                        <div className="p-wrap">
                                            <p>2023.07</p>
                                            <p>2023.07</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="investment-content-wrap">
                                    <div className="investment-box" id="investment-box5">
                                        <h3>전략형 R&D<span>재활용품 분류장치</span></h3>
                                        <div className="p-wrap">
                                            <p>2023.09</p>
                                            <p>2025.06</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </ContainerWrap>
                    </div>
                </InvestmentWrap>
                <PremierWrap>
                    <div className="priemier-wrap">
                        <ContainerWrap>
                            <h2 className="title">수상 및 인증</h2>
                            <p className="sub-title-text">어드밴스솔루션 수상 및 인증을 통해서 증명된 신뢰 있는 기업입니다.</p>
                            <ul className="priemier-content">
                                <li>
                                    <img src="/img/now/premier/premier1.png" alt="priemier1"/>
                                    <h4>초격차 스타트업 1000 프로젝트 선정</h4>
                                    <p>청최곡의 기술력을 증명하는 초격차 스타트업</p>
                                </li>
                                <li>
                                    <img src="/img/now/premier/premier2.png" alt="priemier1"/>
                                    <h4>K-DESIGN AWARD 24 선정</h4>
                                    <p>뛰어난 디자인까지 겸비한 디자인 어워드 수상</p>
                                </li>
                            </ul>
                            <div className="swiper-wrap">
                                <Swiper
                                    modules={[Navigation, Pagination, Scrollbar, A11y]}
                                    spaceBetween={50}
                                    // slidesPerView={4}
                                    navigation
                                    pagination={{ clickable: true }}
                                    onSlideChange={() => console.log('slide change')}
                                    onSwiper={(swiper) => console.log(swiper)}
                                    breakpoints={{
                                        // when window width is >= 320px
                                        320: {
                                          slidesPerView: 2,
                                          spaceBetween: 20
                                        },
                                        // when window width is >= 480px
                                        480: {
                                          slidesPerView: 3,
                                          spaceBetween: 30
                                        },
                                        // when window width is >= 640px
                                        640: {
                                          slidesPerView: 4,
                                          spaceBetween: 40
                                        }
                                    }}
                                >
                                    <StyledSwiperSlide>
                                        <img src="/img/now/premier/slide/slide1.png" alt="priemier1" width="100%" height="100%"/>
                                    </StyledSwiperSlide>
                                    <StyledSwiperSlide>
                                        <img src="/img/now/premier/slide/slide2.png" alt="priemier1" width="100%" height="100%"/>
                                    </StyledSwiperSlide>
                                    <StyledSwiperSlide>
                                        <img src="/img/now/premier/slide/slide3.png" alt="priemier1" width="100%" height="100%"/>
                                    </StyledSwiperSlide>
                                    <StyledSwiperSlide>
                                        <img src="/img/now/premier/slide/slide4.png" alt="priemier1" width="100%" height="100%"/>
                                    </StyledSwiperSlide>
                                    <StyledSwiperSlide>
                                        <img src="/img/now/premier/slide/slide5.jpg" alt="priemier1" width="100%" height="100%"/>
                                    </StyledSwiperSlide>
                                    <StyledSwiperSlide>
                                        <img src="/img/now/premier/slide/slide6.jpg" alt="priemier1" width="100%" height="100%"/>
                                    </StyledSwiperSlide>
                                    <StyledSwiperSlide>
                                        <img src="/img/now/premier/slide/slide7.jpg" alt="priemier1" width="100%" height="100%"/>
                                    </StyledSwiperSlide>
                                    <StyledSwiperSlide>
                                        <img src="/img/now/premier/slide/slide8.jpg" alt="priemier1" width="100%" height="100%"/>
                                    </StyledSwiperSlide>
                                    <StyledSwiperSlide>
                                        <img src="/img/now/premier/slide/slide9.jpg" alt="priemier1" width="100%" height="100%"/>
                                    </StyledSwiperSlide>
                                    <StyledSwiperSlide>
                                        <img src="/img/now/premier/slide/slide10.jpg" alt="priemier1" width="100%" height="100%"/>
                                    </StyledSwiperSlide>
                                    <StyledSwiperSlide>
                                        <img src="/img/now/premier/slide/slide11.jpg" alt="priemier1" width="100%" height="100%"/>
                                    </StyledSwiperSlide>
                                    <StyledSwiperSlide>
                                        <img src="/img/now/premier/slide/slide12.jpg" alt="priemier1" width="100%" height="100%"/>
                                    </StyledSwiperSlide>
                                    <StyledSwiperSlide>
                                        <img src="/img/now/premier/slide/slide13.jpg" alt="priemier1" width="100%" height="100%"/>
                                    </StyledSwiperSlide>
                                    <StyledSwiperSlide>
                                        <img src="/img/now/premier/slide/slide14.jpg" alt="priemier1" width="100%" height="100%"/>
                                    </StyledSwiperSlide>
                                    <StyledSwiperSlide>
                                        <img src="/img/now/premier/slide/slide15.jpg" alt="priemier1" width="100%" height="100%"/>
                                    </StyledSwiperSlide>
                                    <StyledSwiperSlide>
                                        <img src="/img/now/premier/slide/slide16.jpg" alt="priemier1" width="100%" height="100%"/>
                                    </StyledSwiperSlide>
                                    <StyledSwiperSlide>
                                        <img src="/img/now/premier/slide/slide17.jpg" alt="priemier1" width="100%" height="100%"/>
                                    </StyledSwiperSlide>
                                    <StyledSwiperSlide>
                                        <img src="/img/now/premier/slide/slide18.jpg" alt="priemier1" width="100%" height="100%"/>
                                    </StyledSwiperSlide>
                                    <StyledSwiperSlide>
                                        <img src="/img/now/premier/slide/slide19.jpg" alt="priemier1" width="100%" height="100%"/>
                                    </StyledSwiperSlide>
                                    <StyledSwiperSlide>
                                        <img src="/img/now/premier/slide/slide20.jpg" alt="priemier1" width="100%" height="100%"/>
                                    </StyledSwiperSlide>
                                    <StyledSwiperSlide>
                                        <img src="/img/now/premier/slide/slide21.jpg" alt="priemier1" width="100%" height="100%"/>
                                    </StyledSwiperSlide>
                                    <StyledSwiperSlide>
                                        <img src="/img/now/premier/slide/slide22.jpg" alt="priemier1" width="100%" height="100%"/>
                                    </StyledSwiperSlide>
                                </Swiper>
                            </div>
                        </ContainerWrap>
                        <Divider/>
                        <LogoWrap>
                            <ContainerWrap>
                                <ul className="logo-wrap">
                                    <li>
                                        <img src="/img/now/logo/logo1.png" alt="logo1"/>
                                        <h5>어드밴스솔루션 CI</h5>
                                    </li>
                                    <li>
                                        <img src="/img/now/logo/logo2.png" alt="logo2"/>
                                        <h5>제로 모니터링 시스템</h5>
                                    </li>
                                    <li>
                                        <img src="/img/now/logo/logo3.png" alt="logo3"/>
                                        <h5>청정로봇 크리보</h5>
                                    </li>
                                    <li>
                                        <img src="/img/now/logo/logo4.png" alt="logo4"/>
                                        <h5>방역로봇 라이트가드</h5>
                                    </li>
                                </ul>
                            </ContainerWrap>
                        </LogoWrap>
                    </div>
                </PremierWrap>
            <Footer/>
        </ThemeProvider>
    </>
  )
}   

const NowWrap = styled(Box)`
    margin-top: 100px;
    
    padding: 0 0 10rem 0;
    .now-banner{
       background-image: url('/img/now/banner.png');
       background-size: cover;
       background-position: center;
       background-repeat: no-repeat;
       padding: 10rem 0;
       height: 620px;

       h1{
        font-size: 4rem;
        font-weight: bold;
        color: #fff;
        margin-bottom: 2rem;
       }
       p{
        font-size: 1.6rem;
        font-weight: 400;
        color: #fff;

       }
       &>div{
        position: relative;
       }
    }
    
    .now-content{
        display: flex;
        justify-content: space-between;
        align-items: flex-end;
        margin-top: 10rem;
        /* border:1px solid red; */

        position: absolute;
        top: 80px;
        left: 50%;
        transform: translateX(-50%);
        width: 100%;
        .now-content-left{
            width: 60%;
        }
        .now-content-right{
            width: 40%;
            background-color:${()=> theme.colors.primary};
            padding: 5rem;
            .now-content-right-header{
                display: flex;
                justify-content: space-between;
                align-items: center;
                margin-bottom: 10rem;
                h2{
                    font-size: 2.8rem;
                    font-weight: bold;
                    color: #fff;
                }
                svg{
                    color: #fff;
                    width: 3rem;
                    height: 3rem;
                }
            }
            p{
                font-size: 1.6rem;
                font-weight: 400;
                color: #fff;
            }
        }
        .table{
            .table-wrap{
                border: 1px solid #E0E0E0;
                li{
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                    .table-header{
                        width: 20%; 
                        background-color: #F5F5F5;
                        padding: 2rem 0;
                        border-right: 1px solid #E0E0E0;
                        border-bottom: 1px solid #E0E0E0;
                        display: flex;
                        justify-content: center;
                        align-items: center;
                        h3{
                            text-align: center;
                            font-size: 1.4rem;
                            font-weight: 400;
                            color:  ${()=> theme.colors.textColor};
                        }
                    }
                    .table-body{
                        width: 80%;
                        padding: 2rem 0 2rem 2rem;
                        border-bottom: 1px solid #E0E0E0;
                        display: flex;
                        align-items: center; 
                        justify-content: flex-start;
                        background-color: #fff;
                        h4{
                            font-size: 1.4rem;
                            font-weight: 400;
                            line-height: 130%;
                            color:  ${()=> theme.colors.textColor};
                            strong{
                                font-size: 1.4rem;
                                font-weight: 600;
                            }
                        }
                    }
                }
            }
        }

    }

    @media ${() => theme.device.mobile} {
        margin-top: 80px;
        .now-banner{
            height: 750px;
            padding: 8rem 0;
            h1{
                font-size: 3rem;
            }
        }
        .now-content{
            flex-direction: column-reverse;
            top: 30px;
            .table{
                .table-wrap{
                    li{
                        .h-3{
                            height: 16rem !important;
                        }
                        .table-header{
                            width: 25%;
                            h3{
                                font-size: 1.2rem;
                            }
                        }
                        .table-body{
                            width: 75%;
                            h4{
                                font-size: 1.2rem;
                                strong{
                                    font-size: 1.2rem;
                                }
                            }
                        }
                    }
                }
            }
            .now-content-left{
                width: 100%;
            }
            .now-content-right{
                width: 100%;
                padding: 3rem;
                .now-content-right-header{
                    margin-bottom: 5rem;
                    h2{
                        font-size: 2.4rem;
                    }
                }
            }
        }
    }
    
`

const CompanyHistoryWrap = styled(Box)`
    padding: 10rem 0;
    .title{
        font-size: 4rem;
        font-weight: bold;
        color: ${()=> theme.colors.textColor};
        line-height: 150%;
        text-align: left;
        line-break: anywhere;
    }
    .sub-title-text{
        font-size: 2rem;  
        margin-top: 1rem;
        color: ${()=> theme.colors.textColor2};
        font-weight: 400;
        text-align: left;
        line-height: 150%;
    }
    .conpany-history-content{
        margin-top: 5rem;
        img{
            width: 100%;
        }
    }
    @media ${() => theme.device.mobile} {
        padding: 8rem 0;
        .title{
            font-size: 3rem;
        }
        .sub-title-text{
            font-size: 1.6rem;
        }
        .conpany-history-content{
            margin-top: 3rem;
            background-image: url('/img/now/history.png');
            background-size: cover;
            background-position: center;
            background-repeat: no-repeat;
            height: 300px;
            img{
                display: none;
            }
        }
    }
    @media ${() => theme.device.mobile2} {
        .conpany-history-content{
            height: 220px;
        }
    }
    @media ${() => theme.device.mobile3} {
        .conpany-history-content{
            height: 180px;
        }
    }
    @media ${() => theme.device.mobile4} {
        .conpany-history-content{
            height: 150px;
        }
    }
`

const InvestmentWrap = styled(Box)`
  
    .title{
        font-size: 4rem;
        font-weight: bold;
        color: #fff;
        line-height: 150%;
        text-align: left;
        line-break: anywhere;
    }
    .sub-title-text{
            font-size: 2rem;  
            margin-top: 1rem;
            color: #fff;
            font-weight: 400;
            text-align: left;
            line-height: 150%;
    }
    .investment-wrap{
        background-image: url('/img/now/banner2.png');
        background-size: cover;
        background-position: center;
        background-repeat: no-repeat;
        padding: 10rem 0 8rem 0;
        .line-img{
            margin-top: 3rem;
            img{
                width: 100%;
            }
        }
    }
    .investment-content{
        margin-top: 3rem;
        .investment-content-wrap{

            height: 100px;

            position: relative;
            #investment-box1{
                top: 0;
                left: 25%;
            }
            #investment-box2{
                top: 0;
                left: 0;
            }
            #investment-box3{
                top: 0;
                right: 0;
            }
            #investment-box4{
                top: 0;
                right: 35%;
            }
            #investment-box5{
                top: 0;
                right: 10%;
            }
            .investment-box{
                display: flex;
                justify-content: center;
                align-items: center;
                flex-direction: column;
                position: absolute;
                .dp-wrap{
                    display: flex;
                    align-items: center;
                    justify-content: space-between;
                }
                h3{
                    padding: 2rem;
                    width: fit-content;
                    background-color: ${()=> theme.colors.primary2};
                    font-size: 1.6rem;
                    font-weight: 600;
                    color: #fff;
                    text-align: center;
                    border-radius: 1rem;
                    span{
                        font-size: 1.4rem;
                        font-weight: 400;
                        color: #fff;
                        margin-left: 1rem;
                    }
                    img{
                        margin: 0 1rem;
                        width: 300px;
                    }
                }
                p{
                    font-size: 1.4rem;
                    font-weight: 400;
                    color: #fff;
                    opacity: 0.7;
                    text-align: center;
                    margin-top: .5rem;
                }
                .p-wrap{
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                    width: 100%;
                }
            }
        }
    }

    @media ${() => theme.device.mobile} {

        .title{
            font-size: 3rem;
        }
        .sub-title-text{
            font-size: 1.6rem;
        }
        .investment-wrap{
            padding: 8rem 0 6rem 0;
            .investment-content{

                .investment-content-wrap{
                    .investment-box{
                        img{
                            display: none;
                        }
                        h3{
                            font-size: 1.4rem;
                        }
                    }
                }
            }
        }
    }
`

const PremierWrap = styled(Box)`
    padding: 10rem 0;
    .custom-pagination{
        border: 1px solid red;
    }
    .title{
        font-size: 4rem;
        font-weight: bold;
        color: ${()=> theme.colors.textColor};
        line-height: 150%;
        text-align: center;
        line-break: anywhere;
    }
    .sub-title-text{
        font-size: 2rem;  
        margin-top: 1rem;
        color: ${()=> theme.colors.textColor2};
        font-weight: 400;
        text-align: center;
        line-height: 150%;
    }
    .priemier-content{
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin-top: 8rem;
        margin-bottom: 10rem;
        li{
            width: 48%;
            display: flex;
            justify-content: center;
            align-items: center;
            flex-direction: column;
            img{
                width: 100%;
                border-radius: 1rem;
                box-shadow: 0 0 1rem rgba(0, 0, 0, 0.1);
            }
            h4{
                font-size: 2rem;
                font-weight: 600;
                color: ${()=> theme.colors.textColor};
                margin-top: 2rem;
            }
            p{
                font-size: 1.4rem;
                font-weight: 400;
                color: ${()=> theme.colors.textColor2};
                margin-top: .5rem;
            }
        }
    }
    .swiper-wrap{
        margin-bottom: 10rem;
    }

    @media ${() => theme.device.mobile} {
        padding: 8rem 0 5rem 0;
        .title{
            font-size: 3rem;
        }
        .sub-title-text{
            font-size: 1.6rem;
        }
        .priemier-content{
           margin-top: 5rem;
           margin-bottom: 5rem;
           align-items: flex-start;
           li{
            h4{
                font-size: 1.4rem;
                text-align: center;
                line-height: 150%;
            }
            p{
                font-size: 1.2rem;
                text-align: center;
                line-height: 150%;
            }
           }
        }
    }
    .swiper-wrap{
        margin-bottom: 5rem;
    }
`   


const StyledSwiperSlide = styled(SwiperSlide)`
    width: 100%;
    height: 100%;
    margin-bottom: 5rem;
    img{
        box-shadow: 0 0 1rem rgba(0, 0, 0, 0.1);
        border-radius: 1rem;
    }

`
const LogoWrap = styled(Box)`
    margin-top: 10rem;
    .logo-wrap{
        display: flex;
        justify-content: center;
        align-items: center;
        li{
            width: 24%;
            display: flex;
            justify-content: center;
            align-items: center;
            flex-direction: column;

            img{
                width: 180px;
            }
            h5{
                font-size: 1.8rem;
                font-weight: 400;
                color: ${()=> theme.colors.textColor2};
                margin-top: 3rem;
            }
        }
    }
    @media ${() => theme.device.mobile} {
        margin-top : 8rem;
        .logo-wrap{
            flex-wrap: wrap;
            justify-content: space-between;
            li{
                width: 48%;
                margin-bottom: 5rem;
                img{
                    width: 150px;
                }
                h5{
                    font-size: 1.4rem;  
                    text-align: center;
                    line-height: 150%;
                    margin-top: 1rem;
                }
            }
        }
    }
`