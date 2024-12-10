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
export default function Technology() {

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
        <TechNavWrap>
            <Nav select={"menu2"} page={"tech"}/>
        </TechNavWrap>
         <TechnologyWrap>
            <SubBannerWrap>
                <SubBanner title={"Technology"}>
                    <p>
                    어드밴스솔루션은
                    다른 시각으로 지금 실현 가능한 <br/>
                    변화를 만드는 ROBOT 솔루션 기업입니다.  
                    </p>
                </SubBanner>
            </SubBannerWrap>
            <ContainerWrap>
                <ul className="technology-info-box">
                    <li>
                        <h5>01</h5>
                        <h3>융합 기술 결정체</h3>
                        <p>
                            융합 기술의 결정체인 로봇의 <br/>
                            핵심 제조 기술을 보유하여<br/>
                            로봇의 종류에 구애 받지 않고 편리하고 <br/>
                            빠르게 가격 경쟁력 있는 로봇을<br/>
                            개발 및 생산합니다.
                        </p>
                    </li>
                    <li>
                        <h5>02</h5>
                        <h3>자체 개발 고유 로봇</h3>
                        <p>
                        자체 역량을 기반으로 새로운 아이템을 <br/>
                        개발하고, 핵심 부품 내재화 전략을 통해 <br/>
                        국내 가공 및 제작을 택하여 원가를 <br/>
                        절감하고 개선하여 이를 통해 <br/>
                        어드밴스솔루션만의 혁신적인 <br/>
                        고유 로봇을 제공합니다.
                        </p>
                    </li>
                    <li>
                        <h5>03</h5>
                        <h3>별도 제작 가능</h3>
                        <p>
                            H/W, S/W, AI까지 모든 기술을 자체  <br/>
                            개발하여 로봇 개발 시 필요에 맞는  <br/>
                            기능과 디자인을 갖춘 로봇으로 별도  <br/>
                            제작하여 양산이 가능합니다. <br/>
                            (맞춤형 설계, 부품 별 커스터마이징, <br/>
                            AHS을 기반으로 한 외함 양산)
                        </p>
                    </li>
                </ul>
                <ModuleWrap>
                    <ContainerWrap>
                        <div className="left-box">
                            <div>
                                <h2 className="montserrat">Module</h2>
                                <p>
                                어드밴스솔루션은 다른 시각으로 지금 실현 가능한 <br/>
                                변화를 만드는 ROBOT 솔루션 기업입니다.  
                            </p>
                            </div>
                            <div className="product-img">
                                <img src="/img/technology/product1.png"/>
                            </div>
                        </div>
                        <div className="module-img-wrap">
                            <img src="/img/technology/product2.png"/>
                        </div>
                    </ContainerWrap>
                </ModuleWrap>
            </ContainerWrap>
            <Divider />

            <TechnologySection1 id="sec1">
                <ContainerWrap>
                    <ul className="technology-title">
                        <li>
                            <h5>01</h5>
                            <h2>외함기술 <strong className="montserrat">AHS</strong></h2>
                            <img src="/img/technology/Arrow.svg" />
                        </li>
                        <li>
                            <p>
                            금형 없이 공용 부품과 원터치 결합 방식으로 제작 비용을 절감하고, <br/>
                            생산 기간을 단축 모듈화 구조로 다양한 디바이스에 대응이 가능하고 <br/>
                            고객 요청에 맞게 대응이 가능
                            디자인적 요소를 적용하여  <br/>
                            K-Design award winner를 수상
                            </p>
                        </li>
                    </ul>   
                    <div className="ahs-box-wrap">
                        <div className="ahs1 ahs-box">
                            <h3>모듈화 구조</h3>
                            <p>모듈화된 구조로 다양한 디바이스에 대응 </p>
                        </div>
                        <div className="ahs-box-wrap2">
                            <div className="ahs2 ahs-box">
                                <h3>원터치 결속 기술</h3>
                                <p>원터치 결합기술로 생산 효율성 향상</p>
                            </div>
                            <div className="ahs3 ahs-box">
                                <h3>공용 부품</h3>
                                <p>공용화된 부품을 사용한 다양한 라인업 </p>
                            </div>
                        </div>
                    </div>
                </ContainerWrap>         
                <div className="cost-wrap">
                    <ContainerWrap>
                        <h2 className="sub-title">비용 및 제작 기간</h2>
                        <p className="sub-title-detail">제작비용 및 최소 주문수량 감소, 제작 기간 단축 </p>
                        <ul className="cost-box-wrap">
                            <li className="cost-box" id="cost1">
                                <h5>최소 주문수량</h5>
                                <h3>97% 감소</h3>
                            </li>
                            <li className="cost-box" id="cost2">
                                <h5>가격 경쟁력</h5>
                                <h3>80% 절감</h3>
                            </li>
                            <li className="cost-box" id="cost3">
                                <h5>신속한 제작</h5>
                                <h3>75% 단축</h3>
                            </li>
                        </ul>
                    </ContainerWrap>
                </div>
            </TechnologySection1>  

            <TechnologySection2 id="sec2">  
                <div className="technology-title-wrap">
                    <ContainerWrap>
                        <ul className="technology-title">
                            <li>
                                <h5>02</h5>
                                <h2>로봇 기술 <strong className="montserrat">ARS</strong></h2>
                                <img src="/img/technology/Arrow2.svg" />
                            </li>
                            <li>
                                <p>
                                오염된 지역을 선제적으로 청정하는 오염지향성 주행 기술
                                관리 <br/>
                                인력 없이 필터 및 배터리를 자동으로 교체하는 자동 스테이션 기술 
                                </p>
                            </li>
                        </ul>
                    </ContainerWrap>
                </div>    
                <div className="ars-wrap p-wrap">
                    <ContainerWrap>
                        <h2 className="sub-title">오염지향성주행 기술 </h2>
                        <ul className="ars-box-wrap">
                            <li>
                                <img src="/img/technology/ars1.png" />
                                <p>
                                센서와 연동하여 오염도가 <br/>
                                높은 지역을 우선 청정하여 효율적 
                                </p>
                            </li>
                            <li>
                                <img src="/img/technology/ars2.png" />
                                <p>
                                로봇 주행 시험<br/>
                                (공간 인식률, 주행 점유율, 장애물 회피율)
                                </p>
                            </li>
                        </ul>
                    </ContainerWrap>
                </div>
                <Divider />
                <div className="ars-wrap2 p-wrap">

                    <ContainerWrap>
                        <h2 className="sub-title">자동스테이션 기술 </h2>   
                        <div className="ars-img-box p-wrap">
                            <div className="ars-text">
                                <h3>01  자동스테이션 기술</h3>
                                <h1>
                                필터 및 배터리 <br/>
                                자동 교체 스테이션 
                                </h1>
                            </div>
                            <div className="ars-img">
                                <img src="/img/technology/tech1.png"/>
                            </div>
                        </div>
                    </ContainerWrap>

                     <div className="ars-img-box background-img-box p-wrap">
                        <ContainerWrap>
                            <div className="ars-img-box">
                                <div className="ars-img">
                                    <img src="/img/technology/tech2.png"/>
                                </div>
                                <div className="ars-text">
                                    <h3>02  자동스테이션 기술</h3>
                                    <h1>
                                    로봇암 기술
                                    </h1>
                                </div>
                            </div>
                        </ContainerWrap>
                     </div>

                     <ContainerWrap>
                        <div className="ars-img-box p-wrap">
                            <div className="ars-text">
                                <h3>03  자동스테이션 기술</h3>
                                <h1>
                                가이드를 통한 <br/>
                                정렬 기술
                                </h1>
                            </div>
                            <div className="ars-img">
                                <img src="/img/technology/tech3.png"/>
                            </div>
                        </div>
                    </ContainerWrap>
                     
                    <div className="ars-img-box background-img-box p-wrap">
                        <ContainerWrap>
                            <div className="ars-img-box">
                                <div className="ars-img">
                                    <img src="/img/technology/tech4.png"/>
                                </div>
                                <div className="ars-text">
                                    <h3>04  자동스테이션 기술</h3>
                                    <h1>
                                    필터 및 배터리 <br/>
                                    자동 교체 스테이션 
                                    </h1>
                                </div>
                            </div>
                        </ContainerWrap>
                     </div>
                </div>
            </TechnologySection2>  

            <TechnologySection3 id="sec3">
                <ContainerWrap>
                    <ul className="technology-title">
                        <li>
                            <h5>03</h5>
                            <h2>광원 기술 <strong className="montserrat">ASS</strong></h2>
                            <img src="/img/technology/Arrow.svg" />
                        </li>
                        <li>
                            <p>
                            인체에 무해한 특수한 원자외선 파장대의 살균 광원 수납식(개폐식)<br/> 
                            자외선 광원으로 안전성 확보 
                            </p>
                        </li>
                    </ul>
                    <div className="a-link-list">
                        <div className="a-link">
                            <Link href="#tech1">광원 수납(개폐) 기술</Link>
                        </div>
                        <div className="a-link">
                            <Link href="#tech2">원자외선 vs 자외선</Link>
                        </div>
                        <div className="a-link">
                            <Link href="#tech3">학계 논문</Link>
                        </div>
                    </div>
                    <div className="tech-box-wrap" id="tech1">
                        <div className="tech-box">
                            <div className="tech-box-img">
                                <img src="/img/technology/tech-box1.png"/>
                            </div>
                            <div className="tech-box-title">
                                <h2>광원 수납(개폐)  기술</h2>
                            </div>
                        </div>
                        <div className="tech-box">
                            <div className="tech-box-img">
                                <img src="/img/technology/tech-box2.png"/>
                            </div>
                            <div className="tech-box-title">
                                <h2>광원 조사각 조절 기술</h2>
                            </div>
                        </div>
                        <div className="tech-box">
                            <div className="tech-box-img">
                                <img src="/img/technology/tech-box3.png"/>
                            </div>
                            <div className="tech-box-title">
                                <h2>파장대 및 살균력 시험</h2>
                            </div>
                        </div>
                        <div className="tech-box">
                            <div className="tech-box-img">
                                <img src="/img/technology/tech-box4.png"/>
                            </div>
                            <div className="tech-box-title">
                                <h2>4종 균주 살균 시험 </h2>
                            </div>
                        </div>
                    </div>
                </ContainerWrap>
                <div className="rays-wrap" id="tech2">
                    <div className="rays-banner">
                        <ContainerWrap>
                            <h2>원자외선 VS 자외선</h2>
                            <p>인체에 무해한 원자외선(Far UV-C) 광원을 사용하여 안전합니다.</p>
                            <div className="rays-img-box-wrap">
                                <div className="rays-img-box">
                                    <img src="/img/technology/rays1.png"/>
                                </div>
                                <div className="rays-img-box">
                                    <img src="/img/technology/rays2.png"/>
                                </div>
                            </div>
                            <div className="rays-graph-wrap">
                                <h3>
                                기존 자외선(UV-C)와 <br/>
                                원자외선(Far UV-C)의 비교
                                </h3>
                                <div className="rays-graph">
                                    <img src="/img/technology/graph.png"/>
                                </div>
                            </div>
                        </ContainerWrap>
                    </div>
                </div>
                <div className="thesis-wrap" id="tech3">
                        <h2 className="sub-title">
                            학계 논문
                        </h2>
                    <ContainerWrap>
                        <div className="thesis-title-wrap">
                            <div className="thesis-title">
                                <h4>미국 콜롬비아 대학의 원자외선 안정성 검증 논문</h4>
                            </div>
                            <div className="thesis-img-wrap">
                                <div className="thesis-img">
                                    <img src="/img/technology/thesis1.png"/>
                                </div>
                                <div className="thesis-img">
                                    <img src="/img/technology/thesis2.png"/>
                                </div>
                            </div>
                        </div>
                        <div className="thesis-title-wrap">
                            <div className="thesis-title">
                                <h4>일본 고베 대학의 동물 실험 안정성 검증 논문</h4>
                            </div>
                            <div className="thesis-img-wrap">
                                <div className="thesis-img">
                                    <img src="/img/technology/thesis3.png"/>
                                </div>
                                <div className="thesis-img">
                                    <img src="/img/technology/thesis4.png"/>
                                </div>
                            </div>
                        </div>
                    </ContainerWrap>
                </div>
            </TechnologySection3>
            <Footer />
        </TechnologyWrap>
    </ThemeProvider>
    </>
  )

}

