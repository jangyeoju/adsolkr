import * as React from "react";
import { useState, useEffect } from 'react';
import { Box, Button, IconButton } from "@mui/material";
import {createTheme,Divider,Icon,ThemeProvider} from '@mui/material';
import styled from "@emotion/styled";
import theme from "../../../app/style/theme";
import ContainerWrap from "../layout/ContainerWrap";
import Close from "@mui/icons-material/Close";
import SwipeableDrawer from '@mui/material/SwipeableDrawer';
import MenuIcon from '@mui/icons-material/Menu';
import MobileNav from "./MobileNav";
import styles from '../../style/Navbar.module.css';
import TechSubNav from "./TechSubNav";
import Link from "next/link";

export default function Nav({select , page}){
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

    const [state, setState] = React.useState({
        right: false,
      });
    
      const toggleDrawer = (anchor, open) => (event) => {
        if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
          return;
        }
    
        setState({ ...state, [anchor]: open });
      };


      const [open2, setOpen2] = React.useState(false);

      const handleDrawerOpen2 = () => {
        setOpen2(true);
      };
    
      const handleDrawerClose2 = () => {
        setOpen2(false);
      };

      const list = (anchor) => (
        <Box>
            <MobileNav select={select} close={handleDrawerClose2}/>
        </Box>
      );


      const [scrollProgress, setScrollProgress] = useState(0);

      const [visible, setVisible] = useState(true);
      const [prevScrollPos, setPrevScrollPos] = useState(0);

      useEffect(() => {
        const handleScroll = () => {
            // 현재 스크롤 위치
            const currentScrollPos = window.scrollY;
            
            // 스크롤 방향 확인 (true = 위로 스크롤, false = 아래로 스크롤)
            const isVisible = prevScrollPos > currentScrollPos;

            setVisible(isVisible);
            setPrevScrollPos(currentScrollPos);

            // 기존의 배경색 투명도 효과도 유지
            const scrolled = Math.min(currentScrollPos / 100, 1);
            setScrollProgress(scrolled);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, [prevScrollPos]);

      
    return(
         <ThemeProvider theme={theme}>
            <NavWrap 
            >
                <div 
                    className={styles.navbar}
                    style={{
                           transform: visible ? 'translateY(0)' : 'translateY(-100%)',
                        transition: 'transform 0.3s ease-in-out',
                        backgroundColor: `rgba(255, 255, 255, ${scrollProgress * 1})`,
                    }}

                >
                <ContainerWrap>
                    <div className="dp-wrap align-cen logo-box-wrap">
                        <Link href="/">
                            <div className="logo-box">
                                <img src="/img/logo.svg" />
                            </div>
                        </Link>
                    </div>
                    <Mobile>
                        {['left'].map((anchor) => (
                            <React.Fragment key={anchor}>
                            <Button className="icon-btn" onClick={handleDrawerOpen2}><MenuIcon/></Button>
                            <SwipeableDrawer
                                anchor={anchor}
                                open={open2}
                                onClose={toggleDrawer(anchor, false)}
                                onOpen={toggleDrawer(anchor, true)}
                            >
                                {list(anchor)}
                            </SwipeableDrawer>
                            </React.Fragment>
                        ))}
                    </Mobile>
                    <PC>
                        <ul className="menu-list">
                            <li>
                                <Link href="" className={select == "menu1" ? "select" : ""}>어드밴스솔루션</Link>
                            </li>
                            <li>
                                <Link href="/technology" className={select == "menu2" ? "select" : ""}>기술 및 제품</Link>
                            </li>
                            <li>
                                <Link href="" className={select == "menu3" ? "select" : ""}>소식 및 자료</Link>
                            </li>
                        </ul>
                    </PC>
                </ContainerWrap>
                {
                    page == "tech" ?
                    <TechSubNav /> : <></>
                }
                </div>
            </NavWrap>
        </ThemeProvider>
    )
}

const NavWrap = styled(Box)`
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    z-index: 1000;
    
    .logo-box{
        img{
            width: 180px;
        }
    }
    .menu-list{
        display: flex;
        align-items: center;
        li{
            margin-right: 4rem;
            a{
                font-size: 1.6rem;
                color:  ${()=> theme.colors.textColor};
                font-weight: 400;
                transition: all .3s ease-in-out;
            }
            a:hover{
                color: ${()=> theme.colors.primary};
                font-weight: bold;
            }
            .select{
                font-weight: bold;
                color: ${()=> theme.colors.primary};
            }
        }
        li:last-of-type{
            margin: 0;
        }
    }
    @media ${() => theme.device.tablet} {
        .logo-box{
            img{
                width: 130px;
            }
        }
    }
`;

const Mobile = styled(Box)`
  display: none;
  .icon-btn{
      min-width: auto;
      svg{
          color:  ${()=> theme.colors.textColor};
          width: 2rem;
          height: 2rem;
      }
  }
  @media ${() => theme.device.mobile} {
    display: block;
  }
`;

const PC = styled(Box)`
  display: flex;
  align-items: center;
  @media ${() => theme.device.mobile} {
    display: none;
  }
`;

