"use client"
import * as React from "react";
import { Box, Button, Container, IconButton } from "@mui/material";
import {createTheme,Divider,Icon,ThemeProvider} from '@mui/material';
import styled from "@emotion/styled";
import theme from "@/app/style/theme";
import Nav from "@/app/components/nav/Nav";
import ContainerWrap from "@/app/components/layout/ContainerWrap";
import Footer from "@/app/components/footer/Footer";
import InputText from "@/app/components/common/InputText";
import FileuploadInput from "@/app/components/common/FileuploadInput";

export default function Admin() {


    return (
        <>
            <NavWrap>
                <Nav select={"menu2"} page={"news"}/>
            </NavWrap>
            <NewsWrap>
                <ContainerWrap>
                    <InputWrap>
                        <h1>수상 인증 슬라이드 이미지 업로드</h1>
                        <Divider/>
                        <div className="input-box mt-2">
                            <h2>썸네일 이미지</h2>
                            <FileuploadInput />
                        </div>
                        <Divider/>
                        <div className="input-box mt-2">
                            <h2>순서</h2>
                            <InputText type={"number"}/>
                        </div>
                    </InputWrap>
                </ContainerWrap>
            </NewsWrap>
            <Footer/>
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

const NewsWrap = styled(Box)`

`;

const InputWrap = styled(Box)`
    padding: 5rem 0;
    height: 50vh;
    h1{
        font-size: 2.4rem;
        font-weight: bold;
        color: ${()=> theme.colors.textColor};
        margin-bottom: 2rem;
    }
    .mt-2{
        margin-top: 2rem;
    }
    .input-box{
        margin-bottom: 2rem;
        h2{
            font-size: 1.6rem;
            font-weight: bold;
            color: ${()=> theme.colors.textColor};
            margin-bottom: 1rem;
        }
    }
`;