const TechNavWrap = styled(Box)`
    position: relative;
    height: 150px;
    @media ${() => theme.device.mobile} {
        height: 130px;
    }
`;

const TechnologyWrap = styled(Box)`
        .sub-title{
            font-size: 3.5rem;
            font-weight: bold;
            color: ${()=> theme.colors.textColor};
            line-height: 150%;
            text-align: center;
        }
        .sub-title-detail{
            font-size: 2rem;
            font-weight: 400;
            color: ${()=> theme.colors.textColor2};
            line-height: 150%;
            text-align: center;
        }
        .p-wrap{
            padding: 10rem 0;
        }
    .technology-info-box{
        display: flex;
        align-items: center;
        justify-content: space-between;
        margin: 10rem 0 0 0;
        li{
            padding: 5rem;
            border-radius: 24px;
            height: 35rem;
            width: 32%;
            background-color:  ${()=> theme.colors.backgroundColor};
            h5{
                font-size: 1.6rem;
                font-weight: bold;
                color: ${()=> theme.colors.primary};
                margin-bottom: 5rem;
            }
            h3{
                font-size: 2rem;
                font-weight: bold;
                color: ${()=> theme.colors.textColor};
                line-height: 150%;
                margin-bottom: 1rem;
            }
            p{
                font-size: 1.6rem;
                font-weight: 400;
                color: ${()=> theme.colors.textColor2};
                line-height: 150%;
            }
        }
        li:nth-of-type(2){
            background-color: #fff;
            box-shadow: 0 0 20px rgba(211,206,255,.3);
            margin-bottom: 10rem;
        }
    }
    @media ${() => theme.device.tablet} {
        .sub-title{
            font-size: 3rem;
        }
        .sub-title-detail{
            font-size: 1.8rem;
        }
        .p-wrap{
            padding: 8rem 0;
        }
        .technology-info-box{
            margin: 8rem 0 0 0;
            li{
                padding: 3rem;
                height: auto;
                p{
                    font-size: 1.4rem;
                    line-break: anywhere;
                    br{
                        display: none;
                    }
                }
            }
        }
    }
    @media ${() => theme.device.mobile} {
        .sub-title{
            font-size: 2.8rem;
        }
        .sub-title-detail{
            font-size: 1.6rem;
        }
        .p-wrap{
            padding: 5rem 0;
        }
        .technology-info-box{
            flex-direction: column;
            margin-top: 5rem;
            li{
                width: 100%;
                margin-bottom: 2rem;
                h5{
                    margin-bottom: 2rem;
                }
            }
            li:nth-of-type(2){
                margin-bottom: 2rem;
            }
            li:last-of-type{
                margin: 0;
            }
        }
    }
`;

