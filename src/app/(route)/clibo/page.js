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
import Link from "next/link";
import TechSubNav from "@/app/components/nav/TechSubNav";
import FilledRoundBtn from "@/app/components/button/FilledRoundBtn";
import CheckIcon from '@mui/icons-material/Check';
import AddIcon from '@mui/icons-material/Add';

export default function Clibo() {

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
            <NavWrap>
                <Nav select={"menu2"} page={"clibo"}/>
            </NavWrap>
            <ProductWrap>
                <SubBannerWrap>
                    <SubBanner title={"Product"}>
                        <p>
                        청정로봇(CLIBO) 
                        </p>
                    </SubBanner>
                </SubBannerWrap>
                <div className="content-wrap2">
                    <h2 className="sub-title">
                        실내 다중 이용시설 방역로봇 CLIBO
                    </h2>
                    <p className="sub-title-detail">
                    사람들이 생활하는 모든 환경에서
                    미세먼지와  바이러스, <br/>
                    세균으로로부터 사람들을 보호합니다.
                    </p>
                    <div className="clibo-img-wrap">
                        <img src="/img/product/side-img1.png" id="content-img1"/>
                        <img src="/img/product/content1.png" id="content-img2"/>
                        <img src="/img/product/side-img2.png" id="content-img3"/>
                    </div>
                </div>
                <BackgroundBanner>
                    <ContainerWrap>
                        <h2>
                            <strong className="montserrat">CLIBO</strong>로<br/>
                            바이러스 없는 깨끗한 공기를 누리세요.
                        </h2>
                        <FilledRoundBtn text={"방역 및 청정 전문가 크리보"}/>
                    </ContainerWrap>
                </BackgroundBanner>
                <div className="content-wrap background-img">
                    <Container>
                        <h2>
                            <strong className="montserrat">CLIBO</strong>는
                        </h2>
                        <p>
                            실내다중이용시설내의 
                            접촉바이러스,
                            공기 살균,<br/>
                            공기 정화를 수행합니다.
                            배터리와 필터를 자동 교체합니다.<br/>
                            생산비용이 절감되고,
                            기간이 단축됩니다.
                            <br/>
                            고객의 요구에 대응 가능합니다.
                        </p>
                        <ul className="clibo-info-list">
                            <li>
                                <CheckIcon/>
                                다수의 특허기술을 적용
                            </li>
                            <li>
                                <CheckIcon/>
                                금형없는 외함 기술
                            </li>
                            <li>
                                <CheckIcon/>
                                인체 무해 살균 광원
                            </li>
                            <li>
                                <CheckIcon/>
                                배터리 및 필터 교체스테이션
                            </li>
                            <li>
                                <CheckIcon/>
                                K-design Award 수상
                            </li>
                        </ul>
                    </Container>
                </div>
                <ContentSection>
                    <ContainerWrap>
                        <div className="content-wrap" id="sec1">
                            <div className="content-title-wrap">
                                <div className="content-title-box">
                                    <h2>CLIBO 구성</h2> 
                                </div>
                                <div className="content-info-list">
                                    <h3>대면적 자율주행 방역 로봇</h3>
                                    <ul className="content-detail-info-list">
                                        <li>어드밴스 솔루션만의 3개 기술 적용 (외함기술 AHS, 로봇기술 ARS, 광원기술 ASS)</li>
                                        <li>표면 및 공기 살균 기능</li>
                                        <li>미세먼지 정화 기능</li>
                                        <li>배터리 및 필터 자동 교체</li>
                                    </ul>
                                </div>
                            </div>
                            <div className="content-img-box gray-bg">
                                <img src="/img/product/product-wrap.png" alt="product-wrap"/>
                            </div>
                        </div>
                    </ContainerWrap>
                </ContentSection>
                <ContentSection className="bg-color">
                    <ContainerWrap>
                        <div className="content-wrap" id="sec2">
                            <div className="content-title-wrap">
                                <div className="content-title-box">
                                    <h2>CLIBO의 청정 기능</h2> 
                                </div>
                                <div className="content-info-list">
                                    <h3>표면 및 공기 살균 기능 + 미세먼지 정화 기능</h3>
                                    <ul className="content-detail-info-list">
                                        <li>인체에 무해한 살균 광원을 통한 외부 표면 및 공기 살균</li>
                                        <li>살균 효과가 높은 UV-C(자외선) 살균 광원을 통한 내부 공기 살균</li>
                                        <li>헤파필터와 배기 팬을 통한 미세먼지 정화</li>
                                        <li>스테이션을 통한 폐필터와 새필터 자동 교체</li>
                                    </ul>
                                </div>
                            </div>
                            <div className="content-img-box">
                                <ul className="content-img-box-wrap">
                                    <li>
                                        <div>
                                            <img src="/img/product/box-img1.png" alt="box-img1"/>
                                            <div className="dp-img-wrap">
                                                <img src="/img/product/box-img1-1.png" alt="box-img1-1"/>
                                                <img src="/img/product/box-img1-2.png" alt="box-img1-1"/>
                                            </div>
                                        </div>
                                        <p>
                                            안전한 수납형 자외선 광원으로 <br/>
                                            공기 중 부유 바이러스 살균
                                        </p>
                                    </li>
                                    <li>
                                        <div>
                                            <img src="/img/product/box-img2.png" alt="box-img2"/>
                                            <div className="dp-img-wrap">
                                                <img src="/img/product/box-img2-1.png" alt="box-img2-1"/>
                                                <img src="/img/product/box-img2-2.png" alt="box-img2-1"/>
                                            </div>
                                        </div>
                                        <p>
                                        헤파 필터로 미세먼지 공기정화
                                        </p>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </ContainerWrap>
                </ContentSection>
                <ContentSection>
                    <ContainerWrap>
                        <div className="content-wrap" id="sec3">
                            <div className="content-title-wrap">
                                <div className="content-title-box">
                                    <h2>CLIBO 적용 기술</h2> 
                                </div>
                                <div className="content-info-list">
                                    <h3>스테이션 기술 + 디자인기술 + 자율주행 기술</h3>
                                    <div className="dp-wrap">
                                        <ul className="content-detail-info-list">
                                            <li>폐필터 제거 및 새필터 자동 교체</li>
                                            <li>방전 배터리 제거 및 완충 배터리 자동 교체</li>
                                            <li>기능성,경제성,심미성이 반영 된 디자인</li>
                                            <li>K-DESIGN AWARD 24 선정</li>
                                        </ul>
                                        <ul className="content-detail-info-list">
                                            <li>오염된 지역을 선행 청정하는 주행 알고리즘</li>
                                            <li>전력 효율성을 위한 상시전원 및 배터리 자동 스왑</li>
                                            <li>금형 최소화 및 공용 부품 사용시 나사 자국 하나 없는  외함</li>
                                            <li>모듈러 구조 및 생산성 향상, 관리를 위한 원터치식 결합 방식</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div className="content-img-box gray-bg ptb-5">
                                <img src="/img/product/content2.png" alt="product-wrap" id="product-img3"/>
                            </div>
                        </div>
                    </ContainerWrap>
                </ContentSection>
                <Divider/>
                <SolutionWrap>
              <ContainerWrap>
                <h1 className="sub-title montserrat">
                  <strong className="montserrat">CLIBO</strong> by Advance-Solution
                </h1>
                <p>
                공공기관인  학교, 병원, 공항과
                렌탈서비스 대상인 병원, 요양원, 산후조리원<br/>
                일판 판매 대상인 물류센터, 식품 공장, 육가공 공장, 축사 등에서<br/>
                표면 살균 및 청정을 통해 대기질을 개선하고 시민의 안전을 지키기 위해 사용됩니다.
                </p>
                <ul className="solution-list">
                  <li>
                      <AddIcon/>
                      <h4>CLIBO</h4>
                      <p>
                      by Advance-Solution
                      </p>
                  </li>
                  <li>
                      <img src="/img/main/icon/icon1.svg"/>
                      <h2>렌탈서비스</h2>
                      <p>
                        병원<br/>
                        요양원<br/>
                        산후조리원
                      </p>
                      <div className="add-icon">
                        <img src="/img/main/icon/add.svg" />
                      </div>
                  </li>
                  <li>
                      <img src="/img/main/icon/icon2.svg"/>
                      <h2>공공기관</h2>
                      <p>
                        조달청<br/>
                        혁신제품
                      </p>
                      <div className="add-icon">
                        <img src="/img/main/icon/add.svg"/>
                      </div>
                  </li>
                  <li>
                      <img src="/img/main/icon/icon3.svg"/>
                      <h2>일반판매</h2>
                      <p>
                      물류센터<br/>
                      식품 공장육<br/>
                      가공공장축사
                      </p>
                  </li>
                </ul>
                </ContainerWrap>
            </SolutionWrap>
            </ProductWrap>
            <Footer/>
        </ThemeProvider>
    </>
  )
}

