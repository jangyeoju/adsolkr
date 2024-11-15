"use client"
import * as React from "react";
import { Box, Button, Container, IconButton } from "@mui/material";
import {createTheme,Divider,Icon,ThemeProvider} from '@mui/material';
import styled from "@emotion/styled";
import theme from "./style/theme";
import Nav from "./components/nav/Nav";
import ContainerWrap from "./components/layout/ContainerWrap";
import FilledRoundBtn from "./components/button/FilledRoundBtn";
import AddIcon from '@mui/icons-material/Add';
import Footer from "./components/footer/Footer";
export default function Home() {

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

  return (
    <ThemeProvider theme={theme}>
        <Nav />
        <MainWrap>
            <div className="main-background">
              <ContainerWrap>
                  <h3>실내 다중이용시설용 청정로봇 </h3>
                  <h1 className="montserrat">CLIBO</h1>
                  <p>
                    사람이 있는 곳에서 인체에 무해하게<br/>
                    공기 정화 및 접촉바이러스까지 살균합니다.
                  </p>
                  <FilledRoundBtn text={"제품 보러가기"}/>
              </ContainerWrap>
              <div className="scroll-down-wrap">
              </div>
            </div>
            <ContainerWrap>
              <div className="video-wrap">
                <iframe width="100%" height="650" src="https://www.youtube.com/embed/23I7JE2Ps3Q?si=snRrSRIcv6AYobTW" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
              </div>
            </ContainerWrap> 
            <ServiceBoxList>
              <ContainerWrap>
                <h1 className="title">
                  바이러스와 미세먼지 걱정없는 세상<br/>
                  <strong className="montserrat">Advance-Solution</strong>이 만들겠습니다.
                </h1>
                <ul className="service-list">
                  <li id="service1" className="service-box">
                      <h5>Surface contact virus sterilization</h5>
                      <h2>표면 접촉바이러스 살균</h2>
                  </li>
                  <li id="service2" className="service-box">
                      <h5>Air purification disinfection</h5>
                      <h2>공기 부유 바이러스 살균</h2>
                  </li>
                  <li id="service3" className="service-box">
                      <h5>Fine dust air purification</h5>
                      <h2>미세먼지 공기정화</h2>
                  </li>
                  <li id="service4" className="service-box">
                      <h5>Pollution-oriented driving</h5>
                      <h2>오염지향성 주행</h2>
                  </li>
                  <li id="service5" className="service-box">
                      <h5>Automatic replacement station</h5>
                      <h2>자동 교체스테이션</h2>
                  </li>
                  <li id="service6" className="service-box">
                      <h5>Modular and one-touch enclosures</h5>
                      <h2>모듈화 및 원터치 외함</h2>
                  </li>
                </ul>
              </ContainerWrap>
            </ServiceBoxList>
            <SolutionWrap>
              <ContainerWrap>
                <h1 className="title montserrat">
                  <strong className="montserrat">CLIBO</strong> by Advance-Solution
                </h1>
                <p>
                  대면적의 다중이용시설인 공공기관(국공립병원, 공항, 관공서), <br/>
                  교육시설(학교, 강당)에 적용
                  렌탈서비스를 통한 병원, 요양원, 산후조리원 등에 적용  
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
            <Footer />
        </MainWrap>
    </ThemeProvider>
  );
}

const MainWrap = styled(Box )`
  .montserrat{
    font-family: "Montserrat", serif;
    font-weight: bold;
  }
  .title{
    font-size: 4rem;
    font-weight: bold;
    color: ${()=> theme.colors.textColor};
    line-height: 150%;
    text-align: center;
    line-break: anywhere;
    strong{
      color: ${()=> theme.colors.primary};
      font-size: 4rem;
    }
  }
  .main-background{
    background-image: url(../img/main/main_background.png);
    background-position: top;
    background-size: cover;
    background-repeat: no-repeat;
    width: 100%;
    height: 100vh;
    position: relative;
    display: flex;
    align-items: flex-start;
    justify-content: center;
    flex-direction: column;
    h1{
      font-size: 8rem;
      color:  ${()=> theme.colors.textColor};
    }
    h3{
      font-size: 3.5rem;
      color:  ${()=> theme.colors.textColor};
      font-weight: 500;
      line-height: 150%;
    }
    p{
      font-size: 2.2rem;
      color:  ${()=> theme.colors.textColor2};
      font-weight: 400;
      line-height: 150%;
      margin: 2rem 0 5rem 0;
    }
    .scroll-down-wrap{
      position: absolute;
      bottom: 3.5%;
      left: 50%;
      transform: translateX(-50%);
      cursor: pointer;
      width: 55px;
      height: 55px;
      display: flex;
      align-items: center;
      justify-content: center;
      background-image: url(../img/main/icon/scroll-down.svg);
      background-position: center;
      background-size: contain;
      animation: float 2s ease-in-out infinite;
      opacity: .6;

      @keyframes float {
        0% { transform: translateY(0) translateX(-50%); }
        50% { transform: translateY(-15px) translateX(-50%); }
        100% { transform: translateY(0) translateX(-50%); }
      }
    }

    
  }
  .video-wrap{
    padding: 8rem 0 13rem 0;
  }

  @media ${() => theme.device.tablet} {
    .main-background{
      background-image: url(../img/main/mobile_background.png);
      background-position: center;
      justify-content: flex-start;
      padding-top: 15rem;
      &>div{
        align-items: center;
        justify-content: center;
        display: flex;
        flex-direction: column;
      }
      h1{
        font-size: 4rem;
        text-align: center;
      }
      h3{
        font-size: 2.5rem;
        text-align: center;
      }
      p{
        font-size: 1.6rem;
        text-align: center;
        margin: 2rem 0 4rem 0;
      }
    }
    .title{
      font-size: 3rem;
      strong{
         font-size: 3rem;
       }
    }

   }

   @media ${() => theme.device.mobile3} {
    .main-background{
      padding-top: 15rem;
      h1{
        font-size: 3.5rem;
      }
      h3{
        font-size: 2rem;
      }
      p{
        margin: 1.5rem 0 3rem 0;
      }
    }
    .title{
       font-size: 2.4rem;
       strong{
         font-size: 2.4rem;
       }
     }
    .video-wrap{
     padding: 5rem 0 8rem 0;
    }
   }
`;