const SubBannerWrap = styled(Box)`
    position: relative;
    /* margin-top: 100px; */
`;



const ModuleWrap = styled(Box)`
    padding-bottom: 5rem;
    &>div{
        display: flex;
    align-items: center;
    justify-content: space-between;
    }
    .left-box{
        width: 40%;
        h2{
            font-size: 5rem;
            margin-bottom: 1rem;
        }
        p{
            font-size: 1.8rem;
            line-height: 150%;
            color: ${()=> theme.colors.textColor2};
            font-weight: 400;
        }
        .product-img{
            margin-top: 8rem;
            width: 48%;
            img{
                width: 100%;
            }
        }
    }
    .module-img-wrap{
        width: 70%;
        img{
            width: 100%;
        }
    }
    @media ${() => theme.device.mobile} {
        padding-top: 5rem;
        &>div{
            flex-direction: column;
        }
        .left-box{
            width: 100%;
            display: flex;
            align-items: center;
            justify-content: space-between;
            &>div{
                width: 70%;
            }
            h2{
                font-size: 3.5rem;
            }
            p{
                font-size: 1.6rem;
                br{
                    display: none;
                    line-break: anywhere;
                }
            }
            .product-img{
            margin-top: 0;
            width: 15%;
            img{
                width: 100%;
            }
        }
        }
        .module-img-wrap{
            width: 100%;
        }
    }
`;

