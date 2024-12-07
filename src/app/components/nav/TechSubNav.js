import * as React from "react";
import { Box, Button, Container, IconButton } from "@mui/material";
import {createTheme,Divider,Icon,ThemeProvider} from '@mui/material';
import styled from "@emotion/styled";
import theme from "@/app/style/theme";
import ContainerWrap from "../layout/ContainerWrap";

export default function TechSubNav({id}){
    return(
        <SubNavWrap>
            <ContainerWrap>
                  <ul className="sub-nav-wrap">
                      <li>
                          <a href="#sec1">외함 기술(AHS)</a>
                      </li>
                      <li>
                          <a href="#sec2">로봇 기술 (ARS)</a>
                      </li>
                      <li>
                          <a href="#sec3">광원 기술 (ASS)</a>
                      </li>
                  </ul>
              </ContainerWrap>
        </SubNavWrap>
    )
}

const SubNavWrap = styled(Box)`
    background-color: ${()=> theme.colors.primary};
    position: sticky;
    top: 110px;
    width: 100%;
    z-index: 11;
    display: flex;
    align-items: center;
    justify-content: center;
    .sub-nav-wrap{
        display: flex;
        align-items: center;
        justify-content: center;
        li{
            padding: 1.5rem 0;
            width: 30rem;
            display: flex;
            align-items: center;
            justify-content: center;
            background-color: ${()=> theme.colors.primary};
            transition: all .3s ease-in-out;
            a{
                font-size: 1.8rem;
                font-weight: 500;
                color: #fff;
                width: 100%;
                text-align: center;
            }
        }
        li:hover{
            background-color: #4B4FCD;
        }
    }
    @media ${() => theme.device.tablet} {
        top: 82px;
        .sub-nav-wrap{
            li{
                a{
                    font-size: 1.6rem;
                }
            }
        }
    }
    @media ${() => theme.device.mobile3} {
        .sub-nav-wrap{
            li{
                a{
                    font-size: 1.4rem;
                }
            }
        }
    }
`;