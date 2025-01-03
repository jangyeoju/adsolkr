import * as React from 'react';
import styled from '@emotion/styled';
import CloseIcon from '@mui/icons-material/Close';
import {
  Box,
  Button,
  createTheme,
  Divider,
  Icon,
  IconButton,
  ThemeProvider,
} from '@mui/material';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';

import theme from '@/app/style/theme';

export default function BasicModal({ handleClose, open, text, full, img }) {
  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down('md'));

  return (
    <React.Fragment>
      <StyledDialog
        open={open}
        onClose={handleClose}
        fullScreen={fullScreen}
        aria-labelledby="responsive-dialog-title"
      >
        <DialogTitleWrap>
          <IconButton></IconButton>
          <DialogTitle id="responsive-dialog-title">{text}</DialogTitle>
          <IconButton onClick={handleClose} autoFocus>
            <CloseIcon />
          </IconButton>
        </DialogTitleWrap>
        <StyledDialogContent>
          <div className="img-box">
            <img src={img} alt={text} />
          </div>
          <div className="text-box">
            {/**상세 설명 */}
            <p>{text}</p>
          </div>
        </StyledDialogContent>
      </StyledDialog>
    </React.Fragment>
  );
}

const StyledDialog = styled(Dialog)`
  .MuiPaper-root {
    max-width: 118rem !important;
    border-radius: 8px;
  }
  @media ${() => theme.device.tablet} {
    .MuiPaper-root {
      min-width: 30rem;
    }
  }
  @media ${() => theme.device.mobile3} {
    .MuiPaper-root {
      min-width: 100%;
      border-radius: 0 !important;
    }
  }
`;

const DialogTitleWrap = styled(Box)`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1rem 2rem;
  border-bottom: 1px solid rgba(0, 0, 0, 0.1);
  h2 {
    padding: 0;
    font-size: 1.8rem;
  }
  button {
    width: 3rem;
    height: 3rem;
    svg {
      width: 2rem;
      height: 2rem;
    }
  }
  @media ${() => theme.device.mobile} {
    h2 {
      font-size: 1.4rem;
    }
  }
`;

const StyledDialogContent = styled(DialogContent)`
  height: 55rem;
  max-height: 70rem;

  overflow-y: scroll;
  padding: 2rem;
  font-size: 1.6rem;
  color: #888888;
  line-height: 150%;
  .img-box {
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    img {
      width: 100%;
    }
  }
  .text-box {
    margin-top: 2rem;
    p {
      font-size: 1.6rem;
      color: #888888;
      font-weight: 400;
      line-height: 150%;
    }
  }
  @media ${() => theme.device.mobile} {
    max-height: 100% !important;
    .img-box {
      img {
        width: 100%;
      }
    }
  }
`;