const NavWrap = styled(Box)`
    position: relative;
    height: 150px;
    @media ${() => theme.device.mobile} {
        height: 130px;
    }
`;

const SubBannerWrap = styled(Box)`
    position: relative;
    /* margin-top: 100px; */
`;

const ProductWrap = styled(Box)`
        .bg-color{
            background-color: #F9F9FF;
        }
        .ptb-5{
            padding-top: 5rem;
            padding-bottom: 5rem;
            padding-left: 2rem;
            padding-right: 2rem;
            img{
                width: 90%;
            }
        }
        .content-wrap{
            padding: 10rem 0;
        }
        .content-wrap2{
            padding-top : 13rem;
        }
        .sub-title{
            font-size: 3.5rem;
            font-weight: bold;
            color: ${()=> theme.colors.textColor};
            line-height: 150%;
            text-align: center;
            strong{
                font-size: 3.5rem;
                font-weight: bold;
                color: ${()=> theme.colors.primary2};
            }
        }
        .sub-title-detail{
            font-size: 1.8rem;
            line-height: 150%;
            font-weight: 400;
            color: ${()=> theme.colors.textColor2};
            text-align: center;
            margin-top: 1rem;
        }
        .clibo-img-wrap{
            display: flex;
            justify-content: space-between;
            align-items: center;
   
            width: 100%;
            #content-img1{
                width: 21%;
            }
           #content-img3{
                width: 20%;
            }
            #content-img2{
                width: 40%;
            }
        }
        .background-img{
            background-image: url(../../img/product/background-img.png);
            background-size: cover;
            background-position: bottom;
            background-repeat: no-repeat;
            height: 740px;
            display: flex;
            align-items: center;
            justify-content: flex-start;
            h2{
                font-size: 4rem;
                font-weight: bold;
                color: ${()=> theme.colors.textColor};
                line-height: 150%;
                strong{
                    font-size: 4rem;
                    font-weight: bold;
                    color: ${()=> theme.colors.primary2};
                }
            }
            p{
                font-size: 2rem;
                line-height: 150%;
                font-weight: 400;
                color: ${()=> theme.colors.textColor2};
                text-align: left;
                margin-top: 1rem;
            }
            .clibo-info-list{
                background-color: rgba(249,249,255,.6);
                border-radius: 8px;
                padding: 2rem;
                width: 380px;
                margin-top: 5rem;
                li{
                    display: flex;
                    align-items: center;
                    justify-content: flex-start;
                    gap: 1rem;
                    font-size: 1.8rem;
                    color: ${()=> theme.colors.textColor2};
                    font-weight: 400;   
                    line-height: 150%;
                    margin-bottom: .5rem;
           
                }
                li:last-child{
                    margin-bottom: 0;
                }
            }
        }
    
    
    @media ${() => theme.device.tablet} {
        .sub-title{
            font-size: 3rem;
        }
        .sub-title-detail{
            font-size: 1.8rem;
        }
        .content-wrap{
            padding: 8rem 0;
        }
        .content-wrap2{
            padding-top : 8rem;
        }
        .clibo-img-wrap{
            margin-top: 5rem;
            #content-img2{
                width: 50%;
            }
            #content-img3{
                width: 18%;
            }
            #content-img1{
                width: 18%;
            }
        }
        .background-img{
            height: auto;
            h2{
                font-size: 3rem;
                strong{
                    font-size : 3rem;
                }
            }
            p{
                font-size: 1.8rem;
            }
            .clibo-info-list{
                margin-top: 3rem;
                li{
                    font-size: 1.6rem;
                }
            }
        }
    }
    @media ${() => theme.device.mobile} {
        .sub-title{
            font-size: 2.8rem;
            padding : 0 2rem;
        }
        .sub-title-detail{
            font-size: 1.6rem;
        }
        .content-wrap{
            padding: 5rem 0;
        }
        .content-wrap2{
            padding-top : 5rem;
        }
        .background-img{
            p{
                font-size: 1.6rem;
            }
            .clibo-info-list{
                width: 100%;
                li{
                    font-size: 1.4rem;
                }
            }
        }
    }
    @media ${() => theme.device.mobile3} {
        .sub-title{
            font-size: 2.2rem;
            strong{
                font-size : 2.2rem;
            }
        }
        .sub-title-detail{
            font-size: 1.4rem;
        }
        .clibo-img-wrap{
            margin-top: 2rem;
        }
    }


    `;

