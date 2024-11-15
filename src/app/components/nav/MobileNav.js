import * as React from "react";
import { Box, Button, IconButton } from "@mui/material";
import {createTheme,Divider,Icon,ThemeProvider} from '@mui/material';
import styled from "@emotion/styled";
import theme from "../../../app/style/theme";

import Close from "@mui/icons-material/Close";

import Link from "next/link";

export default function MobileNav({select,open,close}){
    const theme = createTheme({
        typography:{
            fontFamily : "Pretendard"
          },
          palette: {
              primary: {
                main: "#0457B2",
              },
          },
    })

    return(
        <>
            <ThemeProvider theme={theme}>
                <NavWrap>
                    <div className="close-btn">
                        <IconButton onClick={close}><Close /></IconButton>
                    </div>
                    <Link href="/" className={select == "menu1" ? "select" : ""}>
                        <StyledMenu>
                            <h1>어드밴스솔루션</h1>
                        </StyledMenu>
                    </Link>
                    <Link href="/technology" className={select == "menu2" ? "select" : ""}>
                        <StyledMenu>
                            <h1>기술 및 제품</h1>
                        </StyledMenu>
                    </Link>
                    <Link href="/" className={select == "menu3" ? "select" : ""}>
                        <StyledMenu>
                            <h1>소식 및 자료</h1>
                        </StyledMenu>
                    </Link>
                </NavWrap>
            </ThemeProvider>
        </> 
    )
}

const NavWrap = styled(Box)`
    width: 15%;
    height: 100vh;
    background-color: ${()=> theme.colors.secondary};
    position: fixed;
    top: 0;
    left: 0;
    .close-btn{
        padding: 1rem;
        display: flex;
        align-items: flex-end;
        justify-content: flex-end;
        button{
            svg{
                color: #fff;
            }
        }
    }
    .select{
        &>div{
            background-color: ${()=> theme.colors.primary} !important;
        }
        h1{
            font-weight: bold !important;
            color: #fff !important;
        }
   }
   @media ${() => theme.device.tablet} {
        width: 50%;
   }
   @media ${() => theme.device.mobile3} {

   }

`;


const StyledMenu = styled(Box)`
    padding: 2rem;
    border-bottom: 1px solid rgba(255,255,255,.1);
    display: flex;
    align-items: center;
    transition: all .3s ease-in-out;
    h1{
        font-size: 1.4rem;
        color: #fff;
        font-weight: 400;
        margin: 0;
    }
    &:hover{
        background-color: ${()=> theme.colors.primary};
        h1{
            color: #fff;
        }
    }
    @media ${() => theme.device.tablet} {
        h1{
            font-size: 1.4rem;
        }
    }
`;