const TechnologySection1 = styled(Box)`
  
    .technology-title{
        padding: 10rem 0 8rem 0;
        display: flex;
        align-items: flex-start;
        li{
            width: 50%;
            h5{
                font-size: 1.6rem;
                color: ${()=> theme.colors.textColor2};
                line-height: 150%;
                font-weight: 500;
                margin-bottom: .5rem;
            }
            h2{
                font-size: 4rem;
                color: ${()=> theme.colors.textColor};
                font-weight: 600;
                strong{
                    font-size: 4rem;
                    color: ${()=> theme.colors.primary2};
                }
            }
            img{
                margin-top: 4rem;
            }
            p{
                font-size: 1.8rem;
                color: ${()=> theme.colors.textColor2};
                line-height: 160%;
                font-weight: 400;
            }
        }
    }
    .ahs-box-wrap{
        display: flex;
        align-items: flex-start;
        justify-content: space-between;
        padding-bottom: 10rem;
        .ahs-box{
            border-radius: 24px;
            padding: 5rem;
            background-position: center;
            background-size: cover;
            h3{
                font-size: 2.4rem;
                color: ${()=> theme.colors.textColor};
                line-height: 150%;
                font-weight: bold;
                margin-bottom: .5rem;
            }
            p{
                font-size: 1.6rem;
                color: ${()=> theme.colors.textColor2};
                line-height: 150%;
                font-weight: 400;
            }
        }
        .ahs-box-wrap2{
            width: 63%;
        }
        .ahs1{
            width: 35%;
            height: 65rem;
            background-image: url(../img/technology/ahs1.png);
        }
        .ahs2{
            width: 100%;
            background-image: url(../img/technology/ahs2.png);
            height: 28rem;
            margin-bottom: 2rem;
        }
        .ahs3{
            width: 100%;
            background-image: url(../img/technology/ahs3.png);
            height: 35rem;
        }
    }
    .cost-wrap{
        background-color: ${()=> theme.colors.backgroundColor};
        padding: 10rem 0;
        .cost-box-wrap{
            display: flex;
            align-items: center;
            justify-content: space-between;
            margin-top: 8rem;
            .cost-box{
                padding: 5rem;
                border-radius: 24px;
                height: 420px;
                background-color: #fff;
                width: 32%;
                background-position: bottom;
                background-size: contain;
                background-repeat: no-repeat;
                box-shadow: 0 0 20px rgba(211,206,255,.3);
                h5{
                    font-size: 2.4rem;
                    font-weight: 500;
                    color: ${()=> theme.colors.textColor2};
                    line-height: 150%;
                }
                h3{
                    font-size: 4rem;
                    font-weight: bold;
                    line-height: 150%;
                    color: ${()=> theme.colors.primary};
                }
            }
            #cost1{
                background-image: url(../img/technology/cost1.png);
            }
            #cost2{
                background-image: url(../img/technology/cost2.png);
            }
            #cost3{
                background-image: url(../img/technology/cost3.png);
            }
        }
    }
    @media ${() => theme.device.tablet} {
        .technology-title{
            padding: 8rem 0 8rem 0;
            li{
                h2{
                    font-size: 3.5rem;
                    strong{
                        font-size: 3.5rem;
                    }
                }
                p{
                    font-size: 1.6rem;
                    line-break: anywhere;
                    br{
                        display: none;
                    }
                }
            }
        }
        .ahs-box-wrap{
            padding-bottom: 8rem;
        }
        .cost-wrap{
            padding: 8rem 0;
            .cost-box-wrap{
                margin-top: 5rem;
            }
        }
    }
    @media ${() => theme.device.mobile2} {
        .technology-title{
            padding: 5rem 0 5rem 0;
            li{
                h2{
                    font-size: 2.5rem;
                    strong{
                        font-size: 2.5rem;
                    }
                }
                p{
                    font-size: 1.4rem;
                }
            }
        }
        .ahs-box-wrap{
            flex-direction: column;
            .ahs-box-wrap2{
                width: 100%;
            }
            .ahs1{
                width: 100%;
                height: 30rem;
                background-position : top;
            }
            .ahs-box{
                flex-direction: column;
                padding: 3rem;
            }
            .ahs2{
                width: 100%;
                margin-top: 2rem;
                height: 30rem;
                background-position : top;
            }
            .ahs3{
                height: 30rem;
                background-position : top;
            }
        }
        .cost-wrap{
            .cost-box-wrap{
                flex-direction: column;
                .cost-box{
                    width: 80%;
                    background-position : right;
                    height:20rem;
                    margin-bottom: 2rem;
                    padding: 3rem;
                    h3{
                        font-size: 2.8rem;
                    }
                    h5{
                        font-size: 1.8rem;
                    }
                }
                .cost-box:last-of-type{
                    margin: 0;
                }
            }
        }
    }
`;

