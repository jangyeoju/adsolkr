import * as React from 'react';
import { useEffect, useState } from 'react';
import Link from 'next/link';
import styled from '@emotion/styled';
import {
  Box,
  Button,
  createTheme,
  Divider,
  Icon,
  IconButton,
  ThemeProvider,
} from '@mui/material';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Slide from '@mui/material/Slide';
import useScrollTrigger from '@mui/material/useScrollTrigger';
import PropTypes from 'prop-types';

import theme from '@/style/theme';

import styles from '../../style/Navbar.module.css';
import ContainerWrap from '../layout/ContainerWrap';
import MobileNav from './MobileNav';
import TechSubNav from './TechSubNav';

function HideOnScroll(props) {
  const { children, window } = props;
  // Note that you normally won't need to set the window ref as useScrollTrigger
  // will default to window.
  // This is only being set here because the demo is in an iframe.
  const trigger = useScrollTrigger({
    target: window ? window() : undefined,
  });

  return (
    <Slide appear={false} direction="down" in={!trigger}>
      {children ?? <div />}
    </Slide>
  );
}

HideOnScroll.propTypes = {
  children: PropTypes.element,
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window: PropTypes.func,
};

export default function Nav({ select, page, props }) {
  const theme = createTheme({
    typography: {
      fontFamily: 'Pretendard',
    },
    palette: {
      primary: {
        main: '#5D62FF',
      },
    },
  });

  const [state, setState] = React.useState({
    right: false,
  });

  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event.type === 'keydown' &&
      (event.key === 'Tab' || event.key === 'Shift')
    ) {
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
      <MobileNav select={select} close={handleDrawerClose2} />
    </Box>
  );

  const [scrollProgress, setScrollProgress] = useState(0);

  const [visible, setVisible] = useState(true);
  const [prevScrollPos, setPrevScrollPos] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.scrollY;

      // 페이지 최상단인지 확인
      const isAtTop = currentScrollPos === 0;

      // 스크롤 방향 확인 (true = 위로 스크롤, false = 아래로 스크롤)
      const isVisible = prevScrollPos > currentScrollPos;

      // 최상단일 경우 visible 상태를 변경하지 않음
      if (!isAtTop) {
        setVisible(isVisible);
      }

      setPrevScrollPos(currentScrollPos);

      // 기존의 배경색 투명도 효과도 유지
      const scrolled = Math.min(currentScrollPos / 100, 1);
      setScrollProgress(scrolled);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [prevScrollPos]);

  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const [anchorEl2, setAnchorEl2] = React.useState(null);
  const open1 = Boolean(anchorEl2);
  const handleClick2 = (event) => {
    setAnchorEl2(event.currentTarget);
  };
  const handleClose2 = () => {
    setAnchorEl2(null);
  };

  const [anchorEl3, setAnchorEl3] = React.useState(null);
  const open3 = Boolean(anchorEl3);
  const handleClick3 = (event) => {
    setAnchorEl3(event.currentTarget);
  };
  const handleClose3 = () => {
    setAnchorEl3(null);
  };

  return (
    <ThemeProvider theme={theme}>
      <NavWrap>
        <HideOnScroll {...props}>
          <div
            className={styles.navbar}
            style={{
              padding: '2rem 0 0 0',
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
                <MobileNav select={select} />
              </Mobile>
              <PC>
                <ul className="menu-list">
                  <li>
                    {/* <Link href="" className={select == "menu1" ? "select" : ""}>어드밴스솔루션</Link> */}
                    <Button
                      id="basic-button"
                      aria-controls={open ? 'basic-menu' : undefined}
                      aria-haspopup="true"
                      aria-expanded={open ? 'true' : undefined}
                      onClick={handleClick}
                    >
                      어드밴스솔루션
                    </Button>
                    <StyledMenu
                      id="basic-menu"
                      anchorEl={anchorEl}
                      open={open}
                      onClose={handleClose}
                      MenuListProps={{
                        'aria-labelledby': 'basic-button',
                      }}
                    >
                      <Link href="/vision">
                        <MenuItem onClick={handleClose}>비전</MenuItem>
                      </Link>
                      <Link href="/now">
                        <MenuItem onClick={handleClose}>현재</MenuItem>
                      </Link>
                      <Link href="/contact">
                        <MenuItem onClick={handleClose}>
                          문의하기 & 찾아오는 곳
                        </MenuItem>
                      </Link>
                    </StyledMenu>
                  </li>
                  <li>
                    {/* <Link href="/technology" className={select == "menu2" ? "select" : ""}>기술 및 제품</Link> */}
                    <Button
                      id="basic-button"
                      aria-controls={open1 ? 'basic-menu' : undefined}
                      aria-haspopup="true"
                      aria-expanded={open1 ? 'true' : undefined}
                      onClick={handleClick2}
                    >
                      기술 및 제품
                    </Button>
                    <StyledMenu
                      id="basic-menu"
                      anchorEl={anchorEl2}
                      open={open1}
                      onClose={handleClose2}
                      MenuListProps={{
                        'aria-labelledby': 'basic-button',
                      }}
                    >
                      <Link href="/technology">
                        <MenuItem onClick={handleClose2}>
                          외함 기술 (AHS)
                        </MenuItem>
                      </Link>
                      <Link href="/technology#sec2">
                        <MenuItem onClick={handleClose2}>
                          로봇 기술 (ARS)
                        </MenuItem>
                      </Link>
                      <Link href="/technology#sec3">
                        <MenuItem onClick={handleClose2}>
                          광원 기술 (ASS)
                        </MenuItem>
                      </Link>
                      <Link href="/clibo">
                        <MenuItem onClick={handleClose2}>
                          청정로봇 (CLIBO)
                        </MenuItem>
                      </Link>
                    </StyledMenu>
                  </li>
                  <li>
                    {/* <Link href="" className={select == "menu3" ? "select" : ""}>소식 및 자료</Link> */}
                    <Button
                      id="basic-button"
                      aria-controls={open3 ? 'basic-menu' : undefined}
                      aria-haspopup="true"
                      aria-expanded={open3 ? 'true' : undefined}
                      onClick={handleClick3}
                    >
                      소식 및 자료
                    </Button>
                    <StyledMenu
                      id="basic-menu"
                      anchorEl={anchorEl3}
                      open={open3}
                      onClose={handleClose3}
                      MenuListProps={{
                        'aria-labelledby': 'basic-button',
                      }}
                    >
                      <Link href="/news">
                        <MenuItem onClick={handleClose3}>뉴스&자료</MenuItem>
                      </Link>
                    </StyledMenu>
                  </li>
                </ul>
              </PC>
            </ContainerWrap>
            {page == 'tech' ? (
              <TechSubNav
                text1={'외함 기술(AHS)'}
                text2={'로봇 기술 (ARS)'}
                text3={'광원 기술 (ASS)'}
              />
            ) : (
              <></>
            )}
            {page == 'clibo' ? (
              <TechSubNav
                text1={'CLIBO 구성'}
                text2={'CLIBO 청정 기능'}
                text3={'CLIBO 적용 기술'}
              />
            ) : (
              <></>
            )}
          </div>
        </HideOnScroll>
      </NavWrap>
    </ThemeProvider>
  );
}

const NavWrap = styled(Box)`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1000;
  .ptb-20 {
    padding: 20px 0;
  }
  .logo-box {
    img {
      width: 180px;
    }
  }
  .css-1tktgsa-MuiPaper-root-MuiPopover-paper-MuiMenu-paper {
    box-shadow: none !important;
  }
  .menu-list {
    display: flex;
    align-items: center;
    li {
      margin-right: 4rem;
      button {
        font-size: 1.6rem;
        color: ${() => theme.colors.textColor};
        font-weight: 500;
        transition: all 0.3s ease-in-out;
      }
      button:hover {
        color: ${() => theme.colors.primary};
      }
      .select {
        font-weight: bold;
        color: ${() => theme.colors.primary};
      }
    }
    li:last-of-type {
      margin: 0;
    }
  }
  @media ${() => theme.device.tablet} {
    .logo-box {
      img {
        width: 130px;
      }
    }
  }
`;

const Mobile = styled(Box)`
  display: none;
  .icon-btn {
    min-width: auto;
    svg {
      color: ${() => theme.colors.textColor};
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

const StyledMenu = styled(Menu)`
  box-shadow: none;
  .MuiMenu-list {
    li {
      font-size: 1.4rem;
      color: ${() => theme.colors.textColor};
    }
  }
`;
