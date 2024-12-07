import * as React from "react";
import { Box, Button, IconButton } from "@mui/material";
import {createTheme,Divider,Icon,ThemeProvider} from '@mui/material';
import styled from "@emotion/styled";
import theme from "../../../app/style/theme";

import Close from "@mui/icons-material/Close";

import Link from "next/link";

import ListSubheader from '@mui/material/ListSubheader';
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Collapse from '@mui/material/Collapse';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import DraftsIcon from '@mui/icons-material/Drafts';
import SendIcon from '@mui/icons-material/Send';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';
import StarBorder from '@mui/icons-material/StarBorder';

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

    const [listOpen, setOpen] = React.useState(false);

    const handleClick = () => {
        setOpen(!listOpen);
    };


    const [listOpen2, setOpen2] = React.useState(false);

    const handleClick2 = () => {
        setOpen2(!listOpen2);
    };


    const [listOpen3, setOpen3] = React.useState(false);

    const handleClick3 = () => {
        setOpen3(!listOpen3);
    };


    return(
        <>
            <ThemeProvider theme={theme}>
                <NavWrap>
                    <div className="close-btn">
                        <IconButton onClick={close}><Close /></IconButton>
                    </div>
                    <StyledList
                        component="nav"
                        aria-labelledby="nested-list-subheader"
                        >
                        <ListItemButton onClick={handleClick}>
                            <ListItemText primary="어드밴스솔루션" />
                            {listOpen ? <ExpandLess /> : <ExpandMore />}
                        </ListItemButton>
                         <Collapse in={listOpen} timeout="auto" unmountOnExit>
                            <List component="div" disablePadding>
                                <Link href="/vision">
                                    <StyledListItemButton sx={{ pl: 2 }}>
                                        <ListItemText primary="비전" />
                                    </StyledListItemButton>
                                </Link>
                                <Link href="/current">
                                  <StyledListItemButton sx={{ pl: 2 }}>
                                    <ListItemText primary="현재" />
                                </StyledListItemButton>
                                </Link>
                                <Link href="/contact">
                                  <StyledListItemButton sx={{ pl: 2 }}>
                                    <ListItemText primary="문의하기 & 찾아오는 곳" />
                                </StyledListItemButton>
                                </Link>
                            </List>
                        </Collapse>

                        <ListItemButton onClick={handleClick2}>
                            <ListItemText primary="기술 및 제품" />
                            {listOpen2 ? <ExpandLess /> : <ExpandMore />}
                        </ListItemButton>
                         <Collapse in={listOpen2} timeout="auto" unmountOnExit>
                            <List component="div" disablePadding>
                                <Link href="/technology">
                                    <StyledListItemButton sx={{ pl: 2 }}>
                                        <ListItemText primary="외함 기술 (AHS)" />
                                    </StyledListItemButton>
                                </Link>
                                <Link href="/technology#sec2">
                                    <StyledListItemButton sx={{ pl: 2 }}>
                                        <ListItemText primary="로봇 기술 (ARS)" />
                                    </StyledListItemButton>
                                </Link>
                                <Link href="/technology#sec3">
                                    <StyledListItemButton sx={{ pl: 2 }}>
                                        <ListItemText primary="광원 기술 (ASS)" />
                                    </StyledListItemButton>
                                </Link>
                                <Link href="/clibo">
                                    <StyledListItemButton sx={{ pl: 2 }}>
                                        <ListItemText primary="청정로봇 (CLIBO)" />
                                    </StyledListItemButton>
                                </Link>
                            </List>
                        </Collapse>

                        <ListItemButton onClick={handleClick3}>
                            <ListItemText primary="소식 및 자료" />
                            {listOpen3 ? <ExpandLess /> : <ExpandMore />}
                        </ListItemButton>
                         <Collapse in={listOpen3} timeout="auto" unmountOnExit>
                            <List component="div" disablePadding>
                                <Link href="/news">
                                    <StyledListItemButton sx={{ pl: 2 }}>
                                        <ListItemText primary="뉴스&자료" />
                                    </StyledListItemButton>
                                </Link>
                            </List>
                        </Collapse>

                    </StyledList>
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
    z-index: 999;
    nav{
        border-bottom: none;
    }
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


const StyledList = styled(Box)`
    border-bottom: 1px solid rgba(255,255,255,.1);
    span{
        font-size: 1.4rem;
        color: #fff;
        font-weight: 400;
        margin: 0;
    }
    svg{
        color: #fff;
    }
    /* &:hover{
        background-color: ${()=> theme.colors.primary};
        h1{
            color: #fff;
        }
    } */
    @media ${() => theme.device.tablet} {
        h1{
            font-size: 1.4rem;
        }
    }
`;


const StyledListItemButton = styled(ListItemButton)`
    background-color: #252559;
`;