const TechnologySection2 = styled(Box)`
    .technology-title-wrap{
        padding: 10rem 0 8rem 0;
        background-color: ${()=> theme.colors.primary};
    }
    .technology-title{
        display: flex;
        align-items: flex-start;
        li{
            width: 50%;
            h5{
                font-size: 1.6rem;
                color: #fff;
                line-height: 150%;
                font-weight: 500;
                margin-bottom: .5rem;
            }
            h2{
                font-size: 4rem;
                color: #fff;
                font-weight: 600;
                strong{
                    font-size: 4rem;
                    color: #fff;
                }
            }
            img{
                margin-top: 4rem;

            }
            p{
                font-size: 1.8rem;
                color: #fff;
                line-height: 160%;
                font-weight: 400;
            }
        }
    }
    .ars-wrap{
        .ars-box-wrap{
            display: flex;
            align-items: center;
            justify-content: space-between;
            margin-top: 5rem;
            li{
                width: 49%;
                p{
                    font-size: 1.8rem;
                    color:  ${()=> theme.colors.textColor2};
                    line-height: 150%;
                    font-weight: 400;
                    text-align: center;
                    margin-top: 2rem;
                }
                img{
                    width: 100%;
                }
            }
        }
    }
    .ars-img-box{
        display: flex;
        align-items: center;
        justify-content: space-between;
        .ars-img{
            width: 49%;
            img{
                width: 100%;
            }
        }
        .ars-text{
            width: 35%;
            h3{
                font-size: 2rem;
                font-weight: bold;
                color:  ${()=> theme.colors.primary};
                line-height: 150%;
                margin-bottom: 1rem;
            }
            h1{
                font-size: 3.5rem;
                font-weight: bold;
                color:  ${()=> theme.colors.textColor};
                line-height: 150%;
            }
        }
    }
    .background-img-box{
        background-color:${()=> theme.colors.backgroundColor2};
    }
    @media ${() => theme.device.tablet} {
        .technology-title-wrap{
            padding: 8rem 0 8rem 0;
        }
        .technology-title{
            li{
                h2{
                    font-size: 3.5rem;
                    strong{
                        font-size: 3.5rem;
                    }
                }
                p{
                    font-size: 1.6rem;
                    line-break: anywhere;
                    br{
                        display: none;
                    }
                }
            }
        }
        .ars-img-box{
            .ars-text{
                h1{
                    font-size: 2.8rem;
                }
                h3{
                    font-size: 1.4rem;
                }
            }
        }
    }
    @media ${() => theme.device.mobile2} {
        .technology-title-wrap{
            padding: 5rem 0 5rem 0;
        }
        .technology-title{
            li{
                h2{
                    font-size: 2.5rem;
                    strong{
                        font-size: 2.5rem;
                    }
                }
                p{
                    font-size: 1.4rem;
                }
            }
        }
        .ars-wrap{
            .ars-box-wrap{
                flex-direction: column;
                li{
                    width:100%;
                }
                li:first-of-type{
                    margin-bottom: 5rem;
                }
            }
        }
        .ars-img-box{
            flex-direction: column;
            .ars-text{
                width: 100%;
            }
            .ars-img{
                width : 100%;
                margin-top: 2rem;
            }
        }
        .background-img-box{
            .ars-img-box{

                flex-direction: column-reverse !important;
                .ars-img{
                    margin :2rem 0 0 0;
                }
            }
        }
    }
`;