const ServiceBoxList = styled(Box)`
  background-color:${()=> theme.colors.backgroundColor};
  padding: 13rem 0 11rem 0;
  h1{
    margin-bottom: 8rem;
  }
  .service-list{
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-wrap : wrap;

    #service1{
      background-image:linear-gradient(rgba(0, 0, 0, 0.527), rgba(0, 0, 0, 0.5)),url(../img/main/service/service1.png);
      transition: all .3s ease-in-out;
    }
    #service2{
      background-image:linear-gradient(rgba(0, 0, 0, 0.527), rgba(0, 0, 0, 0.5)),url(../img/main/service/service2.png);
      transition: all .3s ease-in-out;
    }
    #service3{
      background-image:linear-gradient(rgba(0, 0, 0, 0.527), rgba(0, 0, 0, 0.5)),url(../img/main/service/service3.png);
      transition: all .3s ease-in-out;
    }
    #service4{
      background-image:linear-gradient(rgba(0, 0, 0, 0.527), rgba(0, 0, 0, 0.5)),url(../img/main/service/service4.png);
      transition: all .3s ease-in-out;
    }
    #service5{
      background-image:linear-gradient(rgba(0, 0, 0, 0.527), rgba(0, 0, 0, 0.5)),url(../img/main/service/service5.png);
      transition: all .3s ease-in-out;
    }
    #service6{
      background-image:linear-gradient(rgba(0, 0, 0, 0.527), rgba(0, 0, 0, 0.5)),url(../img/main/service/service6.png);
      transition: all .3s ease-in-out;
    }

    .service-box{
      height: 280px;
      width: 32%;
      border-radius: 24px;
      padding: 3rem;
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      justify-content: flex-end;

      background-position: center;
      background-repeat: no-repeat;
      background-size: cover;
      backdrop-filter: rgba(0,0,0,.6);
      margin-bottom: 2rem;
      transition: all .3s ease-in-out;
      cursor: pointer;
      h5{
        font-size: 1.4rem;
        color: #fff;
        font-weight: 300;
        line-height: 150%;
        margin-bottom: .5rem;
        opacity: .8;
      }
      h2{
        font-size: 2.4rem;
        color: #fff;
        font-weight: bold;
        line-height: 150%;

      }
    }

    #service1:hover{
      background-image: linear-gradient(180deg, rgba(93,98,255,.5) 0%, rgba(93,98,255,.5) 100%),url(../img/main/service/service1.png);
    }
    #service2:hover{
      background-image: linear-gradient(180deg, rgba(93,98,255,.5) 0%, rgba(93,98,255,.5) 100%),url(../img/main/service/service2.png);
    }
    #service3:hover{
      background-image: linear-gradient(180deg, rgba(93,98,255,.5) 0%, rgba(93,98,255,.5) 100%),url(../img/main/service/service3.png);
    }
    #service4:hover{
      background-image: linear-gradient(180deg, rgba(93,98,255,.5) 0%, rgba(93,98,255,.5) 100%),url(../img/main/service/service4.png);
    }
    #service5:hover{
      background-image: linear-gradient(180deg, rgba(93,98,255,.5) 0%, rgba(93,98,255,.5) 100%),url(../img/main/service/service5.png);
    }
    #service6:hover{
      background-image: linear-gradient(180deg, rgba(93,98,255,.5) 0%, rgba(93,98,255,.5) 100%),url(../img/main/service/service6.png);
    }
  }


  @media ${() => theme.device.mobile} {
    padding: 8rem 0;
    h1{
      margin-bottom: 5rem;
    }
    .service-list{
      .service-box{
        width: 48%;
        height: 18rem;
        padding: 2rem;
        h2{
          font-size: 2rem;
        }
        h5{
          font-size: 1.2rem;
        }
      }
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