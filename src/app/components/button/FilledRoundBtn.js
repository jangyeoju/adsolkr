import * as React from "react";
import { Box, Button, IconButton } from "@mui/material";
import {createTheme,Divider,Icon,ThemeProvider} from '@mui/material';
import styled from "@emotion/styled";
import NotificationsIcon from '@mui/icons-material/Notifications';
import theme from "../../style/theme";

export default function FilledRoundBtn({text, icon,handleClick}){
    const theme = createTheme({
        palette: {
            primary: {
              main: "#2B2B50",
            },
        },
    })
    return(
        <>
            <ThemeProvider theme={theme}>
                   <FilledButton variant="contained" onClick={handleClick}>
                        {text}
                    </FilledButton>
            </ThemeProvider>
        </>
    )
}

const FilledButton = styled(Button)`
    padding: 1.2rem 5rem;
    border-radius: 100px;
    font-size: 2rem;
    box-shadow: none;
    svg{
        width: 15px;
        height: 15px;
        margin-right: 1rem;
    }
    @media ${() => theme.device.tablet} {
        font-size: 1.4rem;
    }
`;