const BackgroundBanner = styled(Box)`
    background-color: ${()=> theme.colors.primary};
    padding: 10rem 0;
    &>div{
        display: flex;
        align-items : center;
        justify-content: space-between;
        h2{
            font-size: 3rem;
            font-weight: bold;
            color: #fff;
            line-height: 150%;
            strong{
                font-size: 3rem;
                font-weight: bold;
            }
        }
        button{
            background-color: #fff;
            color: ${()=> theme.colors.primary};
        }
    }
    @media ${() => theme.device.tablet} {
        padding: 8rem 0;
        &>div{
            flex-direction: column;
            align-items: flex-start;
        }
        button{
            margin-top: 2rem;
        }
    }
    @media ${() => theme.device.mobile} {
        padding: 5rem 0;
        &>div{
            align-items: center;
            h2{
                font-size: 2.4rem;
                text-align : center;
                strong{
                    font-size : 2.4rem;
                }
            }
        }
        button{
            margin-top: 2rem;
            width: 100%;
        }
    }
`;

const ContentSection = styled(Box)`
    .content-title-wrap{
        display: flex;
        align-items: center;
        justify-content: space-between;
        .content-title-box{
            /* width: 30%; */
            min-width: 300px;
            background-color: ${()=> theme.colors.primary};
            border-radius: 8px;
            padding: 1rem 3rem;
            display: flex;
            align-items: center;
            justify-content: center;
            height: 130px;
            h2{
                font-size: 2.8rem;
                font-weight: bold;
                color: #fff;
            }
        }
        .content-info-list{
            width: 68%;
            h3{
                font-size: 2rem;
                font-weight: bold;
                color: ${()=> theme.colors.textColor};
                line-height: 150%;
            }
            ul{
                padding: 0 0 0 1.5rem;
                margin: 1rem 0 0 0;
                li{
                    list-style: disc;
                    font-size: 1.6rem;
                    color: ${()=> theme.colors.textColor2};
                    line-height: 150%;
                    font-weight: 500;
                }
            }
            .dp-wrap{
                width: 100%;
                display: flex;
                align-items: flex-start;
                justify-content: space-between;
                gap: 1rem;
            }
        }
    }
    .content-img-box{
        margin-top: 5rem;
        border-radius: 16px;
        display:flex;
        align-items: center;
        justify-content: center;
        background-color : #fff;
        img{
            width: 70%;
        }
        .content-img-box-wrap{
            display: flex;
            align-items: center;
            justify-content: space-between;
            padding: 5rem 0;
            li{
                width: 49%;
                height: 548px;
                border-radius: 16px;
                padding: 3rem;  
                background-color: #F8F8F8;
                img:first-of-type:not(.dp-img-wrap img){
                    width: 100%;
                    height: 250px;
                    margin-bottom: 2rem;
                }
                &>div{
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    justify-content: center;
                }
                .dp-img-wrap{
                    display: flex;
                    align-items: center;
                    justify-content: space-between;
                    gap: 1rem;
                    img{
                        width: 49%;
                        height: 150px;
                    }
                }
                p{
                    font-size: 1.6rem;
                    font-weight: 400;
                    color: ${()=> theme.colors.textColor};
                    line-height: 150%;
                    text-align: center;
                    margin-top: 2rem;
                }
            }
        }
    }
    .gray-bg{
        background-color: #F8F8F8;
    }
    @media ${() => theme.device.tablet} {
        .content-title-wrap{
            flex-direction: column;
            align-items: flex-start;
            .content-title-box{
                width: 100%;
                height: 80px;
                margin-bottom: 2rem;
                h2{
                    font-size: 2.4rem;
                }
            }
            .content-info-list{
                width: 100%;
            }
        }
        .content-img-box{
            margin-top: 3rem;
            .content-img-box-wrap{
                padding: 3rem;
            }
        }
    }
    @media ${() => theme.device.mobile} {
        .content-img-box{
            .content-img-box-wrap{
                flex-direction: column;
                li{
                    width: 100%;
                    height: auto;
                    img:first-of-type:not(.dp-img-wrap img){
                        height: 180px;
                    }
                }
                li:first-of-type{
                    margin-bottom : 2rem;
                }
            }
        }
        #product-img3{
            width: 100%;
        }
    }
`;