const TechnologySection3 = styled(Box)`
     .technology-title{
        padding: 0 0 8rem 0;
        display: flex;
        align-items: flex-start;
        li{
            width: 50%;
            h5{
                font-size: 1.6rem;
                color: ${()=> theme.colors.textColor2};
                line-height: 150%;
                font-weight: 500;
                margin-bottom: .5rem;
            }
            h2{
                font-size: 4rem;
                color: ${()=> theme.colors.textColor};
                font-weight: 600;
                strong{
                    font-size: 4rem;
                    color: ${()=> theme.colors.primary2};
                }
            }
            img{
                margin-top: 4rem;
            }
            p{
                font-size: 1.8rem;
                color: ${()=> theme.colors.textColor2};
                line-height: 160%;
                font-weight: 400;
            }
        }
    }
    .a-link-list{
        display: flex;
        align-items: center;
        margin-bottom: 8rem;
        .a-link{
            width: 33.3%;
            display: flex;
            align-items: center;
            justify-content: center;
            background-color: ${()=> theme.colors.backgroundColor2};
            transition: all .3s ease-in-out;
            a{
                padding: 1.5rem 0;
                display: inline-block;
                font-size: 1.8rem;
                color: #22282F;
                width: 100%;
                text-align: center;
            }
        }
        .a-link:first-of-type{
            border-bottom-left-radius: 8px;
            border-top-left-radius: 8px;
        }
        .a-link:last-of-type{
            border-bottom-right-radius: 8px;
            border-top-right-radius: 8px;
        }
        .a-link:hover{
            background-color: ${()=> theme.colors.primary};
            a{
                color: #fff;
                font-weight:bold;
            }
        }
    }
    .tech-box-wrap{
        display: flex;
        align-items:center;
        justify-content:space-between;
        flex-wrap: wrap;

        .tech-box{
            width: 49%;
            margin-bottom: 2rem;
            transition: all .3s ease-in-out;
            
            .tech-box-img{
                border-top-left-radius: 16px;
                border-top-right-radius: 16px;   
                overflow: hidden;
                position: relative;
            }
            img{
                width: 100%;
                transition: all 0.4s ease;
                backface-visibility: hidden; 
            }
            .tech-box-title{
                background-color: ${()=> theme.colors.backgroundColor2};
                border-bottom-left-radius: 16px;
                border-bottom-right-radius: 16px;   
                padding: 2rem 2rem;
                transition: all .3s ease-in-out;
                /* min-height: 80px;
                height: 80px; */
                h2{
                    font-size: 2rem;
                    color: ${()=> theme.colors.textColor};
                    font-weight: 500;
                    transition: all .3s ease-in-out;
                }
            }
        }
        .tech-box:hover{
            img{
                transform: scale(1.08);
            }
            .tech-box-title{
                background-color: ${()=> theme.colors.primary};
                h2{
                    color: #fff;
                }
            }
        }
    }
    .rays-wrap{
        margin: 10rem 0;
        .rays-banner{
            background-image: url(../img/technology/sub-banner.png);
            background-position: top;
            background-repeat: no-repeat;
            background-size: cover;
            padding: 10rem 0;
            h2{
            font-size: 3.5rem;
            font-weight: bold;
            color:#fff;
            line-height: 150%;
            text-align: center;
            }
            p{
                font-size: 2rem;
                font-weight: 400;
                color: #fff;
                line-height: 150%;
                text-align: center;
            }
            .rays-img-box-wrap{
                margin: 8rem 0;
                display: flex;
                align-items: center;
                justify-content: space-between;
                .rays-img-box{
                    width: 49%;
                    border-radius: 16px;
                    box-shadow: 0 0 20px rgba(211,206,255,.3);
                    background-color: #fff;
                    img{
                        width: 100%;
                    }
                }
            }
            .rays-graph-wrap{
                display: flex;
                align-items:flex-start;
                justify-content: space-between;
                h3{
                    font-size: 2.8rem;
                    color: ${()=> theme.colors.textColor};
                    font-weight: bold;
                    line-height: 150%;
                    width: 40%;
                }
                .rays-graph{
                    width: 60%;
                    img{
                        box-shadow: 0 0 20px rgba(0,0,0,.1);
                        width: 100%;
                    }
                }
            }
        }
    }
    .thesis-wrap{
        &>div{
            display: flex;
            align-items: center;
            justify-content: space-between;

            margin: 5rem auto 10rem auto;
        }
        .thesis-title-wrap{
            width: 49%;
            .thesis-title{
                background-color:  ${()=> theme.colors.primary};
                padding: 1.5rem 3rem;
                border-radius: 16px;
                h4{
                    font-size: 1.8rem;
                    color: #fff;
                    font-weight: bold;
                    text-align: center;
                }
            }
            .thesis-img-wrap{
                display:flex;
                align-items: center;
                justify-content: space-between;
                margin-top: 3rem;
                .thesis-img{
                    width: 49%;
                    border-radius: 16px;
                    border: 1px solid rgba(0,0,0,.1);
                    img{
                        width: 100%;
                    }
                }
            }
        }
    }

    @media ${() => theme.device.tablet} {

        .technology-title{
            li{
                h2{
                    font-size: 3.5rem;
                    strong{
                        font-size: 3.5rem;
                    }
                }
                p{
                    font-size: 1.6rem;
                    line-break: anywhere;
                    br{
                        display: none;
                    }
                }
            }
        }

        .a-link-list{
            margin-bottom: 3rem;
            .a-link{
                height: 64px;
                a{
                    font-size: 1.4rem;
                }
            }
        }
        .rays-wrap{
            margin: 8rem 0;
            .rays-banner{
                padding: 8rem 0;
                h2{
                    font-size: 2.8rem;
                }
                p{
                    font-size: 1.8rem;
                }
                .rays-graph-wrap{
                    h3{
                        font-size: 2rem;
                        br{
                            display: none;
                        }
                    }
                }
            }
        }

    }


    @media ${() => theme.device.mobile2} {

        .technology-title{
            padding-bottom: 5rem;
            li{
                h2{
                    font-size: 2.5rem;
                    strong{
                        font-size: 2.5rem;
                    }
                }
                p{
                    font-size: 1.4rem;
                }
            }
        }

        .tech-box-wrap{
            .tech-box{
                .tech-box-title{
                    h2{
                        font-size: 1.8rem;
                    }
                }
            }
        }
        .rays-wrap{
            margin: 3rem 0 5rem 0;
            .rays-banner{
                padding: 5rem 0;
                .rays-img-box-wrap{
                    margin: 5rem 0;
                }
                .rays-graph-wrap{
                    flex-direction: column;
                    h3{
                        width: 100%;
                        margin-bottom: 2rem;
                        br{
                            display: block;
                        }
                    }
                    .rays-graph{
                        width: 100%;
                    }
                }
            }
        }
        .thesis-wrap{
            &>div{
                flex-direction: column;
            }
            .thesis-title-wrap {
                width: 100%;
                .thesis-img-wrap{
                    margin-top: 2rem;
                }
            }
            .thesis-title-wrap:first-of-type{
                margin-bottom: 5rem;
            }
        }
    }
`;