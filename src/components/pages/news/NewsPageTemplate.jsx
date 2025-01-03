'use client';

import * as React from 'react';
import styled from '@emotion/styled';
import { Box, createTheme, ThemeProvider } from '@mui/material';
import Tab from '@mui/material/Tab';
import Tabs from '@mui/material/Tabs';
import PropTypes from 'prop-types';

import SubBanner from '@/components/common/SubBanner';
import Footer from '@/components/footer/Footer';
import ContainerWrap from '@/components/layout/ContainerWrap';
import Nav from '@/components/nav/Nav';
import theme from '@/style/theme';

function CustomTabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && <Box sx={{ p: 3 }}>{children}</Box>}
    </div>
  );
}

CustomTabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

export default function NewsPageTemplate({
  header,
  newsList,
  documentList,
  referenceList,
}) {
  const theme = createTheme({
    typography: {
      fontFamily: 'Pretendard',
    },
    palette: {
      primary: {
        main: '#2B2B50',
      },
    },
  });

  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  return (
    <>
      <ThemeProvider theme={theme}>
        <NavWrap>
          <Nav select={'menu2'} page={'news'} />
        </NavWrap>
        <NewsWrap>
          <SubBannerWrap>
            <SubBanner title={'News & Document'}>
              <p>We bring you the latest news from Advance Solutions.</p>
            </SubBanner>
          </SubBannerWrap>

          <ContainerWrap>
            {header}
            <TabBoxWrap sx={{ width: '100%' }}>
              <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                <Tabs
                  value={value}
                  onChange={handleChange}
                  aria-label="basic tabs example"
                >
                  <StyledTab label="News" {...a11yProps(0)} />
                  <StyledTab label="Document" {...a11yProps(1)} />
                  <StyledTab label="Reference" {...a11yProps(2)} />
                </Tabs>
              </Box>
              <StyledCustomTabPanel value={value} index={0}>
                {newsList}
              </StyledCustomTabPanel>
              <StyledCustomTabPanel value={value} index={1}>
                {documentList}
              </StyledCustomTabPanel>
              <StyledCustomTabPanel value={value} index={2}>
                {referenceList}
              </StyledCustomTabPanel>
            </TabBoxWrap>
          </ContainerWrap>
        </NewsWrap>
        <Footer />
      </ThemeProvider>
    </>
  );
}

const NavWrap = styled(Box)`
  position: relative;
  height: 100px;
  @media ${() => theme.device.mobile} {
    height: 80px;
  }
`;

const SubBannerWrap = styled(Box)`
  position: relative;
`;

const NewsWrap = styled(Box)``;

const TabBoxWrap = styled(Box)`
  margin: 5rem 0;
  border-top: 2px solid ${() => theme.colors.primary};
  .MuiTabs-indicator {
    display: none;
  }
`;

const StyledTab = styled(Tab)`
  border-bottom: none;
  width: 33.3%;
  min-width: 33.3%;
  font-size: 1.6rem;
  font-weight: 400;
  color: ${() => theme.colors.textColor2};
  font-family: 'Montserrat', serif;
  background-color: #f8f8f8;
  &.Mui-selected {
    background-color: ${() => theme.colors.primary};
    color: #fff;
    font-weight: bold;
  }
`;

const StyledCustomTabPanel = styled(CustomTabPanel)`
  padding: 3rem 0 0 0;
  & > div {
    padding: 0;
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
    flex-wrap: wrap;
    gap: 1rem;
  }
  svg {
    width: 2rem;
    height: 2rem;
  }
`;

const NoneBox = styled(Box)`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  height: 300px;
  width: 100%;
  svg {
    width: 4rem;
    height: 4rem;
    color: ${() => theme.colors.textColor2};
    opacity: 0.5;
  }
  h3 {
    font-size: 1.6rem;
    color: ${() => theme.colors.textColor2};
    font-weight: 400;
    margin-top: 1rem;
  }
`;