const SolutionWrap = styled(Box)`
  padding: 13rem 0;
  p{
    font-size: 2rem;
    color : ${()=> theme.colors.textColor2};
    line-height: 150%;
    font-weight: 400;
    text-align: center;
    margin-top: 2rem;
  }
  .solution-list{
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-top: 8rem;
    li:first-of-type{
      background-color: ${()=> theme.colors.primary};
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      justify-content: flex-end;
      position: relative;
      h4{
        font-size: 3rem;
        font-weight: bold;
        color: #fff;
        font-family: "Montserrat", serif;
        font-weight: bold;
      }
      p{
        color: #fff;
        font-weight: 400;
        line-height: 150%;
        font-size: 1.6rem;
        font-family: "Montserrat", serif;
      }
      svg{
        position: absolute;
        top: 4rem;
        right: 4rem;
        color: #fff;
        width: 2.5rem;
        height: 2.5rem;
      }
    }
    li{
      padding: 4rem;
      border-radius: 24px;
      width: 24%;
      height: 26rem;
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      background-color: #fff;
      box-shadow:  0 0 20px rgba(0,0,0,.1);
      position: relative;
      img{
        width: 25px;
        height: 25px;
      }
      h2{
        font-size: 2.4rem;
        font-weight: bold;
        color : ${()=> theme.colors.textColor};
        margin: 1rem 0 1.5rem 0;
      }
      p{
        font-size: 2rem;
        text-align: left;
        line-height: 150%;
        margin-top: 0;
        font-weight: 400;
      }
      .add-icon{
        position: absolute;
        top: 50%;
        right: -20px;
        z-index: 9;
      }
    }
  }

  @media ${() => theme.device.mobile} {
    padding: 8rem 0;
    p{
      font-size: 1.6rem;
    }
    .solution-list{
      margin-top: 5rem;
      li:first-of-type{
        h4{
          font-size: 2.4rem;
        }
      }
      li{
        h2{
          font-size: 2rem;
        }
        p{
          font-size: 1.6rem;
        }
      }
    }
  }

  @media ${() => theme.device.mobile2} {
    p{
      br{
        display: none;
      }
    }
    .solution-list{
      flex-direction: column;
      li{
        width: 100%;
        height: auto;
        margin-bottom: 2rem;
        .add-icon{
          top: auto;
          bottom: -25px;
          right: 50%;
          z-index: 9;
        }
      }
    }
  }
`;