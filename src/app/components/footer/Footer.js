import * as React from "react";
import { useState, useEffect } from 'react';
import { Box, Button, IconButton } from "@mui/material";
import {createTheme,Divider,Icon,ThemeProvider} from '@mui/material';
import styled from "@emotion/styled";
import theme from "../../../app/style/theme";
import ContainerWrap from "../layout/ContainerWrap";

export default function Footer({select}){
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
            <FooterWrap>
                <ContainerWrap>
                    <div className="footer-wrap">
                        <div className="logo-box">
                            <img src="/img/logo_w.svg" />
                        </div>
                        <div className="footer-info">
                            <p>
                            본사 : 경기도 안산시 상록구 한양대학로55, 창업보육센터 527호(사동) <br/>
                            지사 : 경기도 군포시 엘에스로 13, 신일IT유토지식산업센터 1303호(당정동)<br/>
                            기업부설연구소 : 경기도 성남시 수정구 대왕판교로 815, 기업지원허브 판교창업존 780호<br/>
                            Tel : 070.8887.0625 / E-mail : adsol@adsol.kr
                            </p>
                            <h5>© ADVANCE SOLUTION CO. LTD 2025</h5>
                        </div>
                    </div>
                </ContainerWrap>
            </FooterWrap>
        </>
    )
}

const FooterWrap = styled(Box)`
    background-color: ${()=> theme.colors.secondary};
    padding: 8rem 0;
    .footer-wrap{
        display: flex;
        align-items: flex-start;
        .logo-box{
            margin-right: 10rem;
            img{
                width: 180px;
            }
        }
        .footer-info{
            p{
                font-size: 1.4rem;
                color : #D1D1D9;
                font-weight: 300;
                line-height: 180%;
                margin-bottom: 3rem;
            }
            h5{
                font-size: 1.4rem;
                color: #fff;
                font-weight: 600;
            }
        }
    }
    @media ${() => theme.device.tablet} {
        padding: 5rem 0;
        .footer-wrap{
            flex-direction: column;
            align-items: flex-start;
            .logo-box{
                margin-bottom: 3rem;
            }
        }
    }
`;